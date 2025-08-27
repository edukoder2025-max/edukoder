-- CodeMentor Pro Database Schema
-- Run this after connecting to Neon database

-- Users table for authentication and user management
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  name VARCHAR(255) NOT NULL,
  password_hash VARCHAR(255),
  avatar_url TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  email_verified_at TIMESTAMP,
  subscription_status VARCHAR(50) DEFAULT 'free', -- free, premium, vip
  last_login_at TIMESTAMP
);

-- Categories for organizing tutorials
CREATE TABLE categories (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  slug VARCHAR(100) UNIQUE NOT NULL,
  description TEXT,
  color VARCHAR(7) DEFAULT '#3B82F6', -- hex color
  icon VARCHAR(50),
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tutorial content
CREATE TABLE tutorials (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  description TEXT,
  content JSONB NOT NULL, -- {introduction, explanation, codeExample, keyPoints, practiceExercise}
  category_id INTEGER REFERENCES categories(id),
  level VARCHAR(20) NOT NULL, -- Principiante, Intermedio, Avanzado
  duration_minutes INTEGER DEFAULT 5,
  author_id INTEGER REFERENCES users(id),
  tags TEXT[], -- array of tags
  views_count INTEGER DEFAULT 0,
  likes_count INTEGER DEFAULT 0,
  published_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  ai_generated BOOLEAN DEFAULT FALSE,
  difficulty_score INTEGER DEFAULT 1 -- 1-10 scale
);

-- Training series (like Frontend Developer, Backend Developer)
CREATE TABLE training_series (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  subtitle VARCHAR(255),
  description TEXT,
  image_emoji VARCHAR(10),
  duration_weeks INTEGER,
  level VARCHAR(50),
  students_count INTEGER DEFAULT 0,
  rating DECIMAL(3,2) DEFAULT 0.0,
  color_from VARCHAR(20),
  color_to VARCHAR(20),
  stack_technologies JSONB, -- array of tech stack
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  sort_order INTEGER DEFAULT 0
);

-- Modules within training series
CREATE TABLE training_modules (
  id SERIAL PRIMARY KEY,
  series_id INTEGER REFERENCES training_series(id) ON DELETE CASCADE,
  week_number INTEGER NOT NULL,
  title VARCHAR(255) NOT NULL,
  lessons JSONB NOT NULL, -- array of lesson titles
  project_title VARCHAR(255),
  duration_hours INTEGER,
  content TEXT,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- User progress tracking
CREATE TABLE user_progress (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  tutorial_id INTEGER REFERENCES tutorials(id) ON DELETE CASCADE,
  completed_at TIMESTAMP,
  time_spent_minutes INTEGER DEFAULT 0,
  notes TEXT,
  rating INTEGER CHECK (rating >= 1 AND rating <= 5),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(user_id, tutorial_id)
);

-- User series progress
CREATE TABLE user_series_progress (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  series_id INTEGER REFERENCES training_series(id) ON DELETE CASCADE,
  module_id INTEGER REFERENCES training_modules(id) ON DELETE CASCADE,
  completed_at TIMESTAMP,
  notes TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(user_id, series_id, module_id)
);

-- Ebook and digital products
CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  description TEXT,
  price_cents INTEGER NOT NULL, -- price in cents (e.g., 2900 for $29)
  currency VARCHAR(3) DEFAULT 'USD',
  type VARCHAR(50) DEFAULT 'ebook', -- ebook, guide, course
  file_url TEXT, -- download link
  preview_url TEXT,
  active BOOLEAN DEFAULT TRUE,
  features JSONB, -- array of features/benefits
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Purchase tracking
CREATE TABLE purchases (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  product_id INTEGER REFERENCES products(id),
  stripe_payment_intent_id VARCHAR(255),
  amount_cents INTEGER NOT NULL,
  currency VARCHAR(3) DEFAULT 'USD',
  status VARCHAR(50) DEFAULT 'pending', -- pending, completed, failed, refunded
  purchased_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  refunded_at TIMESTAMP,
  download_count INTEGER DEFAULT 0,
  last_downloaded_at TIMESTAMP
);

-- Email subscribers for marketing
CREATE TABLE subscribers (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  name VARCHAR(255),
  source VARCHAR(100), -- where they subscribed from
  tags TEXT[], -- segmentation tags
  subscribed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  unsubscribed_at TIMESTAMP,
  active BOOLEAN DEFAULT TRUE
);

-- Career guides and resources
CREATE TABLE career_guides (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  description TEXT,
  icon VARCHAR(50),
  benefits JSONB, -- array of benefits
  download_count INTEGER DEFAULT 0,
  rating DECIMAL(3,2) DEFAULT 0.0,
  file_url TEXT,
  preview_url TEXT,
  color_from VARCHAR(20),
  color_to VARCHAR(20),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  sort_order INTEGER DEFAULT 0
);

-- AI content generation log
CREATE TABLE ai_generation_log (
  id SERIAL PRIMARY KEY,
  content_type VARCHAR(50) NOT NULL, -- tutorial, ebook_update, seo_meta
  prompt TEXT NOT NULL,
  response TEXT,
  model_used VARCHAR(100) DEFAULT 'gemini-1.5-flash',
  tokens_used INTEGER,
  generated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  success BOOLEAN DEFAULT TRUE,
  error_message TEXT
);

-- Indexes for performance
CREATE INDEX idx_tutorials_category ON tutorials(category_id);
CREATE INDEX idx_tutorials_published ON tutorials(published_at) WHERE published_at IS NOT NULL;
CREATE INDEX idx_tutorials_level ON tutorials(level);
CREATE INDEX idx_tutorials_tags ON tutorials USING GIN(tags);
CREATE INDEX idx_user_progress_user ON user_progress(user_id);
CREATE INDEX idx_purchases_user ON purchases(user_id);
CREATE INDEX idx_purchases_status ON purchases(status);
CREATE INDEX idx_subscribers_active ON subscribers(active) WHERE active = TRUE;

-- Insert default categories
INSERT INTO categories (name, slug, description, color, icon, sort_order) VALUES
('JavaScript', 'javascript', 'Fundamentos y conceptos avanzados de JavaScript', '#F7DF1E', '⚡', 1),
('TypeScript', 'typescript', 'Tipado estático para JavaScript', '#3178C6', '🔷', 2),
('React', 'react', 'Librería para interfaces de usuario', '#61DAFB', '⚛️', 3),
('PHP', 'php', 'Desarrollo backend con PHP', '#777BB4', '🐘', 4),
('CSS', 'css', 'Estilos y diseño web moderno', '#1572B6', '🎨', 5),
('HTML', 'html', 'Estructura y marcado web semántico', '#E34F26', '📄', 6),
('Laravel', 'laravel', 'Framework PHP para aplicaciones web', '#FF2D20', '🔥', 7),
('Next.js', 'nextjs', 'Framework React para producción', '#000000', '▲', 8);

-- Insert default training series
INSERT INTO training_series (title, slug, subtitle, description, image_emoji, duration_weeks, level, students_count, rating, color_from, color_to, stack_technologies) VALUES
('Frontend Developer', 'frontend-developer', 'De cero a React Developer profesional', 'Ruta completa desde HTML básico hasta aplicaciones React avanzadas. Incluye proyectos reales y preparación para entrevistas.', '🎨', 12, 'Principiante a Intermedio', 3200, 4.9, 'from-blue-500', 'to-cyan-500', '["HTML5", "CSS3", "JavaScript", "React", "TypeScript", "Next.js"]'),
('Backend Developer', 'backend-developer', 'APIs robustas y escalables', 'Aprende a crear APIs REST, manejar bases de datos y implementar autenticación. Desde PHP básico hasta arquitectura de microservicios.', '⚙️', 10, 'Intermedio', 2100, 4.8, 'from-purple-500', 'to-pink-500', '["PHP", "Laravel", "MySQL", "Docker", "Redis", "GraphQL"]'),
('Career Development', 'career-development', 'Tu primer empleo tech garantizado', 'Estrategias probadas para conseguir tu primer trabajo tech. CV, portfolio, entrevistas y negociación salarial.', '🚀', 6, 'Todos los niveles', 5800, 4.9, 'from-green-500', 'to-teal-500', '["CV", "Portfolio", "LinkedIn", "Interviews", "Negotiation"]');

-- Insert default product (ebook)
INSERT INTO products (name, slug, description, price_cents, type, features) VALUES
('Guía Completa del Programador Moderno', 'guia-completa-programador', 'El ebook más completo para aprender programación y conseguir tu primer empleo tech. Actualizado automáticamente con IA.', 2900, 'ebook', '[
  "Fundamentos sólidos de JavaScript, TypeScript y PHP",
  "Proyectos prácticos con código fuente completo", 
  "Guía paso a paso para tu primer empleo tech",
  "Estrategias de pricing para trabajos freelance",
  "Templates profesionales de CV y portfolio",
  "Acceso a comunidad privada de Discord",
  "Actualizaciones automáticas del contenido",
  "Garantía de reembolso de 30 días"
]');

-- Insert sample career guides
INSERT INTO career_guides (title, slug, description, icon, benefits, rating, color_from, color_to, sort_order) VALUES
('CV Técnico Optimizado', 'cv-optimization', 'Crea un CV que pase los sistemas ATS y llame la atención de recruiters tech', 'FileText', '["Plantillas ATS-friendly", "Keywords específicas por rol", "Sección de proyectos destacados", "Optimización para LinkedIn"]', 4.9, 'from-blue-500', 'to-blue-600', 1),
('Portfolio que Convierte', 'portfolio-development', 'Construye un portfolio que demuestre tus habilidades y consiga entrevistas', 'Briefcase', '["Estructura de proyectos efectiva", "Casos de estudio detallados", "GitHub profile optimization", "Hosting y dominio profesional"]', 4.8, 'from-purple-500', 'to-purple-600', 2),
('Preparación de Entrevistas', 'interview-preparation', 'Domina las entrevistas técnicas y de comportamiento en empresas tech', 'Users', '["Preguntas frecuentes por tecnología", "Coding challenges resueltos", "Mock interviews grabadas", "Técnicas de comunicación"]', 4.9, 'from-green-500', 'to-green-600', 3),
('Negociación Salarial', 'salary-negotiation', 'Estrategias para negociar salarios y benefits como un profesional', 'DollarSign', '["Research de mercado salarial", "Scripts de negociación", "Timing perfecto para negociar", "Benefits más allá del salario"]', 4.7, 'from-yellow-500', 'to-orange-500', 4);
