import { Check } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Tentang I Speak</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-orange-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Platform inovatif yang menggabungkan teknologi AI dan expertise pendidikan untuk meningkatkan kemampuan speaking
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-gradient-to-br from-blue-50 to-orange-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Visi Kami</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Menjadi platform terdepan dalam penilaian kemampuan speaking berbasis AI di Indonesia, membantu ribuan pelajar dan profesional meningkatkan kemampuan komunikasi mereka.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Kami percaya bahwa dengan teknologi yang tepat, setiap orang dapat mengakses penilaian speaking berkualitas tinggi tanpa batasan geografis atau biaya yang mahal.
            </p>
          </div>
          <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Misi Kami</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <Check size={14} className="text-white" />
                </div>
                <span className="text-gray-700">Mengembangkan teknologi AI yang akurat untuk penilaian speaking</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <Check size={14} className="text-white" />
                </div>
                <span className="text-gray-700">Menyediakan platform yang mudah diakses dan user-friendly</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <Check size={14} className="text-white" />
                </div>
                <span className="text-gray-700">Memberikan feedback konstruktif untuk peningkatan berkelanjutan</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <Check size={14} className="text-white" />
                </div>
                <span className="text-gray-700">Berkontribusi pada pendidikan bahasa di Indonesia</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 md:p-12 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-10 text-center">Teknologi yang Kami Gunakan</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "🤖", title: "Artificial Intelligence", desc: "Machine Learning & Deep Learning" },
              { icon: "🎤", title: "Speech Recognition", desc: "Advanced Audio Processing" },
              { icon: "📊", title: "Data Analytics", desc: "Comprehensive Reporting" },
              { icon: "🔒", title: "Security", desc: "Data Protection & Privacy" },
            ].map((tech, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center border border-gray-100">
                <div className="text-4xl mb-4">{tech.icon}</div>
                <h4 className="font-bold text-gray-900 mb-2">{tech.title}</h4>
                <p className="text-sm text-gray-600">{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center bg-gradient-to-r from-blue-600 to-orange-600 text-white p-10 rounded-2xl">
          <h3 className="text-2xl font-bold mb-2">Dikembangkan oleh</h3>
          <p className="text-xl mb-2">Jurusan Sistem Informasi</p>
          <p className="text-lg">Institut Teknologi Nasional (ITENAS) Bandung</p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;