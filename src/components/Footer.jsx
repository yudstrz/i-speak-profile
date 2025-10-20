import { Mail, Instagram, Linkedin } from 'lucide-react';

const Footer = ({ navigate }) => {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">IS</span>
              </div>
              <h3 className="text-2xl font-bold">I Speak</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Platform penilaian kemampuan speaking otomatis berbasis AI untuk meningkatkan kemampuan komunikasi Anda.
            </p>
          </div>
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => navigate('home')} className="text-gray-400 hover:text-white transition-colors text-sm">Home</button>
              </li>
              <li>
                <button onClick={() => navigate('about')} className="text-gray-400 hover:text-white transition-colors text-sm">Tentang</button>
              </li>
              <li>
                <button onClick={() => navigate('team')} className="text-gray-400 hover:text-white transition-colors text-sm">Tim</button>
              </li>
              <li>
                <button onClick={() => navigate('contact')} className="text-gray-400 hover:text-white transition-colors text-sm">Kontak</button>
              </li>
            </ul>
          </div>
          {/* Contact & Social */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Hubungi Kami</h4>
            <div className="space-y-3 mb-4">
              <a href="mailto:ispeak@itenas.ac.id" className="flex items-center text-gray-400 hover:text-white transition-colors text-sm">
                <Mail size={16} className="mr-2" />
                ispeak@itenas.ac.id
              </a>
            </div>
            <div className="flex gap-3">
              <a href="mailto:ispeak@itenas.ac.id" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-colors">
                <Mail size={18} />
              </a>
              <a href="https://instagram.com/ispeak.itenas" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="https://linkedin.com/company/ispeak-itenas" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>
        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} I Speak - Sistem Informasi ITENAS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;