'use client'

import { useState, useRef, useEffect } from 'react'
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  SkipBack, 
  SkipForward, 
  Settings, 
  Maximize, 
  Minimize,
  BookOpen,
  MessageSquare,
  Clock
} from 'lucide-react'

interface VideoChapter {
  time: number
  title: string
  description?: string
}

interface VideoPlayerProps {
  title: string
  description?: string
  duration: string
  thumbnailUrl?: string
  videoUrl?: string // En una implementación real
  chapters?: VideoChapter[]
  resources?: Array<{
    title: string
    url: string
    type: 'pdf' | 'code' | 'link'
  }>
  onProgress?: (progress: number) => void
  onComplete?: () => void
}

export default function VideoPlayer({
  title,
  description,
  duration,
  thumbnailUrl = "/api/placeholder/800/450",
  videoUrl,
  chapters = [],
  resources = [],
  onProgress,
  onComplete
}: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [totalTime, setTotalTime] = useState(300) // 5 minutos por defecto
  const [volume, setVolume] = useState(1)
  const [isMuted, setIsMuted] = useState(false)
  const [playbackSpeed, setPlaybackSpeed] = useState(1)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [showControls, setShowControls] = useState(true)
  const [showChapters, setShowChapters] = useState(false)
  const [showNotes, setShowNotes] = useState(false)
  const [userNotes, setUserNotes] = useState('')

  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      if (isPlaying) {
        setCurrentTime(prev => {
          const newTime = prev + 1
          if (onProgress) {
            onProgress((newTime / totalTime) * 100)
          }
          if (newTime >= totalTime) {
            setIsPlaying(false)
            if (onComplete) {
              onComplete()
            }
          }
          return newTime
        })
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [isPlaying, totalTime, onProgress, onComplete])

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  const toggleMute = () => {
    setIsMuted(!isMuted)
  }

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseInt(e.target.value)
    setCurrentTime(newTime)
  }

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value)
    setVolume(newVolume)
    setIsMuted(newVolume === 0)
  }

  const skipTime = (seconds: number) => {
    setCurrentTime(prev => Math.max(0, Math.min(totalTime, prev + seconds)))
  }

  const jumpToChapter = (time: number) => {
    setCurrentTime(time)
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  const getCurrentChapter = () => {
    return chapters.find((chapter, index) => {
      const nextChapter = chapters[index + 1]
      return currentTime >= chapter.time && (!nextChapter || currentTime < nextChapter.time)
    })
  }

  const getResourceIcon = (type: string) => {
    switch (type) {
      case 'pdf': return '📄'
      case 'code': return '💻'
      case 'link': return '🔗'
      default: return '📎'
    }
  }

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      {/* Video Container */}
      <div 
        ref={containerRef}
        className="relative aspect-video bg-gray-900 group"
        onMouseEnter={() => setShowControls(true)}
        onMouseLeave={() => setShowControls(false)}
      >
        {/* Thumbnail/Placeholder */}
        <div className="absolute inset-0 flex items-center justify-center">
          <img 
            src={thumbnailUrl} 
            alt={title}
            className="w-full h-full object-cover"
          />
          
          {/* Play Overlay */}
          {!isPlaying && (
            <button
              onClick={togglePlay}
              className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors"
            >
              <div className="bg-white/90 hover:bg-white rounded-full p-4 transition-colors">
                <Play className="h-8 w-8 text-gray-900" />
              </div>
            </button>
          )}
        </div>

        {/* Video Controls */}
        {showControls && isPlaying && (
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
            {/* Progress Bar */}
            <div className="mb-4">
              <input
                type="range"
                min="0"
                max={totalTime}
                value={currentTime}
                onChange={handleSeek}
                className="w-full h-1 bg-white/30 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-white text-sm mt-1">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(totalTime)}</span>
              </div>
            </div>

            {/* Control Buttons */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <button
                  onClick={togglePlay}
                  className="text-white hover:text-gray-300 transition-colors"
                >
                  {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
                </button>
                
                <button
                  onClick={() => skipTime(-10)}
                  className="text-white hover:text-gray-300 transition-colors"
                >
                  <SkipBack className="h-5 w-5" />
                </button>
                
                <button
                  onClick={() => skipTime(10)}
                  className="text-white hover:text-gray-300 transition-colors"
                >
                  <SkipForward className="h-5 w-5" />
                </button>

                <div className="flex items-center space-x-2 ml-4">
                  <button
                    onClick={toggleMute}
                    className="text-white hover:text-gray-300 transition-colors"
                  >
                    {isMuted || volume === 0 ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
                  </button>
                  
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.1"
                    value={isMuted ? 0 : volume}
                    onChange={handleVolumeChange}
                    className="w-20 h-1 bg-white/30 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <select
                  value={playbackSpeed}
                  onChange={(e) => setPlaybackSpeed(parseFloat(e.target.value))}
                  className="bg-white/20 text-white text-sm rounded px-2 py-1 border border-white/30"
                >
                  <option value={0.5}>0.5x</option>
                  <option value={0.75}>0.75x</option>
                  <option value={1}>1x</option>
                  <option value={1.25}>1.25x</option>
                  <option value={1.5}>1.5x</option>
                  <option value={2}>2x</option>
                </select>

                <button className="text-white hover:text-gray-300 transition-colors">
                  <Settings className="h-5 w-5" />
                </button>

                <button
                  onClick={() => setIsFullscreen(!isFullscreen)}
                  className="text-white hover:text-gray-300 transition-colors"
                >
                  {isFullscreen ? <Minimize className="h-5 w-5" /> : <Maximize className="h-5 w-5" />}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Current Chapter Indicator */}
        {getCurrentChapter() && isPlaying && (
          <div className="absolute top-4 left-4 bg-black/80 text-white px-3 py-1 rounded-full text-sm">
            {getCurrentChapter()?.title}
          </div>
        )}
      </div>

      {/* Video Info */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">{title}</h2>
            {description && (
              <p className="text-gray-600">{description}</p>
            )}
            <div className="flex items-center text-sm text-gray-500 mt-2">
              <Clock className="h-4 w-4 mr-1" />
              {duration}
            </div>
          </div>
          
          <div className="flex space-x-2 ml-4">
            <button
              onClick={() => setShowChapters(!showChapters)}
              className={`flex items-center px-3 py-2 rounded-lg text-sm transition-colors ${
                showChapters ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <BookOpen className="h-4 w-4 mr-1" />
              Capítulos
            </button>
            
            <button
              onClick={() => setShowNotes(!showNotes)}
              className={`flex items-center px-3 py-2 rounded-lg text-sm transition-colors ${
                showNotes ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <MessageSquare className="h-4 w-4 mr-1" />
              Notas
            </button>
          </div>
        </div>

        {/* Chapters */}
        {showChapters && chapters.length > 0 && (
          <div className="mb-6 border border-gray-200 rounded-lg p-4">
            <h3 className="font-medium text-gray-900 mb-3">Capítulos del Video</h3>
            <div className="space-y-2">
              {chapters.map((chapter, index) => (
                <button
                  key={index}
                  onClick={() => jumpToChapter(chapter.time)}
                  className={`w-full text-left p-3 rounded-lg border transition-colors ${
                    getCurrentChapter() === chapter
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium text-gray-900">{chapter.title}</div>
                      {chapter.description && (
                        <div className="text-sm text-gray-600 mt-1">{chapter.description}</div>
                      )}
                    </div>
                    <div className="text-sm text-gray-500">{formatTime(chapter.time)}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Notes */}
        {showNotes && (
          <div className="mb-6 border border-gray-200 rounded-lg p-4">
            <h3 className="font-medium text-gray-900 mb-3">Mis Notas</h3>
            <textarea
              value={userNotes}
              onChange={(e) => setUserNotes(e.target.value)}
              placeholder="Escribe tus notas sobre esta lección..."
              className="w-full h-32 p-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="mt-2 flex justify-end">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm">
                Guardar Notas
              </button>
            </div>
          </div>
        )}

        {/* Resources */}
        {resources.length > 0 && (
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-medium text-gray-900 mb-3">Recursos de la Lección</h3>
            <div className="space-y-2">
              {resources.map((resource, index) => (
                <a
                  key={index}
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-3 rounded-lg border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-colors"
                >
                  <span className="text-xl mr-3">{getResourceIcon(resource.type)}</span>
                  <span className="font-medium text-gray-900">{resource.title}</span>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
