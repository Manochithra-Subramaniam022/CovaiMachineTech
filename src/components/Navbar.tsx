"use client";

import React, { useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  useEffect(() => {
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
                    <button className="nav-link dropdown-toggle" style={{background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit', fontSize: 'inherit', fontWeight: 'inherit', padding: '0', color: '#334155', position: 'relative', transition: 'var(--transition)'}}>Services <i className="fas fa-chevron-down" style={{fontSize: '0.75em', marginLeft: '3px'}}></i></button>
                    <div className="dropdown-menu" style={{ minWidth: '260px', maxHeight: '420px', overflowY: 'auto' }}>
                        <Link href="/cnc-machining-coimbatore" className="dropdown-item">CNC Machining</Link>
                        <Link href="/cnc-turning-job-work-coimbatore" className="dropdown-item">CNC Turning Job Work</Link>
                        <Link href="/vmc-machining-coimbatore" className="dropdown-item">VMC Machining</Link>
                        <Link href="/double-column-machining-coimbatore" className="dropdown-item">Double Column Machining</Link>
                        <Link href="/heavy-machining-big-parts-coimbatore" className="dropdown-item">Heavy & Big Parts Machining</Link>
                        <Link href="/vtl-machining-coimbatore" className="dropdown-item">VTL Machining</Link>
                        <Link href="/valve-component-machining-coimbatore" className="dropdown-item">Valve Component Machining</Link>
                        <Link href="/industrial-casting-machining-services" className="dropdown-item">Casting & Custom Machining</Link>
                        <Link href="/precision-machining-coimbatore" className="dropdown-item">Precision & Critical Jobs</Link>
                        <Link href="/cmm-inspection-services-coimbatore" className="dropdown-item">Carl Zeiss CMM Inspection</Link>
                        <Link href="/cnc-machining-job-work-india" className="dropdown-item">Pan-India Job Work</Link>
                        <Link href="/#services" className="dropdown-item">All Capabilities</Link>
                        <Link href="/#machines" className="dropdown-item">Machines</Link>
                    </div>
                </div>
                <Link href="/cnc-machining-job-work-enquiries" className="nav-link">RFQ Enquiries</Link>
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
