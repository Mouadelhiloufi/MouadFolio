const languages = [
    { name: 'Arabe', level: 'Langue maternelle', value: 100 },
    { name: 'Français', level: 'Niveau moyen', value: 60 },
    { name: 'Anglais', level: 'A2', value: 35 },
];

function Interests() {
    return (
        <section className="py-6 sm:py-8 md:py-10 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
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
            </div>
        </section>
    );
}

export default Interests;
