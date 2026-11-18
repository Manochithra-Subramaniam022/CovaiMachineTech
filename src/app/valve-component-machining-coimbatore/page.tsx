import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Valve Component Machining in Coimbatore | Gate, Ball & Pipeline Valves',
  description: 'Specialist valve body & component machining in Coimbatore. Precision CNC job work for ball, gate, globe, check valves, flanges & pump parts in carbon steel, SS & Inconel.',
  openGraph: {
    title: 'Valve Component Machining in Coimbatore | Gate, Ball & Pipeline Valves',
    description: 'Precision machining for industrial valves, gate valves, pipeline valves, flanges, and pump components in Coimbatore. ISO 9001:2015 certified.',
    url: 'https://covaimachinetech.com/valve-component-machining-coimbatore',
    siteName: 'Covai Machine Tech',
    images: [
      {
        url: 'https://covaimachinetech.com/images/portfolio-ball-valve.webp',
        width: 800,
        height: 600,
        alt: 'Industrial Ball Valve and Gate Valve Component Machining in Coimbatore',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  alternates: {
    canonical: 'https://covaimachinetech.com/valve-component-machining-coimbatore',
  },
};

export default function ValveComponentMachiningCoimbatore() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://covaimachinetech.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Valve Component Machining in Coimbatore",
            "item": "https://covaimachinetech.com/valve-component-machining-coimbatore"
          }
        ]
      },
      {
        "@type": "Service",
        "serviceType": "Industrial Valve, Gate Valve and Pipeline Valve Machining",
        "provider": {
          "@type": "LocalBusiness",
          "name": "Covai Machine Tech",
          "telephone": "+919894593444",
          "email": "covaimachinetech@gmail.com",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Annur Main Road, Near Suzlon, Kittampalayam, Karumathampatti",
            "addressLocality": "Coimbatore",
            "addressRegion": "Tamil Nadu",
            "postalCode": "641659",
            "addressCountry": "IN"
          }
        },
        "areaServed": [
          { "@type": "City", "name": "Coimbatore" },
          { "@type": "AdministrativeArea", "name": "Tamil Nadu" },
          { "@type": "Country", "name": "India" }
        ],
        "description": "Comprehensive valve body machining, gate valve machining, pipeline valve parts, flanges, and pump components in Coimbatore using heavy duty VTL and multi-axis VMC machining centers."
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What types of industrial valves do you machine in Coimbatore?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We machine Ball Valves (trunnion & floating), Gate Valves (flexible wedge & parallel slide), Globe Valves, Check Valves (dual plate & swing), Butterfly Valve bodies, and high-pressure subsea pipeline fluid connectors."
            }
          },
          {
            "@type": "Question",
            "name": "What valve sizes and pressure ratings can you accommodate?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We handle valve bodies and components from 1 inch (DN25) up to 28 inches (DN700) across ASME pressure classes 150, 300, 600, 900, 1500, and 2500 using our BFW VTL (700mm swing) and KTM Double Column Machining Center (2600mm bed)."
            }
          },
          {
            "@type": "Question",
            "name": "Can you machine serrated gasket finishes on valve flanges?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we produce standard concentric and spiral/phonographic serrated gasket finishes adhering to ASME B16.5 standards (Ra 3.2 to 6.3 µm or 125 to 250 µin) on our CNC turning and VTL equipment."
            }
          },
          {
            "@type": "Question",
            "name": "What materials do you machine for oil and gas valve applications?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We machine carbon steels (WCB, LCB, A105), stainless steels (CF8, CF8M, SS316/316L), duplex and super duplex (F51, F53, 4A, 5A), Inconel 625/718 cladding, and Monel."
            }
          },
          {
            "@type": "Question",
            "name": "Do you also machine pump components?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we machine pump volute casings, single/multi-stage pump impellers, backplates, bearing brackets, and suction covers with tight concentricity between bore and seal faces."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="service-page" style={{ paddingTop: '100px', paddingBottom: '60px' }}>
        <div className="container">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" style={{ marginBottom: '1.5rem', fontSize: '0.9rem' }}>
            <ol style={{ listStyle: 'none', display: 'flex', gap: '0.5rem', padding: 0, margin: 0, color: 'var(--text-light)' }}>
              <li><Link href="/" style={{ color: 'var(--primary-color)', textDecoration: 'none' }}>Home</Link></li>
              <li>/</li>
              <li><Link href="/#services" style={{ color: 'var(--primary-color)', textDecoration: 'none' }}>Services</Link></li>
              <li>/</li>
              <li style={{ color: 'var(--text-dark)', fontWeight: '600' }}>Valve Component Machining</li>
            </ol>
          </nav>

          {/* Section Header */}
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{ display: 'inline-block', background: 'rgba(255, 87, 34, 0.12)', color: '#ff5722', padding: '6px 16px', borderRadius: '30px', fontSize: '0.85rem', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '1rem', border: '1px solid rgba(255, 87, 34, 0.25)' }}>
              OIL, GAS & INDUSTRIAL FLUID CONTROL
            </div>
            <h1 style={{ fontSize: '2.5rem', color: 'var(--primary-color)', marginBottom: '1rem' }}>
              Industrial Valve, Gate Valve & Pipeline Component Machining in Coimbatore
            </h1>
            <p style={{ fontSize: '1.15rem', color: 'var(--text-color)', maxWidth: '850px', margin: '0 auto', lineHeight: '1.7' }}>
              Specialized machining for ball valves, gate valves, globe valves, check valves, flanges, and centrifugal pump casings in Coimbatore. Trusted supplier to premier valve manufacturers including Galli & Cassina, Flow Link Systems, and global OEMs.
            </p>
          </div>

          {/* Hero Technical Overview */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', marginBottom: '4rem', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: '1.8rem', color: 'var(--primary-color)', marginBottom: '1rem' }}>
                Heavy Valve Body & Flange Machining Facility
              </h2>
              <p style={{ color: 'var(--text-dark)', marginBottom: '1.5rem', lineHeight: '1.7' }}>
                Valve components require precise seating angles, bubble-tight seal finishes, and high concentricity under hydrostatic pressures. Our combination of Heavy Vertical Turning Lathes (VTL) and 4-Axis VMCs provides complete machining from rough raw casting to finished, hydro-test ready components.
              </p>
              <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '2rem' }}>
                <tbody>
                  <tr style={{ borderBottom: '1px solid #ddd' }}>
                    <th style={{ padding: '0.9rem', textAlign: 'left', backgroundColor: '#f8f9fa' }}>Valve Classes</th>
                    <td style={{ padding: '0.9rem' }}>ASME Class 150 to Class 2500 (API 6D / API 600)</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #ddd' }}>
                    <th style={{ padding: '0.9rem', textAlign: 'left', backgroundColor: '#f8f9fa' }}>Max Turning Dia</th>
                    <td style={{ padding: '0.9rem' }}>700 mm (BFW BVL 700H VTL)</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #ddd' }}>
                    <th style={{ padding: '0.9rem', textAlign: 'left', backgroundColor: '#f8f9fa' }}>Large Valve Blocks</th>
                    <td style={{ padding: '0.9rem' }}>Up to 2600mm x 2400mm (KTM Double Column)</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #ddd' }}>
                    <th style={{ padding: '0.9rem', textAlign: 'left', backgroundColor: '#f8f9fa' }}>Materials Handled</th>
                    <td style={{ padding: '0.9rem' }}>WCB, LCB, CF8M (SS316), Duplex 2205, Inconel 625, Hastelloy</td>
                  </tr>
                  <tr>
                    <th style={{ padding: '0.9rem', textAlign: 'left', backgroundColor: '#f8f9fa' }}>Sealing Surfaces</th>
                    <td style={{ padding: '0.9rem' }}>Spiral / Concentric Serrated (Ra 3.2 - 6.3 µm) & Ground Seats</td>
                  </tr>
                </tbody>
              </table>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a href="#quote-form" className="btn btn-primary" style={{ padding: '12px 28px', textDecoration: 'none' }}>Request Valve RFQ</a>
                <Link href="/vtl-machining-coimbatore" className="btn btn-secondary" style={{ padding: '12px 28px', textDecoration: 'none' }}>Explore VTL Services</Link>
              </div>
            </div>
            <div>
              <img
                src="/images/portfolio-ball-valve.webp"
                alt="Industrial Valve Body Machining and Pipeline Parts Coimbatore"
                width={800}
                height={600}
                style={{ width: '100%', height: 'auto', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
              />
            </div>
          </div>

          {/* Deep Content: Specialized Valve Parts */}
          <div style={{ background: '#f8f9fa', padding: '3rem', borderRadius: '16px', marginBottom: '4rem', border: '1px solid #e2e8f0' }}>
            <h2 style={{ fontSize: '1.9rem', color: 'var(--primary-color)', marginBottom: '1.2rem', textAlign: 'center' }}>
              Engineered Machining for Critical Fluid Control Components
            </h2>
            <p style={{ color: 'var(--text-dark)', maxWidth: '900px', margin: '0 auto 2.5rem', textAlign: 'center', lineHeight: '1.8' }}>
              From offshore oil and gas pipelines to municipal water pumps and chemical processing lines, we machine valve and pump components engineered to survive extreme pressures, corrosive media, and thermal cycles.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.8rem' }}>
              <div style={{ background: '#ffffff', padding: '1.8rem', borderRadius: '12px', borderLeft: '4px solid #ff5722', boxShadow: '0 4px 15px rgba(0,0,0,0.04)' }}>
                <h3 style={{ fontSize: '1.25rem', color: '#111827', marginBottom: '0.6rem' }}>
                  <i className="fas fa-faucet" style={{ color: '#ff5722', marginRight: '8px' }}></i> Gate & Globe Valve Machining
                </h3>
                <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>
                  Machining of cast steel gate valve bodies, bonnets, wedges, and seat rings. Precise seat angle milling and guide slot broaching ensuring smooth stem operation and tight shut-off.
                </p>
              </div>
              <div style={{ background: '#ffffff', padding: '1.8rem', borderRadius: '12px', borderLeft: '4px solid #0ea5e9', boxShadow: '0 4px 15px rgba(0,0,0,0.04)' }}>
                <h3 style={{ fontSize: '1.25rem', color: '#111827', marginBottom: '0.6rem' }}>
                  <i className="fas fa-dot-circle" style={{ color: '#0ea5e9', marginRight: '8px' }}></i> Ball Valve & Flange Machining
                </h3>
                <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>
                  Full turning, trunnion bore boring, and flange serration for 2-piece and 3-piece ball valve bodies. Precise sphere turning with mirror finishes down to Ra 0.2 µm.
                </p>
              </div>
              <div style={{ background: '#ffffff', padding: '1.8rem', borderRadius: '12px', borderLeft: '4px solid #10b981', boxShadow: '0 4px 15px rgba(0,0,0,0.04)' }}>
                <h3 style={{ fontSize: '1.25rem', color: '#111827', marginBottom: '0.6rem' }}>
                  <i className="fas fa-water" style={{ color: '#10b981', marginRight: '8px' }}></i> Pump Component Machining
                </h3>
                <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>
                  High-efficiency machining for centrifugal pump casings, semi-open/closed impellers, split-case pump covers, and wear rings with balanced dynamic rotation.
                </p>
              </div>
            </div>
          </div>

          {/* Pipeline & Assembly Showcase */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', marginBottom: '4rem', alignItems: 'center' }}>
            <div>
              <img
                src="/images/portfolio-valve-pipeline.webp"
                alt="Pipeline Valve Machining and Flange Components in Coimbatore"
                width={800}
                height={600}
                style={{ width: '100%', height: 'auto', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
              />
            </div>
            <div>
              <h2 style={{ fontSize: '1.8rem', color: 'var(--primary-color)', marginBottom: '1rem' }}>
                Pipeline Fluid Connectors & Flange Machining
              </h2>
              <p style={{ color: 'var(--text-dark)', marginBottom: '1rem', lineHeight: '1.7' }}>
                We machine heavy industrial weld neck flanges, blind flanges, RTJ (Ring Type Joint) grooves, and high-pressure manifold blocks:
              </p>
              <ul style={{ paddingLeft: '1.2rem', color: '#475569', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                <li><strong>RTJ Groove Machining:</strong> Precision octave and oval gasket grooves holding depth, angle, and surface finish within tight API tolerances.</li>
                <li><strong>Multi-Port Valve Bodies:</strong> 4-Axis VMC indexed milling to bore and tap side outlets, drain plugs, and bypass lines without rechucking.</li>
                <li><strong>Inconel & Stellite Overlay:</strong> Experience machining pre-weld and post-weld overlay clad surfaces on seat pockets and seal areas.</li>
                <li><strong>Zeiss CMM Verified:</strong> 100% CMM report on bolt circle pitch diameters (PCD), port concentricity, and wall thickness.</li>
              </ul>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link href="/cmm-inspection-services-coimbatore" className="btn btn-secondary" style={{ textDecoration: 'none' }}>
                  CMM Inspection Reports
                </Link>
                <Link href="/double-column-machining-coimbatore" className="btn btn-secondary" style={{ textDecoration: 'none' }}>
                  Large Valve Machining
                </Link>
              </div>
            </div>
          </div>

          {/* FAQs & Form */}
          <div id="quote-form" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem' }}>
            {/* FAQ Accordion */}
            <div>
              <h2 style={{ fontSize: '1.8rem', color: 'var(--primary-color)', marginBottom: '1.5rem' }}>
                Frequently Asked Questions on Valve Machining
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <details style={{ background: '#f8f9fa', padding: '1.2rem', borderRadius: '8px', border: '1px solid #e2e8f0' }} open>
                  <summary style={{ fontWeight: '600', color: 'var(--primary-color)', cursor: 'pointer' }}>
                    What types of industrial valves do you machine in Coimbatore?
                  </summary>
                  <p style={{ marginTop: '0.8rem', color: 'var(--text-color)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                    We machine Ball Valves (trunnion & floating), Gate Valves (flexible wedge & parallel slide), Globe Valves, Check Valves (dual plate & swing), Butterfly Valve bodies, and high-pressure subsea pipeline fluid connectors.
                  </p>
                </details>
                <details style={{ background: '#f8f9fa', padding: '1.2rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                  <summary style={{ fontWeight: '600', color: 'var(--primary-color)', cursor: 'pointer' }}>
                    What valve sizes and pressure ratings can you accommodate?
                  </summary>
                  <p style={{ marginTop: '0.8rem', color: 'var(--text-color)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                    We handle valve bodies and components from 1 inch (DN25) up to 28 inches (DN700) across ASME pressure classes 150, 300, 600, 900, 1500, and 2500 using our BFW VTL (700mm swing) and KTM Double Column Machining Center (2600mm bed).
                  </p>
                </details>
                <details style={{ background: '#f8f9fa', padding: '1.2rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                  <summary style={{ fontWeight: '600', color: 'var(--primary-color)', cursor: 'pointer' }}>
                    Can you machine serrated gasket finishes on valve flanges?
                  </summary>
                  <p style={{ marginTop: '0.8rem', color: 'var(--text-color)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                    Yes, we produce standard concentric and spiral/phonographic serrated gasket finishes adhering to ASME B16.5 standards (Ra 3.2 to 6.3 µm or 125 to 250 µin) on our CNC turning and VTL equipment.
                  </p>
                </details>
                <details style={{ background: '#f8f9fa', padding: '1.2rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                  <summary style={{ fontWeight: '600', color: 'var(--primary-color)', cursor: 'pointer' }}>
                    What materials do you machine for oil and gas valve applications?
                  </summary>
                  <p style={{ marginTop: '0.8rem', color: 'var(--text-color)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                    We machine carbon steels (WCB, LCB, A105), stainless steels (CF8, CF8M, SS316/316L), duplex and super duplex (F51, F53, 4A, 5A), Inconel 625/718 cladding, and Monel.
                  </p>
                </details>
                <details style={{ background: '#f8f9fa', padding: '1.2rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                  <summary style={{ fontWeight: '600', color: 'var(--primary-color)', cursor: 'pointer' }}>
                    Do you also machine pump components?
                  </summary>
                  <p style={{ marginTop: '0.8rem', color: 'var(--text-color)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                    Yes, we machine pump volute casings, single/multi-stage pump impellers, backplates, bearing brackets, and suction covers with tight concentricity between bore and seal faces.
                  </p>
                </details>
              </div>
            </div>

            {/* Request for Quote Form */}
            <div className="contact-form" style={{ background: '#ffffff', padding: '2.2rem', borderRadius: '16px', boxShadow: '0 8px 30px rgba(0,0,0,0.06)', border: '1px solid #e2e8f0' }}>
              <h2 style={{ fontSize: '1.8rem', color: 'var(--primary-color)', marginBottom: '0.5rem' }}>
                Request a Valve Machining Quote
              </h2>
              <p style={{ fontSize: '0.9rem', color: '#64748b', marginBottom: '1.5rem' }}>
                Submit your valve body, wedge, or pump casing drawings for an immediate technical evaluation and delivery schedule.
              </p>
              <form action="#" method="POST" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <input type="text" placeholder="Full Name *" required className="form-control" style={{ padding: '0.8rem', border: '1px solid #ddd', borderRadius: '6px' }} />
                <input type="email" placeholder="Business Email *" required className="form-control" style={{ padding: '0.8rem', border: '1px solid #ddd', borderRadius: '6px' }} />
                <input type="tel" placeholder="Phone Number *" required className="form-control" style={{ padding: '0.8rem', border: '1px solid #ddd', borderRadius: '6px' }} />
                <input type="text" placeholder="Company Name & Location" className="form-control" style={{ padding: '0.8rem', border: '1px solid #ddd', borderRadius: '6px' }} />
                <textarea placeholder="Job Details: Valve Type (Gate/Ball/Globe), Size, Pressure Rating, Casting Material Grade, Quantity" rows={4} required className="form-control" style={{ padding: '0.8rem', border: '1px solid #ddd', borderRadius: '6px' }}></textarea>
                <button type="submit" className="submit-btn" style={{ background: 'var(--accent-color)', color: '#fff', border: 'none', padding: '1rem', borderRadius: '50px', fontWeight: 'bold', cursor: 'pointer', transition: 'var(--transition)' }}>
                  Submit Valve RFQ
                </button>
              </form>
              <div style={{ marginTop: '1.5rem', borderTop: '1px solid #f1f5f9', paddingTop: '1rem', fontSize: '0.88rem', color: '#64748b', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <div><i className="fas fa-phone-alt" style={{ color: 'var(--accent-color)', marginRight: '6px' }}></i> Call: <a href="tel:+919894593444" style={{ color: 'var(--primary-color)', textDecoration: 'none' }}>+91 98945 93444</a></div>
                <div><i className="fas fa-envelope" style={{ color: 'var(--accent-color)', marginRight: '6px' }}></i> Email: <a href="mailto:covaimachinetech@gmail.com" style={{ color: 'var(--primary-color)', textDecoration: 'none' }}>covaimachinetech@gmail.com</a></div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

