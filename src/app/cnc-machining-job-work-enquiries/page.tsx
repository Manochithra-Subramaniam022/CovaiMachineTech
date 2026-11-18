import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'CNC Machining Job Work Enquiries | Covai Machine Tech Coimbatore',
  description: 'Submit your CNC machining job work enquiries to Covai Machine Tech in Coimbatore. Fast 24-hour RFQ turnaround, drawing evaluation, and competitive component manufacturing rates.',
  openGraph: {
    title: 'CNC Machining Job Work Enquiries | Covai Machine Tech Coimbatore',
    description: 'Fast RFQ and technical drawing evaluation for precision CNC machining job work in Coimbatore. ISO 9001:2015 certified manufacturing facility.',
    url: 'https://covaimachinetech.com/cnc-machining-job-work-enquiries',
    siteName: 'Covai Machine Tech',
    images: [
      {
        url: 'https://covaimachinetech.com/images/hero-cnc.webp',
        width: 1920,
        height: 1080,
        alt: 'CNC Machining Job Work Enquiries at Covai Machine Tech Coimbatore',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  alternates: {
    canonical: 'https://covaimachinetech.com/cnc-machining-job-work-enquiries',
  },
};

export default function CNCMachiningJobWorkEnquiries() {
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
            "name": "CNC Machining Job Work Enquiries",
            "item": "https://covaimachinetech.com/cnc-machining-job-work-enquiries"
          }
        ]
      },
      {
        "@type": "ContactPage",
        "name": "CNC Machining Job Work Enquiries – Covai Machine Tech",
        "description": "Direct quotation and technical RFQ submission portal for CNC machining job work, turning, VMC milling, double column, and VTL services in Coimbatore, India.",
        "url": "https://covaimachinetech.com/cnc-machining-job-work-enquiries",
        "mainEntity": {
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
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What CAD drawing formats do you accept for CNC job work enquiries?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We accept 2D engineering drawings in PDF, DWG, and DXF formats, and 3D solid models in STEP (.stp), IGES (.igs), Parasolid (.x_t), and SolidWorks formats for rapid toolpath planning."
            }
          },
          {
            "@type": "Question",
            "name": "How quickly will I receive a formal quotation for my RFQ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Standard manufacturing enquiries are reviewed and quoted within 24 hours. For complex assemblies or non-standard castings requiring custom fixturing design, quotes are typically delivered within 48 hours."
            }
          },
          {
            "@type": "Question",
            "name": "Can I visit your facility in Coimbatore for a technical review or audit?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we welcome vendor qualification audits and technical reviews. We are conveniently situated in Kittampalayam, Karumathampatti on Annur Main Road, near Suzlon in Coimbatore."
            }
          },
          {
            "@type": "Question",
            "name": "What details should I include in my enquiry for the most accurate quote?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "To ensure accurate pricing, please include part drawings with dimensional tolerances, raw material specification (or specify if material is free issue), monthly or batch quantities, surface treatment requirements, and delivery schedule."
            }
          },
          {
            "@type": "Question",
            "name": "What are your standard payment and credit terms for corporate clients?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Initial prototype orders are generally handled via standard advance payment, while ongoing production accounts and rate-contract clients are supported with mutually agreed credit terms following vendor registration."
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
              <li><Link href="/#contact" style={{ color: 'var(--primary-color)', textDecoration: 'none' }}>Contact</Link></li>
              <li>/</li>
              <li style={{ color: 'var(--text-dark)', fontWeight: '600' }}>Job Work Enquiries</li>
            </ol>
          </nav>

          {/* Section Header */}
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{ display: 'inline-block', background: 'rgba(255, 87, 34, 0.12)', color: '#ff5722', padding: '6px 16px', borderRadius: '30px', fontSize: '0.85rem', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '1rem', border: '1px solid rgba(255, 87, 34, 0.25)' }}>
              RAPID RFQ ESTIMATION
            </div>
            <h1 style={{ fontSize: '2.5rem', color: 'var(--primary-color)', marginBottom: '1rem' }}>
              CNC Machining Job Work Enquiries – Covai Machine Tech
            </h1>
            <p style={{ fontSize: '1.15rem', color: 'var(--text-color)', maxWidth: '850px', margin: '0 auto', lineHeight: '1.7' }}>
              Submit your RFQ to Coimbatore's premier precision CNC manufacturing shop. Rapid drawing feasibility analysis, transparent cycle-time pricing, and dedicated engineering consultation for batch and production job work.
            </p>
          </div>

          {/* Quick Contact Info Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem', marginBottom: '3.5rem' }}>
            <div style={{ background: '#ffffff', padding: '1.8rem', borderRadius: '14px', border: '1px solid #e2e8f0', boxShadow: '0 4px 15px rgba(0,0,0,0.04)', display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
              <div style={{ width: '56px', height: '56px', borderRadius: '12px', background: 'rgba(255, 87, 34, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ff5722', fontSize: '1.5rem', flexShrink: 0 }}>
                <i className="fas fa-phone-alt"></i>
              </div>
              <div>
                <span style={{ fontSize: '0.85rem', color: '#64748b', textTransform: 'uppercase', fontWeight: '600', letterSpacing: '0.5px' }}>Direct Phone / WhatsApp</span>
                <h3 style={{ fontSize: '1.2rem', color: '#111827', margin: '0.2rem 0 0' }}>
                  <a href="tel:+919894593444" style={{ color: '#111827', textDecoration: 'none' }}>+91 98945 93444</a>
                </h3>
              </div>
            </div>

            <div style={{ background: '#ffffff', padding: '1.8rem', borderRadius: '14px', border: '1px solid #e2e8f0', boxShadow: '0 4px 15px rgba(0,0,0,0.04)', display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
              <div style={{ width: '56px', height: '56px', borderRadius: '12px', background: 'rgba(14, 165, 233, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0ea5e9', fontSize: '1.5rem', flexShrink: 0 }}>
                <i className="fas fa-envelope"></i>
              </div>
              <div>
                <span style={{ fontSize: '0.85rem', color: '#64748b', textTransform: 'uppercase', fontWeight: '600', letterSpacing: '0.5px' }}>Official RFQ Email</span>
                <h3 style={{ fontSize: '1.05rem', color: '#111827', margin: '0.2rem 0 0' }}>
                  <a href="mailto:covaimachinetech@gmail.com" style={{ color: '#111827', textDecoration: 'none' }}>covaimachinetech@gmail.com</a>
                </h3>
              </div>
            </div>

            <div style={{ background: '#ffffff', padding: '1.8rem', borderRadius: '14px', border: '1px solid #e2e8f0', boxShadow: '0 4px 15px rgba(0,0,0,0.04)', display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
              <div style={{ width: '56px', height: '56px', borderRadius: '12px', background: 'rgba(16, 185, 129, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#10b981', fontSize: '1.5rem', flexShrink: 0 }}>
                <i className="fas fa-certificate"></i>
              </div>
              <div>
                <span style={{ fontSize: '0.85rem', color: '#64748b', textTransform: 'uppercase', fontWeight: '600', letterSpacing: '0.5px' }}>ISO 9001:2015</span>
                <h3 style={{ fontSize: '1.1rem', color: '#111827', margin: '0.2rem 0 0' }}>Cert No: 25MEQTH25</h3>
              </div>
            </div>
          </div>

          {/* Two-Column RFQ Form + Capability Checklist */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', marginBottom: '4rem' }}>
            {/* RFQ Form */}
            <div className="contact-form" style={{ background: '#ffffff', padding: '2.5rem', borderRadius: '16px', boxShadow: '0 10px 35px rgba(0,0,0,0.06)', border: '1px solid #e2e8f0' }}>
              <h2 style={{ fontSize: '1.8rem', color: 'var(--primary-color)', marginBottom: '0.5rem' }}>
                Online RFQ Submission Portal
              </h2>
              <p style={{ fontSize: '0.9rem', color: '#64748b', marginBottom: '1.5rem' }}>
                Please share your project technical parameters. We will review drawings and respond with a formal quotation within 24 hours.
              </p>
              <form action="#" method="POST" style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <input type="text" placeholder="Your Name *" required className="form-control" style={{ padding: '0.8rem', border: '1px solid #ddd', borderRadius: '6px' }} />
                  <input type="email" placeholder="Work Email *" required className="form-control" style={{ padding: '0.8rem', border: '1px solid #ddd', borderRadius: '6px' }} />
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <input type="tel" placeholder="Mobile / WhatsApp *" required className="form-control" style={{ padding: '0.8rem', border: '1px solid #ddd', borderRadius: '6px' }} />
                  <input type="text" placeholder="Company Name *" required className="form-control" style={{ padding: '0.8rem', border: '1px solid #ddd', borderRadius: '6px' }} />
                </div>
                <select className="form-control" style={{ padding: '0.8rem', border: '1px solid #ddd', borderRadius: '6px', background: '#fff', color: '#334155' }}>
                  <option value="">Select Service / Job Work Type</option>
                  <option value="cnc-turning">CNC Turning Job Work (LMW Centers)</option>
                  <option value="vmc-machining">VMC Machining (3-Axis / 4-Axis U-CAM)</option>
                  <option value="double-column">Double Column Machining (Large 2600mm Bed)</option>
                  <option value="vtl-machining">Heavy VTL Machining (Up to 700mm Dia)</option>
                  <option value="cmm-inspection">3D CMM Inspection Services (Carl Zeiss)</option>
                  <option value="valve-machining">Valve & Pump Component Machining</option>
                  <option value="casting-machining">Industrial Casting Machining (CI / SG Iron)</option>
                  <option value="critical-jobs">Non-Standard & Critical Jobs Machining</option>
                </select>
                <textarea placeholder="Job Description: Material Grade (e.g., SS316, EN19, FG260, Inconel), Tolerances, Estimated Batch Quantity, Required Dispatch Date" rows={5} required className="form-control" style={{ padding: '0.8rem', border: '1px solid #ddd', borderRadius: '6px' }}></textarea>
                <div style={{ background: '#f8f9fa', padding: '0.8rem 1rem', borderRadius: '8px', border: '1px dashed #cbd5e1', fontSize: '0.85rem', color: '#64748b' }}>
                  <i className="fas fa-file-upload" style={{ color: 'var(--accent-color)', marginRight: '6px' }}></i> Have 2D/3D CAD models (PDF, STEP, DXF)? Email directly to <strong style={{ color: 'var(--primary-color)' }}>covaimachinetech@gmail.com</strong> referencing your enquiry.
                </div>
                <button type="submit" className="submit-btn" style={{ background: 'var(--accent-color)', color: '#fff', border: 'none', padding: '1rem', borderRadius: '50px', fontWeight: 'bold', cursor: 'pointer', transition: 'var(--transition)', fontSize: '1rem' }}>
                  Submit RFQ for Engineering Review
                </button>
              </form>
            </div>

            {/* Engineering Evaluation Checklist & Location Info */}
            <div>
              <div style={{ background: '#f8f9fa', padding: '2rem', borderRadius: '16px', border: '1px solid #e2e8f0', marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '1.4rem', color: 'var(--primary-color)', marginBottom: '1rem' }}>
                  Our Quotation & RFQ Evaluation Process
                </h3>
                <ol style={{ paddingLeft: '1.2rem', color: '#475569', lineHeight: '1.8', margin: 0 }}>
                  <li style={{ marginBottom: '0.8rem' }}><strong>Technical Drawing Review:</strong> Our CAD/CAM engineers review critical datums, GD&T tolerances, and tool access paths.</li>
                  <li style={{ marginBottom: '0.8rem' }}><strong>Cycle Time & Machine Selection:</strong> Optimal machine allocation (LMW Turning, BFW/AMS VMC, Double Column, or VTL) for lowest cycle time.</li>
                  <li style={{ marginBottom: '0.8rem' }}><strong>Fixture & Tooling Planning:</strong> Assessment of custom soft jaws, indexer chucks, or hydraulic fixturing requirements.</li>
                  <li style={{ marginBottom: '0.8rem' }}><strong>Quality & CMM Protocol:</strong> Defining 100% inspection parameters on our Carl Zeiss Spectrum Verity CMM.</li>
                  <li><strong>Formal Quotation:</strong> Comprehensive price per piece, material cost (if turnkey), tooling amortization, and lead-time schedule.</li>
                </ol>
              </div>

              <div style={{ background: '#ffffff', padding: '2rem', borderRadius: '16px', border: '1px solid #e2e8f0', boxShadow: '0 4px 15px rgba(0,0,0,0.04)' }}>
                <h3 style={{ fontSize: '1.3rem', color: 'var(--primary-color)', marginBottom: '1rem' }}>
                  Factory Location & Physical Plant
                </h3>
                <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '1rem' }}>
                  <strong>Covai Machine Tech</strong><br />
                  Annur Main Road, Near Suzlon, Kittampalayam, Karumathampatti,<br />
                  Coimbatore - 641659, Tamil Nadu, India.
                </p>
                <p style={{ color: '#475569', fontSize: '0.95rem', margin: '0 0 1rem' }}>
                  <strong>GSTIN:</strong> 33BBFPV2361C3ZV
                </p>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <Link href="/cnc-machining-job-work-india" className="btn btn-secondary" style={{ padding: '8px 20px', fontSize: '0.9rem', textDecoration: 'none' }}>
                    Pan-India Services
                  </Link>
                  <Link href="/precision-machining-coimbatore" className="btn btn-secondary" style={{ padding: '8px 20px', fontSize: '0.9rem', textDecoration: 'none' }}>
                    Precision Machining
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* FAQs */}
          <div style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.8rem', color: 'var(--primary-color)', marginBottom: '1.5rem', textAlign: 'center' }}>
              Frequently Asked Questions on Job Work Enquiries
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '900px', margin: '0 auto' }}>
              <details style={{ background: '#f8f9fa', padding: '1.2rem', borderRadius: '8px', border: '1px solid #e2e8f0' }} open>
                <summary style={{ fontWeight: '600', color: 'var(--primary-color)', cursor: 'pointer' }}>
                  What CAD drawing formats do you accept for CNC job work enquiries?
                </summary>
                <p style={{ marginTop: '0.8rem', color: 'var(--text-color)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                  We accept 2D engineering drawings in PDF, DWG, and DXF formats, and 3D solid models in STEP (.stp), IGES (.igs), Parasolid (.x_t), and SolidWorks formats for rapid toolpath planning.
                </p>
              </details>
              <details style={{ background: '#f8f9fa', padding: '1.2rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                <summary style={{ fontWeight: '600', color: 'var(--primary-color)', cursor: 'pointer' }}>
                  How quickly will I receive a formal quotation for my RFQ?
                </summary>
                <p style={{ marginTop: '0.8rem', color: 'var(--text-color)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                  Standard manufacturing enquiries are reviewed and quoted within 24 hours. For complex assemblies or non-standard castings requiring custom fixturing design, quotes are typically delivered within 48 hours.
                </p>
              </details>
              <details style={{ background: '#f8f9fa', padding: '1.2rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                <summary style={{ fontWeight: '600', color: 'var(--primary-color)', cursor: 'pointer' }}>
                  Can I visit your facility in Coimbatore for a technical review or audit?
                </summary>
                <p style={{ marginTop: '0.8rem', color: 'var(--text-color)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                  Yes, we welcome vendor qualification audits and technical reviews. We are conveniently situated in Kittampalayam, Karumathampatti on Annur Main Road, near Suzlon in Coimbatore.
                </p>
              </details>
              <details style={{ background: '#f8f9fa', padding: '1.2rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                <summary style={{ fontWeight: '600', color: 'var(--primary-color)', cursor: 'pointer' }}>
                  What details should I include in my enquiry for the most accurate quote?
                </summary>
                <p style={{ marginTop: '0.8rem', color: 'var(--text-color)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                  To ensure accurate pricing, please include part drawings with dimensional tolerances, raw material specification (or specify if material is free issue), monthly or batch quantities, surface treatment requirements, and delivery schedule.
                </p>
              </details>
              <details style={{ background: '#f8f9fa', padding: '1.2rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                <summary style={{ fontWeight: '600', color: 'var(--primary-color)', cursor: 'pointer' }}>
                  What are your standard payment and credit terms for corporate clients?
                </summary>
                <p style={{ marginTop: '0.8rem', color: 'var(--text-color)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                  Initial prototype orders are generally handled via standard advance payment, while ongoing production accounts and rate-contract clients are supported with mutually agreed credit terms following vendor registration.
                </p>
              </details>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

