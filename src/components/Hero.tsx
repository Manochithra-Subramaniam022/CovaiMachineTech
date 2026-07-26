import { ArrowRight, Settings } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/images/machine-lmw-ll20tl10.jpeg')] bg-cover bg-center opacity-5" />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-[#ff5722] font-bold text-sm tracking-wide mb-6">
            <Settings size={16} className="animate-[spin_4s_linear_infinite]" />
            EXCELLENCE IN PRECISION ENGINEERING
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-extrabold text-gray-900 leading-[1.1] mb-8">
            Advanced CNC Machining <span className="text-[#ff5722]">&</span> Manufacturing Solutions
          </h1>
          
          <p className="text-lg lg:text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl">
            ISO 9001:2015 Certified facility delivering high-precision components for Automotive, Valve, Aerospace, and General Engineering sectors since 2005.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#capabilities"
              className="inline-flex justify-center items-center gap-2 bg-[#ff5722] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#e64a19] transition-all shadow-lg hover:shadow-[#ff5722]/30 hover:-translate-y-1"
            >
              Explore Capabilities <ArrowRight size={20} />
            </a>
            <a
              href="#contact"
              className="inline-flex justify-center items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-800 transition-all shadow-lg hover:shadow-gray-900/20 hover:-translate-y-1"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
