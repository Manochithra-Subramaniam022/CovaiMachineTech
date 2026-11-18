import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Industrial Casting Machining | Custom CNC Component Manufacturing | Coimbatore',
  description: 'Specialist industrial casting machining in Coimbatore for grey iron, SG iron, and steel castings. Precision machining for bearing housings, gearbox casings & custom components.',
  openGraph: {
    title: 'Industrial Casting Machining | Custom CNC Component Manufacturing',
    description: 'Precision industrial casting machining, bearing housing machining, and custom component manufacturing in Coimbatore. ISO 9001:2015 certified.',
    url: 'https://www.covaimachinetech.com/industrial-casting-machining-services',
    siteName: 'Covai Machine Tech',
    images: [
      {
        url: 'https://www.covaimachinetech.com/images/portfolio-custom-assembly.webp',
        width: 800,
        height: 600,
        alt: 'Industrial Casting Machining and Custom Component Manufacturing in Coimbatore',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.covaimachinetech.com/industrial-casting-machining-services',
  },
};

export default function IndustrialCastingMachiningServices() {
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
            "item": "https://www.covaimachinetech.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Industrial Casting Machining Services",
            "item": "https://www.covaimachinetech.com/industrial-casting-machining-services"
          }
        ]
      },
      {
        "@type": "Service",
        "serviceType": "Industrial Casting Machining & Custom Component Manufacturing",
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
        "description": "High accuracy industrial casting machining, bearing housing machining, gearbox casings, pump bodies, and custom CNC component manufacturing in Coimbatore."
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What casting grades do you machine at Covai Machine Tech?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We machine Grey Cast Iron (FG 200, FG 220, FG 260, FG 300), Ductile / SG Iron (SG 400/15, SG 500/7, SG 600/3), Cast Carbon Steel (WCB, LCB), Stainless Steel Castings (CF8, CF8M), and Aluminum gravity/pressure die castings."
            }
          },
          {
            "@type": "Question",
            "name": "How do you prevent distortion and porosity issues when machining castings?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We engineer specialized hydraulic and mechanical clamping fixtures that distribute clamping force evenly along casting ribs, avoiding wall distortion. Initial roughing cuts relieve internal casting stresses before final precision boring and milling."
            }
          },
          {
            "@type": "Question",
            "name": "What is your capability for bearing housing machining?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We machine split bearing housings, plummer blocks, flanged cartridges, and end shields. We achieve bearing bore tolerances within ISO H7/H6 with concentricity and squareness verified to 8 microns on our Zeiss CMM."
            }
          },
          {
            "@type": "Question",
            "name": "Do you provide turnkey casting sourcing plus machining?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, located in Coimbatore (India's premier foundry hub), we can manage the entire supply chain from raw casting pattern development, foundry pouring, fettling, and heat treatment to CNC machining, CMM inspection, and dedicated transport."
            }
          },
          {
            "@type": "Question",
            "name": "What batch volumes do you support for custom component manufacturing?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We support both medium batches (50 to 500 pieces) and high-volume mass production (1,000 to 10,000+ pieces monthly) with dedicated tooling layouts and PPAP documentation."
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
              <li style={{ color: 'var(--text-dark)', fontWeight: '600' }}>Industrial Casting Machining Services</li>
            </ol>
          </nav>

          {/* Section Header */}
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{ display: 'inline-block', background: 'rgba(255, 87, 34, 0.12)', color: '#ff5722', padding: '6px 16px', borderRadius: '30px', fontSize: '0.85rem', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '1rem', border: '1px solid rgba(255, 87, 34, 0.25)' }}>
              FOUNDRY HUB & PRECISION CNC
            </div>
            <h1 style={{ fontSize: '2.5rem', color: 'var(--primary-color)', marginBottom: '1rem' }}>
              Industrial Casting Machining & Custom Component Manufacturing
            </h1>
            <p style={{ fontSize: '1.15rem', color: 'var(--text-color)', maxWidth: '850px', margin: '0 auto', lineHeight: '1.7' }}>
              Specialist machining for Grey Cast Iron, SG / Spheroidal Graphite Ductile Iron, Cast Steel, and Aluminum castings in Coimbatore. High-precision CNC milling and boring for bearing housings, gearbox cases, pump bodies, and custom industrial assemblies.
            </p>
          </div>

          {/* Hero Technical Overview */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', marginBottom: '4rem', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: '1.8rem', color: 'var(--primary-color)', marginBottom: '1rem' }}>
                End-to-End Casting Machining Infrastructure
              </h2>
              <p style={{ color: 'var(--text-dark)', marginBottom: '1.5rem', lineHeight: '1.7' }}>
                Coimbatore is globally recognized as the foundry capital of South India. Situated in Karumathampatti on a 2-acre facility, Covai Machine Tech bridges foundry raw castings with high-precision CNC machining. We overcome casting skin hardness, draft angle clamping, and core shift through engineered fixturing.
              </p>
              <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '2rem' }}>
                <tbody>
                  <tr style={{ borderBottom: '1px solid #ddd' }}>
                    <th style={{ padding: '0.9rem', textAlign: 'left', backgroundColor: '#f8f9fa' }}>Cast Materials</th>
                    <td style={{ padding: '0.9rem' }}>Grey Iron (FG 200-300), SG Iron (400/15 - 600/3), WCB, CF8M</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #ddd' }}>
                    <th style={{ padding: '0.9rem', textAlign: 'left', backgroundColor: '#f8f9fa' }}>Casting Envelope</th>
                    <td style={{ padding: '0.9rem' }}>Up to 2600mm x 2400mm (Double Column) & 700mm Dia (VTL)</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #ddd' }}>
                    <th style={{ padding: '0.9rem', textAlign: 'left', backgroundColor: '#f8f9fa' }}>Core Components</th>
                    <td style={{ padding: '0.9rem' }}>Bearing Housings, Gearboxes, Impellers, Motor Flanges, Brackets</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #ddd' }}>
                    <th style={{ padding: '0.9rem', textAlign: 'left', backgroundColor: '#f8f9fa' }}>Bore Tolerances</th>
                    <td style={{ padding: '0.9rem' }}>H7 / H6 Internal Bores, Cylindricity within 0.008 mm</td>
                  </tr>
                  <tr>
                    <th style={{ padding: '0.9rem', textAlign: 'left', backgroundColor: '#f8f9fa' }}>Delivery Model</th>
                    <td style={{ padding: '0.9rem' }}>Turnkey Sourcing + Machining or Job Work on Free Issue Materials</td>
                  </tr>
                </tbody>
              </table>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a href="#quote-form" className="btn btn-primary" style={{ padding: '12px 28px', textDecoration: 'none' }}>Get Casting Machining Quote</a>
                <Link href="/cmm-inspection-services-coimbatore" className="btn btn-secondary" style={{ padding: '12px 28px', textDecoration: 'none' }}>CMM Inspection Reports</Link>
              </div>
            </div>
            <div>
              <img
                src="/images/portfolio-custom-assembly.webp"
                alt="Industrial Casting Machining and Custom Assemblies in Coimbatore"
                width={800}
                height={600}
                style={{ width: '100%', height: 'auto', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
              />
            </div>
          </div>

          {/* Deep Content: Casting Machining Capabilities */}
          <div style={{ background: '#f8f9fa', padding: '3rem', borderRadius: '16px', marginBottom: '4rem', border: '1px solid #e2e8f0' }}>
            <h2 style={{ fontSize: '1.9rem', color: 'var(--primary-color)', marginBottom: '1.2rem', textAlign: 'center' }}>
              Specialized Industrial Component Machining Capabilities
            </h2>
            <p style={{ color: 'var(--text-dark)', maxWidth: '900px', margin: '0 auto 2.5rem', textAlign: 'center', lineHeight: '1.8' }}>
              From rough cast surfaces to micron-tolerance datum faces, our engineers design dedicated clamping systems that neutralize cutting forces and prevent wall deflection on cast iron housings.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.8rem' }}>
              <div style={{ background: '#ffffff', padding: '1.8rem', borderRadius: '12px', borderLeft: '4px solid #ff5722', boxShadow: '0 4px 15px rgba(0,0,0,0.04)' }}>
                <h3 style={{ fontSize: '1.25rem', color: '#111827', marginBottom: '0.6rem' }}>
                  <i className="fas fa-ring" style={{ color: '#ff5722', marginRight: '8px' }}></i> Bearing Housing Machining
                </h3>
                <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>
                  Precision line boring and end facing for split plummer blocks, pillow blocks, and cartridge housings. Precise H7 bore roundness ensuring prolonged bearing service life without thermal binding.
                </p>
              </div>
              <div style={{ background: '#ffffff', padding: '1.8rem', borderRadius: '12px', borderLeft: '4px solid #0ea5e9', boxShadow: '0 4px 15px rgba(0,0,0,0.04)' }}>
                <h3 style={{ fontSize: '1.25rem', color: '#111827', marginBottom: '0.6rem' }}>
                  <i className="fas fa-cogs" style={{ color: '#0ea5e9', marginRight: '8px' }}></i> Gearbox & Transmission Casings
                </h3>
                <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>
                  Multi-axis VMC milling for industrial gearboxes (trusted partner to Shanthi Gear / Murugappa Group). Dual-axis center distance tolerances held within 15 microns to guarantee silent gear mesh.
                </p>
              </div>
              <div style={{ background: '#ffffff', padding: '1.8rem', borderRadius: '12px', borderLeft: '4px solid #10b981', boxShadow: '0 4px 15px rgba(0,0,0,0.04)' }}>
                <h3 style={{ fontSize: '1.25rem', color: '#111827', marginBottom: '0.6rem' }}>
                  <i className="fas fa-industry" style={{ color: '#10b981', marginRight: '8px' }}></i> Custom CNC Component Manufacturing
                </h3>
                <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>
                  Complete contract manufacturing from initial CAD models, 3D toolpath simulation, and fixture fabrication to final deburring, ultrasonic cleaning, and rust-preventive packaging.
                </p>
              </div>
            </div>
          </div>

          {/* 4-Axis U-CAM Showcase */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', marginBottom: '4rem', alignItems: 'center' }}>
            <div>
              <img
                src="/images/portfolio-4axis-ucam.webp"
                alt="4-Axis U-CAM Precision Machining for Casting Components Coimbatore"
                width={800}
                height={600}
                style={{ width: '100%', height: 'auto', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
              />
            </div>
            <div>
              <h2 style={{ fontSize: '1.8rem', color: 'var(--primary-color)', marginBottom: '1rem' }}>
                4-Axis Multi-Angle Milling for Complex Castings
              </h2>
              <p style={{ color: 'var(--text-dark)', marginBottom: '1rem', lineHeight: '1.7' }}>
                Cast parts often require operations on 4 or 5 different sides. Our 4th Axis U-CAM rotary table setup eliminates the need for multiple manual setups:
              </p>
              <ul style={{ paddingLeft: '1.2rem', color: '#475569', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                <li><strong>Single Clamping Accuracy:</strong> Machine top, front, rear, and sides in one continuous CNC cycle, maintaining strict true position between perpendicular features.</li>
                <li><strong>Through-Spindle Coolant:</strong> Rapid chip evacuation during deep drilling and tapping in cast iron and ductile iron.</li>
                <li><strong>Rigorous Inspection:</strong> 100% CMM inspection on our Carl Zeiss Spectrum Verity machine located right beside the shop floor.</li>
                <li><strong>Turnkey Logistics:</strong> In-house trucks collect castings from your foundry and return finished, inspected parts directly to your assembly line.</li>
              </ul>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link href="/precision-machining-coimbatore" className="btn btn-secondary" style={{ textDecoration: 'none' }}>
                  Precision Machining
                </Link>
                <Link href="/heavy-machining-big-parts-coimbatore" className="btn btn-secondary" style={{ textDecoration: 'none' }}>
                  Heavy Engineering Big Parts
                </Link>
              </div>
            </div>
          </div>

          {/* FAQs & Form */}
          <div id="quote-form" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem' }}>
            {/* FAQ Accordion */}
            <div>
              <h2 style={{ fontSize: '1.8rem', color: 'var(--primary-color)', marginBottom: '1.5rem' }}>
                Frequently Asked Questions on Casting Machining
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <details style={{ background: '#f8f9fa', padding: '1.2rem', borderRadius: '8px', border: '1px solid #e2e8f0' }} open>
                  <summary style={{ fontWeight: '600', color: 'var(--primary-color)', cursor: 'pointer' }}>
                    What casting grades do you machine at Covai Machine Tech?
                  </summary>
                  <p style={{ marginTop: '0.8rem', color: 'var(--text-color)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                    We machine Grey Cast Iron (FG 200, FG 220, FG 260, FG 300), Ductile / SG Iron (SG 400/15, SG 500/7, SG 600/3), Cast Carbon Steel (WCB, LCB), Stainless Steel Castings (CF8, CF8M), and Aluminum gravity/pressure die castings.
                  </p>
                </details>
                <details style={{ background: '#f8f9fa', padding: '1.2rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                  <summary style={{ fontWeight: '600', color: 'var(--primary-color)', cursor: 'pointer' }}>
                    How do you prevent distortion and porosity issues when machining castings?
                  </summary>
                  <p style={{ marginTop: '0.8rem', color: 'var(--text-color)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                    We engineer specialized hydraulic and mechanical clamping fixtures that distribute clamping force evenly along casting ribs, avoiding wall distortion. Initial roughing cuts relieve internal casting stresses before final precision boring and milling.
                  </p>
                </details>
                <details style={{ background: '#f8f9fa', padding: '1.2rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                  <summary style={{ fontWeight: '600', color: 'var(--primary-color)', cursor: 'pointer' }}>
                    What is your capability for bearing housing machining?
                  </summary>
                  <p style={{ marginTop: '0.8rem', color: 'var(--text-color)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                    We machine split bearing housings, plummer blocks, flanged cartridges, and end shields. We achieve bearing bore tolerances within ISO H7/H6 with concentricity and squareness verified to 8 microns on our Zeiss CMM.
                  </p>
                </details>
                <details style={{ background: '#f8f9fa', padding: '1.2rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                  <summary style={{ fontWeight: '600', color: 'var(--primary-color)', cursor: 'pointer' }}>
                    Do you provide turnkey casting sourcing plus machining?
                  </summary>
                  <p style={{ marginTop: '0.8rem', color: 'var(--text-color)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                    Yes, located in Coimbatore (India's premier foundry hub), we can manage the entire supply chain from raw casting pattern development, foundry pouring, fettling, and heat treatment to CNC machining, CMM inspection, and dedicated transport.
                  </p>
                </details>
                <details style={{ background: '#f8f9fa', padding: '1.2rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                  <summary style={{ fontWeight: '600', color: 'var(--primary-color)', cursor: 'pointer' }}>
                    What batch volumes do you support for custom component manufacturing?
                  </summary>
                  <p style={{ marginTop: '0.8rem', color: 'var(--text-color)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                    We support both medium batches (50 to 500 pieces) and high-volume mass production (1,000 to 10,000+ pieces monthly) with dedicated tooling layouts and PPAP documentation.
                  </p>
                </details>
              </div>
            </div>

            {/* Request for Quote Form */}
            <div className="contact-form" style={{ background: '#ffffff', padding: '2.2rem', borderRadius: '16px', boxShadow: '0 8px 30px rgba(0,0,0,0.06)', border: '1px solid #e2e8f0' }}>
              <h2 style={{ fontSize: '1.8rem', color: 'var(--primary-color)', marginBottom: '0.5rem' }}>
                Request Casting Machining Quote
              </h2>
              <p style={{ fontSize: '0.9rem', color: '#64748b', marginBottom: '1.5rem' }}>
                Submit your casting drawings, material grades (CI/SG/Steel), and monthly batch requirements for a swift quotation.
              </p>
              <form action="#" method="POST" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <input type="text" placeholder="Full Name *" required className="form-control" style={{ padding: '0.8rem', border: '1px solid #ddd', borderRadius: '6px' }} />
                <input type="email" placeholder="Business Email *" required className="form-control" style={{ padding: '0.8rem', border: '1px solid #ddd', borderRadius: '6px' }} />
                <input type="tel" placeholder="Phone Number *" required className="form-control" style={{ padding: '0.8rem', border: '1px solid #ddd', borderRadius: '6px' }} />
                <input type="text" placeholder="Company Name & Location" className="form-control" style={{ padding: '0.8rem', border: '1px solid #ddd', borderRadius: '6px' }} />
                <textarea placeholder="Job Details: Casting Grade (e.g. FG260, SG500/7), Housing/Part Type, Tolerances, Batch Size" rows={4} required className="form-control" style={{ padding: '0.8rem', border: '1px solid #ddd', borderRadius: '6px' }}></textarea>
                <button type="submit" className="submit-btn" style={{ background: 'var(--accent-color)', color: '#fff', border: 'none', padding: '1rem', borderRadius: '50px', fontWeight: 'bold', cursor: 'pointer', transition: 'var(--transition)' }}>
                  Submit Casting RFQ
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

