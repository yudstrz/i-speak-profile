import { Mail, Instagram, Linkedin } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Hubungi Kami</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600">
            Ada pertanyaan atau ingin berkolaborasi? Jangan ragu untuk menghubungi kami!
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-xl border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Informasi Kontak</h3>
            <div className="space-y-5">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                  <Mail className="text-white" size={20} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Email</p>
                  <a href="mailto:ispeak@itenas.ac.id" className="text-gray-700 hover:text-blue-600">ispeak@itenas.ac.id</a>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-pink-600 rounded-lg flex items-center justify-center mr-4">
                  <Instagram className="text-white" size={20} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Instagram</p>
                  <a href="https://instagram.com/ispeak.itenas" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-pink-600">@ispeak.itenas</a>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-700 rounded-lg flex items-center justify-center mr-4">
                  <Linkedin className="text-white" size={20} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">LinkedIn</p>
                  <a href="https://linkedin.com/company/ispeak-itenas" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-700">I Speak ITENAS</a>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-xl border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Lokasi</h3>
            <div className="mb-6">
              <p className="text-gray-900 font-bold text-lg mb-2">
                Institut Teknologi Nasional (ITENAS)
              </p>
              <p className="text-gray-700 leading-relaxed">
                Jl. PHH. Mustofa No.23<br />
                Bandung, Jawa Barat 40124<br />
                Indonesia
              </p>
            </div>
            <div className="pt-6 border-t border-gray-200">
              <p className="text-gray-900 font-semibold mb-1">Jurusan Sistem Informasi</p>
              <p className="text-gray-700">Fakultas Teknologi Industri</p>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-10 text-center text-white shadow-xl">
          <h3 className="text-2xl font-bold mb-4">Ingin Berkontribusi?</h3>
          <p className="text-lg mb-8 text-white text-opacity-95">
            Kami selalu terbuka untuk kolaborasi dan kontribusi dari komunitas. Jika Anda tertarik untuk berkontribusi dalam pengembangan I Speak, silakan hubungi kami!
          </p>
          <a
            href="mailto:ispeak@itenas.ac.id"
            className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-opacity-90 transition-all font-semibold shadow-lg"
          >
            <Mail size={20} />
            Hubungi Kami
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;