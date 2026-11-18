import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'CNC Turning Job Work in Coimbatore | Precision Lathe Turning Machine Shop',
  description: 'Specialist CNC turning job work in Coimbatore. Equipped with LMW LL20TL5 & LL20TL10 lathe centers with steady rest up to 1100mm length and 320mm turning dia. Fast RFQ.',
  openGraph: {
    title: 'CNC Turning Job Work in Coimbatore | Precision Lathe Turning Machine Shop',
    description: 'Precision CNC lathe job work, shaft machining, boring and turning in Coimbatore. LMW CNC turning centers up to 1100mm turning length.',
    url: 'https://covaimachinetech.com/cnc-turning-job-work-coimbatore',
    siteName: 'Covai Machine Tech',
    images: [
      {
        url: 'https://covaimachinetech.com/images/portfolio-turned-parts.webp',
        width: 800,
        height: 600,
        alt: 'High Precision CNC Turned Parts and Shaft Machining in Coimbatore',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  alternates: {
    canonical: 'https://covaimachinetech.com/cnc-turning-job-work-coimbatore',
  },
};

export default function CNCTurningJobWorkCoimbatore() {
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
            "name": "CNC Turning Job Work in Coimbatore",
            "item": "https://covaimachinetech.com/cnc-turning-job-work-coimbatore"
          }
        ]
      },
      {
        "@type": "Service",
        "serviceType": "CNC Turning and Precision Lathe Machining Services",
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
        "description": "High precision CNC turning job work, CNC lathe job work, shaft machining, boring and turning services in Coimbatore using LMW CNC turning centers with steady rest support."
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the maximum turning length and diameter for your CNC turning centers?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our LMW LL20TL10 with steady rest turns components up to 1100mm in length and 320mm in diameter, with a chuck diameter of 250mm. For shorter parts, our LMW LL20TL5 turns up to 500mm length."
            }
          },
          {
            "@type": "Question",
            "name": "What shaft machining capabilities do you provide?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We manufacture stepped shafts, spline shafts, pump rotor shafts, motor shafts, and eccentric shafts with steady rest support ensuring zero deflection, runout under 0.01mm, and bearing seat tolerances within h6/g6."
            }
          },
          {
            "@type": "Question",
            "name": "What materials do you machine on CNC lathes?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We machine alloy steels (EN8, EN19, EN24, EN31), stainless steels (SS304, SS316, 17-4PH), cast iron, ductile iron, brass, bronze, and high-nickel alloys."
            }
          },
          {
            "@type": "Question",
            "name": "Can you handle both small-batch job work and high-volume production?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we support both custom prototype development and continuous mass production job work ranging from 50 to 10,000+ pieces per month with automated cycle optimization."
            }
          },
          {
            "@type": "Question",
            "name": "How does steady rest machining improve shaft quality?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Slender shafts with high length-to-diameter ratios suffer from deflection and tool chatter without support. Our LMW steady rest stabilizes the workpiece, ensuring cylindrical consistency and mirror surface finishes throughout the length."
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
              <li style={{ color: 'var(--text-dark)', fontWeight: '600' }}>CNC Turning Job Work in Coimbatore</li>
            </ol>
          </nav>

          {/* Section Header */}
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{ display: 'inline-block', background: 'rgba(255, 87, 34, 0.12)', color: '#ff5722', padding: '6px 16px', borderRadius: '30px', fontSize: '0.85rem', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '1rem', border: '1px solid rgba(255, 87, 34, 0.25)' }}>
              PRECISION LMW LATHE CENTERS
            </div>
            <h1 style={{ fontSize: '2.5rem', color: 'var(--primary-color)', marginBottom: '1rem' }}>
              CNC Turning Job Work in Coimbatore (Turning Machine Shop & Centers)
            </h1>
            <p style={{ fontSize: '1.15rem', color: 'var(--text-color)', maxWidth: '850px', margin: '0 auto', lineHeight: '1.7' }}>
              High-speed, micron-accurate CNC turning and lathe job work in Coimbatore. Operating Lakshmi Machine Works (LMW) CNC turning centers with hydraulic steady rest support for shafts up to 1100mm in length.
            </p>
          </div>

          {/* Hero Technical Overview */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', marginBottom: '4rem', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: '1.8rem', color: 'var(--primary-color)', marginBottom: '1rem' }}>
                Turning Machine Center Specifications
              </h2>
              <p style={{ color: 'var(--text-dark)', marginBottom: '1.5rem', lineHeight: '1.7' }}>
                Our turning machine shop in Coimbatore specializes in tight tolerance cylindrical turning, deep boring, taper threading, internal grooving, and stepped shaft manufacturing for automotive, pump, and valve industries.
              </p>
              <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '2rem' }}>
                <tbody>
                  <tr style={{ borderBottom: '1px solid #ddd' }}>
                    <th style={{ padding: '0.9rem', textAlign: 'left', backgroundColor: '#f8f9fa' }}>Turning Centers</th>
                    <td style={{ padding: '0.9rem' }}>LMW LL20TL10 (Steady Rest) & LMW LL20TL5</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #ddd' }}>
                    <th style={{ padding: '0.9rem', textAlign: 'left', backgroundColor: '#f8f9fa' }}>Max Turning Length</th>
                    <td style={{ padding: '0.9rem' }}>Up to 1100 mm (with Steady Rest)</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #ddd' }}>
                    <th style={{ padding: '0.9rem', textAlign: 'left', backgroundColor: '#f8f9fa' }}>Max Turning Diameter</th>
                    <td style={{ padding: '0.9rem' }}>320 mm (Chuck Dia: 250 mm)</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #ddd' }}>
                    <th style={{ padding: '0.9rem', textAlign: 'left', backgroundColor: '#f8f9fa' }}>Turret Stations</th>
                    <td style={{ padding: '0.9rem' }}>8 Station Bi-directional Quick Indexing</td>
                  </tr>
                  <tr>
                    <th style={{ padding: '0.9rem', textAlign: 'left', backgroundColor: '#f8f9fa' }}>Common Components</th>
                    <td style={{ padding: '0.9rem' }}>Rotor Shafts, Bushings, Flanges, Valve Stems, Sleeves</td>
                  </tr>
                </tbody>
              </table>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a href="#quote-form" className="btn btn-primary" style={{ padding: '12px 28px', textDecoration: 'none' }}>Get Turning RFQ</a>
                <Link href="/vtl-machining-coimbatore" className="btn btn-secondary" style={{ padding: '12px 28px', textDecoration: 'none' }}>Large Diameter VTL (700mm)</Link>
              </div>
            </div>
            <div>
              <img
                src="/images/machine-lmw-ll20tl10.webp"
                alt="LMW LL20TL10 CNC Turning Center with Steady Rest in Coimbatore"
                width={800}
                height={600}
                style={{ width: '100%', height: 'auto', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
              />
            </div>
          </div>

          {/* Deep Content Section: Turning Operations */}
          <div style={{ background: '#f8f9fa', padding: '3rem', borderRadius: '16px', marginBottom: '4rem', border: '1px solid #e2e8f0' }}>
            <h2 style={{ fontSize: '1.9rem', color: 'var(--primary-color)', marginBottom: '1.2rem', textAlign: 'center' }}>
              Specialized CNC Turning & Lathe Job Work Capabilities
            </h2>
            <p style={{ color: 'var(--text-dark)', maxWidth: '900px', margin: '0 auto 2.5rem', textAlign: 'center', lineHeight: '1.8' }}>
              Equipped with heavy cast beds, hardened guideways, and programmable digital CNC controllers, our turning centers execute complex geometry with high repeatability and zero taper errors.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.8rem' }}>
              <div style={{ background: '#ffffff', padding: '1.8rem', borderRadius: '12px', borderLeft: '4px solid #ff5722', boxShadow: '0 4px 15px rgba(0,0,0,0.04)' }}>
                <h3 style={{ fontSize: '1.25rem', color: '#111827', marginBottom: '0.6rem' }}>
                  <i className="fas fa-arrows-alt-h" style={{ color: '#ff5722', marginRight: '8px' }}></i> Long Shaft Machining
                </h3>
                <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>
                  Slender drive shafts and pump rotors up to 1100mm turned with hydraulic steady rest support. We eliminate central deflection and chatter, holding runout under 0.01mm.
                </p>
              </div>
              <div style={{ background: '#ffffff', padding: '1.8rem', borderRadius: '12px', borderLeft: '4px solid #0ea5e9', boxShadow: '0 4px 15px rgba(0,0,0,0.04)' }}>
                <h3 style={{ fontSize: '1.25rem', color: '#111827', marginBottom: '0.6rem' }}>
                  <i className="fas fa-circle-notch" style={{ color: '#0ea5e9', marginRight: '8px' }}></i> CNC Boring and Turning
                </h3>
                <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>
                  Precision internal diameter boring, counterboring, and fine reaming for bearing seats, cylinder liners, and valve seats with H7 tolerances and superior roundness.
                </p>
              </div>
              <div style={{ background: '#ffffff', padding: '1.8rem', borderRadius: '12px', borderLeft: '4px solid #10b981', boxShadow: '0 4px 15px rgba(0,0,0,0.04)' }}>
                <h3 style={{ fontSize: '1.25rem', color: '#111827', marginBottom: '0.6rem' }}>
                  <i className="fas fa-cogs" style={{ color: '#10b981', marginRight: '8px' }}></i> CNC Production Job Work
                </h3>
                <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>
                  Repeat batch production for automotive, textile, and general engineering OEMs. Our quick tool-change turrets and optimized cycle times keep component costs competitive.
                </p>
              </div>
            </div>
          </div>

          {/* Turned Components Showcase */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', marginBottom: '4rem', alignItems: 'center' }}>
            <div>
              <img
                src="/images/portfolio-turned-parts.webp"
                alt="Precision CNC Lathe Turned Parts in Coimbatore"
                width={800}
                height={600}
                style={{ width: '100%', height: 'auto', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
              />
            </div>
            <div>
              <h2 style={{ fontSize: '1.8rem', color: 'var(--primary-color)', marginBottom: '1rem' }}>
                Materials & Precision Tolerance Grades
              </h2>
              <p style={{ color: 'var(--text-dark)', marginBottom: '1rem', lineHeight: '1.7' }}>
                We work across bar stock, forged blanks, and rough casting components to deliver finished machined parts ready for assembly:
              </p>
              <ul style={{ paddingLeft: '1.2rem', color: '#475569', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                <li><strong>Alloy Steels:</strong> EN8, EN19, EN24, EN31, 4140, 4340 heat-treated and case-hardened steels.</li>
                <li><strong>Stainless Steels:</strong> SS304, SS316, SS316L, 17-4PH, 410, 420 for chemical and food processing applications.</li>
                <li><strong>Non-Ferrous:</strong> Brass, Bronze (phosphor bronze, gunmetal), Aluminum alloys 6061, 7075.</li>
                <li><strong>Surface Finish:</strong> Consistent Ra 0.4 µm to 0.8 µm on critical bearing journals and seal diameters.</li>
              </ul>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link href="/valve-component-machining-coimbatore" className="btn btn-secondary" style={{ textDecoration: 'none' }}>
                  Explore Valve Machining
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
                Frequently Asked Questions on CNC Turning Job Work
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <details style={{ background: '#f8f9fa', padding: '1.2rem', borderRadius: '8px', border: '1px solid #e2e8f0' }} open>
                  <summary style={{ fontWeight: '600', color: 'var(--primary-color)', cursor: 'pointer' }}>
                    What is the maximum turning length and diameter for your CNC turning centers?
                  </summary>
                  <p style={{ marginTop: '0.8rem', color: 'var(--text-color)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                    Our LMW LL20TL10 with steady rest turns components up to 1100mm in length and 320mm in diameter, with a chuck diameter of 250mm. For shorter parts, our LMW LL20TL5 turns up to 500mm length.
                  </p>
                </details>
                <details style={{ background: '#f8f9fa', padding: '1.2rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                  <summary style={{ fontWeight: '600', color: 'var(--primary-color)', cursor: 'pointer' }}>
                    What shaft machining capabilities do you provide?
                  </summary>
                  <p style={{ marginTop: '0.8rem', color: 'var(--text-color)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                    We manufacture stepped shafts, spline shafts, pump rotor shafts, motor shafts, and eccentric shafts with steady rest support ensuring zero deflection, runout under 0.01mm, and bearing seat tolerances within h6/g6.
                  </p>
                </details>
                <details style={{ background: '#f8f9fa', padding: '1.2rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                  <summary style={{ fontWeight: '600', color: 'var(--primary-color)', cursor: 'pointer' }}>
                    What materials do you machine on CNC lathes?
                  </summary>
                  <p style={{ marginTop: '0.8rem', color: 'var(--text-color)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                    We machine alloy steels (EN8, EN19, EN24, EN31), stainless steels (SS304, SS316, 17-4PH), cast iron, ductile iron, brass, bronze, and high-nickel alloys.
                  </p>
                </details>
                <details style={{ background: '#f8f9fa', padding: '1.2rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                  <summary style={{ fontWeight: '600', color: 'var(--primary-color)', cursor: 'pointer' }}>
                    Can you handle both small-batch job work and high-volume production?
                  </summary>
                  <p style={{ marginTop: '0.8rem', color: 'var(--text-color)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                    Yes, we support both custom prototype development and continuous mass production job work ranging from 50 to 10,000+ pieces per month with automated cycle optimization.
                  </p>
                </details>
                <details style={{ background: '#f8f9fa', padding: '1.2rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                  <summary style={{ fontWeight: '600', color: 'var(--primary-color)', cursor: 'pointer' }}>
                    How does steady rest machining improve shaft quality?
                  </summary>
                  <p style={{ marginTop: '0.8rem', color: 'var(--text-color)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                    Slender shafts with high length-to-diameter ratios suffer from deflection and tool chatter without support. Our LMW steady rest stabilizes the workpiece, ensuring cylindrical consistency and mirror surface finishes throughout the length.
                  </p>
                </details>
              </div>
            </div>

            {/* Request for Quote Form */}
            <div className="contact-form" style={{ background: '#ffffff', padding: '2.2rem', borderRadius: '16px', boxShadow: '0 8px 30px rgba(0,0,0,0.06)', border: '1px solid #e2e8f0' }}>
              <h2 style={{ fontSize: '1.8rem', color: 'var(--primary-color)', marginBottom: '0.5rem' }}>
                Request a CNC Turning Quote
              </h2>
              <p style={{ fontSize: '0.9rem', color: '#64748b', marginBottom: '1.5rem' }}>
                Submit your turned part specifications or shaft drawings for competitive job work rates and guaranteed turnaround.
              </p>
              <form action="#" method="POST" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <input type="text" placeholder="Full Name *" required className="form-control" style={{ padding: '0.8rem', border: '1px solid #ddd', borderRadius: '6px' }} />
                <input type="email" placeholder="Business Email *" required className="form-control" style={{ padding: '0.8rem', border: '1px solid #ddd', borderRadius: '6px' }} />
                <input type="tel" placeholder="Phone Number *" required className="form-control" style={{ padding: '0.8rem', border: '1px solid #ddd', borderRadius: '6px' }} />
                <input type="text" placeholder="Company Name" className="form-control" style={{ padding: '0.8rem', border: '1px solid #ddd', borderRadius: '6px' }} />
                <textarea placeholder="Job Requirements: Turning Length, Diameter, Material Grade, Monthly/Batch Quantity" rows={4} required className="form-control" style={{ padding: '0.8rem', border: '1px solid #ddd', borderRadius: '6px' }}></textarea>
                <button type="submit" className="submit-btn" style={{ background: 'var(--accent-color)', color: '#fff', border: 'none', padding: '1rem', borderRadius: '50px', fontWeight: 'bold', cursor: 'pointer', transition: 'var(--transition)' }}>
                  Submit Turning RFQ
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

