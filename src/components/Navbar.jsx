function Navbar({ setDarkMode, darkMode }) {
  return (
    <header className="navbar">
      <div className="container nav-content">
        <div className="logo-box">
          <img src="/images/logo.png" className="logo" />
          <h1>Fit Life Gym</h1>
        </div>

        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#trainers">Trainers</a>
          <a href="#contact">Contact</a>
        </nav>

        <button
          className="mode-btn"
          onClick={() => setDarkMode(prev => !prev)}
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>

      </div>
    </header>
  )
}

export default Navbar