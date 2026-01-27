function renderNavbar(active) {
  return `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div class="container">
        <a class="navbar-brand">My Portfolio</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link ${active === 'about' ? 'active' : ''}" href="index.html">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link ${active === 'projects' ? 'active' : ''}" href="projects.html">Projects</a>
            </li>
            <li class="nav-item">
              <a class="nav-link ${active === 'contact' ? 'active' : ''}" href="contact.html">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `;
}

// inject into any element with id="navbar-root"
document.addEventListener('DOMContentLoaded', () => {
  const el = document.getElementById('navbar-root');
  if (!el) return;

  // choose which link should be active based on data-active attr
  const active = el.dataset.active || '';
  el.innerHTML = renderNavbar(active);
});
