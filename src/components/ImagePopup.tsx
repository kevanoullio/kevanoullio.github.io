import { useEffect } from "react"

import { LuGithub, LuExternalLink } from "react-icons/lu"

import { Button } from "./ui/button"

interface ImagePopupProps {
  src: string
  alt: string
  onClose: () => void
  repoUrl?: string
  liveUrl?: string
}

export function ImagePopup({ src, alt, onClose, repoUrl, liveUrl }: ImagePopupProps) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", handleEsc)
    return () => window.removeEventListener("keydown", handleEsc)
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background/70"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={alt}
    >
      <div
        className="bg-card border border-border rounded-lg shadow-2xl w-[80vw] max-h-[80vh] overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 overflow-auto flex-1 flex items-center justify-center">
          <img
            src={src}
            alt={alt}
            className="max-w-full max-h-[75vh] object-contain"
          />
        </div>
        <div className="py-4 px-6 border-t border-border flex items-center justify-between">
          <div className="flex items-center gap-4">
            {repoUrl && (
              <a
                href={repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-secondary transition-colors text-sm tracking-wider uppercase"
              >
                <LuGithub className="h-4 w-4" />
                <span>Source</span>
              </a>
            )}
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-secondary transition-colors text-sm tracking-wider uppercase"
              >
                <LuExternalLink className="h-4 w-4" />
                <span>Live</span>
              </a>
            )}
          </div>
          <Button
            theme="solid-primary"
            onClick={onClose}
            aria-label="Close"
          >
            Close
          </Button>
        </div>
      </div>
    </div>
  )
}
