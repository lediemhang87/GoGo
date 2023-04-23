import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import '../Styles/Styles.Dashboard.scss';
// import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js'


const Navbar = () => {
  
  return(
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div className='container'> 
                <a class="nav-link" href="/"><img src={require("../Styles/img/Gogo-logo.PNG")} alt="" width="80px" /></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav  ms-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="/">Home <span class="sr-only"></span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/planner">Planning</a>
                    </li>
                    </ul>
                </div>
            </div>
        </nav>
      </div>


  )
}

export default Navbar