import React from "react"
import Seo from "../components/Seo"
import Layout from "../components/Layout"

export default function About() {
  return (
    <Layout>
      <Seo title="About this" />
      <h1>About this</h1>
      <p>This is a side project created by Sergio Peña @sergixnet</p>
      <p>
        The idea of the project is to show an image gallery from different
        sources around the internet.
      </p>
      <p>
        Every day a new gallery is created automatically. Last build was on{" "}
        {new Date().toISOString().slice(0, 10)}.
      </p>
      <p> These are the image sources used:</p>
      <ul>
        <li>
          <a
            href="https://www.bing.com/"
            target="__blank"
            rel="noopener noreferrer"
          >
            Bing
          </a>
        </li>
        <li>
          <a
            href="https://fstoppers.com/"
            target="__blank"
            rel="noopener noreferrer"
          >
            Fstoppers
          </a>
        </li>
        <li>
          <a
            href="https://apod.nasa.gov/apod/astropix.html"
            target="__blank"
            rel="noopener noreferrer"
          >
            Nasa
          </a>
        </li>
        <li>
          <a
            href="https://www.nationalgeographic.com/photography/photo-of-the-day/"
            target="__blank"
            rel="noopener noreferrer"
          >
            National Geographic
          </a>
        </li>
        <li>
          <a
            href="https://unsplash.com/"
            target="__blank"
            rel="noopener noreferrer"
          >
            Unsplash
          </a>
        </li>
        <li>
          <a
            href="https://wallhaven.cc/"
            target="__blank"
            rel="noopener noreferrer"
          >
            Wallheaven
          </a>
        </li>
        <li>
          <a
            href="https://www.socwall.com/"
            target="__blank"
            rel="noopener noreferrer"
          >
            Socwall
          </a>
        </li>
        <li>
          <a
            href="https://www.space.com/"
            target="__blank"
            rel="noopener noreferrer"
          >
            Space.com
          </a>
        </li>
        <li>
          <a
            href="https://biggeekdad.com/photo-of-the-day/"
            target="__blank"
            rel="noopener noreferrer"
          >
            Big geek daddy
          </a>
        </li>
        <li>
          <a
            href="https://www.outdoorphotographer.com/blog/category/photo-of-the-day/"
            target="__blank"
            rel="noopener noreferrer"
          >
            Outdoor photographer
          </a>
        </li>
      </ul>

    </Layout>
  )
}
