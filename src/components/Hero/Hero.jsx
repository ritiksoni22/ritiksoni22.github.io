import Button from '../Button/Button'
import { RESUME_URL } from '../../data/contact'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero__inner">
        <div className="hero__content">
          <p className="eyebrow">Hi, I&apos;m Ritik,</p>
          <h1 className="hero__title">
            Product and strategic solutions driven full stack engineer
          </h1>
          <div className="hero__actions">
            <Button as="a" href={RESUME_URL} download variant="primary">
              Resume
            </Button>
            <Button as="a" href="#contact" variant="outline">
              Contact me
            </Button>
          </div>
        </div>

        <div className="hero__portrait">
          <span className="hero__ticks" aria-hidden="true">
            + +<br />+
          </span>
          <div className="hero__photo-frame">
            <img src="/images/ritik.webp" alt="Portrait of Ritik Soni" />
          </div>
          <span className="hero__slashes" aria-hidden="true">
            / / / / /
          </span>
        </div>
      </div>
    </section>
  )
}
