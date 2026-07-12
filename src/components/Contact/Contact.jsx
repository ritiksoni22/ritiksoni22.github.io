import SectionHeading from '../SectionHeading/SectionHeading'
import Button from '../Button/Button'
import { EMAIL, SOCIAL_LINKS, RESUME_URL } from '../../data/contact'
import './Contact.css'

export default function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="container contact__inner">
        <div>
          <SectionHeading>contact</SectionHeading>
          <p className="contact__lead">
            Have a project in mind or just want to say hi? My inbox is always open.
          </p>
          <div className="contact__actions">
            <Button as="a" href={`mailto:${EMAIL}`} variant="primary">
              Say hello
            </Button>
            <Button as="a" href={RESUME_URL} download variant="outline">
              Download resume
            </Button>
          </div>
        </div>

        <div className="contact__details">
          <a className="contact__email" href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>
          <ul className="contact__socials">
            {SOCIAL_LINKS.map((social) => (
              <li key={social.name}>
                <a href={social.href} target="_blank" rel="noreferrer">
                  <img src={social.icon} alt="" aria-hidden="true" />
                  {social.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
