import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Seo from "../components/Seo"
import Layout from "../components/Layout"
import Gallery from "../components/Gallery"
import Slider from "../components/Slider"

export default function Home() {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allPic {
        nodes {
          title
          id
          credit
          pic {
            childImageSharp {
              thumb: fluid(maxWidth: 500, maxHeight: 500) {
                ...GatsbyImageSharpFluid
              }
              full: fluid(maxWidth: 2000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)
  const [showSlider, setShowSlider] = useState(false)
  const [imageIndex, setImageIndex] = useState(0)
  const pics = data.allPic.nodes

  return (
    <Layout>
      <Seo />
      <Gallery
        pics={pics}
        setShowSlider={setShowSlider}
        setImageIndex={setImageIndex}
      />
      {showSlider && (
        <Slider
          pics={pics}
          setShowSlider={setShowSlider}
          imageIndex={imageIndex}
        />
      )}
    </Layout>
  )
}
