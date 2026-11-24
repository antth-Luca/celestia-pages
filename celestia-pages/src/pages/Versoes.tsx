import { useEffect, useState } from "react"
import { CONFIG } from "../config"
import type VersionData from "../data/VersionData";
import type FeatureData from "../data/FeatureData";
import { getStatusLabel } from "../data/VersionData";

interface VersoesProps {
    versions: VersionData[];
    features: FeatureData[];
}

export const Versoes: React.FC<VersoesProps> = ({ versions, features }) => {
    const [selectVs, setSelectVs] = useState<string>(versions[0]?.name ?? "");

    useEffect(() => {
        document.title = `Versões${CONFIG.APP_NAME}`
    }, [])

    return (<>
        {/* Versions Section */}
        <section id="versoes" className="relative pb-20 px-6 max-w-6xl mx-auto">
            <h4 className="text-xl font-bold text-brand-500 mb-4">Muito conteúdo planejado</h4>
            <div className="relative border-l-2 border-brand-800/40 ml-4 md:ml-6 flex flex-col gap-8">

                {/* Selector carousel */}
                <div className="flex gap-4 overflow-x-auto pb-5 px-1 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-brand-500/40 scrollbar-track-transparent">
                    {
                        Object.values(versions).map((v) => (
                            <button
                            key={v.name}
                            onClick={() => setSelectVs(v.name)}
                            className={`
                                glass-card flex-shrink-0
                                w-56 snap-start
                                text-left
                                transition-all duration-300
                                ${selectVs === v.name
                                    ? "border-brand-400 ring-1 ring-brand-400/40 opacity-100"
                                    : "opacity-70 hover:opacity-100"
                                }
                            `}
                        >
                            <span className="text-brand-400 text-sm">
                                {v.name}
                            </span>

                            <h3 className="text-lg font-bold text-space-tx mt-1">
                                {v.title}
                            </h3>

                            <span className="text-xs text-space-tx/50">
                                {getStatusLabel(v.status)}
                            </span>
                        </button>
                        ))
                    }
                </div>

                {/* JSON content: Features */}
                {/* {
                    Object.values(versions).map((i) => (
                        <div key={i.name} className="relative pl-8 md:pl-10">
                            <div className="absolute -left-[17px] top-1 bg-brand-600 text-white text-xs font-bold w-8 h-8 rounded-full flex items-center justify-center">
                                {i.name}
                            </div>

                            <div className="glass-card p-6 flex flex-col gap-1">
                                <span className="text-xs font-semibold text-brand-400 uppercase tracking-wider">
                                    {getStatusLabel(i.status)}
                                </span>
                                <h5 className="text-lg font-bold text-space-tx">{i.title}</h5>
                                <span className="text-sm text-brand-300 font-medium">
                                    {i.period ? i.period : "?? - ??"}
                                </span>
                            </div>
                        </div>
                    ))
                }*/}

            </div>
        </section>
    </>)
}