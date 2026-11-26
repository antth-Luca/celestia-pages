import { useEffect } from "react"
import { CONFIG } from "../config"
import { ArrowRight, ArrowUpRight, Blocks, BookOpen, CodeXml, Compass, Hammer, HeartHandshake, Palette, ShelvingUnit, Shield, Sparkles, SquareStack, Users } from "lucide-react"
import type { VersionsData } from "../data/VersionData"
import type LinkData from "../data/LinkData"

interface InicioProps {
    versions: VersionsData
    links: LinkData[]
}

export const Inicio: React.FC<InicioProps> = ({ versions, links }) => {
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
            c: "text-emerald-300"
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
            c: "text-amber-300"
        }
    ]

    const behind = [
        {
            t: "Tecnologia",
            d: "Construído com Godot e C#, com uma arquitetura pensada para crescer junto com o projeto.",
            i: CodeXml,
            c: "text-lime-300"
        },
        {
            t: "Visual",
            d: "Pixel art feita à mão, buscando uma personalidade e identidade únicas, mas sem abrir mão da identidade do próprio jogador.",
            i: Palette,
            c: "text-pink-300"
        },
        {
            t: "Comunidade",
            d: "Uma estrutura planejada para permitir o multijogador e que a comunidade crie e compartilhe seu próprio conteúdo.",
            i: Blocks,
            c: "text-violet-400"
        },
        {
            t: "Além das fronteiras",
            d: "ARGs, contos e interações que levam elementos narrativos a ultrapassar os limites do próprio jogo.",
            i: Sparkles,
            c: "text-green-300"
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
                            <h5 className="font-bold text-space-tx text-base">
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

        {/* Behind */}
        <section id="versoes" className="relative pb-20 px-6 max-w-6xl mx-auto">
            <h4 className="text-xl font-bold text-brand-500 mb-4">Nos bastidores</h4>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

                {behind.map((b) => {
                    const BehindIcon = b.i

                    return(<article
                        key={b.t}
                        className={`
                            glass-card
                            group relative overflow-hidden
                        `}
                    >
                        <div className="flex items-center pb-5">
                            <BehindIcon
                                size={40}
                                className={`
                                    ${b.c}
                                    transition-transform duration-300
                                    group-hover:scale-110
                                `}
                            />
                        </div>

                        <div>
                            <h5 className="text-right font-bold text-space-tx text-base">
                                {b.t}
                            </h5>

                            <p className="text-justify text-sm text-space-tx/70 mt-2 leading-relaxed">
                                {b.d}
                            </p>
                        </div>
                    </article>)
                })}

            </div>
        </section>

        {/* More Section */}
        <section id="projetos" className="relative pb-20 px-6 max-w-6xl mx-auto">
            <h4 className="text-xl font-bold text-brand-500 mb-4">Continue explorando</h4>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <a
                    href="https://discord.gg/TJNjXR7x55"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-card group flex flex-col items-center text-center gap-3"
                >
                    <Users size={32} />
                    <div>
                        <h5 className="font-bold">Discord</h5>
                        <p className="text-xs text-space-tx/60 mt-1">
                            Participe da comunidade
                        </p>
                    </div>
                    <ArrowUpRight size={18} className="opacity-50 group-hover:opacity-100" />
                </a>

                <button
                    onClick={links[2].onClick}
                    className="glass-card group flex flex-col items-center text-center gap-3 cursor-pointer"
                >
                    <SquareStack size={32} />
                    <div>
                        <h5 className="font-bold">Versões</h5>
                        <p className="text-xs text-space-tx/60 mt-1">
                            Acompanhe o desenvolvimento
                        </p>
                    </div>
                    <ArrowRight size={18} className="opacity-50 group-hover:opacity-100" />
                </button>

                <button
                    onClick={links[1].onClick}
                    className="glass-card group flex flex-col items-center text-center gap-3 cursor-pointer"
                >
                    <ShelvingUnit size={32} />
                    <div>
                        <h5 className="font-bold">Descobrir</h5>
                        <p className="text-xs text-space-tx/60 mt-1">
                            Conheça mais sobre o jogo
                        </p>
                    </div>
                    <ArrowRight size={18} className="opacity-50 group-hover:opacity-100" />
                </button>

                <div
                    className="glass-card group flex flex-col items-center text-center gap-3"
                >
                    <HeartHandshake size={32} />
                    <div>
                        <h5 className="font-bold">Apoie</h5>
                        <p className="text-xs text-space-tx/60 mt-1">
                            Ajude o projeto a crescer
                        </p>
                    </div>
                    {/* <ArrowRight size={18} className="opacity-50 group-hover:opacity-100" /> */}
                </div>
            </div>

        </section>
    </>)
}