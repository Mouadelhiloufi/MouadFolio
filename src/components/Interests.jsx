const languages = [
    { name: 'Arabe', level: 'Langue maternelle', value: 100 },
    { name: 'Français', level: 'Niveau moyen', value: 60 },
    { name: 'Anglais', level: 'A2', value: 35 },
];

const interests = [
    { emoji: '🏊', label: 'Natation' },
    { emoji: '♟️', label: 'Échecs' },
    { emoji: '⚽', label: 'Football' },
    { emoji: '🥊', label: 'Boxe' },
];

function Interests() {
    return (
        <section className="py-6 sm:py-8 md:py-10 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 sm:gap-8">
                <div className="bg-[#FFE5DD] rounded-2xl p-5 sm:p-8">
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#CE7857] mb-5 sm:mb-6" style={{fontFamily: 'Acme'}}>
                        Langues
                    </h2>
                    <ul className="space-y-4">
                        {languages.map((l) => (
                            <li key={l.name}>
                                <div className="flex justify-between text-sm sm:text-base text-[#343434] mb-1.5">
                                    <span className="font-semibold">{l.name}</span>
                                    <span className="text-[#884830]">{l.level}</span>
                                </div>
                                <div className="h-2 rounded-full bg-white overflow-hidden">
                                    <div className="h-full rounded-full bg-gradient-to-r from-[#F1AA76] to-[#884830]"
                                         style={{ width: `${l.value}%` }}></div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="bg-[#FFE5DD] rounded-2xl p-5 sm:p-8">
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#CE7857] mb-5 sm:mb-6" style={{fontFamily: 'Acme'}}>
                        Centres d&apos;intérêt
                    </h2>
                    <div className="grid grid-cols-2 gap-3 sm:gap-4">
                        {interests.map((i) => (
                            <div key={i.label}
                                 className="bg-white rounded-xl p-4 flex flex-col items-center gap-2 shadow-sm
                                            transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                                <span className="text-3xl sm:text-4xl" aria-hidden="true">{i.emoji}</span>
                                <span className="text-sm sm:text-base font-semibold text-[#884830]">{i.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Interests;
