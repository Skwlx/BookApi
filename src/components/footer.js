import React from "react";
import "../styles/components/footer.scss"

const Footer = () => (
    <footer className="footer">
    <p>Copyright © {new Date().getFullYear()} <a href="https://github.com/Skwlx">Paweł Sławuta</a></p>
    </footer>
)

export default Footer;