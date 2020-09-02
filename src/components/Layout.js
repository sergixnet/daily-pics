import React from "react"
import { Link } from "gatsby"
import "../styles/styles.scss"

export default function Layout({ children }) {
  return (
    <div className="layout">
      <header className="site-header">
        <h1 className="site-title">
          <Link to="/">Daily Pics</Link>
        </h1>
        <h2 className="site-subtitle">A new gallery every day</h2>
      </header>
      <main className="site-main">{children}</main>
      <footer className="site-footer">
        <ul className="site-footer__nav">
          <li className="site-footer__nav__item">
            <a href="https://github.com/sergixnet">
              &copy;{new Date().getFullYear()} Developed by Sergio Peña
            </a>
          </li>
          <li className="site-footer__nav__item">
            <Link to="/about/">About this</Link>
          </li>
  <li className="site-footer__nav__item">Last build on: {new Date().toISOString().slice(0, 10)}</li>
        </ul>
      </footer>
    </div>
  )
}
