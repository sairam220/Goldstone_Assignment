import './index.css'
import Header from '../Header'

const About = () => (
  <div className="about-container">
    <Header />
    <img
      src="https://assets.ccbp.in/frontend/react-js/about-blog-img.png"
      alt="about"
      className="about-img"
    />
    <h1 className="about-heading">About</h1>
  </div>
)

export default About
