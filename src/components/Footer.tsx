export default function Footer() {
  return (
    <footer className="bg-gray-900 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">CovaiMachineTech</h3>
            <p className="text-gray-400">Your trusted partner in precision CNC machining solutions.</p>
          </div>

          <div className="flex space-x-8">
            <a href="#home" className="text-gray-400 hover:text-white transition-colors font-medium">Home</a>
            <a href="#about" className="text-gray-400 hover:text-white transition-colors font-medium">About</a>
            <a href="#capabilities" className="text-gray-400 hover:text-white transition-colors font-medium">Capabilities</a>
            <a href="#contact" className="text-gray-400 hover:text-white transition-colors font-medium">Contact</a>
          </div>

        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-sm">&copy; 2026 Covai Machine Tech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
