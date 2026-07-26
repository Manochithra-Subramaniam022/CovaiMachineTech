import Image from "next/image";
import { Cog, Ruler, Hammer, Wrench, CheckSquare, Truck } from "lucide-react";

export default function Capabilities() {
  const services = [
    { title: "CNC Turning", desc: "Advanced high-speed turning using LMW LL20TL5 & LL20TL10 centers.", icon: <Cog className="text-[#ff5722] w-8 h-8" /> },
    { title: "3 & 4 Axis VMC", desc: "High-precision machining using BFW, AMS, and KTM Machining Centers.", icon: <Hammer className="text-[#ff5722] w-8 h-8" /> },
    { title: "Heavy Duty VTL", desc: "Heavy-duty precision turning up to 800mm swing diameter.", icon: <Ruler className="text-[#ff5722] w-8 h-8" /> },
    { title: "Valve Machining", desc: "Specialist machining of ball, gate, globe, and check valves.", icon: <Wrench className="text-[#ff5722] w-8 h-8" /> },
    { title: "CMM Inspection", desc: "Rigorous quality control utilizing CARL ZEISS CONTURA 3D CMM.", icon: <CheckSquare className="text-[#ff5722] w-8 h-8" /> },
    { title: "Job Work & Logistics", desc: "Complete job work with dedicated transportation facilities.", icon: <Truck className="text-[#ff5722] w-8 h-8" /> },
  ];

  const portfolio = [
    { title: "Valve & Pipeline Components", img: "/images/portfolio-valve-pipeline.png" },
    { title: "Ball, Gate & Globe Valves", img: "/images/portfolio-ball-valve.png" },
    { title: "High-Precision Turned Parts", img: "/images/portfolio-turned-parts.png" },
    { title: "Heavy VTL Machined Parts", img: "/images/portfolio-heavy-vtl.png" },
    { title: "Inconel & Stainless Steel", img: "/images/portfolio-inconel-steel.png" },
    { title: "4-Axis U-CAM Machining", img: "/images/portfolio-4axis-ucam.png" },
  ];

  const machines = [
    { title: "LMW LL20TL5", type: "CNC Turning", img: "/images/machine-lmw-ll20tl5.jpeg" },
    { title: "LMW LL20TL10", type: "CNC Turning with Steady Rest", img: "/images/machine-lmw-ll20tl10.jpeg" },
    { title: "BFW BVL 700H", type: "Heavy Duty VTL", img: "/images/machine-bfw-bvl700h.jpeg" },
    { title: "BFW BMC45TC24++", type: "4-Axis VMC", img: "/images/machine-bfw-bmc45tc24.jpeg" },
    { title: "CARL ZEISS CONTURA", type: "3D CMM", img: "/images/machine-zeiss-contura.jpeg" },
  ];

  return (
    <section id="capabilities" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Core Services */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Core Capabilities</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Comprehensive CNC machining, multi-axis turning, and precision manufacturing solutions</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((svc, idx) => (
              <div key={idx} className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-lg transition-all group">
                <div className="w-16 h-16 rounded-xl bg-orange-100 flex items-center justify-center mb-6 group-hover:bg-[#ff5722] [&>svg]:group-hover:text-white transition-colors">
                  {svc.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{svc.title}</h3>
                <p className="text-gray-600 leading-relaxed">{svc.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Machinery */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">State-of-the-art Machinery</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Engineered for Industrial Performance</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {machines.map((machine, idx) => (
              <div key={idx} className="rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all">
                <div className="relative h-64 bg-white p-6">
                  <Image src={machine.img} alt={machine.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-contain p-4" />
                </div>
                <div className="p-6 bg-gray-50 border-t border-gray-100">
                  <span className="text-xs font-bold text-[#ff5722] uppercase tracking-wider mb-2 block">{machine.type}</span>
                  <h3 className="text-lg font-bold text-gray-900">{machine.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Portfolio */}
        <div>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Precision Portfolio</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Specialized machining of complex components</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolio.map((item, idx) => (
              <div key={idx} className="group relative rounded-2xl overflow-hidden h-72 border border-gray-200 shadow-sm">
                <Image src={item.img} alt={item.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent flex flex-col justify-end p-6 opacity-90 group-hover:opacity-100 transition-opacity">
                  <h4 className="text-white text-xl font-bold">{item.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
