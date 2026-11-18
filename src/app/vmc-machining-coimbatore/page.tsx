import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'VMC Machining in Coimbatore | 3-Axis & 4-Axis Milling | Covai Machine Tech',
  description: 'Specialized VMC machining in Coimbatore offering 3-axis & 4-axis precision milling. AMS 1690V (1800mm travel) & BFW with U-CAM rotary table. Get a fast RFQ.',
  openGraph: {
    title: 'VMC Machining in Coimbatore | 3-Axis & 4-Axis Milling',
    description: 'Specialized VMC machining in Coimbatore offering 3-axis and 4-axis precision milling for complex components.',
    url: 'https://covaimachinetech.com/vmc-machining-coimbatore',
    siteName: 'Covai Machine Tech',
    images: [
      {
        url: 'https://covaimachinetech.com/images/machine-ams-1690v50.webp',
        width: 800,
        height: 600,
        alt: 'Vertical Machining Center VMC AMS 1690V-50 in Coimbatore',
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
            "name": "VMC Machining in Coimbatore",
            "item": "https://covaimachinetech.com/vmc-machining-coimbatore"
          }
        ]
      },
      {
        "@type": "Service",
        "serviceType": "VMC Machining & 4-Axis Milling Services",
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
        "description": "3-axis and 4-axis Vertical Machining Center (VMC) services, precision milling, and component manufacturing in Coimbatore."
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the maximum bed size for your VMC machines?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our AMS 1690V-50 provides an expansive axis travel of X: 1800mm, Y: 910mm, and Z: 810mm with 24 tool pockets, while our BFW BMC45TC24++ provides X: 1000mm, Y: 550mm, and Z: 710mm with a column raiser."
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
              "text": "All VMC components undergo rigorous inspection using our Carl Zeiss Spectrum Verity CMM and Trimos V7 height gauges in a climate-controlled room."
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
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" style={{ marginBottom: '1.5rem', fontSize: '0.9rem' }}>
            <ol style={{ listStyle: 'none', display: 'flex', gap: '0.5rem', padding: 0, margin: 0, color: 'var(--text-light)' }}>
              <li><Link href="/" style={{ color: 'var(--primary-color)', textDecoration: 'none' }}>Home</Link></li>
              <li>/</li>
              <li><Link href="/#services" style={{ color: 'var(--primary-color)', textDecoration: 'none' }}>Services</Link></li>
              <li>/</li>
              <li style={{ color: 'var(--text-dark)', fontWeight: '600' }}>VMC Machining in Coimbatore</li>
            </ol>
          </nav>

          <div className="section-header" style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{ display: 'inline-block', background: 'rgba(255, 87, 34, 0.12)', color: '#ff5722', padding: '6px 16px', borderRadius: '30px', fontSize: '0.85rem', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '1rem', border: '1px solid rgba(255, 87, 34, 0.25)' }}>
              3-AXIS & 4-AXIS MILLING
            </div>
            <h1 style={{ fontSize: '2.5rem', color: 'var(--primary-color)', marginBottom: '1rem' }}>VMC Machining in Coimbatore (3-Axis & 4-Axis)</h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-color)', maxWidth: '800px', margin: '0 auto' }}>
              High-speed, high-precision Vertical Machining Center services equipped for complex contours and tight tolerances. AMS 1800mm travel & BFW with 4th Axis U-CAM.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', marginBottom: '4rem', alignItems: 'center' }}>
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
                    <td style={{ padding: '1rem' }}>3-Axis & 4-Axis (U-CAM Rotary Table)</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #ddd' }}>
                    <th style={{ padding: '1rem', textAlign: 'left', backgroundColor: '#f8f9fa' }}>Key Machines</th>
                    <td style={{ padding: '1rem' }}>AMS 1690V-50 (1800mm travel), BFW BMC45TC24++</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #ddd' }}>
                    <th style={{ padding: '1rem', textAlign: 'left', backgroundColor: '#f8f9fa' }}>Tool Capacity</th>
                    <td style={{ padding: '1rem' }}>24 Pockets Automatic Tool Changer (ATC)</td>
                  </tr>
                  <tr>
                    <th style={{ padding: '1rem', textAlign: 'left', backgroundColor: '#f8f9fa' }}>Applications</th>
                    <td style={{ padding: '1rem' }}>Die & Mold, Aerospace, Valves, Automotive Parts</td>
                  </tr>
                </tbody>
              </table>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a href="#quote-form" className="btn btn-primary" style={{ padding: '12px 28px', textDecoration: 'none' }}>Get a Quote</a>
                <Link href="/double-column-machining-coimbatore" className="btn btn-secondary" style={{ padding: '12px 28px', textDecoration: 'none' }}>Double Column (2600mm)</Link>
              </div>
            </div>
            <div>
              <img src="/images/machine-ams-1690v50.webp" alt="VMC Machining Services Coimbatore AMS 1690V" width={800} height={600} style={{ width: '100%', height: 'auto', borderRadius: '10px', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }} />
            </div>
          </div>

          {/* Quick Links to Related Machining Services */}
          <div style={{ background: '#f8f9fa', padding: '2.5rem', borderRadius: '16px', marginBottom: '4rem', border: '1px solid #e2e8f0' }}>
            <h2 style={{ fontSize: '1.6rem', color: 'var(--primary-color)', marginBottom: '1.2rem', textAlign: 'center' }}>
              Related Machining & Inspection Services
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.2rem' }}>
              <Link href="/double-column-machining-coimbatore" style={{ background: '#fff', padding: '1.2rem', borderRadius: '10px', border: '1px solid #e2e8f0', textDecoration: 'none', color: '#111827', display: 'block' }}>
                <strong style={{ color: 'var(--primary-color)', display: 'block', marginBottom: '0.3rem' }}>Double Column Machining &rarr;</strong>
                <span style={{ fontSize: '0.85rem', color: '#64748b' }}>For workpieces exceeding 1800mm up to 2600mm bed size.</span>
              </Link>
              <Link href="/precision-machining-coimbatore" style={{ background: '#fff', padding: '1.2rem', borderRadius: '10px', border: '1px solid #e2e8f0', textDecoration: 'none', color: '#111827', display: 'block' }}>
                <strong style={{ color: 'var(--primary-color)', display: 'block', marginBottom: '0.3rem' }}>Precision Critical Jobs &rarr;</strong>
                <span style={{ fontSize: '0.85rem', color: '#64748b' }}>Non-standard custom machining with tight 5-micron tolerance.</span>
              </Link>
              <Link href="/industrial-casting-machining-services" style={{ background: '#fff', padding: '1.2rem', borderRadius: '10px', border: '1px solid #e2e8f0', textDecoration: 'none', color: '#111827', display: 'block' }}>
                <strong style={{ color: 'var(--primary-color)', display: 'block', marginBottom: '0.3rem' }}>Industrial Casting Machining &rarr;</strong>
                <span style={{ fontSize: '0.85rem', color: '#64748b' }}>Grey iron, SG iron, bearing housings & gearbox casings.</span>
              </Link>
              <Link href="/cmm-inspection-services-coimbatore" style={{ background: '#fff', padding: '1.2rem', borderRadius: '10px', border: '1px solid #e2e8f0', textDecoration: 'none', color: '#111827', display: 'block' }}>
                <strong style={{ color: 'var(--primary-color)', display: 'block', marginBottom: '0.3rem' }}>Carl Zeiss CMM Inspection &rarr;</strong>
                <span style={{ fontSize: '0.85rem', color: '#64748b' }}>Full 3D coordinate measuring & GD&T verification.</span>
              </Link>
            </div>
          </div>

          <div id="quote-form" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
            {/* FAQ Accordion */}
            <div>
              <h2 style={{ fontSize: '1.8rem', color: 'var(--primary-color)', marginBottom: '1.5rem' }}>Frequently Asked Questions</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <details style={{ background: '#f8f9fa', padding: '1rem', borderRadius: '8px', cursor: 'pointer' }} open>
                  <summary style={{ fontWeight: '600', color: 'var(--primary-color)' }}>What is the maximum bed size for your VMC machines?</summary>
                  <p style={{ marginTop: '0.5rem', color: 'var(--text-color)' }}>Our AMS 1690V-50 provides an expansive axis travel of X: 1800mm, Y: 910mm, and Z: 810mm with 24 tool pockets, while our BFW BMC45TC24++ provides X: 1000mm, Y: 550mm, and Z: 710mm with a column raiser.</p>
                </details>
                <details style={{ background: '#f8f9fa', padding: '1rem', borderRadius: '8px', cursor: 'pointer' }}>
                  <summary style={{ fontWeight: '600', color: 'var(--primary-color)' }}>Do you offer 4-axis VMC machining?</summary>
                  <p style={{ marginTop: '0.5rem', color: 'var(--text-color)' }}>Yes, we are equipped with 4-axis U-CAM rotary tables integrated with our VMCs for complex, multi-sided machining operations.</p>
                </details>
                <details style={{ background: '#f8f9fa', padding: '1rem', borderRadius: '8px', cursor: 'pointer' }}>
                  <summary style={{ fontWeight: '600', color: 'var(--primary-color)' }}>How do you ensure precision in your VMC components?</summary>
                  <p style={{ marginTop: '0.5rem', color: 'var(--text-color)' }}>All VMC components undergo rigorous inspection using our Carl Zeiss Spectrum Verity CMM and Trimos V7 height gauges in a climate-controlled room.</p>
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
