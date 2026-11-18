import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Precision Machining in Coimbatore | Non Standard & Critical Jobs | Covai Machine Tech',
  description: 'ISO 9001:2015 certified precision machining in Coimbatore. Specialist in non standard machining, critical jobs, high accuracy components, and tight tolerance CNC manufacturing.',
  openGraph: {
    title: 'Precision Machining in Coimbatore | Non Standard & Critical Jobs',
    description: 'Specialist in non standard machining, critical engineering jobs, and high accuracy components in Coimbatore. ISO 9001:2015 certified facility.',
    url: 'https://covaimachinetech.com/precision-machining-coimbatore',
    siteName: 'Covai Machine Tech',
    images: [
      {
        url: 'https://covaimachinetech.com/images/portfolio-inconel-steel.webp',
        width: 800,
        height: 600,
        alt: 'Precision Machining of Inconel and Alloy Steel Components in Coimbatore',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  alternates: {
    canonical: 'https://covaimachinetech.com/precision-machining-coimbatore',
  },
};

export default function PrecisionMachiningCoimbatore() {
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
            "name": "Precision Machining in Coimbatore",
            "item": "https://covaimachinetech.com/precision-machining-coimbatore"
          }
        ]
      },
      {
        "@type": "Service",
        "serviceType": "Precision Machining & Non Standard Critical Jobs",
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
        "description": "High precision CNC machining, non-standard machining, and critical jobs machining with micron tolerances in Coimbatore, verified on Carl Zeiss CMM."
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What defines 'non standard machining' at Covai Machine Tech?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Non standard machining involves bespoke geometries, complex multi-axis contours, non-catalogue thread pitches, deep boring, or irregular castings that standard production lines cannot handle. We specialize in custom fixturing, tooling design, and specialized multi-axis CNC setups for these complex jobs."
            }
          },
          {
            "@type": "Question",
            "name": "What dimensional tolerances can you achieve for critical jobs machining?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We routinely hold linear tolerances down to ±0.005mm (5 microns) and bore concentricity within 0.008mm, backed by our Carl Zeiss Spectrum Verity 3D CMM and Trimos V7 digital height gauges in a climate-controlled inspection bay."
            }
          },
          {
            "@type": "Question",
            "name": "What difficult materials do you machine for precision components?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We handle difficult-to-machine alloys including Inconel 625/718, Super Duplex Stainless Steel, Monel, Titanium, SS 316L, 17-4 PH, and high-nickel alloys alongside precision grey cast iron (FG 260) and ductile iron (SG 500/7)."
            }
          },
          {
            "@type": "Question",
            "name": "Can you handle prototype to medium-batch precision machining?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We support both First Article Prototyping for critical R&D jobs and regular production batches from 10 to 5,000+ units per month with dedicated tooling setups and PPAP documentation."
            }
          },
          {
            "@type": "Question",
            "name": "How do you guarantee quality for accuracy components in Coimbatore?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "As an ISO 9001:2015 certified manufacturer (Cert No: 25MEQTH25), every critical dimension undergoes 100% CMM inspection, surface roughness testing, and complete traceability reporting before dispatch."
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
              <li style={{ color: 'var(--text-dark)', fontWeight: '600' }}>Precision Machining in Coimbatore</li>
            </ol>
          </nav>

          {/* Section Header */}
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{ display: 'inline-block', background: 'rgba(255, 87, 34, 0.12)', color: '#ff5722', padding: '6px 16px', borderRadius: '30px', fontSize: '0.85rem', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '1rem', border: '1px solid rgba(255, 87, 34, 0.25)' }}>
              ISO 9001:2015 CERTIFIED PRECISION
            </div>
            <h1 style={{ fontSize: '2.5rem', color: 'var(--primary-color)', marginBottom: '1rem' }}>
              Precision Machining in Coimbatore (Non-Standard & Critical Jobs)
            </h1>
            <p style={{ fontSize: '1.15rem', color: 'var(--text-color)', maxWidth: '850px', margin: '0 auto', lineHeight: '1.7' }}>
              Covai Machine Tech delivers high-precision machining, custom non-standard machining, and critical jobs machining for automotive, aerospace, valve engineering, and defense sectors in Coimbatore. Verified to 5-micron accuracy on our Carl Zeiss 3D CMM.
            </p>
          </div>

          {/* Hero Highlight Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', marginBottom: '4rem', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: '1.8rem', color: 'var(--primary-color)', marginBottom: '1rem' }}>
                Technical Capabilities for Critical Engineering Jobs
              </h2>
              <p style={{ color: 'var(--text-dark)', marginBottom: '1.5rem', lineHeight: '1.7' }}>
                When drawings demand tight dimensional tolerances, intricate geometric profiles, or exotic materials, ordinary machine shops face high rejection rates. Our 2-acre facility in Karumathampatti combines advanced 4-Axis VMC milling, steady-rest CNC turning, and climate-controlled CMM metrology to execute non standard and critical jobs with zero defect tolerances.
              </p>
              <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '2rem' }}>
                <tbody>
                  <tr style={{ borderBottom: '1px solid #ddd' }}>
                    <th style={{ padding: '0.9rem', textAlign: 'left', backgroundColor: '#f8f9fa' }}>Achievable Tolerances</th>
                    <td style={{ padding: '0.9rem' }}>±0.005 mm (5 Microns)</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #ddd' }}>
                    <th style={{ padding: '0.9rem', textAlign: 'left', backgroundColor: '#f8f9fa' }}>Inspection Guarantee</th>
                    <td style={{ padding: '0.9rem' }}>100% Carl Zeiss Spectrum Verity 3D CMM</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #ddd' }}>
                    <th style={{ padding: '0.9rem', textAlign: 'left', backgroundColor: '#f8f9fa' }}>Exotic & Tough Alloys</th>
                    <td style={{ padding: '0.9rem' }}>Inconel, Monel, Duplex, SS 316, Titanium, Tool Steels</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #ddd' }}>
                    <th style={{ padding: '0.9rem', textAlign: 'left', backgroundColor: '#f8f9fa' }}>Multi-Axis Precision</th>
                    <td style={{ padding: '0.9rem' }}>4-Axis U-CAM Rotary Tables + Angular Milling Heads</td>
                  </tr>
                  <tr>
                    <th style={{ padding: '0.9rem', textAlign: 'left', backgroundColor: '#f8f9fa' }}>Production Scope</th>
                    <td style={{ padding: '0.9rem' }}>Prototypes, Pre-series, Batch Job Work, Critical Assemblies</td>
                  </tr>
                </tbody>
              </table>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a href="#quote-form" className="btn btn-primary" style={{ padding: '12px 28px', textDecoration: 'none' }}>Request Critical Job Quote</a>
                <Link href="/cmm-inspection-services-coimbatore" className="btn btn-secondary" style={{ padding: '12px 28px', textDecoration: 'none' }}>View CMM Inspection</Link>
              </div>
            </div>
            <div>
              <img
                src="/images/portfolio-inconel-steel.webp"
                alt="Precision Machining in Coimbatore for Non-Standard Components"
                width={800}
                height={600}
                style={{ width: '100%', height: 'auto', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
              />
            </div>
          </div>

          {/* Deep Content Section 1: Non-Standard & Critical Machining Explained */}
          <div style={{ background: '#f8f9fa', padding: '3rem', borderRadius: '16px', marginBottom: '4rem', border: '1px solid #e2e8f0' }}>
            <h2 style={{ fontSize: '1.9rem', color: 'var(--primary-color)', marginBottom: '1.2rem', textAlign: 'center' }}>
              Why Covai Machine Tech Excels in Non Standard & Critical Jobs
            </h2>
            <p style={{ color: 'var(--text-dark)', maxWidth: '900px', margin: '0 auto 2.5rem', textAlign: 'center', lineHeight: '1.8' }}>
              In modern manufacturing, not all components fit standard CNC cycles. Non-standard machining requires custom tooling geometries, engineered clamping fixtures to resist tool chatter, deep-hole boring with vibration damping, and stringent GD&T verification.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.8rem' }}>
              <div style={{ background: '#ffffff', padding: '1.8rem', borderRadius: '12px', borderLeft: '4px solid #ff5722', boxShadow: '0 4px 15px rgba(0,0,0,0.04)' }}>
                <h3 style={{ fontSize: '1.25rem', color: '#111827', marginBottom: '0.6rem' }}>
                  <i className="fas fa-bullseye" style={{ color: '#ff5722', marginRight: '8px' }}></i> Critical Jobs Machining
                </h3>
                <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>
                  High-risk components such as high-pressure valve stems, turbine rings, pump rotor shafts, and gear casings where failure is not an option. We execute strict process routing and in-process dimensional audits.
                </p>
              </div>
              <div style={{ background: '#ffffff', padding: '1.8rem', borderRadius: '12px', borderLeft: '4px solid #0ea5e9', boxShadow: '0 4px 15px rgba(0,0,0,0.04)' }}>
                <h3 style={{ fontSize: '1.25rem', color: '#111827', marginBottom: '0.6rem' }}>
                  <i className="fas fa-drafting-compass" style={{ color: '#0ea5e9', marginRight: '8px' }}></i> Non Standard Custom Geometry
                </h3>
                <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>
                  Bespoke components engineered from custom CAD models or 2D legacy prints. We design dedicated soft jaws, chuck fixtures, and angular setups to machine unusual angles without multiple rechucking errors.
                </p>
              </div>
              <div style={{ background: '#ffffff', padding: '1.8rem', borderRadius: '12px', borderLeft: '4px solid #10b981', boxShadow: '0 4px 15px rgba(0,0,0,0.04)' }}>
                <h3 style={{ fontSize: '1.25rem', color: '#111827', marginBottom: '0.6rem' }}>
                  <i className="fas fa-microchip" style={{ color: '#10b981', marginRight: '8px' }}></i> Accuracy Components in Coimbatore
                </h3>
                <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>
                  Specialized turning and milling for precision sub-assemblies requiring h6/g6 shaft fits, H7 bore reaming, pitch circle diameter (PCD) accuracy within 10 microns, and surface finishes down to Ra 0.4 µm.
                </p>
              </div>
            </div>
          </div>

          {/* Machine Fleet Supporting Precision Machining */}
          <div style={{ marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '1.9rem', color: 'var(--primary-color)', marginBottom: '1.2rem', textAlign: 'center' }}>
              Advanced Machinery Powering Our Precision Machining Services
            </h2>
            <p style={{ color: '#64748b', textAlign: 'center', maxWidth: '750px', margin: '0 auto 2.5rem' }}>
              We invest in rigid, high-performance machinery from global leaders (LMW, BFW, AMS, KTM, Carl Zeiss) to ensure thermal stability and dynamic stiffness during cutting.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
              <div style={{ border: '1px solid #e2e8f0', borderRadius: '12px', padding: '1.5rem', background: '#fff' }}>
                <h3 style={{ fontSize: '1.15rem', color: 'var(--primary-color)', marginBottom: '0.5rem' }}>4-Axis VMC Machining</h3>
                <p style={{ fontSize: '0.9rem', color: '#475569', marginBottom: '0.8rem' }}><strong>BFW BMC45TC24++</strong> with 4th Axis U-CAM rotary table and column raiser for multi-angle profiling in a single clamping.</p>
                <Link href="/vmc-machining-coimbatore" style={{ fontSize: '0.88rem', color: 'var(--accent-color)', fontWeight: '600', textDecoration: 'none' }}>Learn more about VMC &rarr;</Link>
              </div>
              <div style={{ border: '1px solid #e2e8f0', borderRadius: '12px', padding: '1.5rem', background: '#fff' }}>
                <h3 style={{ fontSize: '1.15rem', color: 'var(--primary-color)', marginBottom: '0.5rem' }}>Precision CNC Turning</h3>
                <p style={{ fontSize: '0.9rem', color: '#475569', marginBottom: '0.8rem' }}><strong>LMW LL20TL10 with Steady Rest</strong> supporting up to 1100mm turning length with zero vibration and precision concentricity.</p>
                <Link href="/cnc-turning-job-work-coimbatore" style={{ fontSize: '0.88rem', color: 'var(--accent-color)', fontWeight: '600', textDecoration: 'none' }}>Explore CNC Turning &rarr;</Link>
              </div>
              <div style={{ border: '1px solid #e2e8f0', borderRadius: '12px', padding: '1.5rem', background: '#fff' }}>
                <h3 style={{ fontSize: '1.15rem', color: 'var(--primary-color)', marginBottom: '0.5rem' }}>Large Component Milling</h3>
                <p style={{ fontSize: '0.9rem', color: '#475569', marginBottom: '0.8rem' }}><strong>AMS 1690V-50</strong> (1800mm travel) and <strong>KTM Double Column</strong> (2600mm bed) for oversized critical parts.</p>
                <Link href="/double-column-machining-coimbatore" style={{ fontSize: '0.88rem', color: 'var(--accent-color)', fontWeight: '600', textDecoration: 'none' }}>Explore Double Column &rarr;</Link>
              </div>
              <div style={{ border: '1px solid #e2e8f0', borderRadius: '12px', padding: '1.5rem', background: '#fff' }}>
                <h3 style={{ fontSize: '1.15rem', color: 'var(--primary-color)', marginBottom: '0.5rem' }}>Zeiss 3D CMM Verification</h3>
                <p style={{ fontSize: '0.9rem', color: '#475569', marginBottom: '0.8rem' }}><strong>Carl Zeiss Spectrum Verity 9126</strong> scanning probe measuring true position, runout, cylindricity, and surface profiles.</p>
                <Link href="/cmm-inspection-services-coimbatore" style={{ fontSize: '0.88rem', color: 'var(--accent-color)', fontWeight: '600', textDecoration: 'none' }}>Discover CMM Services &rarr;</Link>
              </div>
            </div>
          </div>

          {/* FAQs & RFQ Section */}
          <div id="quote-form" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', marginTop: '2rem' }}>
            {/* FAQ Accordion */}
            <div>
              <h2 style={{ fontSize: '1.8rem', color: 'var(--primary-color)', marginBottom: '1.5rem' }}>
                Frequently Asked Questions on Precision Machining
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <details style={{ background: '#f8f9fa', padding: '1.2rem', borderRadius: '8px', border: '1px solid #e2e8f0' }} open>
                  <summary style={{ fontWeight: '600', color: 'var(--primary-color)', cursor: 'pointer' }}>
                    What defines 'non standard machining' at Covai Machine Tech?
                  </summary>
                  <p style={{ marginTop: '0.8rem', color: 'var(--text-color)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                    Non standard machining involves bespoke geometries, complex multi-axis contours, non-catalogue thread pitches, deep boring, or irregular castings that standard production lines cannot handle. We specialize in custom fixturing, tooling design, and specialized multi-axis CNC setups for these complex jobs.
                  </p>
                </details>
                <details style={{ background: '#f8f9fa', padding: '1.2rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                  <summary style={{ fontWeight: '600', color: 'var(--primary-color)', cursor: 'pointer' }}>
                    What dimensional tolerances can you achieve for critical jobs machining?
                  </summary>
                  <p style={{ marginTop: '0.8rem', color: 'var(--text-color)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                    We routinely hold linear tolerances down to ±0.005mm (5 microns) and bore concentricity within 0.008mm, backed by our Carl Zeiss Spectrum Verity 3D CMM and Trimos V7 digital height gauges in a climate-controlled inspection bay.
                  </p>
                </details>
                <details style={{ background: '#f8f9fa', padding: '1.2rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                  <summary style={{ fontWeight: '600', color: 'var(--primary-color)', cursor: 'pointer' }}>
                    What difficult materials do you machine for precision components?
                  </summary>
                  <p style={{ marginTop: '0.8rem', color: 'var(--text-color)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                    We handle difficult-to-machine alloys including Inconel 625/718, Super Duplex Stainless Steel, Monel, Titanium, SS 316L, 17-4 PH, and high-nickel alloys alongside precision grey cast iron (FG 260) and ductile iron (SG 500/7).
                  </p>
                </details>
                <details style={{ background: '#f8f9fa', padding: '1.2rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                  <summary style={{ fontWeight: '600', color: 'var(--primary-color)', cursor: 'pointer' }}>
                    Can you handle prototype to medium-batch precision machining?
                  </summary>
                  <p style={{ marginTop: '0.8rem', color: 'var(--text-color)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                    Yes. We support both First Article Prototyping for critical R&D jobs and regular production batches from 10 to 5,000+ units per month with dedicated tooling setups and PPAP documentation.
                  </p>
                </details>
                <details style={{ background: '#f8f9fa', padding: '1.2rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                  <summary style={{ fontWeight: '600', color: 'var(--primary-color)', cursor: 'pointer' }}>
                    How do you guarantee quality for accuracy components in Coimbatore?
                  </summary>
                  <p style={{ marginTop: '0.8rem', color: 'var(--text-color)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                    As an ISO 9001:2015 certified manufacturer (Cert No: 25MEQTH25), every critical dimension undergoes 100% CMM inspection, surface roughness testing, and complete traceability reporting before dispatch.
                  </p>
                </details>
              </div>
            </div>

            {/* Request for Quote Form */}
            <div className="contact-form" style={{ background: '#ffffff', padding: '2.2rem', borderRadius: '16px', boxShadow: '0 8px 30px rgba(0,0,0,0.06)', border: '1px solid #e2e8f0' }}>
              <h2 style={{ fontSize: '1.8rem', color: 'var(--primary-color)', marginBottom: '0.5rem' }}>
                Request an RFQ for Critical Jobs
              </h2>
              <p style={{ fontSize: '0.9rem', color: '#64748b', marginBottom: '1.5rem' }}>
                Send your 2D/3D component drawings (PDF, STEP, DXF) for a rapid engineering feasibility review and quotation within 24 hours.
              </p>
              <form action="#" method="POST" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <input type="text" placeholder="Full Name *" required className="form-control" style={{ padding: '0.8rem', border: '1px solid #ddd', borderRadius: '6px' }} />
                <input type="email" placeholder="Business Email *" required className="form-control" style={{ padding: '0.8rem', border: '1px solid #ddd', borderRadius: '6px' }} />
                <input type="tel" placeholder="Phone / WhatsApp Number *" required className="form-control" style={{ padding: '0.8rem', border: '1px solid #ddd', borderRadius: '6px' }} />
                <input type="text" placeholder="Company Name & Location" className="form-control" style={{ padding: '0.8rem', border: '1px solid #ddd', borderRadius: '6px' }} />
                <textarea placeholder="Job Details: Material Grade, Quantity, Critical Tolerances, Special Non-Standard Features" rows={4} required className="form-control" style={{ padding: '0.8rem', border: '1px solid #ddd', borderRadius: '6px' }}></textarea>
                <button type="submit" className="submit-btn" style={{ background: 'var(--accent-color)', color: '#fff', border: 'none', padding: '1rem', borderRadius: '50px', fontWeight: 'bold', cursor: 'pointer', transition: 'var(--transition)' }}>
                  Submit Precision RFQ
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

