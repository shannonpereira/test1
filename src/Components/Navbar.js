import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
   <>
   <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAI9JREFUSEvtlVEOgCAMQ8vN9OR6Mw1GFpwjayAoJvq3OPpsmRDQ+Qmd9WEBtkboRfMVQDSQXLARFvtLAo8DNNCrZRtZB57g+BF5k0s5WABMSilFyEaUlq8A5ljke2D9YLUA0WYBbER536E9FEBHSH0c1XT6/gFygnoTw76npogVs/pugBax4lr2QqmGfx+wA7Z3LRkLXVNTAAAAAElFTkSuQmCC"/>
        <nav className="navbar navbar-expand-md justify-content-center bg-primary navbar-dark">
            <div className="container-fluid">
                
                <Link className="navbar-brand" to="/">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/" className="nav-link active">Home</Link>
                </li>

                <li className="nav-item">
                    <Link to="/about" className="nav-link ">About</Link>
                </li>


                <li className="nav-item">
                    <Link to="/courses" className="nav-link">Courses</Link>
                </li>
            </ul>
        </div>
        </nav>
    </>
  )
}

export default Navbar