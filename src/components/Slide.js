import React from "react"
import Img from "gatsby-image"

export default function Slide({ item, x }) {
  return (
    <div
      className="slide"
      key={item.id}
      style={{ transform: `translateX(${x}%)` }}
    >
      <Img
        fluid={item.pic.childImageSharp.full}
        alt={item.title}
        style={{
          maxHeight: "100vh",
          height: "100%",
          width: "auto",
        }}
        imgStyle={{ objectFit: "contain" }}
      />
      <div className="slide__caption">
        {item.title && <p>{item.title}</p>}
        {item.credit && <p>{item.credit}</p>}
      </div>
    </div>
  )
}
