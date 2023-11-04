import React from 'react';
import {Link} from "react-router-dom";

function Navigation() {
  return (
    <div>
      <marquee behavior="" direction="left">Hi there! You are welcome to my website. I am a front end developer and I am very good at front end web developing</marquee>
        <nav class="navbar navbar-expand-lg navbar-light">
  <div class="container-fluid ">

        <Link class="navbar-brand" to="/">Personal blog</Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mb-2 ms-auto align-items-center">
        <li class="nav-item mx-4">
          <Link class="nav-link" to="/" >Home</Link>
        </li>
        <li class="nav-item mx-4">
          <Link class="nav-link" to="/politics">Politics</Link>
        </li>
        <li class="nav-item dropdown mx-4">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Tech
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Entertainment</a></li>
            <li><a class="dropdown-item" href="#">Travel</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Sports</a></li>
          </ul>
        </li>
        <li class="nav-item mx-4">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-3" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navigation;