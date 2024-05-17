import { Outlet, Link } from "react-router-dom"

const Layout = () => {
  return (<>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <a className="navbar-brand" href="#"><i className="bi bi-bag-heart"></i> Shop</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/"><i className="bi bi-house-heart-fill"></i> Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/category/stone"><i className="bi bi-bookmark-heart-fill"></i> Categories</Link>
          </li>
          <li className="nav-item">
            <Link to="/notfound"><i className="bi bi-ban"></i></Link>
          </li>
          <li className="nav-item">
            <Link to="/cart"><i className="bi bi-cart-check-fill"></i> Cart</Link>
          </li>
          <li className="nav-item">
            <Link to="/privacy"><i class="bi bi-shield-fill-exclamation"></i> Privacy</Link>
          </li>
          <li className="nav-item">
            <Link to="/addproduct"><i class="bi bi-ui-checks"></i> Add product</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div className="container">
    <div className="row">
      <Outlet />
    </div>
  </div>
  <div className="spacer"></div>
  <footer>
    &copy; 2024 IT Step University
  </footer>
  </>);
};

export default Layout;