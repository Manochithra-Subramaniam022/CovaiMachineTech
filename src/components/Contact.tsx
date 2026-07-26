import { MapPin, Phone, Mail, User } from "lucide-react";

export default function Contact() {
  const contactDetails = [
    { icon: <User />, title: "Contact Person", desc: "S. Vasanth Raj, B.E.", sub: "GSTIN: 33BBFPV2361C3ZV" },
    { icon: <Phone />, title: "Mobile / Phone", desc: "+91 98945 93444", href: "tel:+919894593444" },
    { icon: <Mail />, title: "Email Address", desc: "covaimachinetech@gmail.com", href: "mailto:covaimachinetech@gmail.com" },
    { icon: <MapPin />, title: "Factory Location", desc: "SF. No: 85B/1, Annur Main Road, Near Suzlon, Kittampalayam (Po), Karumathampatti, Coimbatore – 641 659, Tamil Nadu, India." },
  ];

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Ready to start your next project with us?</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h3>
            <div className="space-y-8">
              {contactDetails.map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-12 h-12 shrink-0 bg-orange-50 text-[#ff5722] rounded-full flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">{item.title}</h4>
                    {item.href ? (
                      <a href={item.href} className="text-lg font-semibold text-gray-900 hover:text-[#ff5722] transition-colors">{item.desc}</a>
                    ) : (
                      <p className="text-lg font-semibold text-gray-900">{item.desc}</p>
                    )}
                    {item.sub && <p className="text-sm text-gray-500 mt-1">{item.sub}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Map */}
          <div className="h-[500px] bg-gray-200 rounded-2xl overflow-hidden shadow-sm border border-gray-100 relative">
            <iframe 
              src="https://maps.google.com/maps?q=85B%2F1%20ANNUR%20MAIN%20ROAD%2C%20NEAR%20SUZLON%2C%20KITTAMPALAYAM%20POST%2C%20KARUMATHAMPATTI%2C%20Karumathampatti%2C%20Tamil%20Nadu%20641659%2C%20India&t=&z=15&ie=UTF8&iwloc=B&output=embed"
              className="w-full h-full border-0"
              allowFullScreen={false}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
