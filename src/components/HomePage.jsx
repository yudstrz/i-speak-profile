import { ExternalLink, ArrowRight, Check } from 'lucide-react';

const HomePage = ({ navigate }) => {
  const dataCollectionLink = "https://forms.gle/your-data-collection-form";
  const assessmentLink = "https://assessment.ispeak.id";

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="text-center">
            <div className="inline-block mb-4 px-4 py-2 bg-white bg-opacity-20 rounded-full text-sm font-semibold backdrop-blur-sm">
              Powered by AI Technology
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Automated Speaking Assessment<br />& Data Collection
            </h1>
            <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto text-white text-opacity-95">
              Platform penilaian kemampuan speaking otomatis berbasis AI yang dikembangkan oleh mahasiswa dan alumni Sistem Informasi ITENAS
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={dataCollectionLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg text-base font-semibold hover:bg-opacity-90 transition-all transform hover:scale-105 shadow-xl"
              >
                Data Collection
                <ExternalLink size={18} />
              </a>
              <a
                href={assessmentLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-base font-semibold hover:bg-white hover:text-blue-600 transition-all transform hover:scale-105"
              >
                Try Assessment
                <ExternalLink size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Fitur Utama Platform
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-4"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Dua fitur utama yang dirancang untuk membantu pengumpulan data dan penilaian kemampuan speaking
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="group bg-white border-2 border-gray-100 p-8 rounded-2xl hover:border-blue-200 hover:shadow-xl transition-all">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                  <span className="text-white text-2xl">🎙️</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Data Collection</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">
                Sistem pengumpulan data peserta yang terstruktur dan sistematis. Mencakup informasi demografis, rekaman suara, dan metadata penting untuk analisis kemampuan speaking.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start text-gray-700">
                  <Check size={20} className="text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Form pengisian data yang user-friendly</span>
                </li>
                <li className="flex items-start text-gray-700">
                  <Check size={20} className="text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Rekaman audio berkualitas tinggi</span>
                </li>
                <li className="flex items-start text-gray-700">
                  <Check size={20} className="text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Penyimpanan data yang aman</span>
                </li>
              </ul>
              <a
                href={dataCollectionLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
              >
                Mulai Data Collection
                <ArrowRight size={18} />
              </a>
            </div>
            <div className="group bg-white border-2 border-gray-100 p-8 rounded-2xl hover:border-purple-200 hover:shadow-xl transition-all">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                  <span className="text-white text-2xl">🤖</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Assessment</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">
                Platform penilaian otomatis menggunakan AI untuk mengevaluasi kemampuan speaking. Memberikan penilaian objektif berdasarkan 7 aspek utama kemampuan berbicara.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start text-gray-700">
                  <Check size={20} className="text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Penilaian otomatis berbasis AI</span>
                </li>
                <li className="flex items-start text-gray-700">
                  <Check size={20} className="text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Evaluasi 7 aspek kemampuan speaking</span>
                </li>
                <li className="flex items-start text-gray-700">
                  <Check size={20} className="text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Feedback detail dan terukur</span>
                </li>
              </ul>
              <a
                href={assessmentLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors font-semibold"
              >
                Coba Assessment
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
          <div className="text-center mt-12">
            <button
              onClick={() => navigate('about')}
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold"
            >
              Pelajari Lebih Lanjut Tentang Platform
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>
      {/* 7 Sub-Construct Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              7 Aspek Penilaian
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-4"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Sistem penilaian komprehensif untuk evaluasi kemampuan speaking secara menyeluruh
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[
              { title: "Pronunciation", icon: "🗣️", desc: "Kejelasan pengucapan" },
              { title: "Fluency", icon: "⚡", desc: "Kelancaran berbicara" },
              { title: "Grammar", icon: "📝", desc: "Ketepatan tata bahasa" },
              { title: "Vocabulary", icon: "📚", desc: "Kekayaan kosakata" },
              { title: "Comprehension", icon: "🧠", desc: "Pemahaman konteks" },
              { title: "Coherence", icon: "🔗", desc: "Keterkaitan ide" },
              { title: "Task Achievement", icon: "🎯", desc: "Pencapaian tugas" },
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all text-center border border-gray-100">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Team Section Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tim Pengembang
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-4"></div>
            <p className="text-lg text-gray-600">
              Mahasiswa dan alumni Sistem Informasi ITENAS yang berdedikasi
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              { name: "Ahmad Fauzi", role: "Project Lead", img: "AF" },
              { name: "Siti Nurhaliza", role: "Frontend Developer", img: "SN" },
              { name: "Budi Santoso", role: "AI/ML Engineer", img: "BS" },
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all border border-gray-100">
                <div className="bg-gradient-to-br from-blue-600 to-purple-600 h-32 flex items-center justify-center">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-2xl font-bold text-gray-700">{member.img}</span>
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <button
              onClick={() => navigate('team')}
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold shadow-md hover:shadow-lg"
            >
              Lihat Semua Tim
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Siap Meningkatkan Kemampuan Speaking?
          </h2>
          <p className="text-xl mb-10 text-white text-opacity-95">
            Bergabunglah dengan platform I Speak dan rasakan pengalaman penilaian speaking berbasis AI
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={dataCollectionLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-opacity-90 transition-all shadow-xl"
            >
              Mulai Sekarang
              <ExternalLink size={20} />
            </a>
            <button
              onClick={() => navigate('contact')}
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all"
            >
              Hubungi Kami
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;