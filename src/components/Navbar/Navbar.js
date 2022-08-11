import "./Navbar.css";
import { Link } from "react-router-dom";

export  default function Navbar() {
    return (
        <>
        <div className="container ">
          
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      {/* <img src="https://cdn3.vectorstock.com/i/thumb-large/52/22/abstract-healthcare-logo-image-vector-14655222.jpg" href="image"></img> */}
      
         
         
           <li class="nav-item btn">
           <Link  className="navLink" to="/Aboutus">AboutUs</Link>
        </li>
        <li class="nav-item btn">
        <Link className="navLink" to="/Service">Service</Link>
        </li>
        {/* <li class="nav-item btn">
        <Link to="/Services"></Link>
        </li> */}

        <li class="nav-item  btn">
        <Link className=" navLink" to="/">Home</Link>
        </li>
        </ul>
       
      <span class="navbar-text btn">
      <Link className=" navLink" to="/location">LOCATION</Link>
      
      </span>
      <span class="navbar-text btn">
      <Link className=" navLink" to="/contact">CONTACT</Link>
      </span>
    </div>
  </div>
</nav>
</div>








        </>
    );
}