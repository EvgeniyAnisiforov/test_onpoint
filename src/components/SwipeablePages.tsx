import React, { FC, ReactNode, useEffect, useState, useRef } from "react"

interface PropsType {
  children: ReactNode
}

const SwipeablePages: FC<PropsType> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [currentPosition, setCurrentPosition] = useState(0) // Текущая позиция свайпа

  let touchStartX: number | null = null
  let touchEndX: number | null = null

  useEffect(() => {
    const handleTouchStart = (event: TouchEvent) => {
      touchStartX = event.touches[0].clientX
    }

    const handleTouchEnd = (event: TouchEvent) => {
      touchEndX = event.changedTouches[0].clientX
      handleSwipe()
    }

    const handleWheel = (event: WheelEvent) => {
      event.preventDefault() // Предотвращаем стандартное поведение прокрутки
    }

    containerRef.current?.addEventListener("wheel", handleWheel)
    document.addEventListener("touchstart", handleTouchStart)
    document.addEventListener("touchend", handleTouchEnd)

    return () => {
      document.removeEventListener("touchstart", handleTouchStart)
      document.removeEventListener("touchend", handleTouchEnd)
      containerRef.current?.removeEventListener("wheel", handleWheel)
    }
  }, [])

  function handleSwipe() {
    if (touchEndX === null || touchStartX === null) return

    const d = touchStartX - touchEndX

    // Определяем направление свайпа
    if (currentPosition >= -2048 && currentPosition <= 0) {
      if (d < 0) {
        // Свайп влево
        setCurrentPosition((prevPosition) => prevPosition + 1024) // Используем предыдущее состояние
      } else {
        // Свайп вправо
        setCurrentPosition((prevPosition) => prevPosition - 1024) // Используем предыдущее состояние
      }
    }
  }
  return (
    <div
      ref={containerRef}
      style={{
        display: "flex",
        flexDirection: "row",
        width: "300%",
        position: "absolute",

        overscrollBehaviorX: "none",
        scrollSnapType: "x mandatory",
        scrollSnapAlign: "start",
        scrollSnapStop: "always",

        touchAction: "pan-x",
      }}
    >
      {React.Children.map(children, (child, index) => (
        <div
          key={index}
          style={{
            width: "100vw",
            minWidth: "1024px",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {child}
        </div>
      ))}
    </div>
  )
}

export default SwipeablePages
