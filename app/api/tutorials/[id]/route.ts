import { NextRequest, NextResponse } from 'next/server'
import { tutorialQueries } from '@/lib/database'

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const tutorialId = parseInt(params.id)
    
    if (isNaN(tutorialId)) {
      return NextResponse.json(
        { success: false, error: 'Invalid tutorial ID' },
        { status: 400 }
      )
    }

    const tutorial = await tutorialQueries.getById(tutorialId)
    
    if (!tutorial) {
      return NextResponse.json(
        { success: false, error: 'Tutorial not found' },
        { status: 404 }
      )
    }

    // Increment view count
    await tutorialQueries.incrementViews(tutorialId)

    // Get related tutorials
    const related = await tutorialQueries.getRelated(
      tutorialId, 
      tutorial.category_id, 
      3
    )

    return NextResponse.json({
      success: true,
      data: {
        ...tutorial,
        related
      }
    })
  } catch (error) {
    console.error('Error fetching tutorial:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch tutorial' },
      { status: 500 }
    )
  }
}
