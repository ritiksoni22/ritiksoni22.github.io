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
        <header>
            <img className="profile-pic" src={ritik} alt="ritik" />
            <h1>Ritik Soni</h1>
            <h2>Full Stack Software Engineer</h2>
            <p>I build exceptional and accessible digital experiences for the web.</p>
            <div className="links">
                <div className="link-div">
                    <div className="link-line"></div>
                    <a href="#about">About</a>
                </div>
                <div className="link-div">
                    <div className="link-line"></div>
                    <a href="#skills">Skills</a>
                </div>
                <div className="link-div">
                    <div className="link-line"></div>
                    <a href="#projects">Projects</a>
                </div>
                <div className="link-div">
                    <div className="link-line"></div>
                    <a href="#experience">Experience</a>
                </div>
            </div>
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
            <a className="scroll-mouse" href="#about"><img src={scrollMouse} alt="scroll-mouse" /></a>
        </header>
    )
}

export default Header;