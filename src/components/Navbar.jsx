import reactLogo from "../assets/images/react-logo.png"

export default function Navbar() {
  return (
    <header>
      <nav>
        <img className="nav-logo" src={reactLogo} alt="ReactLogo"></img>
        <span>ReactFacts</span>
      </nav>
    </header>
  )
}