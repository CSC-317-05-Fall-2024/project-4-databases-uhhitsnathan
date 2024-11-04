
const headerContent = `
  <div class="main-page-title">
      <h1>Santa Clarita</h1>
  </div>
`;

const navContent = `
  <div class="nav-bar">
      <a href="/index">Home</a>
      <a href="/attractions">Attractions</a>
      <a href="/restaurants">Restaurants</a>
      <a href="/new-restaurant">Add Restaurant</a>
  </div>
`;

const footerContent = `
  <div class="footer">
      <p>Contact Info: nspitzer@sfsu.edu</p>
  </div>
`;

document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('header');
  if (header) {
    header.innerHTML = headerContent;
  }

  const nav = document.querySelector('nav');
  if (nav) {
    nav.innerHTML = navContent;
  }

  const footer = document.querySelector('footer');
  if (footer) {
    footer.innerHTML = footerContent;
  }
});