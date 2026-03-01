import { useState, useRef } from "react";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export const BeforeAfterSlider = ({ 
  beforeImage, 
  afterImage,
  beforeLabel = "Before",
  afterLabel = "After"
}: BeforeAfterSliderProps) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const position = ((e.clientX - rect.left) / rect.width) * 100;

    if (position >= 0 && position <= 100) {
      setSliderPosition(position);
    }
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const position = ((e.touches[0].clientX - rect.left) / rect.width) * 100;

    if (position >= 0 && position <= 100) {
      setSliderPosition(position);
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-2xl mx-auto overflow-hidden rounded-lg shadow-lg cursor-ew-resize select-none bg-gray-100"
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
    >
      {/* After Image - Full Background */}
      <img
        src={afterImage}
        alt={afterLabel}
        className="w-full h-auto block"
        draggable={false}
      />

      {/* Before Image - Sliding Overlay */}
      <div
        className="absolute top-0 left-0 h-full w-full overflow-hidden"
        style={{ width: `${sliderPosition}%` }}
      >
        <img
          src={beforeImage}
          alt={beforeLabel}
          className="w-screen h-auto"
          draggable={false}
          style={{ width: `${(100 / sliderPosition) * 100}%` }}
        />
      </div>

      {/* Slider Handle */}
      <div
        className="absolute top-0 h-full w-1 bg-white shadow-lg cursor-ew-resize transition-transform hover:scale-x-150"
        style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg">
          <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M15 18l-6-6 6-6M9 12l6 6M9 12l6-6" stroke="currentColor" strokeWidth="2" fill="none" />
          </svg>
        </div>
      </div>

      {/* Labels */}
      <div className="absolute top-4 left-4 bg-black/60 backdrop-blur text-white px-3 py-2 rounded-md text-sm font-semibold">
        {beforeLabel}
      </div>
      <div className="absolute top-4 right-4 bg-black/60 backdrop-blur text-white px-3 py-2 rounded-md text-sm font-semibold">
        {afterLabel}
      </div>

      {/* Hint Text */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/60 backdrop-blur text-white px-3 py-2 rounded-md text-xs">
        Drag to compare
      </div>
    </div>
  );
};
