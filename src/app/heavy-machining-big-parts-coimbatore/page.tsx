import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Heavy Machining in Coimbatore | Big Size & Large Parts CNC Machining',
  description: 'Heavy duty CNC machining & big parts machining in Coimbatore. Double column bridge milling (2600x2400x1000mm) & heavy VTL up to 700mm for large plates & structures.',
  openGraph: {
    title: 'Heavy Machining in Coimbatore | Big Size & Large Parts CNC Machining',
    description: 'Heavy duty CNC machining, big size machining, gantry and double column milling up to 2600mm bed size in Coimbatore.',
    url: 'https://covaimachinetech.com/heavy-machining-big-parts-coimbatore',
    siteName: 'Covai Machine Tech',
    images: [
      {
        url: 'https://covaimachinetech.com/images/machine-ktm-dcmc2618.webp',
        width: 800,
        height: 600,
        alt: 'Heavy Duty Double Column CNC Machining Center in Coimbatore',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  alternates: {
    canonical: 'https://covaimachinetech.com/heavy-machining-big-parts-coimbatore',
  },
};

export default function HeavyMachiningBigPartsCoimbatore() {
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
            "name": "Heavy Machining & Big Parts in Coimbatore",
            "item": "https://covaimachinetech.com/heavy-machining-big-parts-coimbatore"
          }
        ]
      },
      {
        "@type": "Service",
        "serviceType": "Heavy Duty CNC Machining & Large Component Milling",
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
        "description": "Large component machining, heavy engineering job work, big size plate milling, gantry/double column CNC machining, and heavy VTL turning in Coimbatore."
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the maximum part size you can machine on your Double Column center?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our KTM DCMC2618 Double Column Machining Center accommodates workpieces with axis travel of 2600mm (X), 2400mm (Y), and 1000mm (Z), handling heavy structural plates, machine beds, and massive valve blocks."
            }
          },
          {
            "@type": "Question",
            "name": "What crane and material handling capacities do you have for big parts?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our 7,000 sq.ft facility on a 2-acre campus is outfitted with overhead heavy crane handling systems and broad loading bays designed specifically for safe loading, maneuvering, and unloading of multi-ton industrial castings and heavy steel plates."
            }
          },
          {
            "@type": "Question",
            "name": "Can you perform 5-sided or angled machining on large components?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, our KTM Double Column machine is equipped with heavy-duty angular milling heads and high-pressure through-coolant, allowing multi-face machining of large plates and structures in a single clamping setup."
            }
          },
          {
            "@type": "Question",
            "name": "What industries utilize your big size machining services?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We serve heavy engineering industries including power generation, hydraulic press manufacturers, earthmoving equipment, cement and textile machine builders, gear manufacturers, and large pipeline infrastructure."
            }
          },
          {
            "@type": "Question",
            "name": "What heavy materials do you machine?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We machine heavy steel plates (IS 2062, Sailhard, Hardox), heavy grey iron castings (FG200/260), ductile iron (SG 400/15, 500/7), forged alloy blocks (42CrMo4, EN24), and stainless steel plates."
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
              <li style={{ color: 'var(--text-dark)', fontWeight: '600' }}>Heavy Machining & Big Parts in Coimbatore</li>
            </ol>
          </nav>

          {/* Section Header */}
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{ display: 'inline-block', background: 'rgba(168, 85, 247, 0.12)', color: '#9333ea', padding: '6px 16px', borderRadius: '30px', fontSize: '0.85rem', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '1rem', border: '1px solid rgba(168, 85, 247, 0.3)' }}>
              LARGE-SCALE HEAVY ENGINEERING
            </div>
            <h1 style={{ fontSize: '2.5rem', color: 'var(--primary-color)', marginBottom: '1rem' }}>
              Heavy Machining & Big Parts CNC Machining in Coimbatore
            </h1>
            <p style={{ fontSize: '1.15rem', color: 'var(--text-color)', maxWidth: '850px', margin: '0 auto', lineHeight: '1.7' }}>
              Big size machining, heavy engineering job work, large plate milling, and oversized component manufacturing in Coimbatore. Powered by our KTM Double Column Machining Center (2600mm bed) and BFW Heavy VTL (700mm dia).
            </p>
          </div>

          {/* Hero Technical Overview */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', marginBottom: '4rem', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: '1.8rem', color: 'var(--primary-color)', marginBottom: '1rem' }}>
                Heavy Duty CNC Milling & Turning Infrastructure
              </h2>
              <p style={{ color: 'var(--text-dark)', marginBottom: '1.5rem', lineHeight: '1.7' }}>
                Machining oversized, heavy engineering workpieces demands high structural rigidity, massive torque, and overhead material handling. Our 2-acre facility in Coimbatore handles big parts without deflection, maintaining micron precision even on 2.6-meter travel cuts.
              </p>
              <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '2rem' }}>
                <tbody>
                  <tr style={{ borderBottom: '1px solid #ddd' }}>
                    <th style={{ padding: '0.9rem', textAlign: 'left', backgroundColor: '#f8f9fa' }}>Double Column Bed Size</th>
                    <td style={{ padding: '0.9rem' }}>X = 2600 mm | Y = 2400 mm | Z = 1000 mm</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #ddd' }}>
                    <th style={{ padding: '0.9rem', textAlign: 'left', backgroundColor: '#f8f9fa' }}>Heavy VMC Travel</th>
                    <td style={{ padding: '0.9rem' }}>AMS 1690V-50 (1800mm X-Axis Travel)</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #ddd' }}>
                    <th style={{ padding: '0.9rem', textAlign: 'left', backgroundColor: '#f8f9fa' }}>Heavy Vertical Turning</th>
                    <td style={{ padding: '0.9rem' }}>BFW BVL 700H (800mm Swing, 700mm Turning Dia)</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #ddd' }}>
                    <th style={{ padding: '0.9rem', textAlign: 'left', backgroundColor: '#f8f9fa' }}>Attachments</th>
                    <td style={{ padding: '0.9rem' }}>Heavy Angular Milling Head & Through Spindle Coolant</td>
                  </tr>
                  <tr>
                    <th style={{ padding: '0.9rem', textAlign: 'left', backgroundColor: '#f8f9fa' }}>Facility Footprint</th>
                    <td style={{ padding: '0.9rem' }}>2 Acres Campus, 7,000 Sq.Ft Machine Shop with Overhead Cranes</td>
                  </tr>
                </tbody>
              </table>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a href="#quote-form" className="btn btn-primary" style={{ padding: '12px 28px', textDecoration: 'none' }}>Get Heavy Machining Quote</a>
                <Link href="/double-column-machining-coimbatore" className="btn btn-secondary" style={{ padding: '12px 28px', textDecoration: 'none' }}>Double Column Details</Link>
              </div>
            </div>
            <div>
              <img
                src="/images/machine-ktm-dcmc2618.webp"
                alt="Big Size Machining and Double Column Milling in Coimbatore"
                width={800}
                height={600}
                style={{ width: '100%', height: 'auto', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
              />
            </div>
          </div>

          {/* Deep Content: Big Size Machining Capabilities */}
          <div style={{ background: '#f8f9fa', padding: '3rem', borderRadius: '16px', marginBottom: '4rem', border: '1px solid #e2e8f0' }}>
            <h2 style={{ fontSize: '1.9rem', color: 'var(--primary-color)', marginBottom: '1.2rem', textAlign: 'center' }}>
              Comprehensive Heavy Engineering Machining Capabilities
            </h2>
            <p style={{ color: 'var(--text-dark)', maxWidth: '900px', margin: '0 auto 2.5rem', textAlign: 'center', lineHeight: '1.8' }}>
              Standard CNC machines cannot support the payload weight or spindle torque needed for heavy engineering job work. We eliminate bottleneck challenges with dedicated heavy machinery.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.8rem' }}>
              <div style={{ background: '#ffffff', padding: '1.8rem', borderRadius: '12px', borderLeft: '4px solid #a855f7', boxShadow: '0 4px 15px rgba(0,0,0,0.04)' }}>
                <h3 style={{ fontSize: '1.25rem', color: '#111827', marginBottom: '0.6rem' }}>
                  <i className="fas fa-layer-group" style={{ color: '#a855f7', marginRight: '8px' }}></i> Large Plate Machining & Milling
                </h3>
                <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>
                  Surface facing, edge squaring, pocketing, and hole drilling for heavy steel plates and bolster plates up to 2.6 meters long with true planarity and parallelism.
                </p>
              </div>
              <div style={{ background: '#ffffff', padding: '1.8rem', borderRadius: '12px', borderLeft: '4px solid #ff5722', boxShadow: '0 4px 15px rgba(0,0,0,0.04)' }}>
                <h3 style={{ fontSize: '1.25rem', color: '#111827', marginBottom: '0.6rem' }}>
                  <i className="fas fa-boxes" style={{ color: '#ff5722', marginRight: '8px' }}></i> Heavy Castings & Fabrications
                </h3>
                <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>
                  High-torque milling and line boring for machine tool columns, pump volutes, gearbox housings, and fabricated structural frames with angular head side milling.
                </p>
              </div>
              <div style={{ background: '#ffffff', padding: '1.8rem', borderRadius: '12px', borderLeft: '4px solid #0ea5e9', boxShadow: '0 4px 15px rgba(0,0,0,0.04)' }}>
                <h3 style={{ fontSize: '1.25rem', color: '#111827', marginBottom: '0.6rem' }}>
                  <i className="fas fa-circle" style={{ color: '#0ea5e9', marginRight: '8px' }}></i> Large Diameter Component Machining
                </h3>
                <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>
                  Heavy VTL vertical turning for large ring gears, slew bearings, heavy flanges, and cylindrical casings up to 800mm swing without horizontal sagging or ovality.
                </p>
              </div>
            </div>
          </div>

          {/* Heavy VTL & Large Component Showcase */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', marginBottom: '4rem', alignItems: 'center' }}>
            <div>
              <img
                src="/images/portfolio-heavy-vtl.webp"
                alt="Heavy VTL and Large Size Industrial Components Coimbatore"
                width={800}
                height={600}
                style={{ width: '100%', height: 'auto', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
              />
            </div>
            <div>
              <h2 style={{ fontSize: '1.8rem', color: 'var(--primary-color)', marginBottom: '1rem' }}>
                Why Choose Our Heavy CNC Machining Services
              </h2>
              <p style={{ color: 'var(--text-dark)', marginBottom: '1rem', lineHeight: '1.7' }}>
                We partner with heavy engineering corporations across India (including Shanthi Gear, Murugappa Group, and Bharani Hydraulics):
              </p>
              <ul style={{ paddingLeft: '1.2rem', color: '#475569', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                <li><strong>Bridge-Type Rigidity:</strong> The twin-column frame of the KTM DCMC completely eliminates cantilever vibration, enabling aggressive roughing passes and fine finishing.</li>
                <li><strong>Integrated Logistics:</strong> We operate our own heavy transport vehicles for safe collection of raw castings and direct on-site delivery of finished parts.</li>
                <li><strong>Trimos & CMM Quality Control:</strong> Verification of heavy components with our Trimos V7 digital height gauge (up to 1023mm) and Zeiss 3D CMM.</li>
                <li><strong>Optimal Job Work Costing:</strong> Complete turnkey manufacturing or pure job-work service at cost-effective production rates.</li>
              </ul>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link href="/vtl-machining-coimbatore" className="btn btn-secondary" style={{ textDecoration: 'none' }}>
                  Explore VTL Machining
                </Link>
                <Link href="/industrial-casting-machining-services" className="btn btn-secondary" style={{ textDecoration: 'none' }}>
                  Casting Machining
                </Link>
              </div>
            </div>
          </div>

          {/* FAQs & Form */}
          <div id="quote-form" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem' }}>
            {/* FAQ Accordion */}
            <div>
              <h2 style={{ fontSize: '1.8rem', color: 'var(--primary-color)', marginBottom: '1.5rem' }}>
                Frequently Asked Questions on Heavy Machining
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <details style={{ background: '#f8f9fa', padding: '1.2rem', borderRadius: '8px', border: '1px solid #e2e8f0' }} open>
                  <summary style={{ fontWeight: '600', color: 'var(--primary-color)', cursor: 'pointer' }}>
                    What is the maximum part size you can machine on your Double Column center?
                  </summary>
                  <p style={{ marginTop: '0.8rem', color: 'var(--text-color)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                    Our KTM DCMC2618 Double Column Machining Center accommodates workpieces with axis travel of 2600mm (X), 2400mm (Y), and 1000mm (Z), handling heavy structural plates, machine beds, and massive valve blocks.
                  </p>
                </details>
                <details style={{ background: '#f8f9fa', padding: '1.2rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                  <summary style={{ fontWeight: '600', color: 'var(--primary-color)', cursor: 'pointer' }}>
                    What crane and material handling capacities do you have for big parts?
                  </summary>
                  <p style={{ marginTop: '0.8rem', color: 'var(--text-color)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                    Our 7,000 sq.ft facility on a 2-acre campus is outfitted with overhead heavy crane handling systems and broad loading bays designed specifically for safe loading, maneuvering, and unloading of multi-ton industrial castings and heavy steel plates.
                  </p>
                </details>
                <details style={{ background: '#f8f9fa', padding: '1.2rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                  <summary style={{ fontWeight: '600', color: 'var(--primary-color)', cursor: 'pointer' }}>
                    Can you perform 5-sided or angled machining on large components?
                  </summary>
                  <p style={{ marginTop: '0.8rem', color: 'var(--text-color)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                    Yes, our KTM Double Column machine is equipped with heavy-duty angular milling heads and high-pressure through-coolant, allowing multi-face machining of large plates and structures in a single clamping setup.
                  </p>
                </details>
                <details style={{ background: '#f8f9fa', padding: '1.2rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                  <summary style={{ fontWeight: '600', color: 'var(--primary-color)', cursor: 'pointer' }}>
                    What industries utilize your big size machining services?
                  </summary>
                  <p style={{ marginTop: '0.8rem', color: 'var(--text-color)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                    We serve heavy engineering industries including power generation, hydraulic press manufacturers, earthmoving equipment, cement and textile machine builders, gear manufacturers, and large pipeline infrastructure.
                  </p>
                </details>
                <details style={{ background: '#f8f9fa', padding: '1.2rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                  <summary style={{ fontWeight: '600', color: 'var(--primary-color)', cursor: 'pointer' }}>
                    What heavy materials do you machine?
                  </summary>
                  <p style={{ marginTop: '0.8rem', color: 'var(--text-color)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                    We machine heavy steel plates (IS 2062, Sailhard, Hardox), heavy grey iron castings (FG200/260), ductile iron (SG 400/15, 500/7), forged alloy blocks (42CrMo4, EN24), and stainless steel plates.
                  </p>
                </details>
              </div>
            </div>

            {/* Request for Quote Form */}
            <div className="contact-form" style={{ background: '#ffffff', padding: '2.2rem', borderRadius: '16px', boxShadow: '0 8px 30px rgba(0,0,0,0.06)', border: '1px solid #e2e8f0' }}>
              <h2 style={{ fontSize: '1.8rem', color: 'var(--primary-color)', marginBottom: '0.5rem' }}>
                Request Heavy Machining Quote
              </h2>
              <p style={{ fontSize: '0.9rem', color: '#64748b', marginBottom: '1.5rem' }}>
                Upload or submit your large component drawings and weight specifications for a detailed machining feasibility and tooling quote.
              </p>
              <form action="#" method="POST" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <input type="text" placeholder="Full Name *" required className="form-control" style={{ padding: '0.8rem', border: '1px solid #ddd', borderRadius: '6px' }} />
                <input type="email" placeholder="Business Email *" required className="form-control" style={{ padding: '0.8rem', border: '1px solid #ddd', borderRadius: '6px' }} />
                <input type="tel" placeholder="Phone Number *" required className="form-control" style={{ padding: '0.8rem', border: '1px solid #ddd', borderRadius: '6px' }} />
                <input type="text" placeholder="Company Name & City" className="form-control" style={{ padding: '0.8rem', border: '1px solid #ddd', borderRadius: '6px' }} />
                <textarea placeholder="Job Details: Dimensions (L x W x H), Part Weight (kg/tons), Material Grade, Delivery Schedule" rows={4} required className="form-control" style={{ padding: '0.8rem', border: '1px solid #ddd', borderRadius: '6px' }}></textarea>
                <button type="submit" className="submit-btn" style={{ background: 'var(--accent-color)', color: '#fff', border: 'none', padding: '1rem', borderRadius: '50px', fontWeight: 'bold', cursor: 'pointer', transition: 'var(--transition)' }}>
                  Submit Heavy RFQ
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

