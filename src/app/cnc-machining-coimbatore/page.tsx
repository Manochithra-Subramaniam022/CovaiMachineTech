import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'CNC Machining Services in Coimbatore | Covai Machine Tech',
  description: 'Top-tier CNC machining services in Coimbatore. We provide precision turning, milling, and heavy-duty VTL machining for industrial components. Request an RFQ today.',
  openGraph: {
    title: 'CNC Machining Services in Coimbatore | Covai Machine Tech',
    description: 'Precision CNC turning, milling, and VTL machining for industrial components in Coimbatore.',
    url: 'https://covaimachinetech.com/cnc-machining-coimbatore',
    siteName: 'Covai Machine Tech',
    images: [
      {
        url: 'https://covaimachinetech.com/images/hero-cnc.webp',
        width: 1920,
        height: 1080,
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  alternates: {
    canonical: 'https://covaimachinetech.com/cnc-machining-coimbatore',
  },
};

export default function CNCMachiningCoimbatore() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "serviceType": "CNC Machining Services",
        "provider": {
          "@type": "LocalBusiness",
          "name": "Covai Machine Tech",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Coimbatore",
            "addressRegion": "Tamil Nadu",
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
              "text": "Our Heavy Duty VTLs can handle up to 700mm turning diameter, and our Double Column Machining Centers can handle beds up to 2600mm x 1800mm."
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
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h1 style={{ fontSize: '2.5rem', color: 'var(--primary-color)', marginBottom: '1rem' }}>CNC Machining Services in Coimbatore</h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-color)', maxWidth: '800px', margin: '0 auto' }}>
              Delivering high-precision CNC turning, milling, and heavy component machining tailored to your industrial specifications.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', marginBottom: '4rem' }}>
            <div>
              <h2 style={{ fontSize: '1.8rem', color: 'var(--primary-color)', marginBottom: '1rem' }}>Technical Machine Capacity</h2>
              <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '2rem' }}>
                <tbody>
                  <tr style={{ borderBottom: '1px solid #ddd' }}>
                    <th style={{ padding: '1rem', textAlign: 'left', backgroundColor: '#f8f9fa' }}>Machine Type</th>
                    <td style={{ padding: '1rem' }}>Turning & Milling</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #ddd' }}>
                    <th style={{ padding: '1rem', textAlign: 'left', backgroundColor: '#f8f9fa' }}>Max Turning Dia</th>
                    <td style={{ padding: '1rem' }}>700 mm (VTL)</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #ddd' }}>
                    <th style={{ padding: '1rem', textAlign: 'left', backgroundColor: '#f8f9fa' }}>Bed Size</th>
                    <td style={{ padding: '1rem' }}>2600mm x 1800mm (Double Column)</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #ddd' }}>
                    <th style={{ padding: '1rem', textAlign: 'left', backgroundColor: '#f8f9fa' }}>Materials</th>
                    <td style={{ padding: '1rem' }}>Cast Iron, SS316, Inconel, Monel</td>
                  </tr>
                  <tr>
                    <th style={{ padding: '1rem', textAlign: 'left', backgroundColor: '#f8f9fa' }}>Tolerances</th>
                    <td style={{ padding: '1rem' }}>High Precision (Zeiss CMM Inspected)</td>
                  </tr>
                </tbody>
              </table>
              <Link href="/#machines" className="btn">View All Facilities</Link>
            </div>
            <div>
              <img src="/images/machine-ktm-dcmc2618.webp" alt="Double Column CNC Machining Center Coimbatore" width={800} height={600} style={{ width: '100%', height: 'auto', borderRadius: '10px', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }} />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
            {/* FAQ Accordion */}
            <div>
              <h2 style={{ fontSize: '1.8rem', color: 'var(--primary-color)', marginBottom: '1.5rem' }}>Frequently Asked Questions</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <details style={{ background: '#f8f9fa', padding: '1rem', borderRadius: '8px', cursor: 'pointer' }}>
                  <summary style={{ fontWeight: '600', color: 'var(--primary-color)' }}>What industries do you provide CNC machining for in Coimbatore?</summary>
                  <p style={{ marginTop: '0.5rem', color: 'var(--text-color)' }}>We serve a wide range of industries including automotive, aerospace, valve manufacturing, textiles, and heavy machinery engineering.</p>
                </details>
                <details style={{ background: '#f8f9fa', padding: '1rem', borderRadius: '8px', cursor: 'pointer' }}>
                  <summary style={{ fontWeight: '600', color: 'var(--primary-color)' }}>What materials can you machine?</summary>
                  <p style={{ marginTop: '0.5rem', color: 'var(--text-color)' }}>Our facility is equipped to machine Cast Iron, Carbon Steel, Stainless Steel (SS316, SS304), Inconel, Monel, and various exotic alloys.</p>
                </details>
                <details style={{ background: '#f8f9fa', padding: '1rem', borderRadius: '8px', cursor: 'pointer' }}>
                  <summary style={{ fontWeight: '600', color: 'var(--primary-color)' }}>What is the maximum capacity of your CNC machines?</summary>
                  <p style={{ marginTop: '0.5rem', color: 'var(--text-color)' }}>Our Heavy Duty VTLs can handle up to 700mm turning diameter, and our Double Column Machining Centers can handle beds up to 2600mm x 1800mm.</p>
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
