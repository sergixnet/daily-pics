import React from "react"
import Seo from "../components/Seo"
import Layout from "../components/Layout"

export default function About() {
  return (
    <Layout>
      <Seo title="Not found" />
      <div className="not-found">
        <h1 className="not-found__title">404</h1>
        <h2 className="not-found__subtitle">Page not found</h2>
      </div>
    </Layout>
  )
}
