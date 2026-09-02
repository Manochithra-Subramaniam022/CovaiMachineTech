"use client";

import React, { useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  useEffect(() => {
    // Porting the existing script.js logic if any was handled externally for the mobile menu toggle
    const toggle = document.getElementById('nav-toggle');
    const menu = document.getElementById('nav-menu');
    
    const handleToggle = () => {
      menu?.classList.toggle('active');
      toggle?.classList.toggle('active');
    };

    toggle?.addEventListener('click', handleToggle);
    return () => toggle?.removeEventListener('click', handleToggle);
  }, []);

  return (
    <nav className="navbar">
        <div className="nav-container">
            <div className="nav-logo">
                <Link href="/" style={{display: 'flex', alignItems: 'center', textDecoration: 'none'}}>
                    <img src="/logo_transparent.png" alt="Covai Machine Tech Logo" className="nav-logo-img" style={{ width: 'auto', height: '50px' }} />
                </Link>
            </div>
            <div className="nav-menu" id="nav-menu">
                <Link href="/#home" className="nav-link">Home</Link>
                <Link href="/#about" className="nav-link">About</Link>
                <div className="nav-dropdown">
                    <button className="nav-link dropdown-toggle" style={{background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit', fontSize: 'inherit', fontWeight: 'inherit', padding: '0', color: '#334155', position: 'relative', transition: 'var(--transition)'}}>Capabilities <i className="fas fa-chevron-down" style={{fontSize: '0.75em', marginLeft: '3px'}}></i></button>
                    <div className="dropdown-menu">
                        <Link href="/#services" className="dropdown-item">Services</Link>
                        <Link href="/#machines" className="dropdown-item">Machines</Link>
                        <Link href="/#industries" className="dropdown-item">Industries</Link>
                        <Link href="/#portfolio" className="dropdown-item">Portfolio</Link>
                        <Link href="/#customers" className="dropdown-item">Customers</Link>
                    </div>
                </div>
                <Link href="/#contact" className="nav-link">Contact</Link>
            </div>
            <div className="nav-toggle" id="nav-toggle">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
        </div>
    </nav>
  );
}
