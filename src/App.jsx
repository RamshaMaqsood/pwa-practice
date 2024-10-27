// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import { Nav, Navbar, Container } from 'react-bootstrap'
// import { Link, Routes, Route, BrowserRouter as Router } from 'react-router-dom'
// import Home from './home'
// import About from './About'
// import Users from './Users'

// function App() {
//   return(
//     <Router>
//     <div className="app">
//       <Navbar bg="primary" data-bs-theme="dark">
//         <Container>
//           <Navbar.Brand href="#home">Navbar</Navbar.Brand>
//           <Nav className="me-auto">

//             <Nav.Link as={Link} to="">Home</Nav.Link>
//             <Nav.Link as={Link} to="/About">About</Nav.Link>
//             <Nav.Link as={Link} to="/Users">Users</Nav.Link>

//           </Nav>
//         </Container>
//       </Navbar>


//       <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/About" element={<About />} />
//           <Route path="/Users" element={<Users />} />
//         </Routes>


//     </div>
//     </Router>
//   )
// }

// export default App


import { Nav, Navbar, Container } from 'react-bootstrap';
import { Link, Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './home';
import About from './About';
import Users from './Users';
import './App.css';

function App() {
  return (
      <div className="app">
        <Navbar bg="primary" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="/">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link> {/* Set this to "/" */}
              <Nav.Link as={Link} to="/About">About</Nav.Link>
              <Nav.Link as={Link} to="/Users">Users</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        {/* Route definitions */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Users" element={<Users />} />
        </Routes>
      </div>
  );
}

export default App;
