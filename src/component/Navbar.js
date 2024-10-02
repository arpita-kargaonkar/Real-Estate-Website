
import { BrowserRouter } from "react-router-dom";
import { colors } from "../Colour";
import "./Navbar.css"
 
import { HashLink as Link } from "react-router-hash-link";
 
function Navbar() {

  
 

    return(
       <BrowserRouter>
        
        <div class="sticky-top" id="navbar_main" >
        <nav class="navbar navbar-expand-lg   ">
        <div class="container-fluid col-8  " >
          <a class="navbar-brand " style={{color:colors.first}} href="#">Navbar</a>
          <div class="float-end">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            {/* <span class="navbar-toggler-icon"></span> */}
            <img src="https://www.svgrepo.com/show/315606/menu-left.svg" alt="icon"  style={{width:'30px'}}/>
          </button>
          <div class="collapse navbar-collapse " id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 float-end">
                 
              <li class="nav-item"  >
                <a class="nav-link active" aria-current="page"  > <Link to ="#Residencies" smooth >Residencies</Link></a>
              </li>
              <li class="nav-item" >
                <a class="nav-link active" aria-current="page"  ><Link to ="#Ourvalue">Our Value</Link></a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page"  ><Link to="#Contact Us">Contact Us</Link></a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" ><Link to="#Get Started">Get Started</Link></a>
              </li>
               
            </ul>
            </div>
          </div>
        </div>
      </nav>
        
        </div>
        </BrowserRouter>
    );
}

export default Navbar;