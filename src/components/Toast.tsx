import { useEffect, useState } from "react"
import { X } from "lucide-react"

type ToastType = "success" | "error"

interface ToastProps {
  message: string
  type: ToastType
  onClose: () => void
  duration?: number
}

export function Toast({ message, type, onClose, duration = 5000 }: ToastProps) {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false)
      setTimeout(onClose, 300)
    }, duration)
    return () => clearTimeout(timer)
  }, [duration, onClose])

  const bgColor = type === "success" ? "bg-green-300" : "bg-red-300"
  const borderColor = type === "success" ? "border-green-400" : "border-red-400"

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-3 rounded-lg shadow-lg border ${bgColor} ${borderColor} text-white max-w-sm`}
      style={{
        animation: visible ? "slideIn 0.3s ease-out" : "slideOut 0.3s ease-in forwards",
      }}
      role="alert"
    >
      <span className="text-sm font-medium flex-1">{message}</span>
      <button
        onClick={() => {
          setVisible(false)
          setTimeout(onClose, 300)
        }}
        className="text-white/70 hover:text-white transition-colors"
        aria-label="Close"
      >
        <X className="h-4 w-4" />
      </button>
      <style>{`
        @keyframes slideIn {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideOut {
          from { transform: translateX(0); opacity: 1; }
          to { transform: translateX(100%); opacity: 0; }
        }
      `}</style>
    </div>
  )
}
