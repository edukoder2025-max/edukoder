import { Pool } from 'pg'

// Database configuration
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
})

// Database query helper
export async function query(text: string, params?: any[]) {
  const start = Date.now()
  try {
    const res = await pool.query(text, params)
    const duration = Date.now() - start
    console.log('Executed query', { text, duration, rows: res.rowCount })
    return res
  } catch (error) {
    console.error('Database query error:', error)
    throw error
  }
}

// Get database client for transactions
export async function getClient() {
  const client = await pool.connect()
  return client
}

// Close database connection
export async function closeDb() {
  await pool.end()
}

// Tutorial queries
export const tutorialQueries = {
  // Get all tutorials with category
  getAll: async (filters: { category?: string; level?: string; limit?: number; offset?: number } = {}) => {
    const { category, level, limit = 20, offset = 0 } = filters
    
    let whereClause = 'WHERE t.published_at IS NOT NULL'
    const params: any[] = []
    let paramIndex = 1

    if (category) {
      whereClause += ` AND c.slug = $${paramIndex}`
      params.push(category)
      paramIndex++
    }

    if (level) {
      whereClause += ` AND t.level = $${paramIndex}`
      params.push(level)
      paramIndex++
    }

    const queryText = `
      SELECT 
        t.*, 
        c.name as category_name, 
        c.color as category_color,
        u.name as author_name
      FROM tutorials t
      LEFT JOIN categories c ON t.category_id = c.id
      LEFT JOIN users u ON t.author_id = u.id
      ${whereClause}
      ORDER BY t.published_at DESC
      LIMIT $${paramIndex} OFFSET $${paramIndex + 1}
    `
    
    params.push(limit, offset)
    const result = await query(queryText, params)
    return result.rows
  },

  // Get tutorial by ID
  getById: async (id: number) => {
    const result = await query(`
      SELECT 
        t.*, 
        c.name as category_name, 
        c.color as category_color,
        u.name as author_name
      FROM tutorials t
      LEFT JOIN categories c ON t.category_id = c.id
      LEFT JOIN users u ON t.author_id = u.id
      WHERE t.id = $1 AND t.published_at IS NOT NULL
    `, [id])
    return result.rows[0]
  },

  // Get tutorial by slug
  getBySlug: async (slug: string) => {
    const result = await query(`
      SELECT 
        t.*, 
        c.name as category_name, 
        c.color as category_color,
        u.name as author_name
      FROM tutorials t
      LEFT JOIN categories c ON t.category_id = c.id
      LEFT JOIN users u ON t.author_id = u.id
      WHERE t.slug = $1 AND t.published_at IS NOT NULL
    `, [slug])
    return result.rows[0]
  },

  // Increment view count
  incrementViews: async (id: number) => {
    await query('UPDATE tutorials SET views_count = views_count + 1 WHERE id = $1', [id])
  },

  // Get related tutorials
  getRelated: async (tutorialId: number, categoryId: number, limit = 3) => {
    const result = await query(`
      SELECT id, title, slug, duration_minutes, level
      FROM tutorials 
      WHERE category_id = $1 AND id != $2 AND published_at IS NOT NULL
      ORDER BY views_count DESC, created_at DESC
      LIMIT $3
    `, [categoryId, tutorialId, limit])
    return result.rows
  },

  // Create new tutorial
  create: async (tutorial: {
    title: string
    slug: string
    description: string
    content: any
    category_id: number
    level: string
    duration_minutes: number
    author_id: number
    tags: string[]
    ai_generated?: boolean
  }) => {
    const result = await query(`
      INSERT INTO tutorials (
        title, slug, description, content, category_id, level, 
        duration_minutes, author_id, tags, ai_generated, published_at
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, NOW())
      RETURNING *
    `, [
      tutorial.title,
      tutorial.slug,
      tutorial.description,
      JSON.stringify(tutorial.content),
      tutorial.category_id,
      tutorial.level,
      tutorial.duration_minutes,
      tutorial.author_id,
      tutorial.tags,
      tutorial.ai_generated || false
    ])
    return result.rows[0]
  }
}

// User queries
export const userQueries = {
  // Get user by email
  getByEmail: async (email: string) => {
    const result = await query('SELECT * FROM users WHERE email = $1', [email])
    return result.rows[0]
  },

  // Create new user
  create: async (user: { email: string; name: string; password_hash?: string }) => {
    const result = await query(`
      INSERT INTO users (email, name, password_hash)
      VALUES ($1, $2, $3)
      RETURNING id, email, name, created_at
    `, [user.email, user.name, user.password_hash])
    return result.rows[0]
  },

  // Update user
  update: async (id: number, updates: Partial<{ name: string; avatar_url: string; subscription_status: string }>) => {
    const setClause = Object.keys(updates).map((key, index) => `${key} = $${index + 2}`).join(', ')
    const values = [id, ...Object.values(updates)]
    
    const result = await query(`
      UPDATE users SET ${setClause}, updated_at = NOW()
      WHERE id = $1
      RETURNING *
    `, values)
    return result.rows[0]
  }
}

// Purchase queries
export const purchaseQueries = {
  // Create purchase
  create: async (purchase: {
    user_id: number
    product_id: number
    stripe_payment_intent_id: string
    amount_cents: number
    currency: string
  }) => {
    const result = await query(`
      INSERT INTO purchases (user_id, product_id, stripe_payment_intent_id, amount_cents, currency)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *
    `, [
      purchase.user_id,
      purchase.product_id,
      purchase.stripe_payment_intent_id,
      purchase.amount_cents,
      purchase.currency
    ])
    return result.rows[0]
  },

  // Update purchase status
  updateStatus: async (id: number, status: string) => {
    const result = await query(`
      UPDATE purchases SET status = $1, updated_at = NOW()
      WHERE id = $2
      RETURNING *
    `, [status, id])
    return result.rows[0]
  },

  // Get user purchases
  getByUser: async (userId: number) => {
    const result = await query(`
      SELECT p.*, pr.name as product_name, pr.file_url
      FROM purchases p
      JOIN products pr ON p.product_id = pr.id
      WHERE p.user_id = $1 AND p.status = 'completed'
      ORDER BY p.purchased_at DESC
    `, [userId])
    return result.rows
  }
}

// Category queries
export const categoryQueries = {
  getAll: async () => {
    const result = await query(`
      SELECT c.*, COUNT(t.id) as tutorial_count
      FROM categories c
      LEFT JOIN tutorials t ON c.id = t.category_id AND t.published_at IS NOT NULL
      GROUP BY c.id
      ORDER BY c.sort_order, c.name
    `)
    return result.rows
  }
}

// Training series queries
export const trainingQueries = {
  getAll: async () => {
    const result = await query(`
      SELECT * FROM training_series
      ORDER BY sort_order, created_at
    `)
    return result.rows
  },

  getBySlug: async (slug: string) => {
    const result = await query(`
      SELECT * FROM training_series WHERE slug = $1
    `, [slug])
    return result.rows[0]
  },

  getModules: async (seriesId: number) => {
    const result = await query(`
      SELECT * FROM training_modules 
      WHERE series_id = $1 
      ORDER BY week_number
    `, [seriesId])
    return result.rows
  }
}

export default { query, getClient, closeDb }
