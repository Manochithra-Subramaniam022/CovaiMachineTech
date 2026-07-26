import { Award, CheckCircle2, Factory, ShieldCheck, Users } from "lucide-react";

export default function About() {
  const stats = [
    { number: "25+", label: "Years Experience", icon: <Award className="w-8 h-8 text-[#ff5722]" /> },
    { number: "7000+", label: "Sq.Ft Facility", icon: <Factory className="w-8 h-8 text-[#ff5722]" /> },
    { number: "100%", label: "Quality Focus", icon: <ShieldCheck className="w-8 h-8 text-[#ff5722]" /> },
    { number: "24/7", label: "Operations", icon: <Users className="w-8 h-8 text-[#ff5722]" /> },
  ];

  const features = [
    {
      title: "ISO 9001:2015 Certified",
      desc: "Strict adherence to quality standards with advanced CARL ZEISS CMM inspection.",
    },
    {
      title: "Heavy & Multi-Axis Machining",
      desc: "Equipped with LMW CNC Turning and BFW/AMS VMCs up to 1800mm.",
    },
    {
      title: "Skilled Technical Team",
      desc: "Qualified engineers, quality inspectors, and 17+ experienced operators.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-orange-100 text-[#ff5722] font-bold text-sm tracking-wide mb-4">
            ABOUT US
          </div>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-6">Partner in Precision Manufacturing</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Spanning an expansive <strong className="text-[#ff5722]">2-Acre facility with 7,000 Sq.Ft of constructed workspace</strong>, we are equipped with state-of-the-art infrastructure. We understand customer requirements thoroughly and adhere to precise planning and execution with a firm emphasis on quality and timely delivery at optimal cost.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-50 mb-4">
                {stat.icon}
              </div>
              <div className="text-4xl font-black text-gray-900 mb-2">{stat.number}</div>
              <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feat, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl border-l-4 border-[#ff5722] shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle2 className="text-[#ff5722] w-6 h-6 shrink-0" />
                <h3 className="text-xl font-bold text-gray-900">{feat.title}</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">{feat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
