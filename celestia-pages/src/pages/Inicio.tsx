import { useEffect } from "react"
import { CONFIG } from "../config"
import { ArrowRight } from "lucide-react"

export default function Inicio() {
    useEffect(() => {
        document.title = `Início${CONFIG.APP_NAME}`
    }, [])

    return (<>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-6 max-w-6xl mx-auto overflow-hidden">
            <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 mb-16">
                
                <div className="w-full md:w-2/3 text-right">
                    <img
                        src="logo.png"
                        alt="Logo de Celestia"
                        className="pixelated w-full md:w-2/3"
                    />
                    <p className="text-lg text-space-tx/80 max-w-lg mx-auto md:mx-0">
                        Sobrevivendo às estrelas
                    </p>
                </div>

            </div>
        </section>

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

        {/* Versions Calendar Section */}
        <section id="versoes" className="relative pb-20 px-6 max-w-6xl mx-auto">
            <h4 className="text-xl font-bold text-brand-500 mb-4">Muito conteúdo planejado</h4>
            <div className="relative border-l-2 border-brand-800/40 ml-4 md:ml-6 flex flex-col gap-8">
            
                {/* Item: Pré-alpha */}
                <div className="relative pl-8 md:pl-10">
                    <div className="absolute -left-[17px] top-1 bg-brand-600 text-white text-xs font-bold w-8 h-8 rounded-full flex items-center justify-center border-4 border-space-bg shadow-lg">
                        prealpha
                    </div>
            
                    {/* Card de Informações */}
                    <div className="glass-card p-6 flex flex-col gap-1">
                        <span className="text-xs font-semibold text-brand-400 uppercase tracking-wider">Desenvolvendo ⏳</span>
                        <h5 className="text-lg font-bold text-space-tx">Pré-alpha</h5>
                        <span className="text-sm text-brand-300 font-medium">03/11/2026 - ??</span>
                    </div>
                </div>

                {/* Item: Alpha */}
                <div className="relative pl-8 md:pl-10">
                    <div className="absolute -left-[17px] top-1 bg-brand-600 text-white text-xs font-bold w-8 h-8 rounded-full flex items-center justify-center border-4 border-space-bg shadow-lg">
                        alpha
                    </div>
            
                    {/* Card de Informações */}
                    <div className="glass-card p-6 flex flex-col gap-1">
                        <span className="text-xs font-semibold text-brand-400 uppercase tracking-wider">Planejada 📅</span>
                        <h5 className="text-lg font-bold text-space-tx">Alpha</h5>
                        <span className="text-sm text-brand-300 font-medium">?? - ??</span>
                    </div>
                </div>

                {/* Item: Beta */}
                <div className="relative pl-8 md:pl-10">
                    <div className="absolute -left-[17px] top-1 bg-brand-600 text-white text-xs font-bold w-8 h-8 rounded-full flex items-center justify-center border-4 border-space-bg shadow-lg">
                        beta
                    </div>
            
                    {/* Card de Informações */}
                    <div className="glass-card p-6 flex flex-col gap-1">
                        <span className="text-xs font-semibold text-brand-400 uppercase tracking-wider">Planejada 📅</span>
                        <h5 className="text-lg font-bold text-space-tx">Beta</h5>
                        <span className="text-sm text-brand-300 font-medium">?? - ??</span>
                    </div>
                </div>

                {/* Item: Ato 1 */}
                <div className="relative pl-8 md:pl-10">
                    <div className="absolute -left-[17px] top-1 bg-brand-600 text-white text-xs font-bold w-8 h-8 rounded-full flex items-center justify-center border-4 border-space-bg shadow-lg">
                        v27.1.1
                    </div>
            
                    {/* Card de Informações */}
                    <div className="glass-card p-6 flex flex-col gap-1">
                        <span className="text-xs font-semibold text-brand-400 uppercase tracking-wider">Planejada 📅</span>
                        <h5 className="text-lg font-bold text-space-tx">Ato 1</h5>
                        <span className="text-sm text-brand-300 font-medium">?? - ??</span>
                    </div>
                </div>

                {/* Item: Novos horizontes */}
                <div className="relative pl-8 md:pl-10">
                    <div className="absolute -left-[17px] top-1 bg-brand-600 text-white text-xs font-bold w-8 h-8 rounded-full flex items-center justify-center border-4 border-space-bg shadow-lg">
                        v27.1.2
                    </div>
            
                    {/* Card de Informações */}
                    <div className="glass-card p-6 flex flex-col gap-1">
                        <span className="text-xs font-semibold text-brand-400 uppercase tracking-wider">Planejada 📅</span>
                        <h5 className="text-lg font-bold text-space-tx">Novos horizontes</h5>
                        <span className="text-sm text-brand-300 font-medium">?? - ??</span>
                    </div>
                </div>

                {/* Item: Combate */}
                <div className="relative pl-8 md:pl-10">
                    <div className="absolute -left-[17px] top-1 bg-brand-600 text-white text-xs font-bold w-8 h-8 rounded-full flex items-center justify-center border-4 border-space-bg shadow-lg">
                        v27.1.3
                    </div>
            
                    {/* Card de Informações */}
                    <div className="glass-card p-6 flex flex-col gap-1">
                        <span className="text-xs font-semibold text-brand-400 uppercase tracking-wider">Planejada 📅</span>
                        <h5 className="text-lg font-bold text-space-tx">Vamos ao combate!</h5>
                        <span className="text-sm text-brand-300 font-medium">?? - ??</span>
                    </div>
                </div>

                {/* Item: Magia */}
                <div className="relative pl-8 md:pl-10">
                    <div className="absolute -left-[17px] top-1 bg-brand-600 text-white text-xs font-bold w-8 h-8 rounded-full flex items-center justify-center border-4 border-space-bg shadow-lg">
                        v27.1.4
                    </div>
            
                    {/* Card de Informações */}
                    <div className="glass-card p-6 flex flex-col gap-1">
                        <span className="text-xs font-semibold text-brand-400 uppercase tracking-wider">Planejada 📅</span>
                        <h5 className="text-lg font-bold text-space-tx">MagEra</h5>
                        <span className="text-sm text-brand-300 font-medium">?? - ??</span>
                    </div>
                </div>

                {/* Item: Comidas */}
                <div className="relative pl-8 md:pl-10">
                    <div className="absolute -left-[17px] top-1 bg-brand-600 text-white text-xs font-bold w-8 h-8 rounded-full flex items-center justify-center border-4 border-space-bg shadow-lg">
                        v27.1.5
                    </div>
            
                    {/* Card de Informações */}
                    <div className="glass-card p-6 flex flex-col gap-1">
                        <span className="text-xs font-semibold text-brand-400 uppercase tracking-wider">Planejada 📅</span>
                        <h5 className="text-lg font-bold text-space-tx">Cozinheiros a postos!</h5>
                        <span className="text-sm text-brand-300 font-medium">?? - ??</span>
                    </div>
                </div>

                {/* Item: Festa */}
                <div className="relative pl-8 md:pl-10">
                    <div className="absolute -left-[17px] top-1 bg-brand-600 text-white text-xs font-bold w-8 h-8 rounded-full flex items-center justify-center border-4 border-space-bg shadow-lg">
                        v27.1.6
                    </div>
            
                    {/* Card de Informações */}
                    <div className="glass-card p-6 flex flex-col gap-1">
                        <span className="text-xs font-semibold text-brand-400 uppercase tracking-wider">Planejada 📅</span>
                        <h5 className="text-lg font-bold text-space-tx">Festejos</h5>
                        <span className="text-sm text-brand-300 font-medium">?? - ??</span>
                    </div>
                </div>

                {/* Item: Ato 2 */}
                <div className="relative pl-8 md:pl-10">
                    <div className="absolute -left-[17px] top-1 bg-brand-600 text-white text-xs font-bold w-8 h-8 rounded-full flex items-center justify-center border-4 border-space-bg shadow-lg">
                        v27.2.1
                    </div>
            
                    {/* Card de Informações */}
                    <div className="glass-card p-6 flex flex-col gap-1">
                        <span className="text-xs font-semibold text-brand-400 uppercase tracking-wider">Planejando... 📅</span>
                        <h5 className="text-lg font-bold text-space-tx">Ato 2</h5>
                        <span className="text-sm text-brand-300 font-medium">?? - ??</span>
                    </div>
                </div>

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