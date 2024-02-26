const TopBar = () => {
    return (
        <div className="container-fluid">
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
const Navbar = () => {
    return (
        <div className="container-fluid">
            <div className="row border-top px-xl-5">
                <div className="col-lg-3 d-none d-lg-block">
                    {/* Navbar Brand */}
                    <a className="btn shadow-none d-flex align-items-center justify-content-between bg-primary text-white w-100" data-toggle="collapse" href="#navbar-vertical" style={{ height: "65px", marginTop: "-1px", padding: "0 30px" }}>
                        <h6 className="m-0">Categories</h6>
                        <i className="fa fa-angle-down text-dark"></i>
                    </a>
                    {/* Navbar Vertical Menu */}
                    <nav className="collapse position-absolute navbar navbar-vertical navbar-light align-items-start p-0 border border-top-0 border-bottom-0 bg-light" id="navbar-vertical" style={{ width: "calc(100% - 30px)", zIndex: "1" }}>
                        {/* Navbar Vertical Menu Items */}
                        <div className="navbar-nav w-100 overflow-hidden" style={{ height: "410px" }}>
                            <div className="nav-item dropdown">
                                <a href="#" className="nav-link" data-toggle="dropdown">Dresses <i className="fa fa-angle-down float-right mt-1"></i></a>
                                <div className="dropdown-menu position-absolute bg-secondary border-0 rounded-0 w-100 m-0">
                                    <a href="" className="dropdown-item">Men's Dresses</a>
                                    <a href="" className="dropdown-item">Women's Dresses</a>
                                    <a href="" className="dropdown-item">Baby's Dresses</a>
                                </div>
                            </div>
                            {/* Other Navbar Items */}
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
                    {/* Main Navbar */}
                    <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
                        <a href="" className="text-decoration-none d-block d-lg-none">
                            <h1 className="m-0 display-5 font-weight-semi-bold"><span className="text-primary font-weight-bold border px-3 mr-1">D</span>DINZO</h1>
                        </a>
                        <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        {/* Navbar Links */}
                        <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                            {/* Left Side Navbar Links */}
                            <div className="navbar-nav mr-auto py-0">
                                <a href="index.html" className="nav-item nav-link">Home</a>
                                <a href="shop.html" className="nav-item nav-link">Shop</a>
                                <a href="detail.html" className="nav-item nav-link">Shop Detail</a>
                                <div className="nav-item dropdown">
                                    <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Pages</a>
                                    <div className="dropdown-menu rounded-0 m-0">
                                        <a href="cart.html" className="dropdown-item">Shopping Cart</a>
                                        <a href="checkout.html" className="dropdown-item">Checkout</a>
                                    </div>
                                </div>
                                <a href="contact.html" className="nav-item nav-link active">Contact</a>
                            </div>
                            {/* Right Side Navbar Links */}
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
const PageHeader = ({ pageTitle }) => {
    return (
        <div className="container-fluid bg-secondary mb-5">
            <div className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: "300px" }}>
                <h1 className="font-weight-semi-bold text-uppercase mb-3">{pageTitle}</h1>
                <div className="d-inline-flex">
                    <p className="m-0"><a href="">Home</a></p>
                    <p className="m-0 px-2">-</p>
                    <p className="m-0">Contact</p>
                </div>
            </div>
        </div>
    );
}

// ContactForm Component
const ContactForm = () => {
    return (
        <div className="container-fluid pt-5">
            <div className="text-center mb-4">
                <h2 className="section-title px-5"><span className="px-2">Contact For Any Queries</span></h2>
            </div>
            <div className="row px-xl-5">
                <div className="col-lg-7 mb-5">
                    <div className="contact-form">
                        <div id="success"></div>
                        <form name="sentMessage" id="contactForm" novalidate="novalidate">
                            <div className="control-group">
                                <input type="text" className="form-control" id="name" placeholder="Your Name"
                                    required="required" data-validation-required-message="Please enter your name" />
                                <p className="help-block text-danger"></p>
                            </div>
                            <div className="control-group">
                                <input type="email" className="form-control" id="email" placeholder="Your Email"
                                    required="required" data-validation-required-message="Please enter your email" />
                                <p className="help-block text-danger"></p>
                            </div>
                            <div className="control-group">
                                <input type="text" className="form-control" id="subject" placeholder="Subject"
                                    required="required" data-validation-required-message="Please enter a subject" />
                                <p className="help-block text-danger"></p>
                            </div>
                            <div className="control-group">
                                <textarea className="form-control" rows="6" id="message" placeholder="Message"
                                    required="required"
                                    data-validation-required-message="Please enter your message"></textarea>
                                <p className="help-block text-danger"></p>
                            </div>
                            <div>
                                <button className="btn btn-primary py-2 px-4" type="submit" id="sendMessageButton">Send
                                    Message</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-lg-5 mb-5">
                    <h5 className="font-weight-semi-bold mb-3">Get In Touch</h5>
                    <p>Justo sed diam ut sed amet duo amet lorem amet stet sea ipsum, sed duo amet et. Est elitr dolor elitr erat sit sit. Dolor diam et erat clita ipsum justo sed.</p>
                    <div className="d-flex flex-column mb-3">
                        <h5 className="font-weight-semi-bold mb-3">Store 1</h5>
                        <p className="mb-2"><i className="fa fa-map-marker-alt text-primary mr-3"></i>Vardhaman college, hyd</p>
                        <p className="mb-2"><i className="fa fa-envelope text-primary mr-3"></i>info@example.com</p>
                        <p className="mb-2"><i className="fa fa-phone-alt text-primary mr-3"></i>+012 345 67890</p>
                    </div>
                    <div className="d-flex flex-column">
                        <h5 className="font-weight-semi-bold mb-3">Store 2</h5>
                        <p className="mb-2"><i className="fa fa-map-marker-alt text-primary mr-3"></i>Vardhaman college, hyd</p>
                        <p className="mb-2"><i className="fa fa-envelope text-primary mr-3"></i>info@example.com</p>
                        <p className="mb-0"><i className="fa fa-phone-alt text-primary mr-3"></i>+012 345 67890</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

// ContactInfo Component
const ContactInfo = () => {
    return (
        <div className="col-lg-5 mb-5">
            <h5 className="font-weight-semi-bold mb-3">Get In Touch</h5>
            <p>Justo sed diam ut sed amet duo amet lorem amet stet sea ipsum, sed duo amet et. Est elitr dolor elitr erat sit sit. Dolor diam et erat clita ipsum justo sed.</p>
            <div className="d-flex flex-column mb-3">
                <h5 className="font-weight-semi-bold mb-3">Store 1</h5>
                <p className="mb-2"><i className="fa fa-map-marker-alt text-primary mr-3"></i>Vardhaman college, hyd</p>
                <p className="mb-2"><i className="fa fa-envelope text-primary mr-3"></i>info@example.com</p>
                <p className="mb-2"><i className="fa fa-phone-alt text-primary mr-3"></i>+012 345 67890</p>
            </div>
            <div className="d-flex flex-column">
                <h5 className="font-weight-semi-bold mb-3">Store 2</h5>
                <p className="mb-2"><i className="fa fa-map-marker-alt text-primary mr-3"></i>Vardhaman college, hyd</p>
                <p className="mb-2"><i className="fa fa-envelope text-primary mr-3"></i>info@example.com</p>
                <p className="mb-0"><i className="fa fa-phone-alt text-primary mr-3"></i>+012 345 67890</p>
            </div>
        </div>
    );
}

// Footer Component
// Footer Component
const Footer = () => {
    return (
        <div className="container-fluid bg-secondary text-dark mt-5 pt-5">
            <div className="row px-xl-5 pt-5">
                <div className="col-lg-4 col-md-12 mb-5 pr-3 pr-xl-5">
                    <a href="" className="text-decoration-none">
                        <h1 className="mb-4 display-5 font-weight-semi-bold"><span className="text-primary font-weight-bold border border-white px-3 mr-1">D</span>DINZO</h1>
                    </a>
                    <p>Dolore erat dolor sit lorem vero amet. Sed sit lorem magna, ipsum no sit erat lorem et magna ipsum dolore amet erat.</p>
                    <p className="mb-2"><i className="fa fa-map-marker-alt text-primary mr-3"></i>Vardhaman college, hyd</p>
                    <p className="mb-2"><i className="fa fa-envelope text-primary mr-3"></i>info@example.com</p>
                    <p className="mb-0"><i className="fa fa-phone-alt text-primary mr-3"></i>+91 70345 67890</p>
                </div>
                <div className="col-lg-8 col-md-12">
                <div className="row">
                    <div className="col-md-4 mb-5">
                        <h5 className="font-weight-bold text-dark mb-4">Quick Links</h5>
                        <div className="d-flex flex-column justify-content-start">
                            <a className="text-dark mb-2" href="index.html"><i className="fa fa-angle-right mr-2"></i>Home</a>
                            <a class="text-dark mb-2" href="shop.html"><i class="fa fa-angle-right mr-2"></i>Our Shop</a>
                            <a className="text-dark mb-2" href="detail.html"><i className="fa fa-angle-right mr-2"></i>Shop Detail</a>
                            <a className="text-dark mb-2" href="cart.html"><i className="fa fa-angle-right mr-2"></i>Shopping Cart</a>
                            <a className="text-dark mb-2" href="checkout.html"><i className="fa fa-angle-right mr-2"></i>Checkout</a>
                            <a className="text-dark" href="contact.html"><i className="fa fa-angle-right mr-2"></i>Contact Us</a>
                        </div>
                    </div>
                    <div className="col-md-4 mb-5">
                        <h5 className="font-weight-bold text-dark mb-4">Quick Links</h5>
                        <div className="d-flex flex-column justify-content-start">
                            <a className="text-dark mb-2" href="index.html"><i className="fa fa-angle-right mr-2"></i>Home</a>
                            <a className="text-dark mb-2" href="shop.html"><i className="fa fa-angle-right mr-2"></i>Our Shop</a>
                            <a className="text-dark mb-2" href="detail.html"><i className="fa fa-angle-right mr-2"></i>Shop Detail</a>
                            <a className="text-dark mb-2" href="cart.html"><i className="fa fa-angle-right mr-2"></i>Shopping Cart</a>
                            <a className="text-dark mb-2" href="checkout.html"><i className="fa fa-angle-right mr-2"></i>Checkout</a>
                            <a className="text-dark" href="contact.html"><i className="fa fa-angle-right mr-2"></i>Contact Us</a>
                        </div>
                    </div>
                    <div class="col-md-4 mb-5">
                        <h5 className="font-weight-bold text-dark mb-4">Newsletter</h5>
                        <form action="">
                            <div class="form-group">
                                <input type="text" className="form-control border-0 py-4" placeholder="Your Name" required="required" />
                            </div>
                            <div class="form-group">
                                <input type="email" className="form-control border-0 py-4" placeholder="Your Email"
                                    required="required" />
                            </div>
                            <div>
                                <button className="btn btn-primary btn-block border-0 py-3" type="submit">Subscribe Now</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            </div>
            <div className="row border-top border-light mx-xl-5 py-4">
                <div className="col-md-6 px-xl-0">
                    <p className="mb-md-0 text-center text-md-left text-dark">
                        &copy; <a className="text-dark font-weight-semi-bold" href="#">Your Site Name</a>. All Rights Reserved.
                    </p>
                </div>
                <div className="col-md-6 px-xl-0 text-center text-md-right">
                    <img className="img-fluid" src="img/payments.png" alt="" />
                </div>
            </div>
        </div>
    );
}


// BackToTop Button Component
const BackToTopButton = () => {
    return (
        <a href="#" className="btn btn-primary back-to-top"><i className="fa fa-angle-double-up"></i></a>
    );
}

// Main App Component
const App = () => {
    return (
        <>
            <TopBar />
            <Navbar />
            <PageHeader pageTitle="Contact Us" />
            <ContactForm />
            <ContactInfo />
            <tag>Footer</tag>
            <Footer />
            <BackToTopButton />
        </>
    );
}

export default App;