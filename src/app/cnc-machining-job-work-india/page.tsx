import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'CNC Machining Job Work India | Top CNC Machining Vendors in Tamil Nadu',
  description: 'Premier CNC machining vendor in India & Tamil Nadu. Dedicated precision job work for OEMs across Chennai, Bangalore, Hosur, Tiruppur, Pune, Mumbai & Hyderabad.',
  openGraph: {
    title: 'CNC Machining Job Work India | Top CNC Machining Vendors in Tamil Nadu',
    description: 'Premier CNC machining vendor in India and Tamil Nadu. Full multi-axis CNC, VMC, VTL, and Double Column job work with dedicated logistics across India.',
    url: 'https://covaimachinetech.com/cnc-machining-job-work-india',
    siteName: 'Covai Machine Tech',
    images: [
      {
        url: 'https://covaimachinetech.com/images/company-view.webp',
        width: 800,
        height: 600,
        alt: 'Covai Machine Tech 2-Acre Precision CNC Manufacturing Facility in Coimbatore India',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  alternates: {
    canonical: 'https://covaimachinetech.com/cnc-machining-job-work-india',
  },
};

export default function CNCMachiningJobWorkIndia() {
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
            "name": "CNC Machining Job Work in India & Tamil Nadu",
            "item": "https://covaimachinetech.com/cnc-machining-job-work-india"
          }
        ]
      },
      {
        "@type": "Service",
        "serviceType": "CNC Machining & Contract Manufacturing Services India",
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
          { "@type": "Country", "name": "India" },
          { "@type": "AdministrativeArea", "name": "Tamil Nadu" },
          { "@type": "City", "name": "Chennai" },
          { "@type": "City", "name": "Bangalore" },
          { "@type": "City", "name": "Hosur" },
          { "@type": "City", "name": "Tiruppur" },
          { "@type": "City", "name": "Erode" },
          { "@type": "City", "name": "Salem" },
          { "@type": "City", "name": "Hyderabad" },
          { "@type": "City", "name": "Pune" },
          { "@type": "City", "name": "Mumbai" },
          { "@type": "City", "name": "Ahmedabad" }
        ],
        "description": "Pan-India CNC machining vendor and precision engineering job work company in Coimbatore, Tamil Nadu. Serving tier-1 OEMs with CNC turning, VMC milling, heavy VTL, double column machining, and Carl Zeiss CMM quality validation."
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Why do industrial companies across India outsource CNC job work to Covai Machine Tech in Coimbatore?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Coimbatore is India's leading precision engineering and foundry center. Outsourcing to Covai Machine Tech gives clients access to advanced multi-axis CNC machines (LMW, BFW, AMS, KTM), German Carl Zeiss 3D CMM inspection, lower manufacturing overheads, and reliable in-house transportation logistics."
            }
          },
          {
            "@type": "Question",
            "name": "How do you handle component logistics for clients outside Coimbatore (e.g., Chennai, Bangalore, Pune, Mumbai)?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We operate our own dedicated transport fleet for local and regional transit across Tamil Nadu and Karnataka, and partner with express freight carriers for rapid door-to-door delivery with VCI anti-rust protective packaging to Pune, Mumbai, Ahmedabad, and Hyderabad."
            }
          },
          {
            "@type": "Question",
            "name": "What quality documentation do you provide for corporate procurement teams?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We provide ISO 9001:2015 certified Inspection Reports, Carl Zeiss CMM coordinate data, raw material test certificates (MTC), heat-treatment reports, and PPAP Level 3 documentation upon request."
            }
          },
          {
            "@type": "Question",
            "name": "What is the typical lead time for prototype vs production batch job work?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "First-off prototypes and sample components are typically completed within 3 to 7 business days from drawing sign-off. Production batches are scheduled on monthly or quarterly blanket purchase orders with on-time delivery guarantees."
            }
          },
          {
            "@type": "Question",
            "name": "Do you sign Non-Disclosure Agreements (NDA) for proprietary designs?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we routinely sign mutual NDAs with national and international engineering customers to protect intellectual property, CAD models, and proprietary casting designs."
            }
          }
        ]
      }
    ]
  };

  const regionalHubs = [
    { city: 'Chennai', desc: 'Automotive & heavy commercial vehicle component machining, tier-1 vendor support with overnight transit from Coimbatore.' },
    { city: 'Bangalore', desc: 'Aerospace, precision automation, and fluid power engineering components with high-tolerance Zeiss CMM qualification.' },
    { city: 'Hosur', desc: 'Automotive transmission parts, precision turned shafts, and cast iron housing job work with express truck transit.' },
    { city: 'Tiruppur & Erode', desc: 'High-speed textile machinery parts, custom stainless steel turned pins, and rapid local job work collection.' },
    { city: 'Salem', desc: 'Steel mill components, heavy valve castings, and alloy steel turning with dedicated transport facilities.' },
    { city: 'Hyderabad', desc: 'Defense, aerospace, and high-pressure fluid valves with strict micron tolerance and material traceability.' },
    { city: 'Pune & Mumbai', desc: 'Heavy engineering, oil & gas valve bodies, and large double column bridge milling for Maharashtra engineering corridors.' },
    { city: 'Ahmedabad', desc: 'Pump components, industrial valves, and chemical processing equipment with certified corrosion-resistant alloy machining.' },
  ];

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
              <li style={{ color: 'var(--text-dark)', fontWeight: '600' }}>CNC Machining Job Work India</li>
            </ol>
          </nav>

          {/* Section Header */}
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{ display: 'inline-block', background: 'rgba(255, 87, 34, 0.12)', color: '#ff5722', padding: '6px 16px', borderRadius: '30px', fontSize: '0.85rem', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '1rem', border: '1px solid rgba(255, 87, 34, 0.25)' }}>
              NATIONAL B2B MACHINING VENDOR
            </div>
            <h1 style={{ fontSize: '2.5rem', color: 'var(--primary-color)', marginBottom: '1rem' }}>
              CNC Machining Job Work in Tamil Nadu & Pan-India Engineering
            </h1>
            <p style={{ fontSize: '1.15rem', color: 'var(--text-color)', maxWidth: '850px', margin: '0 auto', lineHeight: '1.7' }}>
              Your preferred CNC machining partner and vendor in India. Spanning an expansive 2-Acre manufacturing facility in Coimbatore with 7,000 Sq.Ft of advanced workshop floor space, delivering ISO 9001:2015 certified precision job work across India.
            </p>
          </div>

          {/* Hero Technical Overview */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', marginBottom: '4rem', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: '1.8rem', color: 'var(--primary-color)', marginBottom: '1rem' }}>
                Why Leading Indian OEMs Choose Covai Machine Tech
              </h2>
              <p style={{ color: 'var(--text-dark)', marginBottom: '1.5rem', lineHeight: '1.7' }}>
                Engineering procurement managers across Tamil Nadu, Karnataka, Maharashtra, and Gujarat trust Covai Machine Tech for consistent quality, transparent pricing, and punctual delivery. Our unified plant integrates turning, multi-axis milling, heavy VTL, large double column bridge milling, and German Zeiss CMM inspection.
              </p>
              <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '2rem' }}>
                <tbody>
                  <tr style={{ borderBottom: '1px solid #ddd' }}>
                    <th style={{ padding: '0.9rem', textAlign: 'left', backgroundColor: '#f8f9fa' }}>Plant Area & Setup</th>
                    <td style={{ padding: '0.9rem' }}>2 Acres Campus, 7,000 Sq.Ft Covered Shop Floor in Coimbatore</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #ddd' }}>
                    <th style={{ padding: '0.9rem', textAlign: 'left', backgroundColor: '#f8f9fa' }}>Quality Certification</th>
                    <td style={{ padding: '0.9rem' }}>ISO 9001:2015 (Cert No: 25MEQTH25, Valid thru 2028)</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #ddd' }}>
                    <th style={{ padding: '0.9rem', textAlign: 'left', backgroundColor: '#f8f9fa' }}>Metrology Standard</th>
                    <td style={{ padding: '0.9rem' }}>Carl Zeiss Spectrum Verity 9126 RDS 3D CMM + Trimos V7</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #ddd' }}>
                    <th style={{ padding: '0.9rem', textAlign: 'left', backgroundColor: '#f8f9fa' }}>Workforce Expertise</th>
                    <td style={{ padding: '0.9rem' }}>25+ Engineers, Programmers, Quality Auditors & Machinists</td>
                  </tr>
                  <tr>
                    <th style={{ padding: '0.9rem', textAlign: 'left', backgroundColor: '#f8f9fa' }}>Logistics Fleet</th>
                    <td style={{ padding: '0.9rem' }}>Dedicated In-House Transportation for Prompt Collection & Dispatch</td>
                  </tr>
                </tbody>
              </table>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a href="#quote-form" className="btn btn-primary" style={{ padding: '12px 28px', textDecoration: 'none' }}>Submit Vendor RFQ</a>
                <Link href="/cnc-machining-job-work-enquiries" className="btn btn-secondary" style={{ padding: '12px 28px', textDecoration: 'none' }}>Enquiries Portal</Link>
              </div>
            </div>
            <div>
              <img
                src="/images/company-view.webp"
                alt="Covai Machine Tech 2-Acre Modern Manufacturing Facility in Coimbatore India"
                width={800}
                height={600}
                style={{ width: '100%', height: 'auto', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
              />
            </div>
          </div>

          {/* Regional Hubs Serving India */}
          <div style={{ background: '#f8f9fa', padding: '3rem', borderRadius: '16px', marginBottom: '4rem', border: '1px solid #e2e8f0' }}>
            <h2 style={{ fontSize: '1.9rem', color: 'var(--primary-color)', marginBottom: '1.2rem', textAlign: 'center' }}>
              Strategic CNC Machining Services Across Key Indian Manufacturing Hubs
            </h2>
            <p style={{ color: 'var(--text-dark)', maxWidth: '900px', margin: '0 auto 2.5rem', textAlign: 'center', lineHeight: '1.8' }}>
              With our in-house logistics fleet and established national logistics partnerships, we provide regular, door-to-door job work dispatch to all major industrial clusters:
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
              {regionalHubs.map((hub, idx) => (
                <div key={idx} style={{ background: '#ffffff', padding: '1.5rem', borderRadius: '12px', borderLeft: '4px solid var(--accent-color)', boxShadow: '0 4px 15px rgba(0,0,0,0.04)' }}>
                  <h3 style={{ fontSize: '1.15rem', color: '#111827', marginBottom: '0.4rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <i className="fas fa-map-marker-alt" style={{ color: 'var(--accent-color)', fontSize: '0.9rem' }}></i> {hub.city}
                  </h3>
                  <p style={{ color: '#475569', fontSize: '0.9rem', lineHeight: '1.5', margin: 0 }}>
                    {hub.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Machine Fleet Grid & Capabilities */}
          <div style={{ marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '1.9rem', color: 'var(--primary-color)', marginBottom: '1.2rem', textAlign: 'center' }}>
              All-In-One Machinery Under One Roof
            </h2>
            <p style={{ color: '#64748b', textAlign: 'center', maxWidth: '750px', margin: '0 auto 2.5rem' }}>
              Eliminate multi-vendor coordination headaches. We execute turning, 4-axis milling, heavy boring, and CMM inspection within our single secure facility.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
              <div style={{ border: '1px solid #e2e8f0', borderRadius: '12px', padding: '1.5rem', background: '#fff' }}>
                <h3 style={{ fontSize: '1.15rem', color: 'var(--primary-color)', marginBottom: '0.5rem' }}>CNC Turning Centers</h3>
                <p style={{ fontSize: '0.9rem', color: '#475569', marginBottom: '0.8rem' }}>LMW LL20TL10 with steady rest (1100mm length) & LMW LL20TL5 for precision cylindrical parts.</p>
                <Link href="/cnc-turning-job-work-coimbatore" style={{ fontSize: '0.88rem', color: 'var(--accent-color)', fontWeight: '600', textDecoration: 'none' }}>CNC Turning Services &rarr;</Link>
              </div>
              <div style={{ border: '1px solid #e2e8f0', borderRadius: '12px', padding: '1.5rem', background: '#fff' }}>
                <h3 style={{ fontSize: '1.15rem', color: 'var(--primary-color)', marginBottom: '0.5rem' }}>VMC & 4-Axis Machining</h3>
                <p style={{ fontSize: '0.9rem', color: '#475569', marginBottom: '0.8rem' }}>AMS 1690V-50 (1800mm travel) & BFW BMC45TC24++ with U-CAM 4th-axis rotary table.</p>
                <Link href="/vmc-machining-coimbatore" style={{ fontSize: '0.88rem', color: 'var(--accent-color)', fontWeight: '600', textDecoration: 'none' }}>VMC Machining Details &rarr;</Link>
              </div>
              <div style={{ border: '1px solid #e2e8f0', borderRadius: '12px', padding: '1.5rem', background: '#fff' }}>
                <h3 style={{ fontSize: '1.15rem', color: 'var(--primary-color)', marginBottom: '0.5rem' }}>Heavy Double Column</h3>
                <p style={{ fontSize: '0.9rem', color: '#475569', marginBottom: '0.8rem' }}>KTM DCMC2618 (2600 x 2400 x 1000mm) with angular head for big plate and base milling.</p>
                <Link href="/double-column-machining-coimbatore" style={{ fontSize: '0.88rem', color: 'var(--accent-color)', fontWeight: '600', textDecoration: 'none' }}>Double Column Services &rarr;</Link>
              </div>
              <div style={{ border: '1px solid #e2e8f0', borderRadius: '12px', padding: '1.5rem', background: '#fff' }}>
                <h3 style={{ fontSize: '1.15rem', color: 'var(--primary-color)', marginBottom: '0.5rem' }}>Heavy Duty VTL</h3>
                <p style={{ fontSize: '0.9rem', color: '#475569', marginBottom: '0.8rem' }}>BFW BVL 700H (800mm swing, 700mm turning dia) for large valve bodies and heavy rings.</p>
                <Link href="/vtl-machining-coimbatore" style={{ fontSize: '0.88rem', color: 'var(--accent-color)', fontWeight: '600', textDecoration: 'none' }}>VTL Machining Details &rarr;</Link>
              </div>
            </div>
          </div>

          {/* FAQs & Form */}
          <div id="quote-form" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem' }}>
            {/* FAQ Accordion */}
            <div>
              <h2 style={{ fontSize: '1.8rem', color: 'var(--primary-color)', marginBottom: '1.5rem' }}>
                Frequently Asked Questions for Pan-India Job Work
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <details style={{ background: '#f8f9fa', padding: '1.2rem', borderRadius: '8px', border: '1px solid #e2e8f0' }} open>
                  <summary style={{ fontWeight: '600', color: 'var(--primary-color)', cursor: 'pointer' }}>
                    Why do industrial companies across India outsource CNC job work to Covai Machine Tech in Coimbatore?
                  </summary>
                  <p style={{ marginTop: '0.8rem', color: 'var(--text-color)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                    Coimbatore is India's leading precision engineering and foundry center. Outsourcing to Covai Machine Tech gives clients access to advanced multi-axis CNC machines (LMW, BFW, AMS, KTM), German Carl Zeiss 3D CMM inspection, lower manufacturing overheads, and reliable in-house transportation logistics.
                  </p>
                </details>
                <details style={{ background: '#f8f9fa', padding: '1.2rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                  <summary style={{ fontWeight: '600', color: 'var(--primary-color)', cursor: 'pointer' }}>
                    How do you handle component logistics for clients outside Coimbatore (e.g., Chennai, Bangalore, Pune, Mumbai)?
                  </summary>
                  <p style={{ marginTop: '0.8rem', color: 'var(--text-color)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                    We operate our own dedicated transport fleet for local and regional transit across Tamil Nadu and Karnataka, and partner with express freight carriers for rapid door-to-door delivery with VCI anti-rust protective packaging to Pune, Mumbai, Ahmedabad, and Hyderabad.
                  </p>
                </details>
                <details style={{ background: '#f8f9fa', padding: '1.2rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                  <summary style={{ fontWeight: '600', color: 'var(--primary-color)', cursor: 'pointer' }}>
                    What quality documentation do you provide for corporate procurement teams?
                  </summary>
                  <p style={{ marginTop: '0.8rem', color: 'var(--text-color)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                    We provide ISO 9001:2015 certified Inspection Reports, Carl Zeiss CMM coordinate data, raw material test certificates (MTC), heat-treatment reports, and PPAP Level 3 documentation upon request.
                  </p>
                </details>
                <details style={{ background: '#f8f9fa', padding: '1.2rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                  <summary style={{ fontWeight: '600', color: 'var(--primary-color)', cursor: 'pointer' }}>
                    What is the typical lead time for prototype vs production batch job work?
                  </summary>
                  <p style={{ marginTop: '0.8rem', color: 'var(--text-color)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                    First-off prototypes and sample components are typically completed within 3 to 7 business days from drawing sign-off. Production batches are scheduled on monthly or quarterly blanket purchase orders with on-time delivery guarantees.
                  </p>
                </details>
                <details style={{ background: '#f8f9fa', padding: '1.2rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                  <summary style={{ fontWeight: '600', color: 'var(--primary-color)', cursor: 'pointer' }}>
                    Do you sign Non-Disclosure Agreements (NDA) for proprietary designs?
                  </summary>
                  <p style={{ marginTop: '0.8rem', color: 'var(--text-color)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                    Yes, we routinely sign mutual NDAs with national and international engineering customers to protect intellectual property, CAD models, and proprietary casting designs.
                  </p>
                </details>
              </div>
            </div>

            {/* Request for Quote Form */}
            <div className="contact-form" style={{ background: '#ffffff', padding: '2.2rem', borderRadius: '16px', boxShadow: '0 8px 30px rgba(0,0,0,0.06)', border: '1px solid #e2e8f0' }}>
              <h2 style={{ fontSize: '1.8rem', color: 'var(--primary-color)', marginBottom: '0.5rem' }}>
                Submit Pan-India Vendor RFQ
              </h2>
              <p style={{ fontSize: '0.9rem', color: '#64748b', marginBottom: '1.5rem' }}>
                Connect with our senior manufacturing engineering team for vendor empanelment, contract job work, and rate contracts.
              </p>
              <form action="#" method="POST" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <input type="text" placeholder="Full Name *" required className="form-control" style={{ padding: '0.8rem', border: '1px solid #ddd', borderRadius: '6px' }} />
                <input type="email" placeholder="Official Business Email *" required className="form-control" style={{ padding: '0.8rem', border: '1px solid #ddd', borderRadius: '6px' }} />
                <input type="tel" placeholder="Phone Number *" required className="form-control" style={{ padding: '0.8rem', border: '1px solid #ddd', borderRadius: '6px' }} />
                <input type="text" placeholder="Company Name, City & State *" required className="form-control" style={{ padding: '0.8rem', border: '1px solid #ddd', borderRadius: '6px' }} />
                <textarea placeholder="Outsourcing Scope: Component Types, Monthly Quantities, Sourcing Model (Turnkey / Job Work)" rows={4} required className="form-control" style={{ padding: '0.8rem', border: '1px solid #ddd', borderRadius: '6px' }}></textarea>
                <button type="submit" className="submit-btn" style={{ background: 'var(--accent-color)', color: '#fff', border: 'none', padding: '1rem', borderRadius: '50px', fontWeight: 'bold', cursor: 'pointer', transition: 'var(--transition)' }}>
                  Submit Vendor RFQ
                </button>
              </form>
              <div style={{ marginTop: '1.5rem', borderTop: '1px solid #f1f5f9', paddingTop: '1rem', fontSize: '0.88rem', color: '#64748b', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <div><i className="fas fa-phone-alt" style={{ color: 'var(--accent-color)', marginRight: '6px' }}></i> Direct Line: <a href="tel:+919894593444" style={{ color: 'var(--primary-color)', textDecoration: 'none' }}>+91 98945 93444</a></div>
                <div><i className="fas fa-envelope" style={{ color: 'var(--accent-color)', marginRight: '6px' }}></i> Sourcing Desk: <a href="mailto:covaimachinetech@gmail.com" style={{ color: 'var(--primary-color)', textDecoration: 'none' }}>covaimachinetech@gmail.com</a></div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

