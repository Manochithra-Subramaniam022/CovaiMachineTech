import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Double Column Machining in Coimbatore | Large Components | Covai Machine Tech',
  description: 'Heavy duty Double Column Machining in Coimbatore for large industrial components. We machine structures up to 2600x1800mm with exceptional accuracy. Get a quote.',
  openGraph: {
    title: 'Double Column Machining in Coimbatore | Large Components',
    description: 'Heavy duty Double Column Machining in Coimbatore for large industrial components. We machine structures up to 2600x1800mm with exceptional accuracy.',
    url: 'https://covaimachinetech.com/double-column-machining-coimbatore',
    siteName: 'Covai Machine Tech',
    images: [
      {
        url: 'https://covaimachinetech.com/images/machine-ktm-dcmc2618.webp',
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  alternates: {
    canonical: 'https://covaimachinetech.com/double-column-machining-coimbatore',
  },
};

export default function DoubleColumnMachiningCoimbatore() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "serviceType": "Double Column Machining Services",
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
        "description": "Double Column Machining for large and heavy industrial components requiring high structural rigidity."
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the capacity of your Double Column Machining Center?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our KTM DCMC2618 has a massive travel size of 2600mm x 2400mm x 1000mm, designed specifically for heavy and oversized components."
            }
          },
          {
            "@type": "Question",
            "name": "Why use Double Column Machining instead of standard VMC?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Double column (or bridge-type) machines offer superior rigidity and stability, allowing for heavy cutting on large workpieces without losing dimensional accuracy."
            }
          },
          {
            "@type": "Question",
            "name": "What kind of components do you machine on the DCMC?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We typically machine large valve bodies, pump casings, machine tool beds, aerospace structural parts, and heavy die blocks."
            }
          },
          {
            "@type": "Question",
            "name": "How is quality maintained for such large components?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Even for massive parts, we ensure strict quality control using calibrated measuring instruments like our Trimos V7 2D Height Gauge and Zeiss CMM where applicable."
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
            <h1 style={{ fontSize: '2.5rem', color: 'var(--primary-color)', marginBottom: '1rem' }}>Double Column Machining in Coimbatore (Large Components)</h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-color)', maxWidth: '800px', margin: '0 auto' }}>
              Bridge-type heavy-duty machining solutions designed for massive industrial parts requiring extreme rigidity and precision.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', marginBottom: '4rem' }}>
            <div>
              <h2 style={{ fontSize: '1.8rem', color: 'var(--primary-color)', marginBottom: '1rem' }}>Technical Machine Capacity</h2>
              <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '2rem' }}>
                <tbody>
                  <tr style={{ borderBottom: '1px solid #ddd' }}>
                    <th style={{ padding: '1rem', textAlign: 'left', backgroundColor: '#f8f9fa' }}>Machine Type</th>
                    <td style={{ padding: '1rem' }}>Double Column Machining Center (Bridge Type)</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #ddd' }}>
                    <th style={{ padding: '1rem', textAlign: 'left', backgroundColor: '#f8f9fa' }}>Bed Size</th>
                    <td style={{ padding: '1rem' }}>2600mm x 2400mm</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #ddd' }}>
                    <th style={{ padding: '1rem', textAlign: 'left', backgroundColor: '#f8f9fa' }}>Key Machine</th>
                    <td style={{ padding: '1rem' }}>KTM DCMC2618</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #ddd' }}>
                    <th style={{ padding: '1rem', textAlign: 'left', backgroundColor: '#f8f9fa' }}>Rigidity</th>
                    <td style={{ padding: '1rem' }}>High-damping cast iron structure for heavy cutting</td>
                  </tr>
                </tbody>
              </table>
              <Link href="/#contact" className="btn">Get a Quote</Link>
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
                  <summary style={{ fontWeight: '600', color: 'var(--primary-color)' }}>What is the capacity of your Double Column Machining Center?</summary>
                  <p style={{ marginTop: '0.5rem', color: 'var(--text-color)' }}>Our KTM DCMC2618 has a massive bed size of 2600mm x 1800mm, designed specifically for heavy and oversized components.</p>
                </details>
                <details style={{ background: '#f8f9fa', padding: '1rem', borderRadius: '8px', cursor: 'pointer' }}>
                  <summary style={{ fontWeight: '600', color: 'var(--primary-color)' }}>Why use Double Column Machining instead of standard VMC?</summary>
                  <p style={{ marginTop: '0.5rem', color: 'var(--text-color)' }}>Double column (or bridge-type) machines offer superior rigidity and stability, allowing for heavy cutting on large workpieces without losing dimensional accuracy.</p>
                </details>
                <details style={{ background: '#f8f9fa', padding: '1rem', borderRadius: '8px', cursor: 'pointer' }}>
                  <summary style={{ fontWeight: '600', color: 'var(--primary-color)' }}>What kind of components do you machine on the DCMC?</summary>
                  <p style={{ marginTop: '0.5rem', color: 'var(--text-color)' }}>We typically machine large valve bodies, pump casings, machine tool beds, aerospace structural parts, and heavy die blocks.</p>
                </details>
                <details style={{ background: '#f8f9fa', padding: '1rem', borderRadius: '8px', cursor: 'pointer' }}>
                  <summary style={{ fontWeight: '600', color: 'var(--primary-color)' }}>How is quality maintained for such large components?</summary>
                  <p style={{ marginTop: '0.5rem', color: 'var(--text-color)' }}>Even for massive parts, we ensure strict quality control using calibrated measuring instruments like our Trimos V7 2D Height Gauge and Zeiss CMM where applicable.</p>
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
