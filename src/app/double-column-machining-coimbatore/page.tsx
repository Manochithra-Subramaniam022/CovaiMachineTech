import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Double Column Machining in Coimbatore | Double Column VMC Job Work',
  description: 'Heavy duty Double Column Machining in Coimbatore for large industrial components. KTM DCMC2618 (2600x2400x1000mm) bridge milling with angular head. Request an RFQ.',
  openGraph: {
    title: 'Double Column Machining in Coimbatore | Double Column VMC Job Work',
    description: 'Heavy duty Double Column Machining in Coimbatore for large industrial components. We machine structures up to 2600x2400mm with exceptional accuracy.',
    url: 'https://www.covaimachinetech.com/double-column-machining-coimbatore',
    siteName: 'Covai Machine Tech',
    images: [
      {
        url: 'https://www.covaimachinetech.com/images/machine-ktm-dcmc2618.webp',
        width: 800,
        height: 600,
        alt: 'KTM Double Column Machining Center DCMC2618 in Coimbatore',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.covaimachinetech.com/double-column-machining-coimbatore',
  },
};

export default function DoubleColumnMachiningCoimbatore() {
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
            "name": "Double Column Machining in Coimbatore",
            "item": "https://www.covaimachinetech.com/double-column-machining-coimbatore"
          }
        ]
      },
      {
        "@type": "Service",
        "serviceType": "Double Column Machining Services & Large Component Milling",
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
        "areaServed": {
          "@type": "City",
          "name": "Coimbatore"
        },
        "description": "Double Column Machining for large and heavy industrial components requiring high structural rigidity, angular milling, and precision tolerance."
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the capacity of your Double Column Machining Center?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our KTM DCMC2618 has a massive travel size of 2600mm x 2400mm x 1000mm with 20 tool pockets, through-spindle coolant, and heavy angular milling heads for multi-side access."
            }
          },
          {
            "@type": "Question",
            "name": "Why use Double Column Machining instead of standard VMC?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Double column (or bridge-type) machines offer superior rigidity and stability, allowing for heavy cutting on large workpieces without losing dimensional accuracy or suffering from spindle droop."
            }
          },
          {
            "@type": "Question",
            "name": "What kind of components do you machine on the DCMC?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We typically machine large valve bodies, pump casings, machine tool beds, aerospace structural parts, large bolster plates, and heavy die blocks."
            }
          },
          {
            "@type": "Question",
            "name": "How is quality maintained for such large components?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Even for massive parts, we ensure strict quality control using calibrated measuring instruments like our Trimos V7 2D Height Gauge (up to 1023mm) and Carl Zeiss CMM where applicable."
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
              <li style={{ color: 'var(--text-dark)', fontWeight: '600' }}>Double Column Machining in Coimbatore</li>
            </ol>
          </nav>

          <div className="section-header" style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{ display: 'inline-block', background: 'rgba(168, 85, 247, 0.12)', color: '#9333ea', padding: '6px 16px', borderRadius: '30px', fontSize: '0.85rem', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '1rem', border: '1px solid rgba(168, 85, 247, 0.3)' }}>
              BRIDGE TYPE DCMC
            </div>
            <h1 style={{ fontSize: '2.5rem', color: 'var(--primary-color)', marginBottom: '1rem' }}>Double Column Machining in Coimbatore (Large Components)</h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-color)', maxWidth: '800px', margin: '0 auto' }}>
              Massive structural rigidity and ultra-precision for oversized industrial workpieces. Featuring our KTM DCMC2618 (2600 x 2400 x 1000 mm) center with angular head.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', marginBottom: '4rem', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: '1.8rem', color: 'var(--primary-color)', marginBottom: '1rem' }}>Technical Machine Capacity</h2>
              <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '2rem' }}>
                <tbody>
                  <tr style={{ borderBottom: '1px solid #ddd' }}>
                    <th style={{ padding: '1rem', textAlign: 'left', backgroundColor: '#f8f9fa' }}>Machine Type</th>
                    <td style={{ padding: '1rem' }}>Double Column Machining Center (Bridge Type)</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #ddd' }}>
                    <th style={{ padding: '1rem', textAlign: 'left', backgroundColor: '#f8f9fa' }}>Bed Travel (X/Y/Z)</th>
                    <td style={{ padding: '1rem' }}>2600 mm x 2400 mm x 1000 mm</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #ddd' }}>
                    <th style={{ padding: '1rem', textAlign: 'left', backgroundColor: '#f8f9fa' }}>Key Machine</th>
                    <td style={{ padding: '1rem' }}>KTM DCMC2618</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #ddd' }}>
                    <th style={{ padding: '1rem', textAlign: 'left', backgroundColor: '#f8f9fa' }}>Special Features</th>
                    <td style={{ padding: '1rem' }}>Through Coolant, Angular Head Attachment, 20 Pockets ATC</td>
                  </tr>
                  <tr>
                    <th style={{ padding: '1rem', textAlign: 'left', backgroundColor: '#f8f9fa' }}>Applications</th>
                    <td style={{ padding: '1rem' }}>Large Plates, Machine Bases, Heavy Valve Blocks</td>
                  </tr>
                </tbody>
              </table>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a href="#quote-form" className="btn btn-primary" style={{ padding: '12px 28px', textDecoration: 'none' }}>Get a Quote</a>
                <Link href="/heavy-machining-big-parts-coimbatore" className="btn btn-secondary" style={{ padding: '12px 28px', textDecoration: 'none' }}>Heavy Parts Overview</Link>
              </div>
            </div>
            <div>
              <img src="/images/machine-ktm-dcmc2618.webp" alt="Double Column CNC Machining Center Coimbatore KTM DCMC2618" width={800} height={600} style={{ width: '100%', height: 'auto', borderRadius: '10px', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }} />
            </div>
          </div>

          {/* Quick Links to Related Services */}
          <div style={{ background: '#f8f9fa', padding: '2.5rem', borderRadius: '16px', marginBottom: '4rem', border: '1px solid #e2e8f0' }}>
            <h2 style={{ fontSize: '1.6rem', color: 'var(--primary-color)', marginBottom: '1.2rem', textAlign: 'center' }}>
              Related Heavy Machining Capabilities
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.2rem' }}>
              <Link href="/heavy-machining-big-parts-coimbatore" style={{ background: '#fff', padding: '1.2rem', borderRadius: '10px', border: '1px solid #e2e8f0', textDecoration: 'none', color: '#111827', display: 'block' }}>
                <strong style={{ color: 'var(--primary-color)', display: 'block', marginBottom: '0.3rem' }}>Big Size & Heavy Parts &rarr;</strong>
                <span style={{ fontSize: '0.85rem', color: '#64748b' }}>Heavy engineering milling, large plates & structures.</span>
              </Link>
              <Link href="/vtl-machining-coimbatore" style={{ background: '#fff', padding: '1.2rem', borderRadius: '10px', border: '1px solid #e2e8f0', textDecoration: 'none', color: '#111827', display: 'block' }}>
                <strong style={{ color: 'var(--primary-color)', display: 'block', marginBottom: '0.3rem' }}>Heavy VTL Turning &rarr;</strong>
                <span style={{ fontSize: '0.85rem', color: '#64748b' }}>Vertical turning up to 700mm diameter for large rings.</span>
              </Link>
              <Link href="/valve-component-machining-coimbatore" style={{ background: '#fff', padding: '1.2rem', borderRadius: '10px', border: '1px solid #e2e8f0', textDecoration: 'none', color: '#111827', display: 'block' }}>
                <strong style={{ color: 'var(--primary-color)', display: 'block', marginBottom: '0.3rem' }}>Large Valve Machining &rarr;</strong>
                <span style={{ fontSize: '0.85rem', color: '#64748b' }}>Gate, ball, and check valve bodies up to Class 2500.</span>
              </Link>
              <Link href="/cmm-inspection-services-coimbatore" style={{ background: '#fff', padding: '1.2rem', borderRadius: '10px', border: '1px solid #e2e8f0', textDecoration: 'none', color: '#111827', display: 'block' }}>
                <strong style={{ color: 'var(--primary-color)', display: 'block', marginBottom: '0.3rem' }}>Trimos & CMM Inspection &rarr;</strong>
                <span style={{ fontSize: '0.85rem', color: '#64748b' }}>Large component height measurement up to 1023mm.</span>
              </Link>
            </div>
          </div>

          <div id="quote-form" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
            {/* FAQ Accordion */}
            <div>
              <h2 style={{ fontSize: '1.8rem', color: 'var(--primary-color)', marginBottom: '1.5rem' }}>Frequently Asked Questions</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <details style={{ background: '#f8f9fa', padding: '1rem', borderRadius: '8px', cursor: 'pointer' }} open>
                  <summary style={{ fontWeight: '600', color: 'var(--primary-color)' }}>What is the capacity of your Double Column Machining Center?</summary>
                  <p style={{ marginTop: '0.5rem', color: 'var(--text-color)' }}>Our KTM DCMC2618 has a massive travel size of 2600mm x 2400mm x 1000mm with 20 tool pockets, through-spindle coolant, and heavy angular milling heads for multi-side access.</p>
                </details>
                <details style={{ background: '#f8f9fa', padding: '1rem', borderRadius: '8px', cursor: 'pointer' }}>
                  <summary style={{ fontWeight: '600', color: 'var(--primary-color)' }}>Why use Double Column Machining instead of standard VMC?</summary>
                  <p style={{ marginTop: '0.5rem', color: 'var(--text-color)' }}>Double column (or bridge-type) machines offer superior rigidity and stability, allowing for heavy cutting on large workpieces without losing dimensional accuracy or suffering from spindle droop.</p>
                </details>
                <details style={{ background: '#f8f9fa', padding: '1rem', borderRadius: '8px', cursor: 'pointer' }}>
                  <summary style={{ fontWeight: '600', color: 'var(--primary-color)' }}>What kind of components do you machine on the DCMC?</summary>
                  <p style={{ marginTop: '0.5rem', color: 'var(--text-color)' }}>We typically machine large valve bodies, pump casings, machine tool beds, aerospace structural parts, large bolster plates, and heavy die blocks.</p>
                </details>
                <details style={{ background: '#f8f9fa', padding: '1rem', borderRadius: '8px', cursor: 'pointer' }}>
                  <summary style={{ fontWeight: '600', color: 'var(--primary-color)' }}>How is quality maintained for such large components?</summary>
                  <p style={{ marginTop: '0.5rem', color: 'var(--text-color)' }}>Even for massive parts, we ensure strict quality control using calibrated measuring instruments like our Trimos V7 2D Height Gauge (up to 1023mm) and Carl Zeiss CMM where applicable.</p>
                </details>
              </div>
            </div>

            {/* Request for Quote Form */}
            <div className="contact-form" style={{ background: '#ffffff', padding: '2rem', borderRadius: '12px', boxShadow: '0 5px 20px rgba(0,0,0,0.05)' }}>
              <h2 style={{ fontSize: '1.8rem', color: 'var(--primary-color)', marginBottom: '1.5rem' }}>Request a Quote (RFQ)</h2>
              <form action="#" method="POST" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <input type="text" placeholder="Full Name" required className="form-control" style={{ padding: '0.8rem', border: '1px solid #ddd', borderRadius: '6px' }} />
                <input type="email" placeholder="Business Email" required className="form-control" style={{ padding: '0.8rem', border: '1px solid #ddd', borderRadius: '6px' }} />
                <input type="text" placeholder="Company Name" className="form-control" style={{ padding: '0.8rem', border: '1px solid #ddd', borderRadius: '6px' }} />
                <textarea placeholder="Technical Requirements (Material, Quantity, Tolerances)" rows={4} required className="form-control" style={{ padding: '0.8rem', border: '1px solid #ddd', borderRadius: '6px' }}></textarea>
                <button type="submit" className="submit-btn" style={{ background: 'var(--accent-color)', color: '#fff', border: 'none', padding: '1rem', borderRadius: '50px', fontWeight: 'bold', cursor: 'pointer' }}>Submit RFQ</button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
