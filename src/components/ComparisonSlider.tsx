import React, { useState, useRef, useCallback, useEffect } from 'react';
import { ChevronsLeftRight, Sparkles, Clock, Tag } from 'lucide-react';
import { SalonTransformation } from '../types';

interface ComparisonSliderProps {
  transformation: SalonTransformation;
  priority?: boolean;
}

export const ComparisonSlider: React.FC<ComparisonSliderProps> = ({ transformation, priority = false }) => {
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [viewMode, setViewMode] = useState<'slider' | 'side-by-side'>('slider');
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 2) percentage = 2;
    if (percentage > 98) percentage = 98;
    setSliderPosition(percentage);
  }, []);

  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    e.currentTarget.setPointerCapture(e.pointerId);
    handleMove(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    setIsDragging(false);
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {
      // safe fallback
    }
  };

  // Keyboard accessibility
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      setSliderPosition((prev) => Math.max(5, prev - 5));
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      setSliderPosition((prev) => Math.min(95, prev + 5));
    } else if (e.key === 'Home') {
      e.preventDefault();
      setSliderPosition(0);
    } else if (e.key === 'End') {
      e.preventDefault();
      setSliderPosition(100);
    }
  };

  return (
    <article
      id={`transformation-${transformation.id}`}
      className="group bg-white rounded-2xl border border-neutral-200/80 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col"
    >
      {/* Visual Header / View Mode Controls */}
      <div className="px-5 py-3 border-b border-neutral-100 flex items-center justify-between bg-neutral-50/70 text-xs">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full font-medium bg-[#143d23]/10 text-[#143d23] border border-[#143d23]/20">
            {transformation.category}
          </span>
          {transformation.servicePrice && (
            <span className="text-neutral-600 font-semibold flex items-center gap-1">
              <Tag className="w-3 h-3 text-[#c99839]" />
              {transformation.servicePrice}
            </span>
          )}
        </div>

        {/* Quick View Toggle */}
        <div className="flex items-center gap-1 bg-white p-0.5 rounded-lg border border-neutral-200 shadow-xs">
          <button
            type="button"
            id={`toggle-slider-${transformation.id}`}
            onClick={() => setViewMode('slider')}
            className={`px-2.5 py-1 rounded text-[11px] font-medium transition-colors ${
              viewMode === 'slider'
                ? 'bg-[#143d23] text-white'
                : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100'
            }`}
            title="Interactive before & after slider"
          >
            Slider
          </button>
          <button
            type="button"
            id={`toggle-split-${transformation.id}`}
            onClick={() => setViewMode('side-by-side')}
            className={`px-2.5 py-1 rounded text-[11px] font-medium transition-colors ${
              viewMode === 'side-by-side'
                ? 'bg-[#143d23] text-white'
                : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100'
            }`}
            title="View side by side comparison"
          >
            Side by Side
          </button>
        </div>
      </div>

      {/* Main Comparison Area */}
      {viewMode === 'slider' ? (
        <div
          ref={containerRef}
          id={`slider-container-${transformation.id}`}
          tabIndex={0}
          role="slider"
          aria-valuenow={Math.round(sliderPosition)}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`Comparison slider for ${transformation.serviceName}`}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          onKeyDown={handleKeyDown}
          className="relative w-full aspect-[4/3] sm:aspect-[16/11] bg-neutral-900 select-none cursor-ew-resize overflow-hidden outline-none focus-visible:ring-2 focus-visible:ring-[#143d23]"
        >
          {/* AFTER Image (Full background layer) */}
          <img
            src={transformation.afterImage}
            alt={`${transformation.altText} - Result (After)`}
            loading={priority ? 'eager' : 'lazy'}
            referrerPolicy="no-referrer"
            className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
          />

          {/* BEFORE Image (Clipped layer on top) */}
          <div
            className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden select-none"
            style={{
              clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`
            }}
          >
            <img
              src={transformation.beforeImage}
              alt={`${transformation.altText} - Original (Before)`}
              loading={priority ? 'eager' : 'lazy'}
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
            />
          </div>

          {/* Dynamic Draggable Divider Bar */}
          <div
            className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_12px_rgba(0,0,0,0.6)] pointer-events-none transition-transform duration-75"
            style={{ left: `${sliderPosition}%` }}
          >
            {/* Center Drag Handle Knob */}
            <div
              className={`absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white text-[#143d23] shadow-lg border-2 border-[#143d23] flex items-center justify-center pointer-events-auto transition-transform ${
                isDragging ? 'scale-115 ring-4 ring-[#143d23]/30' : 'hover:scale-105'
              }`}
              aria-hidden="true"
            >
              <ChevronsLeftRight className="w-5 h-5 sm:w-6 sm:h-6 text-[#143d23]" />
            </div>
          </div>

          {/* Floating 'BEFORE' Badge (Top Left) */}
          <div className="absolute top-3.5 left-3.5 pointer-events-none z-10">
            <span className="px-2.5 py-1 text-[11px] font-semibold tracking-wider uppercase rounded-md bg-neutral-900/80 backdrop-blur-md text-white border border-white/20 shadow-sm">
              BEFORE
            </span>
          </div>

          {/* Floating 'AFTER' Badge (Top Right) */}
          <div className="absolute top-3.5 right-3.5 pointer-events-none z-10">
            <span className="px-2.5 py-1 text-[11px] font-semibold tracking-wider uppercase rounded-md bg-[#143d23]/90 backdrop-blur-md text-white border border-emerald-300/30 shadow-sm flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-[#e6ca65]" />
              AFTER
            </span>
          </div>

          {/* Bottom Drag Prompt / Helper Bar */}
          <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white/90 text-[10px] font-medium tracking-wide pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity">
            Drag divider left or right to compare
          </div>
        </div>
      ) : (
        /* Side-by-Side View Alternative */
        <div className="grid grid-cols-2 gap-1.5 p-2 bg-neutral-100/70">
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-neutral-900">
            <img
              src={transformation.beforeImage}
              alt={`${transformation.altText} - Before`}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <span className="absolute top-2 left-2 px-2 py-0.5 text-[10px] font-semibold tracking-wider uppercase rounded bg-black/80 text-white">
              BEFORE
            </span>
          </div>
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-neutral-900">
            <img
              src={transformation.afterImage}
              alt={`${transformation.altText} - After`}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <span className="absolute top-2 right-2 px-2 py-0.5 text-[10px] font-semibold tracking-wider uppercase rounded bg-[#143d23] text-white flex items-center gap-1">
              <Sparkles className="w-2.5 h-2.5 text-[#e6ca65]" />
              AFTER
            </span>
          </div>
        </div>
      )}

      {/* Card Information Section Below Image */}
      <div className="p-5 flex flex-col flex-grow justify-between gap-3">
        <div>
          {/* Headline / Title */}
          <div className="flex items-start justify-between gap-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#143d23]">
                {transformation.title}
              </p>
              <h3 className="font-serif text-lg font-bold text-neutral-900 mt-0.5 leading-snug">
                {transformation.serviceName}
              </h3>
            </div>
          </div>

          {/* Description */}
          <p className="text-sm text-neutral-600 mt-2 leading-relaxed">
            {transformation.description}
          </p>

          {/* Highlights / Features pills if available */}
          {transformation.highlights && transformation.highlights.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mt-3">
              {transformation.highlights.map((highlight, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium bg-neutral-100 text-neutral-700"
                >
                  ✓ {highlight}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Footer Meta: Duration & Factual Alt verification */}
        <div className="pt-3 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-500">
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-neutral-400" />
            <span>{transformation.duration || 'Standard Session'}</span>
          </div>

          <span className="text-[11px] text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded font-medium">
            Real Client Result
          </span>
        </div>
      </div>
    </article>
  );
};
