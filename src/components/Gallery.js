import React from "react"
import Img from "gatsby-image"

export default function Gallery({ pics, setShowSlider, setImageIndex }) {
  const openSlider = imageIndex => {
    setImageIndex(imageIndex)
    setShowSlider(true)
  }

  const handleImageClick = (event, index) => {
    event.preventDefault()
    openSlider(index)
  }

  const handleImageKeyDown = (event, index) => {
    if (event.key === "Enter") {
      event.preventDefault()
      openSlider(index)
    } else {
      return
    }
  }
  return (
    <div className="gallery">
      {pics.map((pic, index) => {
        return (
          <a
            href="/"
            onClick={event => handleImageClick(event, index)}
            onKeyDown={event => handleImageKeyDown(event, index)}
            key={pic.id}
            className="gallery__item"
          >
            <Img fluid={pic.pic.childImageSharp.thumb} alt={pic.title} />
          </a>
        )
      })}
    </div>
  )
}
