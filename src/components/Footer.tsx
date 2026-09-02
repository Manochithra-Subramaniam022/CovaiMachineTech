import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer-new">
        <div className="container">
            <div className="footer-top">
                <Link href="/" className="footer-logo">
                    <img src="/logo_transparent.png" alt="Covai Machine Tech Logo" style={{height: '45px', width: 'auto'}} />
                </Link>
                <div className="footer-socials">
                    <a href="#"><i className="fab fa-linkedin-in"></i></a>
                    <a href="#">
                        <svg width="18" height="18" viewBox="0 0 1200 1227" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" fill="currentColor"/>
                        </svg>
                    </a>
                    <a href="#"><i className="fab fa-youtube"></i></a>
                </div>
            </div>
            
            <div className="footer-links-grid">
                <div className="footer-col">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><Link href="/#home">Home</Link></li>
                        <li><Link href="/#about">About Us</Link></li>
                        <li><Link href="/#services">Capabilities</Link></li>
                        <li><Link href="/#contact">Contact Us</Link></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>Capabilities</h4>
                    <ul>
                        <li><Link href="/cnc-machining-coimbatore">CNC Turning</Link></li>
                        <li><Link href="/vmc-machining-coimbatore">CNC Milling</Link></li>
                        <li><Link href="/vtl-machining-coimbatore">Heavy Duty VTL</Link></li>
                        <li><Link href="/double-column-machining-coimbatore">Valve Machining</Link></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>Company</h4>
                    <ul>
                        <li><Link href="/#about">ISO Certification</Link></li>
                        <li><Link href="/#machines">Facilities</Link></li>
                        <li><Link href="/#portfolio">Portfolio</Link></li>
                        <li><Link href="/#industries">Industries</Link></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>Contact</h4>
                    <ul>
                        <li><a href="mailto:covaimachinetech@gmail.com">covaimachinetech@gmail.com</a></li>
                        <li><a href="tel:+919894593444">+91 98945 93444</a></li>
                        <li><a href="#">Coimbatore - 641659</a></li>
                        <li><a href="#">GSTIN: 33BBFPV2361C3ZV</a></li>
                    </ul>
                </div>
            </div>
            
            <div className="footer-bottom-new">
                <p>&copy; Covai Machine Tech. All Rights Reserved 2024.</p>
            </div>
        </div>
    </footer>
  );
}
