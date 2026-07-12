import SectionHeading from '../SectionHeading/SectionHeading'
import './About.css'

const STATS = [
  { value: '4+', label: 'Years of experience' },
  { value: '2', label: 'Startups digitally transformed' },
  { value: '6', label: 'Products built' },
  { value: '7', label: 'Teammates trained' },
  { value: '$40k+', label: 'ARR generated' }
]

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="container">
        <SectionHeading>about</SectionHeading>
        <p className="about__bio">
          Your friendly neighbourhood full stack developer and JavaScript engineer. I
          build exceptional and accessible digital experiences for the web.
        </p>
        <ul className="about__stats">
          {STATS.map((stat) => (
            <li key={stat.label}>
              <span className="about__stat-value">{stat.value}</span>
              <span className="about__stat-label">{stat.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
