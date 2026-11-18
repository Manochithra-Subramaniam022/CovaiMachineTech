import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'VTL Machining in Coimbatore | Vertical Turning Lathe Job Work | Covai Machine Tech',
  description: 'Heavy duty VTL machining services in Coimbatore. We handle components up to 700mm in turning diameter & 800mm swing. Precision vertical turning lathe job work.',
  openGraph: {
    title: 'VTL Machining in Coimbatore | Vertical Turning Lathe Job Work',
    description: 'Heavy duty VTL machining services in Coimbatore. We handle components up to 700mm in turning diameter and 800mm swing.',
    url: 'https://covaimachinetech.com/vtl-machining-coimbatore',
    siteName: 'Covai Machine Tech',
    images: [
      {
        url: 'https://covaimachinetech.com/images/machine-bfw-bvl700h.webp',
        width: 800,
        height: 600,
        alt: 'BFW BVL 700H Heavy Vertical Turning Lathe VTL in Coimbatore',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  alternates: {
    canonical: 'https://covaimachinetech.com/vtl-machining-coimbatore',
  },
};

export default function VTLMachiningCoimbatore() {
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
            "name": "VTL Machining in Coimbatore",
            "item": "https://covaimachinetech.com/vtl-machining-coimbatore"
          }
        ]
      },
      {
        "@type": "Service",
        "serviceType": "Vertical Turning Lathe (VTL) Machining Services",
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
        "description": "Heavy Vertical Turning Lathe (VTL) machining for large cylindrical components, large diameter flanges, valve bodies, and pump casings in Coimbatore."
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the maximum turning diameter for your VTL machines?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our BFW BVL 700H Vertical Turning Lathe can accommodate components with a maximum turning diameter of up to 700mm and maximum swing diameter of 800mm with a 12-pocket automatic turret."
            }
          },
          {
            "@type": "Question",
            "name": "When should I choose VTL machining over horizontal CNC turning?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "VTL machining is ideal for heavy, large-diameter, and short-length components (like large flanges, pump casings, or valve bodies) where gravitational forces would affect stability on a horizontal lathe."
            }
          },
          {
            "@type": "Question",
            "name": "Can you machine heavy industrial valves on the VTL?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we specialize in machining heavy industrial valves including Ball, Gate, and Globe valves utilizing our heavy-duty VTL capabilities."
            }
          },
          {
            "@type": "Question",
            "name": "Do you provide material sourcing for VTL machined parts?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we can provide turnkey solutions including material sourcing (Castings, Forgings) or we can operate strictly on a job-work basis using client-supplied materials."
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
              <li style={{ color: 'var(--text-dark)', fontWeight: '600' }}>VTL Machining in Coimbatore</li>
            </ol>
          </nav>

          <div className="section-header" style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{ display: 'inline-block', background: 'rgba(245, 158, 11, 0.15)', color: '#d97706', padding: '6px 16px', borderRadius: '30px', fontSize: '0.85rem', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '1rem', border: '1px solid rgba(245, 158, 11, 0.3)' }}>
              HEAVY VERTICAL TURNING
            </div>
            <h1 style={{ fontSize: '2.5rem', color: 'var(--primary-color)', marginBottom: '1rem' }}>VTL Machining in Coimbatore (Heavy Vertical Turning Lathe)</h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-color)', maxWidth: '800px', margin: '0 auto' }}>
              Precision heavy-duty VTL machining designed for large cylindrical components, large diameter turning, and heavy valve bodies requiring supreme accuracy and stability.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', marginBottom: '4rem', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: '1.8rem', color: 'var(--primary-color)', marginBottom: '1rem' }}>Technical Machine Capacity</h2>
              <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '2rem' }}>
                <tbody>
                  <tr style={{ borderBottom: '1px solid #ddd' }}>
                    <th style={{ padding: '1rem', textAlign: 'left', backgroundColor: '#f8f9fa' }}>Machine Type</th>
                    <td style={{ padding: '1rem' }}>Vertical Turning Lathe (VTL)</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #ddd' }}>
                    <th style={{ padding: '1rem', textAlign: 'left', backgroundColor: '#f8f9fa' }}>Max Turning Dia</th>
                    <td style={{ padding: '1rem' }}>700 mm (Maximum Swing: 800 mm)</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #ddd' }}>
                    <th style={{ padding: '1rem', textAlign: 'left', backgroundColor: '#f8f9fa' }}>Key Machine</th>
                    <td style={{ padding: '1rem' }}>BFW BVL 700H (12 Pockets)</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #ddd' }}>
                    <th style={{ padding: '1rem', textAlign: 'left', backgroundColor: '#f8f9fa' }}>Axis Travel</th>
                    <td style={{ padding: '1rem' }}>X Axis: 330 mm | Z Axis: 725 mm</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #ddd' }}>
                    <th style={{ padding: '1rem', textAlign: 'left', backgroundColor: '#f8f9fa' }}>Common Materials</th>
                    <td style={{ padding: '1rem' }}>Cast Iron, Carbon Steel, Stainless Steel (SS316, SS304), Inconel</td>
                  </tr>
                  <tr>
                    <th style={{ padding: '1rem', textAlign: 'left', backgroundColor: '#f8f9fa' }}>Applications</th>
                    <td style={{ padding: '1rem' }}>Valves, Pump Casings, Large Flanges, Ring Gears, Slew Rings</td>
                  </tr>
                </tbody>
              </table>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a href="#quote-form" className="btn btn-primary" style={{ padding: '12px 28px', textDecoration: 'none' }}>Get a Quote</a>
                <Link href="/valve-component-machining-coimbatore" className="btn btn-secondary" style={{ padding: '12px 28px', textDecoration: 'none' }}>Valve Machining Services</Link>
              </div>
            </div>
            <div>
              <img src="/images/machine-bfw-bvl700h.webp" alt="Heavy Vertical Turning Lathe VTL Coimbatore" width={800} height={600} style={{ width: '100%', height: 'auto', borderRadius: '10px', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }} />
            </div>
          </div>

          {/* Quick Links to Related Services */}
          <div style={{ background: '#f8f9fa', padding: '2.5rem', borderRadius: '16px', marginBottom: '4rem', border: '1px solid #e2e8f0' }}>
            <h2 style={{ fontSize: '1.6rem', color: 'var(--primary-color)', marginBottom: '1.2rem', textAlign: 'center' }}>
              Related Machining Capabilities
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.2rem' }}>
              <Link href="/cnc-turning-job-work-coimbatore" style={{ background: '#fff', padding: '1.2rem', borderRadius: '10px', border: '1px solid #e2e8f0', textDecoration: 'none', color: '#111827', display: 'block' }}>
                <strong style={{ color: 'var(--primary-color)', display: 'block', marginBottom: '0.3rem' }}>Horizontal CNC Turning &rarr;</strong>
                <span style={{ fontSize: '0.85rem', color: '#64748b' }}>For long shafts up to 1100mm with steady rest support.</span>
              </Link>
              <Link href="/valve-component-machining-coimbatore" style={{ background: '#fff', padding: '1.2rem', borderRadius: '10px', border: '1px solid #e2e8f0', textDecoration: 'none', color: '#111827', display: 'block' }}>
                <strong style={{ color: 'var(--primary-color)', display: 'block', marginBottom: '0.3rem' }}>Industrial Valve Machining &rarr;</strong>
                <span style={{ fontSize: '0.85rem', color: '#64748b' }}>Ball, gate, globe valves & pipeline fluid components.</span>
              </Link>
              <Link href="/heavy-machining-big-parts-coimbatore" style={{ background: '#fff', padding: '1.2rem', borderRadius: '10px', border: '1px solid #e2e8f0', textDecoration: 'none', color: '#111827', display: 'block' }}>
                <strong style={{ color: 'var(--primary-color)', display: 'block', marginBottom: '0.3rem' }}>Heavy Machining Big Parts &rarr;</strong>
                <span style={{ fontSize: '0.85rem', color: '#64748b' }}>Double column bridge milling up to 2600mm bed size.</span>
              </Link>
              <Link href="/cmm-inspection-services-coimbatore" style={{ background: '#fff', padding: '1.2rem', borderRadius: '10px', border: '1px solid #e2e8f0', textDecoration: 'none', color: '#111827', display: 'block' }}>
                <strong style={{ color: 'var(--primary-color)', display: 'block', marginBottom: '0.3rem' }}>Carl Zeiss CMM Metrology &rarr;</strong>
                <span style={{ fontSize: '0.85rem', color: '#64748b' }}>3D coordinate inspection with 100% QA reporting.</span>
              </Link>
            </div>
          </div>

          <div id="quote-form" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
            {/* FAQ Accordion */}
            <div>
              <h2 style={{ fontSize: '1.8rem', color: 'var(--primary-color)', marginBottom: '1.5rem' }}>Frequently Asked Questions</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <details style={{ background: '#f8f9fa', padding: '1rem', borderRadius: '8px', cursor: 'pointer' }} open>
                  <summary style={{ fontWeight: '600', color: 'var(--primary-color)' }}>What is the maximum turning diameter for your VTL machines?</summary>
                  <p style={{ marginTop: '0.5rem', color: 'var(--text-color)' }}>Our BFW BVL 700H Vertical Turning Lathe can accommodate components with a maximum turning diameter of up to 700mm and maximum swing diameter of 800mm with a 12-pocket automatic turret.</p>
                </details>
                <details style={{ background: '#f8f9fa', padding: '1rem', borderRadius: '8px', cursor: 'pointer' }}>
                  <summary style={{ fontWeight: '600', color: 'var(--primary-color)' }}>When should I choose VTL machining over horizontal CNC turning?</summary>
                  <p style={{ marginTop: '0.5rem', color: 'var(--text-color)' }}>VTL machining is ideal for heavy, large-diameter, and short-length components (like large flanges, pump casings, or valve bodies) where gravitational forces would affect stability on a horizontal lathe.</p>
                </details>
                <details style={{ background: '#f8f9fa', padding: '1rem', borderRadius: '8px', cursor: 'pointer' }}>
                  <summary style={{ fontWeight: '600', color: 'var(--primary-color)' }}>Can you machine heavy industrial valves on the VTL?</summary>
                  <p style={{ marginTop: '0.5rem', color: 'var(--text-color)' }}>Yes, we specialize in machining heavy industrial valves including Ball, Gate, and Globe valves utilizing our heavy-duty VTL capabilities.</p>
                </details>
                <details style={{ background: '#f8f9fa', padding: '1rem', borderRadius: '8px', cursor: 'pointer' }}>
                  <summary style={{ fontWeight: '600', color: 'var(--primary-color)' }}>Do you provide material sourcing for VTL machined parts?</summary>
                  <p style={{ marginTop: '0.5rem', color: 'var(--text-color)' }}>Yes, we can provide turnkey solutions including material sourcing (Castings, Forgings) or we can operate strictly on a job-work basis using client-supplied materials.</p>
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
