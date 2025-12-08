import './header.css';
// images
import ritik from "../../assets/images/ritik.webp";
import linkedin from "../../assets/images/linkedin.webp";
import twitter from "../../assets/images/twitter.webp";
import gmail from "../../assets/images/gmail.webp";
import instagram from "../../assets/images/instagram.webp";
import github from "../../assets/images/github.webp";
import upwork from "../../assets/images/upwork.webp";
import scrollMouse from "../../assets/images/mouse-cursor.png";


const Header = () => {
    return (
        <header className="hero">
            <div className="hero-nav">
                <div className="logo-chip">
                    <span className="pulse" aria-hidden="true"></span>
                    <span>Ritik Soni</span>
                </div>
                <nav className="nav-links">
                    <a href="#about">About</a>
                    <a href="#skills">Skills</a>
                    <a href="#projects">Projects</a>
                    <a href="#experience">Experience</a>
                </nav>
                <div className="nav-actions">
                    <span className="pill">Open to connect</span>
                    <div className="social-icons">
                        <a href="https://www.linkedin.com/in/soni-ritik/" target="_blank" rel="noreferrer">
                            <img src={linkedin} alt="linkedin-social-icon" />
                        </a>
                        <a href="https://twitter.com/ritikvsoni" target="_blank" rel="noreferrer">
                            <img src={twitter} alt="twitter-social-icon" />
                        </a>
                        <a href="mailto:ritikvsoni2000@gmail.com" target="_blank" rel="noreferrer">
                            <img src={gmail} alt="gmail-social-icon" />
                        </a>
                        <a href="https://www.instagram.com/ritikkksoni/" target="_blank" rel="noreferrer">
                            <img src={instagram} alt="instagram-social-icon" />
                        </a>
                        <a href="https://github.com/RitikSoni22" target="_blank" rel="noreferrer">
                            <img src={github} alt="github-social-icon" />
                        </a>
                        <a href="https://www.upwork.com/freelancers/~01c201b636015ea7b1" target="_blank" rel="noreferrer">
                            <img src={upwork} alt="upwork-social-icon" />
                        </a>
                    </div>
                </div>
            </div>

            <div className="hero-layout">
                <div className="hero-copy">
                    <p className="eyebrow">Full Stack Software Engineer</p>
                    <h1>Ritik Soni</h1>
                    <p className="lead">I build exceptional and accessible digital experiences for the web.</p>
                    <div className="hero-actions">
                        <a className="btn primary" href="#projects">View projects</a>
                        <a className="btn ghost" href="mailto:ritikvsoni2000@gmail.com">Email me</a>
                    </div>
                    <div className="hero-tags">
                        <span>React.js</span>
                        <span>Node.js</span>
                        <span>Webflow</span>
                        <span>Firebase</span>
                    </div>
                </div>

                <div className="hero-visual">
                    <div className="portrait-wrap">
                        <span className="orb orb-orange" aria-hidden="true"></span>
                        <span className="orb orb-cyan" aria-hidden="true"></span>
                        <img className="profile-pic" src={ritik} alt="Ritik Soni" />
                    </div>
                    <div className="floating-card">
                        <p>Your friendly neighbourhood full stack developer and JavaScript engineer.</p>
                    </div>
                </div>
            </div>
            <a className="scroll-mouse" href="#about"><img src={scrollMouse} alt="scroll to about" /></a>
        </header>
    )
}

export default Header;
