<template>
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand text-dark">VUE Handson1</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/records" class="nav-link text-dark text-center">Records</router-link>
          </li>
          <!-- <li class="nav-item">
            <router-link to="/create" class="nav-link text-dark text-center">Create</router-link>
          </li> -->
          <li class="nav-item">
            <router-link to="/gallery" class="nav-link text-dark text-center">Gallery</router-link>
          </li>
          <!-- <li class="nav-item">
            <router-link to="/contact" class="nav-link text-dark text-center">Contact Us</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link text-dark text-center">About</router-link>
          </li> -->
          <li class="nav-item">
            <router-link to="/vuesamplefunctions" class="nav-link text-dark text-center">Sample</router-link>
          </li>
           <!-- <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="true"
            >
              Dropdown
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><hr class="dropdown-divider" /></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled">Disabled</a>
          </li> -->
        </ul>
        <form class="d-flex" role="search">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: "NavBar",
};
</script>
