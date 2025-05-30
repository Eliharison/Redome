export function Team() {
    const team = [
      {
        name: 'Asher Novelli',
        role: 'Back-end Developer',
        image: '/Asher.jpg',
      },
      {
        name: 'Eliharison Gabriel',
        role: 'Front-end Developer',
        image: '/Eli.jpg',
      },
      {
        name: 'Gabriel Henrique',
        role: 'Front-end Developer',
        image: '/Gabriel.jpg',
      },
      {
        name: 'Leticia Sayuri',
        role: 'UX Designer',
        image: '/Leticia.jpg',
      },
      {
        name: 'Renato Odake',
        role: 'Iot Developer',
        image: '/Renato.jpg',
      },
      {
        name: 'Rodrigo da Silva',
        role: 'Business Developer',
        image: '/Rodrigo.jpg',
      },
    ];
  
    return (
      <section className="bg-[#F7FAFC] py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-[#1A2E48] mb-12">Conheça o Time</h2>
  
          <div className="flex flex-wrap justify-center gap-12">
            {team.map((member, i) => (
              <div key={i} className="flex flex-col items-center text-center w-48">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full object-cover mb-4 shadow-lg"
                />
                <h3 className="text-lg font-bold text-[#1A2E48]">{member.name}</h3>
                <p className="text-sm text-secondary">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  