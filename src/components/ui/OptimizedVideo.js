import { useState, useRef, useEffect } from 'react';

export default function OptimizedVideo({
  src,
  poster,
  className = '',
  controls = true,
  muted = true,
  loop = false,
  autoPlay = false,
  preload = 'metadata',
  onClick,
  ...props
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedData = () => setIsLoaded(true);
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);

    return () => {
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
    };
  }, []);

  return (
    <div className={`relative ${className}`}>
      {/* Loading placeholder */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-800 animate-pulse flex items-center justify-center">
          <div className="text-white text-sm">Loading video...</div>
        </div>
      )}
      
      {/* Play button overlay */}
      {!isPlaying && isLoaded && (
        <div 
          className="absolute inset-0 flex items-center justify-center bg-black/30 cursor-pointer hover:bg-black/50 transition-colors"
          onClick={() => videoRef.current?.play()}
        >
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
            <div className="w-0 h-0 border-l-[12px] border-l-white border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1"></div>
          </div>
        </div>
      )}
      
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        controls={controls}
        muted={muted}
        loop={loop}
        autoPlay={autoPlay}
        preload={preload}
        className="w-full h-full object-cover"
        onClick={onClick}
        {...props}
      />
    </div>
  );
} 