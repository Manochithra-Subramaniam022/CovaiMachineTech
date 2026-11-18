import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'CMM Inspection in Coimbatore | 3D CMM Measuring Services | Covai Machine Tech',
  description: 'Precision CMM inspection in Coimbatore with Carl Zeiss Spectrum Verity 9126 RDS 3D CMM (900x1200x600mm) & Trimos V7 height gauge. Complete dimensional QA reports.',
  openGraph: {
    title: 'CMM Inspection in Coimbatore | 3D CMM Measuring Services',
    description: 'Precision CMM inspection in Coimbatore with Carl Zeiss Spectrum Verity 3D CMM and Trimos V7 height gauge. Complete dimensional QA reports.',
    url: 'https://covaimachinetech.com/cmm-inspection-services-coimbatore',
    siteName: 'Covai Machine Tech',
    images: [
      {
        url: 'https://covaimachinetech.com/images/machine-zeiss-spectrum.webp',
        width: 800,
        height: 600,
        alt: 'Carl Zeiss Spectrum Verity 3D Coordinate Measuring Machine CMM Coimbatore',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  alternates: {
    canonical: 'https://covaimachinetech.com/cmm-inspection-services-coimbatore',
  },
};

export default function CMMInspectionServicesCoimbatore() {
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
            "name": "CMM Inspection in Coimbatore",
            "item": "https://covaimachinetech.com/cmm-inspection-services-coimbatore"
          }
        ]
      },
      {
        "@type": "Service",
        "serviceType": "CMM Inspection & 3D Measuring Services",
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
        "description": "Third-party and in-house 3D CMM inspection services, accuracy measuring, GD&T verification, and First Article Inspection in Coimbatore using Carl Zeiss SPECTRUM VERITY 9126 RDS CMM."
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the measuring volume of your Carl Zeiss CMM in Coimbatore?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our Carl Zeiss SPECTRUM VERITY 9126 RDS VAST XXT Coordinate Measuring Machine provides an expansive measuring range of X = 900mm, Y = 1200mm, and Z = 600mm, accommodating large industrial castings and valve bodies."
            }
          },
          {
            "@type": "Question",
            "name": "Do you offer third-party CMM inspection services for external manufacturers?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we provide third-party CMM measuring, first article inspection (FAI), batch sampling, and calibration verification for external machine shops and engineering firms across Coimbatore, Tiruppur, and Tamil Nadu."
            }
          },
          {
            "@type": "Question",
            "name": "What GD&T geometric features can be measured on your CMM?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our Zeiss CMM inspects all GD&T characteristics including True Position, Perpendicularity, Concentricity, Total Runout, Flatness, Cylindricity, Angularity, and Complex Freeform CAD surface comparisons."
            }
          },
          {
            "@type": "Question",
            "name": "What reporting format is provided after CMM inspection?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Clients receive comprehensive digital inspection reports (PDF & Excel) showing nominal dimensions, actual measured values, upper/lower tolerances, and color-coded deviations."
            }
          },
          {
            "@type": "Question",
            "name": "What environment is your CMM equipment housed in?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our Carl Zeiss CMM and Trimos V7 height gauges are located in a dedicated, climate-controlled inspection laboratory maintained at standard 20°C (±1°C) with active dust control and vibration isolation."
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
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" style={{ marginBottom: '1.5rem', fontSize: '0.9rem' }}>
            <ol style={{ listStyle: 'none', display: 'flex', gap: '0.5rem', padding: 0, margin: 0, color: 'var(--text-light)' }}>
              <li><Link href="/" style={{ color: 'var(--primary-color)', textDecoration: 'none' }}>Home</Link></li>
              <li>/</li>
              <li><Link href="/#services" style={{ color: 'var(--primary-color)', textDecoration: 'none' }}>Services</Link></li>
              <li>/</li>
              <li style={{ color: 'var(--text-dark)', fontWeight: '600' }}>CMM Inspection in Coimbatore</li>
            </ol>
          </nav>

          {/* Section Header */}
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{ display: 'inline-block', background: 'rgba(16, 185, 129, 0.12)', color: '#059669', padding: '6px 16px', borderRadius: '30px', fontSize: '0.85rem', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '1rem', border: '1px solid rgba(16, 185, 129, 0.3)' }}>
              CARL ZEISS GERMAN METROLOGY
            </div>
            <h1 style={{ fontSize: '2.5rem', color: 'var(--primary-color)', marginBottom: '1rem' }}>
              CMM Inspection & 3D Measuring Services in Coimbatore
            </h1>
            <p style={{ fontSize: '1.15rem', color: 'var(--text-color)', maxWidth: '850px', margin: '0 auto', lineHeight: '1.7' }}>
              High-accuracy 3D CMM measuring services and precision component inspection in Coimbatore. Equipped with a Carl Zeiss SPECTRUM VERITY CMM (900 x 1200 x 600 mm) and Trimos V7 2D Height Gauge for rigorous dimensional qualification.
            </p>
          </div>

          {/* Hero Technical Overview */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', marginBottom: '4rem', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: '1.8rem', color: 'var(--primary-color)', marginBottom: '1rem' }}>
                Metrology Equipment & Technical Specifications
              </h2>
              <p style={{ color: 'var(--text-dark)', marginBottom: '1.5rem', lineHeight: '1.7' }}>
                Precision manufacturing requires precision validation. At Covai Machine Tech, our dedicated, temperature-controlled standards room houses world-class Carl Zeiss 3D CMM technology and Trimos height measurement systems, ensuring your quality jobs and critical components pass strict international audits.
              </p>
              <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '2rem' }}>
                <tbody>
                  <tr style={{ borderBottom: '1px solid #ddd' }}>
                    <th style={{ padding: '0.9rem', textAlign: 'left', backgroundColor: '#f8f9fa' }}>Primary CMM</th>
                    <td style={{ padding: '0.9rem' }}>CARL ZEISS SPECTRUM VERITY 9126 RDS VAST XXT</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #ddd' }}>
                    <th style={{ padding: '0.9rem', textAlign: 'left', backgroundColor: '#f8f9fa' }}>CMM Measuring Envelope</th>
                    <td style={{ padding: '0.9rem' }}>X = 900 mm | Y = 1200 mm | Z = 600 mm</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #ddd' }}>
                    <th style={{ padding: '0.9rem', textAlign: 'left', backgroundColor: '#f8f9fa' }}>2D Height Gauge</th>
                    <td style={{ padding: '0.9rem' }}>TRIMOS V7 (711 mm / up to 1023 mm with Extension)</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #ddd' }}>
                    <th style={{ padding: '0.9rem', textAlign: 'left', backgroundColor: '#f8f9fa' }}>Surface Metrology</th>
                    <td style={{ padding: '0.9rem' }}>Mahr Surface Roughness Tester (Ra, Rz, Rq)</td>
                  </tr>
                  <tr>
                    <th style={{ padding: '0.9rem', textAlign: 'left', backgroundColor: '#f8f9fa' }}>Measurement Scope</th>
                    <td style={{ padding: '0.9rem' }}>GD&T Verification, FAI, CAD Comparison, Third-Party Audits</td>
                  </tr>
                </tbody>
              </table>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a href="#quote-form" className="btn btn-primary" style={{ padding: '12px 28px', textDecoration: 'none' }}>Book CMM Inspection</a>
                <Link href="/precision-machining-coimbatore" className="btn btn-secondary" style={{ padding: '12px 28px', textDecoration: 'none' }}>Precision Machining</Link>
              </div>
            </div>
            <div>
              <img
                src="/images/machine-zeiss-spectrum.webp"
                alt="Carl Zeiss Coordinate Measuring Machine CMM in Coimbatore"
                width={800}
                height={600}
                style={{ width: '100%', height: 'auto', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
              />
            </div>
          </div>

          {/* Deep Content: CMM Capabilities */}
          <div style={{ background: '#f8f9fa', padding: '3rem', borderRadius: '16px', marginBottom: '4rem', border: '1px solid #e2e8f0' }}>
            <h2 style={{ fontSize: '1.9rem', color: 'var(--primary-color)', marginBottom: '1.2rem', textAlign: 'center' }}>
              Comprehensive Accuracy Measuring & CMM Services in Coimbatore
            </h2>
            <p style={{ color: 'var(--text-dark)', maxWidth: '900px', margin: '0 auto 2.5rem', textAlign: 'center', lineHeight: '1.8' }}>
              Whether you require verification of in-house manufactured components or need an independent, accredited third-party CMM inspection facility in Coimbatore, Covai Machine Tech provides fast turnaround and traceable measurement data.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.8rem' }}>
              <div style={{ background: '#ffffff', padding: '1.8rem', borderRadius: '12px', borderLeft: '4px solid #10b981', boxShadow: '0 4px 15px rgba(0,0,0,0.04)' }}>
                <h3 style={{ fontSize: '1.25rem', color: '#111827', marginBottom: '0.6rem' }}>
                  <i className="fas fa-cube" style={{ color: '#10b981', marginRight: '8px' }}></i> 3D CAD vs Part Comparison
                </h3>
                <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>
                  Directly import your 3D CAD STEP/IGES models into Zeiss CALYPSO software. Our scanning probe tracks complex 3D contours, aerodynamic blades, and freeform surfaces to generate color deviation heat maps.
                </p>
              </div>
              <div style={{ background: '#ffffff', padding: '1.8rem', borderRadius: '12px', borderLeft: '4px solid #ff5722', boxShadow: '0 4px 15px rgba(0,0,0,0.04)' }}>
                <h3 style={{ fontSize: '1.25rem', color: '#111827', marginBottom: '0.6rem' }}>
                  <i className="fas fa-crosshairs" style={{ color: '#ff5722', marginRight: '8px' }}></i> GD&T Geometric Verification
                </h3>
                <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>
                  Accurately qualify ASME Y14.5 and ISO geometric tolerances including True Position with MMC/LMC modifiers, Coaxiality, Perpendicularity, Circular Runout, and Flatness on critical machined surfaces.
                </p>
              </div>
              <div style={{ background: '#ffffff', padding: '1.8rem', borderRadius: '12px', borderLeft: '4px solid #0ea5e9', boxShadow: '0 4px 15px rgba(0,0,0,0.04)' }}>
                <h3 style={{ fontSize: '1.25rem', color: '#111827', marginBottom: '0.6rem' }}>
                  <i className="fas fa-clipboard-check" style={{ color: '#0ea5e9', marginRight: '8px' }}></i> First Article Inspection (FAI)
                </h3>
                <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>
                  Pre-production validation and PPAP Level 3 documentation for automotive and aerospace components. Eliminate manufacturing drift before commencing mass production runs.
                </p>
              </div>
            </div>
          </div>

          {/* Measuring Equipment Showcase (2 Columns with Trimos Image) */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', marginBottom: '4rem', alignItems: 'center' }}>
            <div>
              <img
                src="/images/machine-trimos-v7.webp"
                alt="Trimos V7 2D Height Gauge Inspection Instrument in Coimbatore"
                width={800}
                height={600}
                style={{ width: '100%', height: 'auto', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
              />
            </div>
            <div>
              <h2 style={{ fontSize: '1.8rem', color: 'var(--primary-color)', marginBottom: '1rem' }}>
                Complementary Metrology: Trimos V7 & Surface Analysis
              </h2>
              <p style={{ color: 'var(--text-dark)', marginBottom: '1rem', lineHeight: '1.7' }}>
                Beyond our 3D CMM, we maintain a comprehensive suite of precision metrology equipment to support round-the-clock machine shop operations:
              </p>
              <ul style={{ paddingLeft: '1.2rem', color: '#475569', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                <li><strong>Trimos V7 Height Gauge:</strong> Motorized measurement up to 1023mm extension with precision air cushion base for sub-micron repeatability.</li>
                <li><strong>Mahr Surface Roughness Tester:</strong> Accurate evaluation of Ra, Rz, and Rmax parameters for critical seal face finishes and valve seats.</li>
                <li><strong>Mitutoyo Digital Micrometers & Bore Gauges:</strong> Calibrated bore measurement instruments for internal cylinder and bearing housing clearances.</li>
                <li><strong>Climate-Controlled Standards Bay:</strong> Isolated from shop floor vibration and maintained strictly at 20°C ambient temperature.</li>
              </ul>
              <Link href="/cnc-machining-coimbatore" className="btn btn-secondary" style={{ textDecoration: 'none' }}>
                Explore Our Machine Shop Facilities
              </Link>
            </div>
          </div>

          {/* FAQs & Form */}
          <div id="quote-form" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem' }}>
            {/* FAQ Accordion */}
            <div>
              <h2 style={{ fontSize: '1.8rem', color: 'var(--primary-color)', marginBottom: '1.5rem' }}>
                Frequently Asked Questions on CMM Inspection
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <details style={{ background: '#f8f9fa', padding: '1.2rem', borderRadius: '8px', border: '1px solid #e2e8f0' }} open>
                  <summary style={{ fontWeight: '600', color: 'var(--primary-color)', cursor: 'pointer' }}>
                    What is the measuring volume of your Carl Zeiss CMM in Coimbatore?
                  </summary>
                  <p style={{ marginTop: '0.8rem', color: 'var(--text-color)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                    Our Carl Zeiss SPECTRUM VERITY 9126 RDS VAST XXT Coordinate Measuring Machine provides an expansive measuring range of X = 900mm, Y = 1200mm, and Z = 600mm, accommodating large industrial castings, complex valve bodies, and precision shafts.
                  </p>
                </details>
                <details style={{ background: '#f8f9fa', padding: '1.2rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                  <summary style={{ fontWeight: '600', color: 'var(--primary-color)', cursor: 'pointer' }}>
                    Do you offer third-party CMM inspection services for external manufacturers?
                  </summary>
                  <p style={{ marginTop: '0.8rem', color: 'var(--text-color)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                    Yes, we provide third-party CMM measuring, first article inspection (FAI), batch sampling, and calibration verification for external machine shops and engineering firms across Coimbatore, Tiruppur, and Tamil Nadu.
                  </p>
                </details>
                <details style={{ background: '#f8f9fa', padding: '1.2rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                  <summary style={{ fontWeight: '600', color: 'var(--primary-color)', cursor: 'pointer' }}>
                    What GD&T geometric features can be measured on your CMM?
                  </summary>
                  <p style={{ marginTop: '0.8rem', color: 'var(--text-color)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                    Our Zeiss CMM inspects all GD&T characteristics including True Position, Perpendicularity, Concentricity, Total Runout, Flatness, Cylindricity, Angularity, and Complex Freeform CAD surface comparisons.
                  </p>
                </details>
                <details style={{ background: '#f8f9fa', padding: '1.2rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                  <summary style={{ fontWeight: '600', color: 'var(--primary-color)', cursor: 'pointer' }}>
                    What reporting format is provided after CMM inspection?
                  </summary>
                  <p style={{ marginTop: '0.8rem', color: 'var(--text-color)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                    Clients receive comprehensive digital inspection reports (PDF & Excel) showing nominal dimensions, actual measured values, upper/lower tolerances, and color-coded deviations.
                  </p>
                </details>
                <details style={{ background: '#f8f9fa', padding: '1.2rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                  <summary style={{ fontWeight: '600', color: 'var(--primary-color)', cursor: 'pointer' }}>
                    What environment is your CMM equipment housed in?
                  </summary>
                  <p style={{ marginTop: '0.8rem', color: 'var(--text-color)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                    Our Carl Zeiss CMM and Trimos V7 height gauges are located in a dedicated, climate-controlled inspection laboratory maintained at standard 20°C (±1°C) with active dust control and vibration isolation.
                  </p>
                </details>
              </div>
            </div>

            {/* Request for Inspection Form */}
            <div className="contact-form" style={{ background: '#ffffff', padding: '2.2rem', borderRadius: '16px', boxShadow: '0 8px 30px rgba(0,0,0,0.06)', border: '1px solid #e2e8f0' }}>
              <h2 style={{ fontSize: '1.8rem', color: 'var(--primary-color)', marginBottom: '0.5rem' }}>
                Schedule CMM Inspection Services
              </h2>
              <p style={{ fontSize: '0.9rem', color: '#64748b', marginBottom: '1.5rem' }}>
                Send your component drawings and inspection requirements. We provide rapid turnarounds for both single prototypes and mass batch sampling.
              </p>
              <form action="#" method="POST" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <input type="text" placeholder="Full Name *" required className="form-control" style={{ padding: '0.8rem', border: '1px solid #ddd', borderRadius: '6px' }} />
                <input type="email" placeholder="Business Email *" required className="form-control" style={{ padding: '0.8rem', border: '1px solid #ddd', borderRadius: '6px' }} />
                <input type="tel" placeholder="Phone Number *" required className="form-control" style={{ padding: '0.8rem', border: '1px solid #ddd', borderRadius: '6px' }} />
                <input type="text" placeholder="Company Name & City" className="form-control" style={{ padding: '0.8rem', border: '1px solid #ddd', borderRadius: '6px' }} />
                <textarea placeholder="Inspection Scope: Part Dimensions, Number of Samples, Critical GD&T Parameters, Urgency" rows={4} required className="form-control" style={{ padding: '0.8rem', border: '1px solid #ddd', borderRadius: '6px' }}></textarea>
                <button type="submit" className="submit-btn" style={{ background: 'var(--accent-color)', color: '#fff', border: 'none', padding: '1rem', borderRadius: '50px', fontWeight: 'bold', cursor: 'pointer', transition: 'var(--transition)' }}>
                  Request CMM Inspection Quote
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

