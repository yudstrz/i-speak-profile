const TeamSection = () => {
  const teamMembers = [
    { name: "Ahmad Fauzi", role: "Project Lead & Backend Developer", department: "Sistem Informasi - ITENAS", image: "AF" },
    { name: "Siti Nurhaliza", role: "Frontend Developer", department: "Sistem Informasi - ITENAS", image: "SN" },
    { name: "Budi Santoso", role: "AI/ML Engineer", department: "Sistem Informasi - ITENAS", image: "BS" },
    { name: "Dewi Lestari", role: "UI/UX Designer", department: "Sistem Informasi - ITENAS", image: "DL" },
    { name: "Eko Prasetyo", role: "Data Analyst", department: "Sistem Informasi - ITENAS", image: "EP" },
    { name: "Fitri Handayani", role: "Quality Assurance", department: "Sistem Informasi - ITENAS", image: "FH" },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Tim Kami</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600">
            Mahasiswa dan alumni Sistem Informasi ITENAS yang berdedikasi
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all border border-gray-100">
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 h-32 flex items-center justify-center">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-3xl font-bold text-gray-700">{member.image}</span>
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-semibold mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.department}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;