import { useEffect } from "react"
import { CONFIG } from "../config"
import { ArrowRight } from "lucide-react"
import { getStatusLabel } from "../data/VersionData"
import type VersionData from "../data/VersionData"

interface InicioProps {
    versions: VersionData[];
}

export const Inicio: React.FC<InicioProps> = ({ versions }) => {
    useEffect(() => {
        document.title = `Início${CONFIG.APP_NAME}`
    }, [])

    const latestVersion = Object.values(versions)[0]

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
            <h4 className="text-xl font-bold text-brand-500 mb-4">Versão em foco</h4>
            <div className="relative border-l-2 border-brand-800/40 ml-4 md:ml-6 flex flex-col gap-8">

                {/* Latest version */}
                {
                    <div key={latestVersion.name} className="relative pl-8 md:pl-10">
                        <div className="absolute -left-[17px] top-1 bg-brand-600 text-white text-xs font-bold w-8 h-8 rounded-full flex items-center justify-center">
                            {latestVersion.name}
                        </div>
                
                        {/* Card de Informações */}
                        <div className="glass-card p-6 flex flex-col gap-1">
                            <span className="text-xs font-semibold text-brand-400 uppercase tracking-wider">
                                {getStatusLabel(latestVersion.status)}
                            </span>
                            <h5 className="text-lg font-bold text-space-tx">{latestVersion.title}</h5>
                            <span className="text-sm text-brand-300 font-medium">
                                {latestVersion.period ? latestVersion.period : "?? - ??"}
                            </span>
                        </div>
                    </div>
                }

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