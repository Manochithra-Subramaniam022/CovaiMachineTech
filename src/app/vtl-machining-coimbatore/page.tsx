import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'VTL Machining in Coimbatore | Heavy Vertical Turning Lathe | Covai Machine Tech',
  description: 'Heavy duty VTL machining services in Coimbatore. We handle components up to 700mm in turning diameter. Get precision vertical turning lathe services for industrial parts.',
  openGraph: {
    title: 'VTL Machining in Coimbatore | Heavy Vertical Turning Lathe',
    description: 'Heavy duty VTL machining services in Coimbatore. We handle components up to 700mm in turning diameter.',
    url: 'https://covaimachinetech.com/vtl-machining-coimbatore',
    siteName: 'Covai Machine Tech',
    images: [
      {
        url: 'https://covaimachinetech.com/images/machine-bfw-bvl700h.webp',
        width: 800,
        height: 600,
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
        "@type": "Service",
        "serviceType": "VTL Machining Services",
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
        "description": "Heavy Vertical Turning Lathe (VTL) machining for large cylindrical components."
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the maximum turning diameter for your VTL machines?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our BFW BVL 700H Vertical Turning Lathe can accommodate components with a maximum turning diameter of up to 700mm."
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
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h1 style={{ fontSize: '2.5rem', color: 'var(--primary-color)', marginBottom: '1rem' }}>VTL Machining in Coimbatore (Heavy Vertical Turning Lathe)</h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-color)', maxWidth: '800px', margin: '0 auto' }}>
              Precision heavy-duty VTL machining designed for large cylindrical components requiring supreme accuracy and stability.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', marginBottom: '4rem' }}>
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
                    <td style={{ padding: '1rem' }}>700 mm</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #ddd' }}>
                    <th style={{ padding: '1rem', textAlign: 'left', backgroundColor: '#f8f9fa' }}>Key Machine</th>
                    <td style={{ padding: '1rem' }}>BFW BVL 700H</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #ddd' }}>
                    <th style={{ padding: '1rem', textAlign: 'left', backgroundColor: '#f8f9fa' }}>Common Materials</th>
                    <td style={{ padding: '1rem' }}>Cast Iron, Carbon Steel, Stainless Steel (SS316, SS304)</td>
                  </tr>
                  <tr>
                    <th style={{ padding: '1rem', textAlign: 'left', backgroundColor: '#f8f9fa' }}>Applications</th>
                    <td style={{ padding: '1rem' }}>Valves, Pump Casings, Large Flanges, Ring Gears</td>
                  </tr>
                </tbody>
              </table>
              <Link href="/#contact" className="btn">Get a Quote</Link>
            </div>
            <div>
              <img src="/images/machine-bfw-bvl700h.webp" alt="Heavy Vertical Turning Lathe VTL Coimbatore" width={800} height={600} style={{ width: '100%', height: 'auto', borderRadius: '10px', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }} />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
            {/* FAQ Accordion */}
            <div>
              <h2 style={{ fontSize: '1.8rem', color: 'var(--primary-color)', marginBottom: '1.5rem' }}>Frequently Asked Questions</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <details style={{ background: '#f8f9fa', padding: '1rem', borderRadius: '8px', cursor: 'pointer' }}>
                  <summary style={{ fontWeight: '600', color: 'var(--primary-color)' }}>What is the maximum turning diameter for your VTL machines?</summary>
                  <p style={{ marginTop: '0.5rem', color: 'var(--text-color)' }}>Our BFW BVL 700H Vertical Turning Lathe can accommodate components with a maximum turning diameter of up to 700mm.</p>
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
