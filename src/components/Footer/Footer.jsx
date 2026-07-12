import CreditsPopover from './CreditsPopover'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>© {new Date().getFullYear()} Ritik Soni. All rights reserved.</p>
        <div className="footer__right">
          <CreditsPopover />
          <a href="#top">Back to top ↑</a>
        </div>
      </div>
    </footer>
  )
}
