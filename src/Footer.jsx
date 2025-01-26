function Footer() {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h3>About Zomato</h3>
                    <ul>
                        <li><a href="#">Who We Are</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Work With Us</a></li>
                        <li><a href="#">Investor Relations</a></li>
                        <li><a href="#">Report Fraud</a></li>
                        <li><a href="#">Press Kit</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>Zomaverse</h3>
                    <ul>
                        <li><a href="#">Zomato</a></li>
                        <li><a href="#">Blinkit</a></li>
                        <li><a href="#">District</a></li>
                        <li><a href="#">Feeding India</a></li>
                        <li><a href="#">Hyperpure</a></li>
                        <li><a href="#">Zomato Live</a></li>
                        <li><a href="#">Zomaland</a></li>
                        <li><a href="#">Weather Union</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>For Restaurants</h3>
                    <ul>
                        <li><a href="#">Partner With Us</a></li>
                        <li><a href="#">Apps For You</a></li>
                        <li><a href="#">Learn More</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>Legal</h3>
                    <ul>
                        <li><a href="#">Privacy</a></li>
                        <li><a href="#">Security</a></li>
                        <li><a href="#">Terms</a></li>
                    </ul>
                </div>

                <div className="footer-section social-links">
                    <h3>Follow Us</h3>
                    <a href="#"><img src="public/insta.jpg" alt="Instagram" /></a>
                    <a href="#"><img src="public/fb.jpg" alt="Facebook" /></a>
                    <a href="#"><img src="public/twitter.webp" alt="Twitter"/></a>
                </div>
            </div>

            <div className="footer-note">
                <p>
                    By continuing past this page, you agree to our
                    <a href="#"> Terms of Service</a>,
                    <a href="#"> Cookie Policy</a>,
                    <a href="#"> Privacy Policy</a>, and
                    <a href="#"> Content Policies</a>.
                </p>
                <p>All trademarks are properties of their respective owners. 2008-2025 © Zomato™ Ltd. All rights reserved.</p>
            </div>
        </div>
    );
}

export default Footer;
