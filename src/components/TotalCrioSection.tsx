const TotalCrioSection = () => {
    return (
        <section className="bg-background py-20">
            <div className="container mx-auto px-4 grid gap-12 lg:grid-cols-[1.15fr_1fr] items-center">
                <div className="space-y-6">
                    <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-sm font-semibold uppercase tracking-wide text-primary">
                        TOTALCRIO4MDK
                    </span>

                    <h2 className="text-3xl md:text-4xl font-bold leading-tight text-foreground text-primary">
                        COMO É O TRATAMENTO?
                    </h2>

                    <p className="text-lg text-muted-foreground">
                        O <b className="font-bold">TOTALCRIO4MDK</b> é o nosso método exclusivo, uma evolução da criolipólise:
                        aplicada a uma super tecnologia de resfriamento seletivo
                        que age com precisão no congelamento da gordura abdominal, costas, pernas e braços, remodelando o contorno corporal enquanto cuida da
                        saúde da pele. O protocolo combina estímulos térmicos e ativos exclusivos para acelerar
                        o metabolismo local, potencializar a eliminação de gordura e revelar uma cintura mais
                        definida em poucas sessões.
                    </p>

                    <div className="grid gap-4 sm:grid-cols-2">
                        <div className="rounded-xl border border-primary/20 bg-primary/5 p-5 shadow-sm">
                            <h3 className="text-base font-semibold text-primary">Aplicação Confortável</h3>
                            <p className="mt-2 text-sm text-muted-foreground">
                                Ponteiras inteligentes se adaptam ao seu biotipo para garantir resfriamento
                                uniforme e seguro, com sensação de relaxamento durante todo o procedimento.
                            </p>
                        </div>

                        <div className="rounded-xl border border-secondary/20 bg-secondary/5 p-5 shadow-sm">
                            <h3 className="text-base font-semibold text-primary">
                                Resultados Visíveis
                            </h3>
                            <p className="mt-2 text-sm text-muted-foreground">
                                Em cada sessão você ativa a lipólise programada, observando redução de medidas e
                                firmeza abdominal já nas primeiras semanas.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="relative">
                    <div className="absolute inset-0 rounded-3xl bg-primary/10 blur-3xl" aria-hidden />
                    <img
                        className="max-w-[22rem] sm:max-w-lg relative z-10 w-full rounded-3xl object-cover shadow-2xl"
                        src="https://jjpas441qaaopsgd.public.blob.vercel-storage.com/img/mulher-corpo-femea-com-fita-centimetro-ao-redor-na-parede-branca.jpg"
                        alt="Mulher fitness confiante após tratamento corporal"
                    />
                </div>
            </div>
        </section>
    );
};

export default TotalCrioSection;