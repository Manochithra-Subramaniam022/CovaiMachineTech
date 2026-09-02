"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Add script.js logic here or inject script
    const script = document.createElement("script");
    script.src = "/script.js";
    document.body.appendChild(script);
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <>

    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": ["ManufacturingBusiness", "LocalBusiness"],
          "name": "Covai Machine Tech",
          "image": "https://covaimachinetech.com/logo_transparent.png",
          "url": "https://covaimachinetech.com",
          "telephone": "+919894593444",
          "email": "covaimachinetech@gmail.com",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Annur Main Road, Near Suzlon, Kittampalayam, Karumathampatti",
            "addressLocality": "Coimbatore",
            "addressRegion": "Tamil Nadu",
            "postalCode": "641659",
            "addressCountry": "IN"
          },
          "areaServed": {
            "@type": "City",
            "name": "Coimbatore"
          }
        })
      }}
    />

    {/*  Full-Screen HeroBackground Component with Layered Content  */}
    <header className="hero-background-component" id="home">
        <video autoPlay loop muted playsInline className="hero-bg-video" poster="https://cdn.prod.website-files.com/671f633d00383c11aeb0f116/672e35e7ffbeec4527df9af8_maxresdefault-poster-00001.jpg">
            <source src="https://assets.mixkit.co/videos/preview/mixkit-close-up-of-a-metal-lathe-working-on-a-piece-of-metal-42844-large.mp4" type="video/mp4" />
            <source src="https://cdn.pixabay.com/video/2021/08/11/84687-587848601_large.mp4" type="video/mp4" />
            <img src="/images/hero-cnc.webp" width={1920} height={1080} alt="CNC Milling Spindle Machining Metal" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
        </video>
        <div className="hero-bg-overlay"></div>
        
        <div className="hero-content">
            <div className="hero-text" style={{maxWidth: '720px', textAlign: 'left'}}>
                <div className="hero-badge">
                    <span className="hero-badge-dot"></span> ISO 9001:2015 CERTIFIED FACILITY
                </div>
                <h1 className="hero-title" style={{fontSize: '4.2rem', fontWeight: '800', letterSpacing: '-1px'}}>Precision Meets <span style={{color: 'var(--accent-color)'}}>Power</span></h1>
                <p className="hero-subtitle" style={{fontSize: '1.35rem', maxWidth: '680px', margin: '0 0 2.5rem', lineHeight: '1.6'}}>Advanced CNC turning, multi-axis milling, and heavy-duty VTL machining engineered for exceptional industrial performance. Spanning an expansive 2-Acre facility in Coimbatore with 7,000 Sq.Ft of constructed workspace.</p>
                <div className="hero-buttons" style={{justifyContent: 'flex-start'}}>
                    <a href="#contact" className="btn btn-primary" style={{padding: '14px 36px', fontSize: '1.05rem', boxShadow: '0 6px 20px rgba(255, 87, 34, 0.4)'}}>Get a Quote</a>
                    <a href="#machines" className="btn btn-secondary" style={{padding: '14px 36px', fontSize: '1.05rem'}}>Explore Machinery</a>
                </div>
            </div>
        </div>
    </header>

    {/*  About Us Section  */}
    <section id="about" className="about" style={{background: 'var(--bg-light)', padding: '6rem 0'}}>
        <div className="container">
            <div className="section-header">
                <h2>About Covai Machine Tech</h2>
                <p>ISO 9001:2015 Certified Precision CNC Manufacturing Facility</p>
            </div>
            <div className="about-container-full" style={{maxWidth: '1100px', margin: '0 auto 4rem'}}>
                <div className="iso-badge-box" style={{background: '#ffffff', color: '#111827', padding: '1.8rem', borderRadius: '16px', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1.5rem', border: '1px solid #e2e8f0', borderLeft: '5px solid #ff5722', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)'}}>
                    <i className="fas fa-award" style={{fontSize: '3rem', color: '#ff5722'}}></i>
                    <div>
                        <h4 style={{fontSize: '1.25rem', color: '#111827', marginBottom: '0.3rem', letterSpacing: '0.5px'}}>ISO 9001:2015 CERTIFIED COMPANY</h4>
                        <p style={{fontSize: '0.95rem', margin: '0', color: '#334155'}}><strong>Certificate No:</strong> 25MEQTH25 | <strong>Valid Thru:</strong> 26/02/2028</p>
                        <p style={{fontSize: '0.88rem', marginTop: '0.4rem', color: '#64748b', lineHeight: '1.5'}}>Scope: Manufacturing & Supply of Machined Components for Automobile and General Engineering.</p>
                    </div>
                </div>

                <div className="about-text-content" style={{marginBottom: '3rem', fontSize: '1.1rem', lineHeight: '1.8', color: '#334155'}}>
                    <p style={{marginBottom: '1.2rem'}}>Covai Machine Tech is an ISO 9001:2015 certified precision CNC manufacturing facility situated on Annur Main Road, Near Suzlon, Kittampalayam, Karumathampatti, Coimbatore. Spanning an expansive <strong style={{color: '#ff5722'}}>2-Acre facility with 7,000 Sq.Ft of constructed workspace</strong>, we are equipped with state-of-the-art infrastructure and well-trained operators.</p>
                    <p style={{marginBottom: '1.2rem'}}>We are a team of qualified professionals with a proficient technical background, undertaking all kinds of challenging projects. We thoroughly understand customer requirements and adhere to precise planning and execution with a firm emphasis on quality and timely delivery at optimal cost.</p>
                    <p>Our core capabilities include machining various valve components such as ball valves, gate valves, globe valves, check valves, and other pipeline-related parts. We undertake complete and partial job work based on client drawings, specifications, and industry standards, supported by our own dedicated transportation facilities for collection and delivery.</p>
                </div>

                {/*  Full-Width Uncropped Company View Showcase  */}
                <div className="company-view-showcase" style={{background: '#ffffff', borderRadius: '24px', padding: '1.5rem', border: '1px solid #e2e8f0', boxShadow: '0 20px 45px rgba(0,0,0,0.06)', marginBottom: '2rem'}}>
                    <div style={{textAlign: 'center', marginBottom: '1.2rem'}}>
                        <span style={{background: 'rgba(255, 87, 34, 0.12)', color: '#ff5722', padding: '4px 14px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase'}}>FACILITY OVERVIEW</span>
                        <h3 style={{fontSize: '1.8rem', color: '#111827', margin: '0.5rem 0 0.2rem'}}>OUR COMPANY VIEW</h3>
                        <p style={{color: '#64748b', fontSize: '0.95rem', margin: '0'}}>2-Acre Modern Manufacturing Facility & CNC Machine Shop in Coimbatore</p>
                    </div>
                    
                    <div style={{borderRadius: '16px', overflow: 'hidden', background: '#f8f9fa', border: '1px solid #e2e8f0', marginBottom: '1.5rem'}}>
                        <img src="/images/company-view.webp" width={800} height={600} alt="Covai Machine Tech 2-Acre Modern Manufacturing Facility and Workspace in Coimbatore" style={{width: '100%', height: 'auto', objectFit: 'contain', display: 'block'}} />
                    </div>

                    <div style={{display: 'flex', flexWrap: 'wrap', gap: '1.2rem', justifyContent: 'center', padding: '1rem 0 0.5rem', borderTop: '1px solid #f1f5f9'}}>
                        <div style={{background: '#f8f9fa', padding: '10px 18px', borderRadius: '12px', fontSize: '0.9rem', color: '#1e293b', border: '1px solid #e2e8f0'}}><strong style={{color: '#ff5722'}}>Facility Area:</strong> 2 Acres</div>
                        <div style={{background: '#f8f9fa', padding: '10px 18px', borderRadius: '12px', fontSize: '0.9rem', color: '#1e293b', border: '1px solid #e2e8f0'}}><strong style={{color: '#ff5722'}}>Workers:</strong> 17 Persons</div>
                        <div style={{background: '#f8f9fa', padding: '10px 18px', borderRadius: '12px', fontSize: '0.9rem', color: '#1e293b', border: '1px solid #e2e8f0'}}><strong style={{color: '#ff5722'}}>Staffs:</strong> 5 Staffs</div>
                        <div style={{background: '#f8f9fa', padding: '10px 18px', borderRadius: '12px', fontSize: '0.9rem', color: '#1e293b', border: '1px solid #e2e8f0'}}><strong style={{color: '#ff5722'}}>Quality Staff:</strong> 2 Persons</div>
                        <div style={{background: '#f8f9fa', padding: '10px 18px', borderRadius: '12px', fontSize: '0.9rem', color: '#1e293b', border: '1px solid #e2e8f0'}}><strong style={{color: '#ff5722'}}>Designer:</strong> 1 Person</div>
                        <div style={{background: '#f8f9fa', padding: '10px 18px', borderRadius: '12px', fontSize: '0.9rem', color: '#1e293b', border: '1px solid #e2e8f0'}}><strong style={{color: '#ff5722'}}>Fabrication & Welding:</strong> 2 Persons</div>
                    </div>
                </div>
            </div>
            <div className="about-stats" >
                <div className="stat-item" style={{background: 'var(--bg-white)', padding: '2.5rem 1.5rem', borderRadius: '16px', boxShadow: '0 8px 25px rgba(0,0,0,0.06)', borderBottom: '4px solid #ff5722', transition: 'var(--transition)'}}>
                    <h3 className="stat-number" data-target="7000" style={{fontSize: '3rem', fontWeight: '800', color: 'var(--primary-color)', marginBottom: '0.5rem'}}>0</h3>
                    <p className="stat-label" style={{fontWeight: '600', color: 'var(--text-dark)'}}>Sq.Ft Facility Area (2 Acres)</p>
                </div>
                <div className="stat-item" style={{background: 'var(--bg-white)', padding: '2.5rem 1.5rem', borderRadius: '16px', boxShadow: '0 8px 25px rgba(0,0,0,0.06)', borderBottom: '4px solid #ff5722', transition: 'var(--transition)'}}>
                    <h3 className="stat-number" data-target="25" style={{fontSize: '3rem', fontWeight: '800', color: 'var(--primary-color)', marginBottom: '0.5rem'}}>0</h3>
                    <p className="stat-label" style={{fontWeight: '600', color: 'var(--text-dark)'}}>Skilled Staff & Technicians</p>
                </div>
                <div className="stat-item" style={{background: 'var(--bg-white)', padding: '2.5rem 1.5rem', borderRadius: '16px', boxShadow: '0 8px 25px rgba(0,0,0,0.06)', borderBottom: '4px solid #ff5722', transition: 'var(--transition)'}}>
                    <h3 className="stat-number" data-target="23" style={{fontSize: '3rem', fontWeight: '800', color: 'var(--primary-color)', marginBottom: '0.5rem'}}>0</h3>
                    <p className="stat-label" style={{fontWeight: '600', color: 'var(--text-dark)'}}>Precision Instruments & CMM</p>
                </div>
                <div className="stat-item" style={{background: 'var(--bg-white)', padding: '2.5rem 1.5rem', borderRadius: '16px', boxShadow: '0 8px 25px rgba(0,0,0,0.06)', borderBottom: '4px solid #ff5722', transition: 'var(--transition)'}}>
                    <h3 className="stat-number" data-target="100" style={{fontSize: '3rem', fontWeight: '800', color: 'var(--primary-color)', marginBottom: '0.5rem'}}>0</h3>
                    <p className="stat-label" style={{fontWeight: '600', color: 'var(--text-dark)'}}>% ISO 9001:2015 Certified</p>
                </div>
            </div>
        </div>
    </section>

    {/*  Services Section  */}
    <section id="services" className="services" style={{background: '#f8f9fa', padding: '6rem 0'}}>
        <div className="container">
            <div className="section-header">
                <div style={{display: 'inline-block', background: 'rgba(255, 87, 34, 0.15)', color: '#ff5722', padding: '6px 16px', borderRadius: '30px', fontSize: '0.85rem', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '1rem', border: '1px solid rgba(255, 87, 34, 0.3)'}}>WHAT WE DO</div>
                <h2 style={{color: '#111827', fontSize: '2.8rem', fontWeight: '800'}}>Our Core Capabilities</h2>
                <p style={{color: '#64748b', maxWidth: '700px', margin: '0 auto'}}>Comprehensive CNC machining, multi-axis turning, and precision manufacturing solutions</p>
            </div>
            <div className="services-grid" >
                <div className="service-card" style={{padding: '2.5rem', background: '#ffffff', borderRadius: '16px', border: '1px solid #e2e8f0', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', transition: 'var(--transition)', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start'}}>
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem'}}>
                        <span style={{background: 'rgba(255, 87, 34, 0.12)', color: '#ff5722', fontSize: '0.75rem', fontWeight: '700', padding: '6px 14px', borderRadius: '20px', textTransform: 'uppercase', letterSpacing: '0.5px'}}>LMW Turning</span>
                        <i className="fas fa-cog" style={{fontSize: '1.8rem', color: '#ff5722', background: 'rgba(255, 87, 34, 0.1)', width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '12px'}}></i>
                    </div>
                    <h3 style={{fontSize: '1.4rem', color: '#111827', fontWeight: '700', marginBottom: '1rem'}}>CNC Turning Operations</h3>
                    <p style={{color: '#475569', fontSize: '1rem', lineHeight: '1.7', margin: '0'}}>Advanced high-speed turning using LMW LL20TL5 & LL20TL10 centers (with steady rest) for precision cylindrical components up to 1100mm turning length.</p>
                </div>
                <div className="service-card" style={{padding: '2.5rem', background: '#ffffff', borderRadius: '16px', border: '1px solid #e2e8f0', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', transition: 'var(--transition)', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start'}}>
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem'}}>
                        <span style={{background: 'rgba(255, 87, 34, 0.12)', color: '#ff5722', fontSize: '0.75rem', fontWeight: '700', padding: '6px 14px', borderRadius: '20px', textTransform: 'uppercase', letterSpacing: '0.5px'}}>3 & 4 Axis VMC</span>
                        <i className="fas fa-industry" style={{fontSize: '1.8rem', color: '#ff5722', background: 'rgba(255, 87, 34, 0.1)', width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '12px'}}></i>
                    </div>
                    <h3 style={{fontSize: '1.4rem', color: '#111827', fontWeight: '700', marginBottom: '1rem'}}>Vertical Machining (VMC)</h3>
                    <p style={{color: '#475569', fontSize: '1rem', lineHeight: '1.7', margin: '0'}}>High-precision 3-Axis and 4-Axis (U-CAM) machining using BFW, AMS (1800mm travel), and KTM Double Column Machining Centers with through-coolant & angular head.</p>
                </div>
                <div className="service-card" style={{padding: '2.5rem', background: '#ffffff', borderRadius: '16px', border: '1px solid #e2e8f0', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', transition: 'var(--transition)', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start'}}>
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem'}}>
                        <span style={{background: 'rgba(245, 158, 11, 0.15)', color: '#d97706', fontSize: '0.75rem', fontWeight: '700', padding: '6px 14px', borderRadius: '20px', textTransform: 'uppercase', letterSpacing: '0.5px'}}>Heavy Duty VTL</span>
                        <i className="fas fa-ruler-combined" style={{fontSize: '1.8rem', color: '#d97706', background: 'rgba(245, 158, 11, 0.12)', width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '12px'}}></i>
                    </div>
                    <h3 style={{fontSize: '1.4rem', color: '#111827', fontWeight: '700', marginBottom: '1rem'}}>Vertical Turning Lathe</h3>
                    <p style={{color: '#475569', fontSize: '1rem', lineHeight: '1.7', margin: '0'}}>Heavy-duty precision turning up to 800mm swing diameter and 700mm turning length using BFW BVL 700H for large industrial and valve components.</p>
                </div>
                <div className="service-card" style={{padding: '2.5rem', background: '#ffffff', borderRadius: '16px', border: '1px solid #e2e8f0', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', transition: 'var(--transition)', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start'}}>
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem'}}>
                        <span style={{background: 'rgba(255, 87, 34, 0.12)', color: '#ff5722', fontSize: '0.75rem', fontWeight: '700', padding: '6px 14px', borderRadius: '20px', textTransform: 'uppercase', letterSpacing: '0.5px'}}>Valve Machining</span>
                        <i className="fas fa-faucet" style={{fontSize: '1.8rem', color: '#ff5722', background: 'rgba(255, 87, 34, 0.1)', width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '12px'}}></i>
                    </div>
                    <h3 style={{fontSize: '1.4rem', color: '#111827', fontWeight: '700', marginBottom: '1rem'}}>Valve & Pipeline Parts</h3>
                    <p style={{color: '#475569', fontSize: '1rem', lineHeight: '1.7', margin: '0'}}>Specialist machining of ball valves, gate valves, globe valves, check valves, and pipeline engineering parts in carbon steel, stainless steel, alloy steel, and Inconel.</p>
                </div>
                <div className="service-card" style={{padding: '2.5rem', background: '#ffffff', borderRadius: '16px', border: '1px solid #e2e8f0', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', transition: 'var(--transition)', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start'}}>
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem'}}>
                        <span style={{background: 'rgba(16, 185, 129, 0.15)', color: '#059669', fontSize: '0.75rem', fontWeight: '700', padding: '6px 14px', borderRadius: '20px', textTransform: 'uppercase', letterSpacing: '0.5px'}}>CARL ZEISS CMM</span>
                        <i className="fas fa-microscope" style={{fontSize: '1.8rem', color: '#059669', background: 'rgba(16, 185, 129, 0.12)', width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '12px'}}></i>
                    </div>
                    <h3 style={{fontSize: '1.4rem', color: '#111827', fontWeight: '700', marginBottom: '1rem'}}>CMM Quality Inspection</h3>
                    <p style={{color: '#475569', fontSize: '1rem', lineHeight: '1.7', margin: '0'}}>Rigorous quality control utilizing CARL ZEISS CONTURA 3D CMM, Trimos V7 2D Height Gauge (up to 1023mm), Mahr Surface Roughness tester, and Mitutoyo digital gauges.</p>
                </div>
                <div className="service-card" style={{padding: '2.5rem', background: '#ffffff', borderRadius: '16px', border: '1px solid #e2e8f0', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', transition: 'var(--transition)', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start'}}>
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem'}}>
                        <span style={{background: 'rgba(168, 85, 247, 0.15)', color: '#9333ea', fontSize: '0.75rem', fontWeight: '700', padding: '6px 14px', borderRadius: '20px', textTransform: 'uppercase', letterSpacing: '0.5px'}}>CAD & Logistics</span>
                        <i className="fas fa-truck-moving" style={{fontSize: '1.8rem', color: '#9333ea', background: 'rgba(168, 85, 247, 0.12)', width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '12px'}}></i>
                    </div>
                    <h3 style={{fontSize: '1.4rem', color: '#111827', fontWeight: '700', marginBottom: '1rem'}}>Job Work & Logistics</h3>
                    <p style={{color: '#475569', fontSize: '1rem', lineHeight: '1.7', margin: '0'}}>Undertaking complete and partial job work with customized value-added services, supported by our dedicated transportation facilities for collection and delivery of materials.</p>
                </div>
            </div>
        </div>
    </section>

    {/*  Machines Section  */}
    <section id="machines" className="machines" style={{background: '#ffffff', color: '#111827', padding: '6rem 0'}}>
        <div className="container">
            <div className="section-header">
                <div style={{display: 'inline-block', background: 'rgba(255, 87, 34, 0.15)', color: '#ff5722', padding: '6px 16px', borderRadius: '30px', fontSize: '0.85rem', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '1rem', border: '1px solid rgba(255, 87, 34, 0.3)'}}>THE COVAI TECH SERIES™</div>
                <h2 style={{color: '#111827', fontSize: '2.8rem', fontWeight: '800'}}>Engineered for Industrial Performance</h2>
                <p style={{color: '#64748b', maxWidth: '700px', margin: '0 auto'}}>State-of-the-art CNC machining centers and high-precision inspection technology</p>
            </div>
            <div className="machines-grid" >
                <div className="machine-card" style={{background: '#f8f9fa', borderRadius: '16px', overflow: 'hidden', border: '1px solid #e2e8f0', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', transition: 'var(--transition)'}}>
                    <div className="machine-image" style={{height: '280px', overflow: 'hidden', position: 'relative', background: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '15px'}}>
                        <img src="/images/machine-lmw-ll20tl5.webp" width={800} height={600} alt="CNC Turning Centre I - LMW LL20TL5" style={{width: '100%', height: '100%', objectFit: 'contain', transition: 'transform 0.5s ease'}} />
                        <span style={{position: 'absolute', top: '15px', right: '15px', background: '#ff5722', color: '#fff', fontSize: '0.75rem', fontWeight: '700', padding: '4px 12px', borderRadius: '20px', textTransform: 'uppercase'}}>LMW Turning</span>
                    </div>
                    <div className="machine-info" style={{padding: '1.8rem'}}>
                        <h3 style={{color: '#111827', fontSize: '1.3rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>CNC Turning Centre - I <i className="fas fa-cog" style={{color: '#ff5722', fontSize: '1.1rem'}}></i></h3>
                        <p style={{color: '#475569', fontSize: '0.95rem', marginBottom: '0.5rem'}}><strong style={{color: '#111827'}}>Make:</strong> LMW LL20TL5</p>
                        <p style={{color: '#475569', fontSize: '0.95rem', marginBottom: '0.5rem'}}><strong style={{color: '#111827'}}>Capacity:</strong> Chuck Dia: 250mm | Max Turning Dia: 320mm</p>
                        <p style={{color: '#64748b', fontSize: '0.88rem', margin: '0', borderTop: '1px solid #e2e8f0', paddingTop: '0.8rem', marginTop: '0.8rem'}}><strong style={{color: '#ff5722'}}>Specs:</strong> Max Turning Length: 500mm | No of Station: 8</p>
                    </div>
                </div>
                <div className="machine-card" style={{background: '#f8f9fa', borderRadius: '16px', overflow: 'hidden', border: '1px solid #e2e8f0', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', transition: 'var(--transition)'}}>
                    <div className="machine-image" style={{height: '280px', overflow: 'hidden', position: 'relative', background: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '15px'}}>
                        <img src="/images/machine-lmw-ll20tl10.webp" width={800} height={600} alt="CNC Turning Centre II - LMW LL20TL10 with Steady Rest" style={{width: '100%', height: '100%', objectFit: 'contain', transition: 'transform 0.5s ease'}} />
                        <span style={{position: 'absolute', top: '15px', right: '15px', background: '#ff5722', color: '#fff', fontSize: '0.75rem', fontWeight: '700', padding: '4px 12px', borderRadius: '20px', textTransform: 'uppercase'}}>Steady Rest</span>
                    </div>
                    <div className="machine-info" style={{padding: '1.8rem'}}>
                        <h3 style={{color: '#111827', fontSize: '1.3rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>CNC Turning Centre - II <i className="fas fa-cogs" style={{color: '#ff5722', fontSize: '1.1rem'}}></i></h3>
                        <p style={{color: '#475569', fontSize: '0.95rem', marginBottom: '0.5rem'}}><strong style={{color: '#111827'}}>Make:</strong> LMW LL20TL10 WITH STEADY REST</p>
                        <p style={{color: '#475569', fontSize: '0.95rem', marginBottom: '0.5rem'}}><strong style={{color: '#111827'}}>Capacity:</strong> Chuck Dia: 250mm | Max Turning Dia: 320mm</p>
                        <p style={{color: '#64748b', fontSize: '0.88rem', margin: '0', borderTop: '1px solid #e2e8f0', paddingTop: '0.8rem', marginTop: '0.8rem'}}><strong style={{color: '#ff5722'}}>Specs:</strong> Max Turning Length: 1100mm | No of Station: 8</p>
                    </div>
                </div>
                <div className="machine-card" style={{background: '#f8f9fa', borderRadius: '16px', overflow: 'hidden', border: '1px solid #e2e8f0', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', transition: 'var(--transition)'}}>
                    <div className="machine-image" style={{height: '280px', overflow: 'hidden', position: 'relative', background: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '15px'}}>
                        <img src="/images/machine-bfw-bvl700h.webp" width={800} height={600} alt="Vertical Turning Lathe - BFW BVL 700H" style={{width: '100%', height: '100%', objectFit: 'contain', transition: 'transform 0.5s ease'}} />
                        <span style={{position: 'absolute', top: '15px', right: '15px', background: '#f59e0b', color: '#111111', fontSize: '0.75rem', fontWeight: '700', padding: '4px 12px', borderRadius: '20px', textTransform: 'uppercase'}}>Heavy Duty VTL</span>
                    </div>
                    <div className="machine-info" style={{padding: '1.8rem'}}>
                        <h3 style={{color: '#111827', fontSize: '1.3rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>Vertical Turning Lathe - I <i className="fas fa-ruler-combined" style={{color: '#f59e0b', fontSize: '1.1rem'}}></i></h3>
                        <p style={{color: '#475569', fontSize: '0.95rem', marginBottom: '0.5rem'}}><strong style={{color: '#111827'}}>Make:</strong> BFW BVL 700H</p>
                        <p style={{color: '#475569', fontSize: '0.95rem', marginBottom: '0.5rem'}}><strong style={{color: '#111827'}}>Capacity:</strong> Maximum Swing Dia: 800mm</p>
                        <p style={{color: '#64748b', fontSize: '0.88rem', margin: '0', borderTop: '1px solid #e2e8f0', paddingTop: '0.8rem', marginTop: '0.8rem'}}><strong style={{color: '#f59e0b'}}>Specs:</strong> X Axis Travel: 330mm | Z Axis Travel: 725mm | 12 Pockets</p>
                    </div>
                </div>
                <div className="machine-card" style={{background: '#f8f9fa', borderRadius: '16px', overflow: 'hidden', border: '1px solid #e2e8f0', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', transition: 'var(--transition)'}}>
                    <div className="machine-image" style={{height: '280px', overflow: 'hidden', position: 'relative', background: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '15px'}}>
                        <img src="/images/machine-bfw-bmc45tc24.webp" width={800} height={600} alt="Vertical Machining Centre I - BFW BMC45TC24++" style={{width: '100%', height: '100%', objectFit: 'contain', transition: 'transform 0.5s ease'}} />
                        <span style={{position: 'absolute', top: '15px', right: '15px', background: '#ff5722', color: '#fff', fontSize: '0.75rem', fontWeight: '700', padding: '4px 12px', borderRadius: '20px', textTransform: 'uppercase'}}>4th Axis U CAM</span>
                    </div>
                    <div className="machine-info" style={{padding: '1.8rem'}}>
                        <h3 style={{color: '#111827', fontSize: '1.3rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>Vertical Machining Centre - I <i className="fas fa-microchip" style={{color: '#ff5722', fontSize: '1.1rem'}}></i></h3>
                        <p style={{color: '#475569', fontSize: '0.95rem', marginBottom: '0.5rem'}}><strong style={{color: '#111827'}}>Make:</strong> BFW BMC45TC24++</p>
                        <p style={{color: '#475569', fontSize: '0.95rem', marginBottom: '0.5rem'}}><strong style={{color: '#111827'}}>Travel:</strong> X: 1000mm | Y: 550mm | Z: 710mm [WITH COLUMN RAISER]</p>
                        <p style={{color: '#64748b', fontSize: '0.88rem', margin: '0', borderTop: '1px solid #e2e8f0', paddingTop: '0.8rem', marginTop: '0.8rem'}}><strong style={{color: '#ff5722'}}>Tech:</strong> 4th Axis : U CAM | No of Tools: 24 Pockets</p>
                    </div>
                </div>
                <div className="machine-card" style={{background: '#f8f9fa', borderRadius: '16px', overflow: 'hidden', border: '1px solid #e2e8f0', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', transition: 'var(--transition)'}}>
                    <div className="machine-image" style={{height: '280px', overflow: 'hidden', position: 'relative', background: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '15px'}}>
                        <img src="/images/machine-ams-1690v50.webp" width={800} height={600} alt="Vertical Machining Centre II - AMS 1690V-50" style={{width: '100%', height: '100%', objectFit: 'contain', transition: 'transform 0.5s ease'}} />
                        <span style={{position: 'absolute', top: '15px', right: '15px', background: '#ff5722', color: '#fff', fontSize: '0.75rem', fontWeight: '700', padding: '4px 12px', borderRadius: '20px', textTransform: 'uppercase'}}>1800mm Travel</span>
                    </div>
                    <div className="machine-info" style={{padding: '1.8rem'}}>
                        <h3 style={{color: '#111827', fontSize: '1.3rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>Vertical Machining Centre - II <i className="fas fa-layer-group" style={{color: '#ff5722', fontSize: '1.1rem'}}></i></h3>
                        <p style={{color: '#475569', fontSize: '0.95rem', marginBottom: '0.5rem'}}><strong style={{color: '#111827'}}>Make:</strong> AMS 1690V-50</p>
                        <p style={{color: '#475569', fontSize: '0.95rem', marginBottom: '0.5rem'}}><strong style={{color: '#111827'}}>Travel:</strong> X Axis: 1800mm | Y Axis: 910mm | Z Axis: 810mm</p>
                        <p style={{color: '#64748b', fontSize: '0.88rem', margin: '0', borderTop: '1px solid #e2e8f0', paddingTop: '0.8rem', marginTop: '0.8rem'}}><strong style={{color: '#ff5722'}}>Capacity:</strong> Heavy Duty Milling | No of Tools: 24 Pockets</p>
                    </div>
                </div>
                <div className="machine-card" style={{background: '#f8f9fa', borderRadius: '16px', overflow: 'hidden', border: '1px solid #e2e8f0', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', transition: 'var(--transition)'}}>
                    <div className="machine-image" style={{height: '280px', overflow: 'hidden', position: 'relative', background: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '15px'}}>
                        <img src="/images/machine-ktm-dcmc2618.webp" width={800} height={600} alt="Double Column Machining Center - KTM DCMC2618" style={{width: '100%', height: '100%', objectFit: 'contain', transition: 'transform 0.5s ease'}} />
                        <span style={{position: 'absolute', top: '15px', right: '15px', background: '#a855f7', color: '#fff', fontSize: '0.75rem', fontWeight: '700', padding: '4px 12px', borderRadius: '20px', textTransform: 'uppercase'}}>Double Column</span>
                    </div>
                    <div className="machine-info" style={{padding: '1.8rem'}}>
                        <h3 style={{color: '#111827', fontSize: '1.3rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>Double Column Machining Center <i className="fas fa-cubes" style={{color: '#a855f7', fontSize: '1.1rem'}}></i></h3>
                        <p style={{color: '#475569', fontSize: '0.95rem', marginBottom: '0.5rem'}}><strong style={{color: '#111827'}}>Make:</strong> KTM / DCMC2618</p>
                        <p style={{color: '#475569', fontSize: '0.95rem', marginBottom: '0.5rem'}}><strong style={{color: '#111827'}}>Travel:</strong> X Axis: 2600mm | Y Axis: 1800mm | Z Axis: 1000mm</p>
                        <p style={{color: '#64748b', fontSize: '0.88rem', margin: '0', borderTop: '1px solid #e2e8f0', paddingTop: '0.8rem', marginTop: '0.8rem'}}><strong style={{color: '#a855f7'}}>Includes:</strong> Through Coolant, Angular Head | No of Tools: 20 Pockets</p>
                    </div>
                </div>
                <div className="machine-card" style={{background: '#f8f9fa', borderRadius: '16px', overflow: 'hidden', border: '1px solid #e2e8f0', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', transition: 'var(--transition)'}}>
                    <div className="machine-image" style={{height: '280px', overflow: 'hidden', position: 'relative', background: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '15px'}}>
                        <img src="/images/machine-zeiss-contura.webp" width={800} height={600} alt="Co-ordinate Measuring Machine - CARL ZEISS CONTURA" style={{width: '100%', height: '100%', objectFit: 'contain', transition: 'transform 0.5s ease'}} />
                        <span style={{position: 'absolute', top: '15px', right: '15px', background: '#10b981', color: '#fff', fontSize: '0.75rem', fontWeight: '700', padding: '4px 12px', borderRadius: '20px', textTransform: 'uppercase'}}>ZEISS CMM</span>
                    </div>
                    <div className="machine-info" style={{padding: '1.8rem'}}>
                        <h3 style={{color: '#111827', fontSize: '1.3rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>Co-ordinate Measuring Machine <i className="fas fa-microscope" style={{color: '#10b981', fontSize: '1.1rem'}}></i></h3>
                        <p style={{color: '#475569', fontSize: '0.95rem', marginBottom: '0.5rem'}}><strong style={{color: '#111827'}}>Make:</strong> CARL ZEISS</p>
                        <p style={{color: '#475569', fontSize: '0.95rem', marginBottom: '0.5rem'}}><strong style={{color: '#111827'}}>Model:</strong> CONTURA</p>
                        <p style={{color: '#64748b', fontSize: '0.88rem', margin: '0', borderTop: '1px solid #e2e8f0', paddingTop: '0.8rem', marginTop: '0.8rem'}}><strong style={{color: '#10b981'}}>Measuring Range:</strong> X = 700mm | Y = 100mm | Z = 600mm</p>
                    </div>
                </div>
                <div className="machine-card" style={{background: '#f8f9fa', borderRadius: '16px', overflow: 'hidden', border: '1px solid #e2e8f0', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', transition: 'var(--transition)'}}>
                    <div className="machine-image" style={{height: '280px', overflow: 'hidden', position: 'relative', background: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '15px'}}>
                        <img src="/images/machine-trimos-v7.webp" width={800} height={600} alt="2D Height Gauge - TRIMOS V7" style={{width: '100%', height: '100%', objectFit: 'contain', transition: 'transform 0.5s ease'}} />
                        <span style={{position: 'absolute', top: '15px', right: '15px', background: '#10b981', color: '#fff', fontSize: '0.75rem', fontWeight: '700', padding: '4px 12px', borderRadius: '20px', textTransform: 'uppercase'}}>TRIMOS 2D</span>
                    </div>
                    <div className="machine-info" style={{padding: '1.8rem'}}>
                        <h3 style={{color: '#111827', fontSize: '1.3rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>2D – Height Gauge (Trimos) <i className="fas fa-ruler-vertical" style={{color: '#10b981', fontSize: '1.1rem'}}></i></h3>
                        <p style={{color: '#475569', fontSize: '0.95rem', marginBottom: '0.5rem'}}><strong style={{color: '#111827'}}>Make:</strong> TRIMOS V7</p>
                        <p style={{color: '#475569', fontSize: '0.95rem', marginBottom: '0.5rem'}}><strong style={{color: '#111827'}}>Range:</strong> Measuring Range : 711mm</p>
                        <p style={{color: '#64748b', fontSize: '0.88rem', margin: '0', borderTop: '1px solid #e2e8f0', paddingTop: '0.8rem', marginTop: '0.8rem'}}><strong style={{color: '#10b981'}}>Extended:</strong> Measuring Range with Extension : 1023mm</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/*  Industries Section  */}
    <section id="industries" className="industries">
        <div className="container">
            <div className="section-header">
                <h2>Industries We Serve</h2>
                <p>Trusted by diverse sectors for precision manufacturing</p>
            </div>
            <div className="industries-grid">
                <div className="industry-card">
                    <div className="industry-icon">
                        <i className="fas fa-car"></i>
                    </div>
                    <h3>Automotive</h3>
                    <p>Precision components for vehicles and automotive systems</p>
                </div>
                <div className="industry-card">
                    <div className="industry-icon">
                        <i className="fas fa-plane"></i>
                    </div>
                    <h3>Aerospace</h3>
                    <p>High-precision parts for aerospace applications</p>
                </div>
                <div className="industry-card">
                    <div className="industry-icon">
                        <i className="fas fa-oil-can"></i>
                    </div>
                    <h3>Valves & Pipeline</h3>
                    <p>Ball, gate, globe valves & critical pipeline fluid connectors</p>
                </div>
                <div className="industry-card">
                    <div className="industry-icon">
                        <i className="fas fa-factory"></i>
                    </div>
                    <h3>Manufacturing</h3>
                    <p>Industrial components and machinery parts</p>
                </div>
                <div className="industry-card">
                    <div className="industry-icon">
                        <i className="fas fa-hard-hat"></i>
                    </div>
                    <h3>Engineering</h3>
                    <p>Custom engineering solutions and components</p>
                </div>
                <div className="industry-card">
                    <div className="industry-icon">
                        <i className="fas fa-tshirt"></i>
                    </div>
                    <h3>Textiles</h3>
                    <p>Precision parts for textile machinery</p>
                </div>
            </div>
        </div>
    </section>

    {/*  Portfolio Section  */}
    <section id="portfolio" className="portfolio" style={{background: 'var(--bg-light)', padding: '6rem 0'}}>
        <div className="container">
            <div className="section-header">
                <h2>Our Precision Portfolio</h2>
                <p>Specialized machining of complex valve, pipeline, and automotive components</p>
            </div>
            <div className="portfolio-grid" >
                <div className="portfolio-item" style={{borderRadius: '16px', overflow: 'hidden', boxShadow: '0 10px 25px rgba(0,0,0,0.06)', border: '1px solid #e2e8f0'}}>
                    <div className="portfolio-image" style={{height: '300px', position: 'relative', background: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <img src="/images/portfolio-valve-pipeline.webp" width={800} height={600} alt="Valve & Pipeline Engineering Components" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
                        <div className="portfolio-overlay" style={{background: 'linear-gradient(to top, rgba(255, 255, 255, 0.96), rgba(255, 255, 255, 0.75))', padding: '2rem', borderTop: '1px solid rgba(255,255,255,0.8)', backdropFilter: 'blur(5px)'}}>
                            <h4 style={{color: '#111827', fontSize: '1.3rem', marginBottom: '0.4rem'}}>Valve & Pipeline Components</h4>
                            <p style={{color: '#475569', fontSize: '0.95rem'}}>High-precision valve bodies and pipeline connectors in carbon & alloy steel</p>
                        </div>
                    </div>
                </div>
                <div className="portfolio-item" style={{borderRadius: '16px', overflow: 'hidden', boxShadow: '0 10px 25px rgba(0,0,0,0.06)', border: '1px solid #e2e8f0'}}>
                    <div className="portfolio-image" style={{height: '300px', position: 'relative', background: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <img src="/images/portfolio-ball-valve.webp" width={800} height={600} alt="Ball, Gate & Globe Valves" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
                        <div className="portfolio-overlay" style={{background: 'linear-gradient(to top, rgba(255, 255, 255, 0.96), rgba(255, 255, 255, 0.75))', padding: '2rem', borderTop: '1px solid rgba(255,255,255,0.8)', backdropFilter: 'blur(5px)'}}>
                            <h4 style={{color: '#111827', fontSize: '1.3rem', marginBottom: '0.4rem'}}>Ball, Gate & Globe Valves</h4>
                            <p style={{color: '#475569', fontSize: '0.95rem'}}>Specialist machining for critical fluid control applications</p>
                        </div>
                    </div>
                </div>
                <div className="portfolio-item" style={{borderRadius: '16px', overflow: 'hidden', boxShadow: '0 10px 25px rgba(0,0,0,0.06)', border: '1px solid #e2e8f0'}}>
                    <div className="portfolio-image" style={{height: '300px', position: 'relative', background: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <img src="/images/portfolio-turned-parts.webp" width={800} height={600} alt="High-Precision Turned Parts" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
                        <div className="portfolio-overlay" style={{background: 'linear-gradient(to top, rgba(255, 255, 255, 0.96), rgba(255, 255, 255, 0.75))', padding: '2rem', borderTop: '1px solid rgba(255,255,255,0.8)', backdropFilter: 'blur(5px)'}}>
                            <h4 style={{color: '#111827', fontSize: '1.3rem', marginBottom: '0.4rem'}}>High-Precision Turned Parts</h4>
                            <p style={{color: '#475569', fontSize: '0.95rem'}}>Cylindrical components up to 1100mm turning length with steady rest</p>
                        </div>
                    </div>
                </div>
                <div className="portfolio-item" style={{borderRadius: '16px', overflow: 'hidden', boxShadow: '0 10px 25px rgba(0,0,0,0.06)', border: '1px solid #e2e8f0'}}>
                    <div className="portfolio-image" style={{height: '300px', position: 'relative', background: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <img src="/images/portfolio-heavy-vtl.webp" width={800} height={600} alt="Heavy VTL Machined Components" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
                        <div className="portfolio-overlay" style={{background: 'linear-gradient(to top, rgba(255, 255, 255, 0.96), rgba(255, 255, 255, 0.75))', padding: '2rem', borderTop: '1px solid rgba(255,255,255,0.8)', backdropFilter: 'blur(5px)'}}>
                            <h4 style={{color: '#111827', fontSize: '1.3rem', marginBottom: '0.4rem'}}>Heavy VTL Machined Parts</h4>
                            <p style={{color: '#475569', fontSize: '0.95rem'}}>Large swing diameter components for heavy engineering sectors</p>
                        </div>
                    </div>
                </div>
                <div className="portfolio-item" style={{borderRadius: '16px', overflow: 'hidden', boxShadow: '0 10px 25px rgba(0,0,0,0.06)', border: '1px solid #e2e8f0'}}>
                    <div className="portfolio-image" style={{height: '300px', position: 'relative', background: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <img src="/images/portfolio-inconel-steel.webp" width={800} height={600} alt="Inconel & Stainless Steel Machining" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
                        <div className="portfolio-overlay" style={{background: 'linear-gradient(to top, rgba(255, 255, 255, 0.96), rgba(255, 255, 255, 0.75))', padding: '2rem', borderTop: '1px solid rgba(255,255,255,0.8)', backdropFilter: 'blur(5px)'}}>
                            <h4 style={{color: '#111827', fontSize: '1.3rem', marginBottom: '0.4rem'}}>Inconel & Stainless Steel</h4>
                            <p style={{color: '#475569', fontSize: '0.95rem'}}>Exotic alloy machining adhering to strict international standards</p>
                        </div>
                    </div>
                </div>
                <div className="portfolio-item" style={{borderRadius: '16px', overflow: 'hidden', boxShadow: '0 10px 25px rgba(0,0,0,0.06)', border: '1px solid #e2e8f0'}}>
                    <div className="portfolio-image" style={{height: '300px', position: 'relative', background: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <img src="/images/portfolio-custom-assembly.webp" width={800} height={600} alt="Custom Job Work & Assemblies" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
                        <div className="portfolio-overlay" style={{background: 'linear-gradient(to top, rgba(255, 255, 255, 0.96), rgba(255, 255, 255, 0.75))', padding: '2rem', borderTop: '1px solid rgba(255,255,255,0.8)', backdropFilter: 'blur(5px)'}}>
                            <h4 style={{color: '#111827', fontSize: '1.3rem', marginBottom: '0.4rem'}}>Custom Job Work & Assemblies</h4>
                            <p style={{color: '#475569', fontSize: '0.95rem'}}>Complete & partial job work executed from customer drawings</p>
                        </div>
                    </div>
                </div>
                <div className="portfolio-item" style={{borderRadius: '16px', overflow: 'hidden', boxShadow: '0 10px 25px rgba(0,0,0,0.06)', border: '1px solid #e2e8f0'}}>
                    <div className="portfolio-image" style={{height: '300px', position: 'relative', background: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <img src="/images/portfolio-4axis-ucam.webp" width={800} height={600} alt="4-Axis U-CAM Precision Machining" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
                        <div className="portfolio-overlay" style={{background: 'linear-gradient(to top, rgba(255, 255, 255, 0.96), rgba(255, 255, 255, 0.75))', padding: '2rem', borderTop: '1px solid rgba(255,255,255,0.8)', backdropFilter: 'blur(5px)'}}>
                            <h4 style={{color: '#111827', fontSize: '1.3rem', marginBottom: '0.4rem'}}>4-Axis U-CAM Machining</h4>
                            <p style={{color: '#475569', fontSize: '0.95rem'}}>Complex multi-sided milling with precision angular head attachments</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/*  Customers Section  */}
    <section id="customers" className="customers" style={{background: 'var(--bg-white)', padding: '5rem 0'}}>
        <div className="container">
            <div className="section-header">
                <h2>Our Valued Customers</h2>
                <p>We are proud to be the trusted precision manufacturing partner for leading corporate groups and industry giants</p>
            </div>
            <div className="customers-grid" >
                <div className="customer-card" style={{background: 'var(--bg-light)', padding: '2rem', borderRadius: '12px', borderLeft: '4px solid var(--accent-color)', display: 'flex', alignItems: 'center', gap: '1.2rem', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', transition: 'var(--transition)'}}>
                    <i className="fas fa-building" style={{fontSize: '2.2rem', color: 'var(--primary-color)'}}></i>
                    <div>
                        <h4 style={{color: 'var(--primary-color)', fontSize: '1.05rem', marginBottom: '0.2rem'}}>LAKSHMI RING TRAVELLERS</h4>
                        <p style={{fontSize: '0.85rem', color: 'var(--text-light)', margin: '0'}}>Private Limited</p>
                    </div>
                </div>
                <div className="customer-card" style={{background: 'var(--bg-light)', padding: '2rem', borderRadius: '12px', borderLeft: '4px solid var(--accent-color)', display: 'flex', alignItems: 'center', gap: '1.2rem', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', transition: 'var(--transition)'}}>
                    <i className="fas fa-cogs" style={{fontSize: '2.2rem', color: 'var(--primary-color)'}}></i>
                    <div>
                        <h4 style={{color: 'var(--primary-color)', fontSize: '1.05rem', marginBottom: '0.2rem'}}>SHANTHI GEAR LIMITED</h4>
                        <p style={{fontSize: '0.85rem', color: 'var(--text-light)', margin: '0'}}>Murugappa Groups</p>
                    </div>
                </div>
                <div className="customer-card" style={{background: 'var(--bg-light)', padding: '2rem', borderRadius: '12px', borderLeft: '4px solid var(--accent-color)', display: 'flex', alignItems: 'center', gap: '1.2rem', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', transition: 'var(--transition)'}}>
                    <i className="fas fa-gear" style={{fontSize: '2.2rem', color: 'var(--primary-color)'}}></i>
                    <div>
                        <h4 style={{color: 'var(--primary-color)', fontSize: '1.05rem', marginBottom: '0.2rem'}}>SAKTHI GEAR PRODUCTS</h4>
                        <p style={{fontSize: '0.85rem', color: 'var(--text-light)', margin: '0'}}>Private Limited</p>
                    </div>
                </div>
                <div className="customer-card" style={{background: 'var(--bg-light)', padding: '2rem', borderRadius: '12px', borderLeft: '4px solid var(--accent-color)', display: 'flex', alignItems: 'center', gap: '1.2rem', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', transition: 'var(--transition)'}}>
                    <i className="fas fa-water" style={{fontSize: '2.2rem', color: 'var(--primary-color)'}}></i>
                    <div>
                        <h4 style={{color: 'var(--primary-color)', fontSize: '1.05rem', marginBottom: '0.2rem'}}>FLOW LINK SYSTEMS</h4>
                        <p style={{fontSize: '0.85rem', color: 'var(--text-light)', margin: '0'}}>Pvt. Ltd.</p>
                    </div>
                </div>
                <div className="customer-card" style={{background: 'var(--bg-light)', padding: '2rem', borderRadius: '12px', borderLeft: '4px solid var(--accent-color)', display: 'flex', alignItems: 'center', gap: '1.2rem', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', transition: 'var(--transition)'}}>
                    <i className="fas fa-faucet" style={{fontSize: '2.2rem', color: 'var(--primary-color)'}}></i>
                    <div>
                        <h4 style={{color: 'var(--primary-color)', fontSize: '1.05rem', marginBottom: '0.2rem'}}>GALLI & CASSINA INDIA</h4>
                        <p style={{fontSize: '0.85rem', color: 'var(--text-light)', margin: '0'}}>G&C Valves Pvt. Ltd.</p>
                    </div>
                </div>
                <div className="customer-card" style={{background: 'var(--bg-light)', padding: '2rem', borderRadius: '12px', borderLeft: '4px solid var(--accent-color)', display: 'flex', alignItems: 'center', gap: '1.2rem', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', transition: 'var(--transition)'}}>
                    <i className="fas fa-industry" style={{fontSize: '2.2rem', color: 'var(--primary-color)'}}></i>
                    <div>
                        <h4 style={{color: 'var(--primary-color)', fontSize: '1.05rem', marginBottom: '0.2rem'}}>ARIHANT TECHNOCAST INDIA</h4>
                        <p style={{fontSize: '0.85rem', color: 'var(--text-light)', margin: '0'}}>Pvt. Ltd.</p>
                    </div>
                </div>
                <div className="customer-card" style={{background: 'var(--bg-light)', padding: '2rem', borderRadius: '12px', borderLeft: '4px solid var(--accent-color)', display: 'flex', alignItems: 'center', gap: '1.2rem', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', transition: 'var(--transition)'}}>
                    <i className="fas fa-wrench" style={{fontSize: '2.2rem', color: 'var(--primary-color)'}}></i>
                    <div>
                        <h4 style={{color: 'var(--primary-color)', fontSize: '1.05rem', marginBottom: '0.2rem'}}>BHARANI HYDRAULICS INDIA</h4>
                        <p style={{fontSize: '0.85rem', color: 'var(--text-light)', margin: '0'}}>Private Limited</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/*  Why Choose Us Section  */}
    <section className="why-choose">
        <div className="container">
            <div className="section-header">
                <h2>Why Choose Covai Machine Tech</h2>
                <p>Your partner in precision manufacturing and valve engineering</p>
            </div>
            <div className="features-grid">
                <div className="feature-item">
                    <div className="feature-icon">
                        <i className="fas fa-award"></i>
                    </div>
                    <h3>ISO 9001:2015 Certified Quality</h3>
                    <p>Strict adherence to ISO 9001:2015 standards with advanced CARL ZEISS CMM and Trimos 2D height gauge inspection.</p>
                </div>
                <div className="feature-item">
                    <div className="feature-icon">
                        <i className="fas fa-robot"></i>
                    </div>
                    <h3>Heavy & Multi-Axis Machining</h3>
                    <p>Equipped with LMW CNC Turning, BFW/AMS VMCs up to 1800mm, and KTM Double Column Machining Centers.</p>
                </div>
                <div className="feature-item">
                    <div className="feature-icon">
                        <i className="fas fa-user-check"></i>
                    </div>
                    <h3>Skilled Technical Team</h3>
                    <p>Qualified engineers, quality inspectors, CAD designers, and 17+ experienced machine operators.</p>
                </div>
                <div className="feature-item">
                    <div className="feature-icon">
                        <i className="fas fa-truck"></i>
                    </div>
                    <h3>Dedicated Transportation</h3>
                    <p>In-house transportation facilities for seamless pickup and prompt delivery of raw materials and finished parts.</p>
                </div>
                <div className="feature-item">
                    <div className="feature-icon">
                        <i className="fas fa-tags"></i>
                    </div>
                    <h3>Optimal Cost & Customization</h3>
                    <p>Complete and partial job work with customized value-added services at competitive market pricing.</p>
                </div>
            </div>
        </div>
    </section>


    {/*  Contact Section  */}
    <section id="contact" className="contact">
        <div className="contact-bg-split"></div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
            <div className="section-header">
                <h2>Get In Touch</h2>
                <p>Ready to start your next project with us? Reach out to our team today.</p>
            </div>
            
            <div className="contact-wrapper">
                <div className="contact-info-panel">
                    <div className="contact-info-content">
                        <h3>Contact Information</h3>
                        <p className="contact-subtext">Reach out to us for any inquiries about our precision CNC machining capabilities and value-added services.</p>
                        
                        <div className="info-items">
                            <div className="info-item">
                                <i className="fas fa-phone-alt"></i>
                                <div>
                                    <span>+91 98945 93444</span>
                                </div>
                            </div>
                            <div className="info-item">
                                <i className="fas fa-envelope"></i>
                                <div>
                                    <span>covaimachinetech@gmail.com</span>
                                </div>
                            </div>
                            <div className="info-item">
                                <i className="fas fa-map-marker-alt"></i>
                                <div>
                                    <span>SF. No: 85B/1, Annur Main Road, Near Suzlon, Karumathampatti, Coimbatore</span>
                                </div>
                            </div>
                            <div className="info-item">
                                <i className="fas fa-user-tie"></i>
                                <div>
                                    <span>S. Vasanth Raj, B.E. (GSTIN: 33BBFPV2361C3ZV)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="circle-decoration"></div>
                </div>
                
                <div className="contact-form-panel">
                    <form id="contact-form">
                        <div className="form-row">
                            <div className="input-group">
                                <label>Your Name</label>
                                <input type="text" name="name" required />
                            </div>
                            <div className="input-group">
                                <label>Your Email</label>
                                <input type="email" name="email" required />
                            </div>
                        </div>
                        <div className="input-group">
                            <label>Your Subject</label>
                            <input type="text" name="subject" required />
                        </div>
                        <div className="input-group">
                            <label>Message</label>
                            <textarea name="message" required></textarea>
                            <i className="fas fa-hand-pointer textarea-icon"></i>
                        </div>
                        <button type="submit" className="submit-btn">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    </section>

    </>
  );
}
