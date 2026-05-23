import { useState } from "react";
import { X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";

interface ImageLightboxProps {
  images: Array<{
    url: string;
    caption: string;
  }>;
  trigger?: React.ReactNode;
}

export default function ImageLightbox({ images, trigger }: ImageLightboxProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) return null;

  const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % images.length);

  return (
    <>
      {/* Trigger */}
      <button
        onClick={() => setIsOpen(true)}
        className="group relative overflow-hidden rounded-lg border border-border hover:border-primary/30 transition-all duration-150"
      >
        {trigger || (
          <div className="relative">
            <img
              src={images[0].url}
              alt={images[0].caption}
              className="w-full h-32 object-cover"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-150 flex items-center justify-center">
              <ZoomIn className="w-5 h-5 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-150" />
            </div>
            {images.length > 1 && (
              <span className="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-0.5 rounded">
                +{images.length - 1}
              </span>
            )}
          </div>
        )}
      </button>

      {/* Lightbox Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative max-w-5xl w-full max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute -top-12 right-0 text-white/80 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Image */}
            <div className="relative flex-1 flex items-center justify-center overflow-hidden rounded-lg bg-black/40">
              <img
                src={images[currentIndex].url}
                alt={images[currentIndex].caption}
                className="max-w-full max-h-[75vh] object-contain"
              />

              {/* Navigation arrows */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={handlePrev}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5 text-white" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center transition-colors"
                  >
                    <ChevronRight className="w-5 h-5 text-white" />
                  </button>
                </>
              )}
            </div>

            {/* Caption */}
            <div className="mt-3 text-center">
              <p className="text-white/80 text-sm">{images[currentIndex].caption}</p>
              {images.length > 1 && (
                <p className="text-white/50 text-xs mt-1">
                  {currentIndex + 1} / {images.length}
                </p>
              )}
            </div>

            {/* Thumbnail strip */}
            {images.length > 1 && (
              <div className="mt-3 flex justify-center gap-2">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`w-12 h-12 rounded overflow-hidden border-2 transition-all duration-150 ${
                      idx === currentIndex ? "border-white scale-110" : "border-transparent opacity-60 hover:opacity-100"
                    }`}
                  >
                    <img src={img.url} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
