export function setupNavbar() {
  document.querySelector('#header').innerHTML =`
  <nav class="navbackc navbar navbar-expand-lg bg-body-tertiary " >
    <div class="container-fluid">
      <a class="navbar-brand" id="Home" href="#">MHome</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" id="login" href="#">Login</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" id="X_O" href="#">X & O</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" id="darkmode" href="#">DarkMode</a>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
  `
}
