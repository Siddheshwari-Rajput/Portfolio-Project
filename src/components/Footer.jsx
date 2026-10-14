import { vision } from '../data/content.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <blockquote className="vision">{vision}</blockquote>
        <div className="footer-row">
          <p className="muted">Designed and built by Siddheshwari</p>
          <a href="#top" className="to-top">Back to top</a>
        </div>
      </div>
    </footer>
  )
}
