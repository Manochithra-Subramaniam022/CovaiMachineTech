import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'CNC Machining in Coimbatore | CNC Machine Shop & Job Work | Covai Machine Tech',
  description: 'Top-tier CNC machining in Coimbatore. ISO 9001:2015 certified machine shop providing precision turning, VMC milling, heavy-duty VTL & CMM inspection. Request an RFQ.',
  openGraph: {
    title: 'CNC Machining in Coimbatore | CNC Machine Shop & Job Work',
    description: 'Precision CNC turning, milling, and VTL machining for industrial components in Coimbatore. ISO 9001:2015 certified machine shop.',
    url: 'https://www.covaimachinetech.com/cnc-machining-coimbatore',
    siteName: 'Covai Machine Tech',
    images: [
      {
        url: 'https://www.covaimachinetech.com/images/hero-cnc.webp',
        width: 1920,
        height: 1080,
        alt: 'Precision CNC Machining Services and Machine Shop in Coimbatore',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.covaimachinetech.com/cnc-machining-coimbatore',
  },
};

export default function CNCMachiningCoimbatore() {
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
            "name": "CNC Machining in Coimbatore",
            "item": "https://www.covaimachinetech.com/cnc-machining-coimbatore"
          }
        ]
      },
      {
        "@type": "Service",
        "serviceType": "CNC Machining Services & Machine Shop Job Work",
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
        "description": "Precision CNC turning, milling, and VTL machining services for various industrial sectors."
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What industries do you provide CNC machining for in Coimbatore?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We serve a wide range of industries including automotive, aerospace, valve manufacturing, textiles, and heavy machinery engineering."
            }
          },
          {
            "@type": "Question",
            "name": "What materials can you machine?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our facility is equipped to machine Cast Iron, Carbon Steel, Stainless Steel (SS316, SS304), Inconel, Monel, and various exotic alloys."
            }
          },
          {
            "@type": "Question",
            "name": "What is the maximum capacity of your CNC machines?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our Heavy Duty VTLs can handle up to 700mm turning diameter, and our Double Column Machining Centers can handle beds up to 2600mm x 2400mm."
            }
          },
          {
            "@type": "Question",
            "name": "Do you accept custom RFQs and job work?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we specialize in custom job work and assemblies. You can submit your component drawings via our RFQ form for a technical evaluation."
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
              <li style={{ color: 'var(--text-dark)', fontWeight: '600' }}>CNC Machining in Coimbatore</li>
            </ol>
          </nav>

          <div className="section-header" style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{ display: 'inline-block', background: 'rgba(255, 87, 34, 0.12)', color: '#ff5722', padding: '6px 16px', borderRadius: '30px', fontSize: '0.85rem', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '1rem', border: '1px solid rgba(255, 87, 34, 0.25)' }}>
              PRECISION CNC MACHINE SHOP
            </div>
            <h1 style={{ fontSize: '2.5rem', color: 'var(--primary-color)', marginBottom: '1rem' }}>
              CNC Machining in Coimbatore (Machine Shop & Job Work Services)
            </h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-color)', maxWidth: '800px', margin: '0 auto' }}>
              Delivering high-precision CNC turning, milling, and heavy component machining tailored to your industrial specifications. ISO 9001:2015 certified 2-acre facility in Karumathampatti.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', marginBottom: '4rem', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: '1.8rem', color: 'var(--primary-color)', marginBottom: '1rem' }}>Technical Machine Capacity</h2>
              <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '2rem' }}>
                <tbody>
                  <tr style={{ borderBottom: '1px solid #ddd' }}>
                    <th style={{ padding: '1rem', textAlign: 'left', backgroundColor: '#f8f9fa' }}>Machine Types</th>
                    <td style={{ padding: '1rem' }}>CNC Turning, 3/4-Axis VMC, Double Column & Heavy VTL</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #ddd' }}>
                    <th style={{ padding: '1rem', textAlign: 'left', backgroundColor: '#f8f9fa' }}>Max Turning Dia</th>
                    <td style={{ padding: '1rem' }}>700 mm (BFW BVL 700H VTL) / 320 mm (LMW Turning)</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #ddd' }}>
                    <th style={{ padding: '1rem', textAlign: 'left', backgroundColor: '#f8f9fa' }}>Bed Size</th>
                    <td style={{ padding: '1rem' }}>2600mm x 2400mm (KTM Double Column)</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #ddd' }}>
                    <th style={{ padding: '1rem', textAlign: 'left', backgroundColor: '#f8f9fa' }}>Materials</th>
                    <td style={{ padding: '1rem' }}>Cast Iron, Carbon Steel, SS316, Inconel, Monel, Duplex</td>
                  </tr>
                  <tr>
                    <th style={{ padding: '1rem', textAlign: 'left', backgroundColor: '#f8f9fa' }}>Tolerances</th>
                    <td style={{ padding: '1rem' }}>Down to ±0.005mm (Carl Zeiss CMM Inspected)</td>
                  </tr>
                </tbody>
              </table>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a href="#quote-form" className="btn btn-primary" style={{ padding: '12px 28px', textDecoration: 'none' }}>Get a Quote</a>
                <Link href="/#machines" className="btn btn-secondary" style={{ padding: '12px 28px', textDecoration: 'none' }}>View All Machinery</Link>
              </div>
            </div>
            <div>
              <img src="/images/machine-ktm-dcmc2618.webp" alt="Double Column CNC Machining Center Coimbatore" width={800} height={600} style={{ width: '100%', height: 'auto', borderRadius: '10px', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }} />
            </div>
          </div>

          {/* Quick Links to Specialized Machining Pages */}
          <div style={{ background: '#f8f9fa', padding: '2.5rem', borderRadius: '16px', marginBottom: '4rem', border: '1px solid #e2e8f0' }}>
            <h2 style={{ fontSize: '1.6rem', color: 'var(--primary-color)', marginBottom: '1.2rem', textAlign: 'center' }}>
              Explore Specialized Machining Services
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.2rem' }}>
              <Link href="/precision-machining-coimbatore" style={{ background: '#fff', padding: '1.2rem', borderRadius: '10px', border: '1px solid #e2e8f0', textDecoration: 'none', color: '#111827', display: 'block' }}>
                <strong style={{ color: 'var(--primary-color)', display: 'block', marginBottom: '0.3rem' }}>Precision & Critical Jobs &rarr;</strong>
                <span style={{ fontSize: '0.85rem', color: '#64748b' }}>Non-standard machining, tight tolerances to ±5 microns.</span>
              </Link>
              <Link href="/cnc-turning-job-work-coimbatore" style={{ background: '#fff', padding: '1.2rem', borderRadius: '10px', border: '1px solid #e2e8f0', textDecoration: 'none', color: '#111827', display: 'block' }}>
                <strong style={{ color: 'var(--primary-color)', display: 'block', marginBottom: '0.3rem' }}>CNC Turning Job Work &rarr;</strong>
                <span style={{ fontSize: '0.85rem', color: '#64748b' }}>LMW lathe centers with steady rest up to 1100mm.</span>
              </Link>
              <Link href="/valve-component-machining-coimbatore" style={{ background: '#fff', padding: '1.2rem', borderRadius: '10px', border: '1px solid #e2e8f0', textDecoration: 'none', color: '#111827', display: 'block' }}>
                <strong style={{ color: 'var(--primary-color)', display: 'block', marginBottom: '0.3rem' }}>Valve Component Machining &rarr;</strong>
                <span style={{ fontSize: '0.85rem', color: '#64748b' }}>Gate, ball, globe valves and pipeline flange parts.</span>
              </Link>
              <Link href="/cmm-inspection-services-coimbatore" style={{ background: '#fff', padding: '1.2rem', borderRadius: '10px', border: '1px solid #e2e8f0', textDecoration: 'none', color: '#111827', display: 'block' }}>
                <strong style={{ color: 'var(--primary-color)', display: 'block', marginBottom: '0.3rem' }}>Carl Zeiss CMM Inspection &rarr;</strong>
                <span style={{ fontSize: '0.85rem', color: '#64748b' }}>3D CMM measuring & Trimos V7 quality reporting.</span>
              </Link>
            </div>
          </div>

          <div id="quote-form" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
            {/* FAQ Accordion */}
            <div>
              <h2 style={{ fontSize: '1.8rem', color: 'var(--primary-color)', marginBottom: '1.5rem' }}>Frequently Asked Questions</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <details style={{ background: '#f8f9fa', padding: '1rem', borderRadius: '8px', cursor: 'pointer' }} open>
                  <summary style={{ fontWeight: '600', color: 'var(--primary-color)' }}>What industries do you provide CNC machining for in Coimbatore?</summary>
                  <p style={{ marginTop: '0.5rem', color: 'var(--text-color)' }}>We serve a wide range of industries including automotive, aerospace, valve manufacturing, textiles, and heavy machinery engineering.</p>
                </details>
                <details style={{ background: '#f8f9fa', padding: '1rem', borderRadius: '8px', cursor: 'pointer' }}>
                  <summary style={{ fontWeight: '600', color: 'var(--primary-color)' }}>What materials can you machine?</summary>
                  <p style={{ marginTop: '0.5rem', color: 'var(--text-color)' }}>Our facility is equipped to machine Cast Iron, Carbon Steel, Stainless Steel (SS316, SS304), Inconel, Monel, and various exotic alloys.</p>
                </details>
                <details style={{ background: '#f8f9fa', padding: '1rem', borderRadius: '8px', cursor: 'pointer' }}>
                  <summary style={{ fontWeight: '600', color: 'var(--primary-color)' }}>What is the maximum capacity of your CNC machines?</summary>
                  <p style={{ marginTop: '0.5rem', color: 'var(--text-color)' }}>Our Heavy Duty VTLs can handle up to 700mm turning diameter, and our Double Column Machining Centers can handle beds up to 2600mm x 2400mm.</p>
                </details>
                <details style={{ background: '#f8f9fa', padding: '1rem', borderRadius: '8px', cursor: 'pointer' }}>
                  <summary style={{ fontWeight: '600', color: 'var(--primary-color)' }}>Do you accept custom RFQs and job work?</summary>
                  <p style={{ marginTop: '0.5rem', color: 'var(--text-color)' }}>Yes, we specialize in custom job work and assemblies. You can submit your component drawings via our RFQ form for a technical evaluation.</p>
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
