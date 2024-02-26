// Topbar Component
function Topbar() {
    return (
      <div className="container-fluid">
        {/* Topbar content goes here */}
        <div className="row bg-secondary py-2 px-xl-5">
          <div className="col-lg-6 d-none d-lg-block">
            <div className="d-inline-flex align-items-center">
              <a className="text-dark" href="">FAQs</a>
              <span className="text-muted px-2">|</span>
              <a className="text-dark" href="">Help</a>
              <span className="text-muted px-2">|</span>
              <a className="text-dark" href="">Support</a>
            </div>
          </div>
          <div className="col-lg-6 text-center text-lg-right">
            <div className="d-inline-flex align-items-center">
              <a className="text-dark px-2" href="">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a className="text-dark px-2" href="">
                <i className="fab fa-twitter"></i>
              </a>
              <a className="text-dark px-2" href="">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a className="text-dark px-2" href="">
                <i className="fab fa-instagram"></i>
              </a>
              <a className="text-dark pl-2" href="">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="row align-items-center py-3 px-xl-5">
          <div className="col-lg-3 d-none d-lg-block">
            <a href="" className="text-decoration-none">
              <h1 className="m-0 display-5 font-weight-semi-bold"><span className="text-primary font-weight-bold border px-3 mr-1">D</span>DINZO</h1>
            </a>
          </div>
          <div className="col-lg-6 col-6 text-left">
            <form action="">
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Search for products" />
                <div className="input-group-append">
                  <span className="input-group-text bg-transparent text-primary">
                    <i className="fa fa-search"></i>
                  </span>
                </div>
              </div>
            </form>
          </div>
          <div className="col-lg-3 col-6 text-right">
            <a href="" className="btn border">
              <i className="fas fa-heart text-primary"></i>
              <span className="badge">0</span>
            </a>
            <a href="" className="btn border">
              <i className="fas fa-shopping-cart text-primary"></i>
              <span className="badge">0</span>
            </a>
          </div>
        </div>
      </div>
    );
  }
  

// Navbar Component
function Navbar() {
  return (
    <div className="container-fluid">
      {/* Navbar content goes here */}
      <div className="row border-top px-xl-5">
            <div className="col-lg-3 d-none d-lg-block">
                <a className="btn shadow-none d-flex align-items-center justify-content-between bg-primary text-white w-100" data-toggle="collapse" href="#navbar-vertical" style="height: 65px; margin-top: -1px; padding: 0 30px;">
                    <h6 className="m-0">Categories</h6>
                    <i className="fa fa-angle-down text-dark"></i>
                </a>
                <nav className="collapse position-absolute navbar navbar-vertical navbar-light align-items-start p-0 border border-top-0 border-bottom-0 bg-light" id="navbar-vertical" style="width: calc(100% - 30px); z-index: 1;">
                    <div className="navbar-nav w-100 overflow-hidden" style="height: 410px">
                        <div className="nav-item dropdown">
                            <a href="#" className="nav-link" data-toggle="dropdown">Dresses <i className="fa fa-angle-down float-right mt-1"></i></a>
                            <div className="dropdown-menu position-absolute bg-secondary border-0 rounded-0 w-100 m-0">
                                <a href="" className="dropdown-item">Men's Dresses</a>
                                <a href="" className="dropdown-item">Women's Dresses</a>
                                <a href="" className="dropdown-item">Baby's Dresses</a>
                            </div>
                        </div>
                        <a href="" className="nav-item nav-link">Shirts</a>
                        <a href="" className="nav-item nav-link">Jeans</a>
                        <a href="" className="nav-item nav-link">Swimwear</a>
                        <a href="" className="nav-item nav-link">Sleepwear</a>
                        <a href="" className="nav-item nav-link">Sportswear</a>
                        <a href="" className="nav-item nav-link">Jumpsuits</a>
                        <a href="" className="nav-item nav-link">Blazers</a>
                        <a href="" className="nav-item nav-link">Jackets</a>
                        <a href="" className="nav-item nav-link">Shoes</a>
                    </div>
                </nav>
            </div>
            <div className="col-lg-9">
                <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
                    <a href="" className="text-decoration-none d-block d-lg-none">
                        <h1 className="m-0 display-5 font-weight-semi-bold"><span className="text-primary font-weight-bold border px-3 mr-1">E</span>Shopper</h1>
                    </a>
                    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                        <div className="navbar-nav mr-auto py-0">
                            <a href="index.html" className="nav-item nav-link">Home</a>
                            <a href="shop.html" className="nav-item nav-link">Shop</a>
                            <a href="detail.html" className="nav-item nav-link">Shop Detail</a>
                            <div className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle active" data-toggle="dropdown">Pages</a>
                                <div className="dropdown-menu rounded-0 m-0">
                                    <a href="cart.html" className="dropdown-item">Shopping Cart</a>
                                    <a href="checkout.html" className="dropdown-item">Checkout</a>
                                </div>
                            </div>
                            <a href="contact.html" className="nav-item nav-link">Contact</a>
                        </div>
                        <div className="navbar-nav ml-auto py-0">
                            <a href="./Login/login.html" className="nav-item nav-link">Login</a>
                            <a href="./Signup/signup.html" className="nav-item nav-link">Register</a>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </div>
  );
}

// PageHeader Component
function PageHeader() {
  return (
    <div className="container-fluid bg-secondary mb-5">
      {/* PageHeader content goes here */}
      <div className="d-flex flex-column align-items-center justify-content-center" style="min-height: 300px">
            <h1 className="font-weight-semi-bold text-uppercase mb-3">Shopping Cart</h1>
            <div className="d-inline-flex">
                <p className="m-0"><a href="">Home</a></p>
                <p className="m-0 px-2">-</p>
                <p className="m-0">Shopping Cart</p>
            </div>
        </div>
    </div>
  );
}

// Cart Component
function Cart() {
  return (
    <div className="container-fluid pt-5">
      {/* Cart content goes here */}
      <div className="row px-xl-5">
        <div className="col-lg-8 table-responsive mb-5">
          <table className="table table-bordered text-center mb-0">
            <thead className="bg-secondary text-dark">
              <tr>
                <th>Products</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody className="align-middle">
              <tr>
                <td className="align-middle">
                  <img src="img/product-1.jpg" alt="" style={{ width: "50px" }} /> Colorful Stylish Shirt
                </td>
                <td className="align-middle">Rs 1500</td>
                <td className="align-middle">
                  <div className="input-group quantity mx-auto" style={{ width: "100px" }}>
                    <div className="input-group-btn">
                      <button className="btn btn-sm btn-primary btn-minus">
                        <i className="fa fa-minus"></i>
                      </button>
                    </div>
                    <input type="text" className="form-control form-control-sm bg-secondary text-center" value="1" />
                    <div className="input-group-btn">
                      <button className="btn btn-sm btn-primary btn-plus">
                        <i className="fa fa-plus"></i>
                      </button>
                    </div>
                  </div>
                </td>
                <td className="align-middle">Rs 1500</td>
                <td className="align-middle"><button className="btn btn-sm btn-primary"><i className="fa fa-times"></i></button></td>
              </tr>
              {/* Additional rows go here */}
            </tbody>
          </table>
        </div>
        <div className="col-lg-4">
          <form className="mb-5" action="">
            <div className="input-group">
              <input type="text" className="form-control p-4" placeholder="Coupon Code" />
              <div className="input-group-append">
                <button className="btn btn-primary">Apply Coupon</button>
              </div>
            </div>
          </form>
          <div className="card border-secondary mb-5">
            <div className="card-header bg-secondary border-0">
              <h4 className="font-weight-semi-bold m-0">Cart Summary</h4>
            </div>
            <div className="card-body">
              <div className="d-flex justify-content-between mb-3 pt-1">
                <h6 className="font-weight-medium">Subtotal</h6>
                <h6 className="font-weight-medium">Rs 1500</h6>
              </div>
              <div className="d-flex justify-content-between">
                <h6 className="font-weight-medium">Shipping</h6>
                <h6 className="font-weight-medium">Rs 100</h6>
              </div>
            </div>
            <div className="card-footer border-secondary bg-transparent">
              <div className="d-flex justify-content-between mt-2">
                <h5 className="font-weight-bold">Total</h5>
                <h5 className="font-weight-bold">Rs 1600</h5>
              </div>
              <button className="btn btn-block btn-primary my-3 py-3">Proceed To Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


// Footer Component
function Footer() {
  return (
    <div className="container-fluid bg-secondary text-dark mt-5 pt-5">
      {/* Footer content goes here */}
      <div className="row px-xl-5 pt-5">
        <div className="col-lg-4 col-md-12 mb-5 pr-3 pr-xl-5">
          <a href="" className="text-decoration-none">
            <h1 className="mb-4 display-5 font-weight-semi-bold"><span className="text-primary font-weight-bold border border-white px-3 mr-1">D</span>DINZO</h1>
          </a>
          <p>Dolore erat dolor sit lorem vero amet. Sed sit lorem magna, ipsum no sit erat lorem et magna ipsum dolore amet erat.</p>
          <p className="mb-2"><i className="fa fa-map-marker-alt text-primary mr-3"></i>Vardhaman College , hyd</p>
          <p className="mb-2"><i className="fa fa-envelope text-primary mr-3"></i>info@example.com</p>
          <p className="mb-0"><i className="fa fa-phone-alt text-primary mr-3"></i>+91 70345 67890</p>
        </div>
        <div className="col-lg-8 col-md-12">
          <div className="row">
            <div className="col-md-4 mb-5">
              <h5 className="font-weight-bold text-dark mb-4">Quick Links</h5>
              <div className="d-flex flex-column justify-content-start">
                {/* Quick links */}
              </div>
            </div>
            <div className="col-md-4 mb-5">
              <h5 className="font-weight-bold text-dark mb-4">Quick Links</h5>
              <div className="d-flex flex-column justify-content-start">
                {/* Quick links */}
              </div>
            </div>
            <div className="col-md-4 mb-5">
              <h5 className="font-weight-bold text-dark mb-4">Newsletter</h5>
              <form action="">
                {/* Newsletter form */}
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="row border-top border-light mx-xl-5 py-4">
        <div className="col-md-6 px-xl-0">
          <p className="mb-md-0 text-center text-md-left text-dark">
            &copy; <a className="text-dark font-weight-semi-bold" href="#">DINZO</a>. All Rights Reserved.
          </p>
        </div>
        <div className="col-md-6 px-xl-0 text-center text-md-right">
          <img className="img-fluid" src="img/payments.png" alt="Accepted Payments" />
        </div>
      </div>
    </div>
  );
}


// Main App Component
function App() {
  return (
    <div>
      <Topbar />
      <Navbar />
      <PageHeader />
      <Cart />
      <Footer />
    </div>
  );
}

export default App;
