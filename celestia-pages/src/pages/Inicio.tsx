import { useEffect } from "react"
import { CONFIG } from "../config"
import { ArrowRight, BookOpen, Compass, Hammer, Shield } from "lucide-react"
import type { VersionsData } from "../data/VersionData"

interface InicioProps {
    versions: VersionsData;
}

export const Inicio: React.FC<InicioProps> = ({ versions }) => {
    useEffect(() => {
        document.title = `Início${CONFIG.APP_NAME}`
    }, [])

    const latestVersion = Object.values(versions).find(v => v.status === 2)

    const gameplayPillars = [
        {
            t: "Exploração",
            d: "Descubra um mundo desconhecido, explore cada canto e desvende os segredos que ele guarda.",
            i: Compass,
            c: "text-sky-300"
        },
        {
            t: "Criação",
            d: "Reúna recursos, experimente combinações e crie suas próprias ferramentas e aparatos.",
            i: Hammer,
            c: "text-amber-300"
        },
        {
            t: "Sobrevivência",
            d: "Enfrente inimigos, derrote chefes e supere desafios. Descubra até onde você consegue chegar.",
            i: Shield,
            c: "text-rose-300"
        },
        {
            t: "Narrativa",
            d: "Das mecânicas aos inimigos, dos detalhes do mundo aos próprios itens: tudo pode esconder pistas sobre a história.",
            i: BookOpen,
            c: "text-emerald-300"
        }
    ]

    return (<>
        {/* About Section */}
        <section className="relative pb-20 px-6 max-w-6xl mx-auto">
            <h4 className="text-xl font-bold text-brand-500 mb-4">Premissa e visão geral</h4>
            <div className="glass-card p-6 md:p-8">
                <p className="italic text-justify text-space-tx/90 leading-relaxed">
                    "Você abre os olhos após escutar um estrondo e tudo o que vê é mundo desconhecido, tudo o que lembra é de um sonho confuso. Agora, você tem três chances para conquistar o mundo e descobrir quem é você e o que aconteceu."
                </p>
                <p className="text-justify text-space-tx/90 leading-relaxed mt-4">
                    Essa é a premissa de <span className="text-gradient font-semibold">Celestia</span>, um jogo sandbox de sobrevivência que conta uma história celestial enquanto você explora, coleta, luta e constrói num estilo de pixel-art vislumbrante.
                </p>
            </div>
        </section>

        {/* Focus version */}
        <section id="versoes" className="relative pb-20 px-6 max-w-6xl mx-auto">
            <h4 className="text-xl font-bold text-brand-500 mb-4">Desenvolvimento</h4>

                {/* Latest version */}
                {latestVersion ? (
                    <div className="glass-card p-6 md:p-8 flex flex-col gap-1">
                        <p className="text-justify text-space-tx/90 leading-relaxed">
                            Celestia ainda é um projeto <span className="text-gradient font-semibold">em desenvolvimento</span>, atualmente na seguinte etapa:
                        </p>

                        <div className="mt-4">
                            <h5 className="text-lg font-bold text-space-tx">{latestVersion.title}</h5>
                            <span className="text-sm text-brand-300 font-medium">
                                {latestVersion.period ? latestVersion.period : "?? - ??"}
                            </span>
                        </div>

                        <p className="text-justify text-space-tx/90 leading-relaxed mt-4">
                            Por enquanto, a totalidade de Celestia ainda existe principalmente nos meus planos, documentos e ideias. Olá, muito prazer! Eu sou Luca Anthony (antthLuca), criador de Celestia e seu primeiro grande entusiasta.
                        </p>
                        <p className="text-justify text-space-tx/90 leading-relaxed mt-4">
                            Tenho muitas ideias registradas e planejadas para o projeto: ARGs, chefes, itens, decorações e muito mais. Entretanto, desenvolver jogos ainda é um território relativamente novo para mim. Celestia é um projeto independente, que construo aos poucos, conforme meu tempo disponível permite.
                        </p>
                        <p className="text-justify text-space-tx/90 leading-relaxed mt-4">
                            Meu objetivo é transformar todas essas ideias em um mundo que outras pessoas também possam explorar e chamar de seu.
                        </p>
                    </div>
                ) : (
                    <div className="relative pb-20 px-6 max-w-6xl mx-auto">
                        <h4 className="text-xl font-bold text-brand-500 mb-4">
                            Versão em foco
                        </h4>

                        <p className="text-space-tx/70">
                            Nenhuma versão em desenvolvimento no momento.
                        </p>
                    </div>
                )}

        </section>

        {/* Gameplay */}
        <section id="versoes" className="relative pb-20 px-6 max-w-6xl mx-auto">
            <h4 className="text-xl font-bold text-brand-500 mb-4">A jornada de Celestia</h4>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">

                {gameplayPillars.map((p) => {
                    const PillarIcon = p.i

                    return(<article
                        key={p.t}
                        className={`
                            glass-card
                            group relative overflow-hidden
                            rounded-xl border border-white/10
                            bg-gradient-to-br
                            p-5 transition-all duration-300
                            hover:-translate-y-1 hover:border-white/20
                        `}
                    >
                        <div className="flex items-center justify-center py-5">
                            <PillarIcon
                                size={56}
                                className={`
                                    ${p.c}
                                    transition-transform duration-300
                                    group-hover:scale-110
                                `}
                            />
                        </div>

                        <div className="text-center">
                            <h5 className="text-center font-bold text-space-tx text-base">
                                {p.t}
                            </h5>

                            <p className="text-sm text-space-tx/70 mt-2 leading-relaxed">
                                {p.d}
                            </p>
                        </div>
                    </article>)
                })}

            </div>
        </section>

        {/* More Section */}
        <section id="projetos" className="relative pb-20 px-6 max-w-6xl mx-auto">
            <h4 className="text-xl font-bold text-brand-500 mb-4">Explore mais</h4>
            <div className="glass-card p-6 md:p-8 mb-16">

                <h3 className="font-bold text-space-tx mb-4">
                    Quer mais sobre a parte técnica e versões de Celestia?
                </h3>
                <p className="text-space-tx/70 max-w-xl">
                    Descubra as versões planejadas, conteúdos, o que e onde esperar.
                </p>
                <div className="w-full md:w-auto flex justify-center gap-2 pt-4">
                    <button
                        className="group flex items-center gap-2 bg-brand-500 hover:bg-brand-600 text-white font-semibold px-6 py-4 rounded-xl transition-all duration-300 shadow-lg shadow-brand-500/20 hover:shadow-brand-600/30 w-full sm:w-auto justify-center"
                    >
                        Conhecer mais
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </button>

                    <button
                        className="group flex items-center gap-2 bg-brand-500 hover:bg-brand-600 text-white font-semibold px-6 py-4 rounded-xl transition-all duration-300 shadow-lg shadow-brand-500/20 hover:shadow-brand-600/30 w-full sm:w-auto justify-center"
                    >
                        Conhecer versões
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>

            </div>
        </section>
    </>)
}