import React, { useState, useEffect, useCallback, useRef } from "react"
import Slide from "./Slide"
import LeftIcon from "./LeftIcon"
import RightIcon from "./RightIcon"
import CloseIcon from "./CloseIcon"

export default function Slider({ pics, setShowSlider, imageIndex }) {
  const sliderRef = useRef(null)
  const [x, setX] = useState(imageIndex * -100)
  const [touchXstart, setTouchXstart] = useState(0)
  const [lastTouchX, setLastTouchX] = useState(0)
  const [isTouching, setIsTouching] = useState(false)

  const goLeft = useCallback(() => {
    x === 0 ? setX(-100 * (pics.length - 1)) : setX(x + 100)
  }, [x, pics])

  const goRight = useCallback(() => {
    x === -100 * (pics.length - 1) ? setX(0) : setX(x - 100)
  }, [x, pics])

  const closeSlider = useCallback(() => {
    sliderRef.current.classList.add("fade-out")
    setTimeout(() => {
      setShowSlider(false)
    }, 200)
  }, [setShowSlider])

  const handleTouchStart = event => {
    setTouchXstart(event.touches[0].clientX)
  }

  const handleTouchMove = event => {
    setLastTouchX(event.touches[0].clientX)
    setIsTouching(true);
  }

  const handleTouchEnd = event => {
    if (!isTouching) {
      return
    }

    if (touchXstart - lastTouchX < 0) {
      goLeft()
    } else {
      goRight()
    }

    setIsTouching(false)
  }

  useEffect(() => {
    function keyDownLeft(event) {
      if (event.key === "ArrowLeft") {
        goLeft()
      } else {
        return
      }
    }

    function keyDownRight(event) {
      if (event.key === "ArrowRight") {
        goRight()
      } else {
        return
      }
    }

    function keyDownEscape(event) {
      if (event.key === "Escape") {
        closeSlider()
      } else {
        return
      }
    }
    document.addEventListener("keydown", keyDownLeft)
    document.addEventListener("keydown", keyDownRight)
    document.addEventListener("keydown", keyDownEscape)

    return () => {
      document.removeEventListener("keydown", keyDownLeft)
      document.removeEventListener("keydown", keyDownRight)
      document.removeEventListener("keydown", keyDownEscape)
    }
  }, [closeSlider, goLeft, goRight])

  return (
    <div
      className="slider fade-in"
      ref={sliderRef}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {pics.map(item => {
        return <Slide key={item.id} item={item} x={x} />
      })}
      <button id="goLeft" onClick={goLeft}>
        <LeftIcon />
      </button>
      <button id="goRight" onClick={goRight}>
        <RightIcon />
      </button>

      <button id="closeBtn" onClick={closeSlider}>
        <CloseIcon />
      </button>
    </div>
  )
}
