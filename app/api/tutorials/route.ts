import { NextRequest, NextResponse } from 'next/server'
import { tutorialQueries } from '@/lib/database'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const category = searchParams.get('category')
    const level = searchParams.get('level')
    const limit = parseInt(searchParams.get('limit') || '20')
    const offset = parseInt(searchParams.get('offset') || '0')

    const tutorials = await tutorialQueries.getAll({
      category: category || undefined,
      level: level || undefined,
      limit,
      offset
    })

    return NextResponse.json({
      success: true,
      data: tutorials,
      pagination: {
        limit,
        offset,
        hasMore: tutorials.length === limit
      }
    })
  } catch (error) {
    console.error('Error fetching tutorials:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch tutorials' },
      { status: 500 }
    )
  }
}
