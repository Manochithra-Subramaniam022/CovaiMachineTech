import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'VMC Machining in Coimbatore | 3-Axis & 4-Axis | Covai Machine Tech',
  description: 'Specialized VMC machining in Coimbatore offering 3-axis and 4-axis precision milling for complex components. Contact Covai Machine Tech for an RFQ.',
  openGraph: {
    title: 'VMC Machining in Coimbatore | 3-Axis & 4-Axis',
    description: 'Specialized VMC machining in Coimbatore offering 3-axis and 4-axis precision milling for complex components.',
    url: 'https://covaimachinetech.com/vmc-machining-coimbatore',
    siteName: 'Covai Machine Tech',
    images: [
      {
        url: 'https://covaimachinetech.com/images/machine-ams-1690v50.webp',
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  alternates: {
    canonical: 'https://covaimachinetech.com/vmc-machining-coimbatore',
  },
};

export default function VMCMachiningCoimbatore() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "serviceType": "VMC Machining Services",
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
        "description": "3-axis and 4-axis Vertical Machining Center (VMC) services."
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the maximum bed size for your VMC machines?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our AMS 1690V-50 and BFW BMC45TC24++ machines offer spacious bed sizes for versatile component machining."
            }
          },
          {
            "@type": "Question",
            "name": "Do you offer 4-axis VMC machining?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we are equipped with 4-axis U-CAM rotary tables integrated with our VMCs for complex, multi-sided machining operations."
            }
          },
          {
            "@type": "Question",
            "name": "How do you ensure precision in your VMC components?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "All VMC components undergo rigorous inspection using our Carl Zeiss Contura CMM and Trimos V7 height gauges in a climate-controlled room."
            }
          },
          {
            "@type": "Question",
            "name": "What materials are best suited for VMC machining?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We routinely machine Aluminum, Stainless Steel (SS304/316), Carbon Steel, and Cast Iron on our VMCs, depending on tool configurations."
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
            <h1 style={{ fontSize: '2.5rem', color: 'var(--primary-color)', marginBottom: '1rem' }}>VMC Machining in Coimbatore (3-Axis & 4-Axis)</h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-color)', maxWidth: '800px', margin: '0 auto' }}>
              High-speed, high-precision Vertical Machining Center services equipped for complex contours and tight tolerances.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', marginBottom: '4rem' }}>
            <div>
              <h2 style={{ fontSize: '1.8rem', color: 'var(--primary-color)', marginBottom: '1rem' }}>Technical Machine Capacity</h2>
              <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '2rem' }}>
                <tbody>
                  <tr style={{ borderBottom: '1px solid #ddd' }}>
                    <th style={{ padding: '1rem', textAlign: 'left', backgroundColor: '#f8f9fa' }}>Machine Type</th>
                    <td style={{ padding: '1rem' }}>Vertical Machining Center (VMC)</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #ddd' }}>
                    <th style={{ padding: '1rem', textAlign: 'left', backgroundColor: '#f8f9fa' }}>Axes Supported</th>
                    <td style={{ padding: '1rem' }}>3-Axis & 4-Axis (U-CAM)</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #ddd' }}>
                    <th style={{ padding: '1rem', textAlign: 'left', backgroundColor: '#f8f9fa' }}>Key Machines</th>
                    <td style={{ padding: '1rem' }}>AMS 1690V-50, BFW BMC45TC24++</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #ddd' }}>
                    <th style={{ padding: '1rem', textAlign: 'left', backgroundColor: '#f8f9fa' }}>Applications</th>
                    <td style={{ padding: '1rem' }}>Die & Mold, Aerospace, Automotive Parts</td>
                  </tr>
                </tbody>
              </table>
              <Link href="/#contact" className="btn">Get a Quote</Link>
            </div>
            <div>
              <img src="/images/machine-ams-1690v50.webp" alt="VMC Machining Services Coimbatore AMS 1690V" width={800} height={600} style={{ width: '100%', height: 'auto', borderRadius: '10px', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }} />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
            {/* FAQ Accordion */}
            <div>
              <h2 style={{ fontSize: '1.8rem', color: 'var(--primary-color)', marginBottom: '1.5rem' }}>Frequently Asked Questions</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <details style={{ background: '#f8f9fa', padding: '1rem', borderRadius: '8px', cursor: 'pointer' }}>
                  <summary style={{ fontWeight: '600', color: 'var(--primary-color)' }}>What is the maximum bed size for your VMC machines?</summary>
                  <p style={{ marginTop: '0.5rem', color: 'var(--text-color)' }}>Our AMS 1690V-50 and BFW BMC45TC24++ machines offer spacious bed sizes for versatile component machining.</p>
                </details>
                <details style={{ background: '#f8f9fa', padding: '1rem', borderRadius: '8px', cursor: 'pointer' }}>
                  <summary style={{ fontWeight: '600', color: 'var(--primary-color)' }}>Do you offer 4-axis VMC machining?</summary>
                  <p style={{ marginTop: '0.5rem', color: 'var(--text-color)' }}>Yes, we are equipped with 4-axis U-CAM rotary tables integrated with our VMCs for complex, multi-sided machining operations.</p>
                </details>
                <details style={{ background: '#f8f9fa', padding: '1rem', borderRadius: '8px', cursor: 'pointer' }}>
                  <summary style={{ fontWeight: '600', color: 'var(--primary-color)' }}>How do you ensure precision in your VMC components?</summary>
                  <p style={{ marginTop: '0.5rem', color: 'var(--text-color)' }}>All VMC components undergo rigorous inspection using our Carl Zeiss Contura CMM and Trimos V7 height gauges in a climate-controlled room.</p>
                </details>
                <details style={{ background: '#f8f9fa', padding: '1rem', borderRadius: '8px', cursor: 'pointer' }}>
                  <summary style={{ fontWeight: '600', color: 'var(--primary-color)' }}>What materials are best suited for VMC machining?</summary>
                  <p style={{ marginTop: '0.5rem', color: 'var(--text-color)' }}>We routinely machine Aluminum, Stainless Steel (SS304/316), Carbon Steel, and Cast Iron on our VMCs, depending on tool configurations.</p>
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
