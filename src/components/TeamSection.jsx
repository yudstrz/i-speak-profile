const TeamSection = () => {
  const teamMembers = [
    { name: "Nur Fitrianti Fahrudin., S.Kom., M.T.", role: "Project Lead & IT/Data Coordinator", department: "Sistem Informasi - ITENAS", image: "NF" },
    { name: "Corry Caromawati, S.S., M.A., Ph.D.", role: "Research & Academic Advisor", department: "Sistem Informasi - ITENAS", image: "CC" },
    { name: "Sofia Umaroh, S.Pd., M.T.", role: "Research & Academic Advisor", department: "Sistem Informasi - ITENAS", image: "SU" },
    { name: "Wahyudi, S.Kom.", role: "AI/ML Engineer, Web Developer", department: "Sistem Informasi - ITENAS", image: "WA" },
    { name: "Rizal Ahmad Saepulloh", role: "AI/ML Engineer, Web Developer", department: "Sistem Informasi - ITENAS", image: "RA" },
    { name: "Azhar", role: "AI/ML Engineer, Web Developer", department: "Sistem Informasi - ITENAS", image: "AZ" },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Tim Kami</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-orange-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600">
            Dosen, Mahasiswa, dan alumni Sistem Informasi ITENAS yang berdedikasi
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all border border-gray-100">
              <div className="bg-gradient-to-br from-blue-600 to-orange-600 h-32 flex items-center justify-center">
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
