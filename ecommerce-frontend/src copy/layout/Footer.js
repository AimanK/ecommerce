import React from 'react'
import { Link } from 'react-router-dom';

function Footer () {
  return (
    <div>
        <footer class="container py-5">
                <div class="row">
                    <div class="col-12 col-md">
                    <a class="py-2" aria-label="Product" href="#nav">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="gray" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="d-block mb-2" role="img" viewBox="0 0 24 24"><title>Product</title><circle cx="12" cy="12" r="10"/><path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94"/></svg>
                    </a>
                    <small class="d-block mb-3 text-muted">&copy; 2023–2024</small>
                    </div>
                    <div class="col-6 col-md">
                    <a class="text-dark" href="#shop"><h5>Shop</h5></a>
                    <ul class="list-unstyled text-small">
                        <li><Link class="link-secondary" to="/">Home</Link></li>
                        <li><Link class="link-secondary" to="/lighting">Lighting Fixtures</Link></li>
                        <li><Link class="link-secondary" to="/chairs">Chairs</Link></li>
                        <li><Link class="link-secondary" to="/tables">Tables</Link></li>
                        <li><Link class="link-secondary" to="/beds">Beds</Link></li>
                        <li><Link class="link-secondary" to="/arearugs">Area Rugs</Link></li>
                        <li><Link class="link-secondary" to="/decor">Decor</Link></li>
                    </ul>
                    </div>
                    <div class="col-6 col-md">
                    <Link class="text-dark" to="/aboutus"><h5>About Us</h5></Link>
                    <ul class="list-unstyled text-small">
                        <li><Link class="link-secondary" to="/aboutus">Our Story</Link></li>
                        <li><a class="link-secondary" href="https://www.linkedin.com/in/aiman-kayad/">LinkedIn</a></li>
                        <li><Link class="link-secondary" to="/aboutus">View My Resume</Link></li>
                    </ul>
                    </div>
                    <div class="col-6 col-md">
                    <h5>Source Code</h5>
                    <ul class="list-unstyled text-small">
                        <li><a class="link-secondary" href="https://github.com/AimanK/ecommerce-frontend">Frontend Code</a></li>
                        <li><a class="link-secondary" href="https://github.com/AimanK/ecommerce-backend">Backend Code</a></li>
                    </ul>
                    </div>
                </div>
                </footer>
    </div>
  )
}

export default Footer;