import React from "react";

function NavbarCandidate(){
    return (
        <div>
           <nav class="navbar navbar-expand-md bg-dark navbar-dark">
  <a class="navbar-brand" href="#">Home</a>

  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="collapsibleNavbar">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" href="#">Jobs</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Recruiters </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Resume</a>
      </li>
    </ul>
  </div>
</nav>
        </div>
    )
}

export default NavbarCandidate;