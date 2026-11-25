import { useEffect, useState } from "react"
import { CONFIG } from "../config"
import type { VersionsData } from "../data/VersionData";
import type { FeaturesData } from "../data/FeatureData";
import { getStatusLabel } from "../data/VersionData";
import { Square, SquareCheckBig } from "lucide-react";

interface VersoesProps {
    versions: VersionsData;
    features: FeaturesData;
}

export const Versoes: React.FC<VersoesProps> = ({ versions, features }) => {
    const [selectedKey, setSelectedKey] = useState<string>(Object.entries(versions)[0]?.[0])
    const selectedVs = versions[selectedKey];
    const selectedFeatures = Object.entries(features[selectedKey]);
    
    const totalFeatures = selectedFeatures.length;
    const completedFeatures = selectedFeatures.filter(
        ([, feature]) => feature.submit
    ).length;
    const vsProgress = totalFeatures > 0
        ? Math.round((completedFeatures / totalFeatures) * 100)
        : 0;

    useEffect(() => {
        document.title = `Versões${CONFIG.APP_NAME}`
    }, [])

    return (<>
        {/* Versions Section */}
        <section id="versoes" className="relative pb-20 px-6 max-w-6xl mx-auto">
            <h4 className="text-xl font-bold text-brand-500 mb-4">Muito conteúdo planejado</h4>
            <div className="relative border-l-2 border-brand-800/40 ml-4 md:ml-6 flex flex-col gap-8">

                {/* Selector carousel */}
                <div className="flex gap-4 overflow-x-auto py-2 px-1 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-brand-500/40 scrollbar-track-transparent">
                    {Object.entries(versions).map(([k, vs]) => (
                            <button
                                key={k}
                                onClick={() => setSelectedKey(k)}
                                className={`
                                    glass-card flex-shrink-0
                                    w-56 snap-start
                                    text-left
                                    transition-all duration-300
                                    ${selectedVs.name === vs.name
                                        && "border-brand-400 ring-1 ring-brand-400/40"
                                    }
                                `}
                            >
                                <span className={`
                                    ${selectedVs.name === vs.name
                                        ? "opacity-100"
                                        : "opacity-70 hover:opacity-100"
                                    }
                                `}>
                                    <span className="text-brand-400 text-sm">
                                        {vs.name}
                                    </span>

                                    <h3 className="text-lg font-bold text-space-tx mt-1">
                                        {vs.title}
                                    </h3>

                                    <span className="text-xs text-space-tx/50">
                                        {getStatusLabel(vs.status)}
                                    </span>
                                </span>
                            </button>
                    ))}
                </div>

                {/* JSON content: Features */}
                {
                    <div className="glass-card p-6 mt-6 flex flex-col gap-6">
                        <div className="flex flex-col gap-2">

                            <div className="flex items-center justify-between">
                                <h4 className="font-semibold text-space-tx">
                                    Progresso da versão {selectedVs.title}
                                </h4>
                                <span className="text-brand-400 font-bold">
                                    {vsProgress}%
                                </span>
                            </div>

                            <div className="w-full h-3 bg-brand-900/40 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-brand-500 rounded-full transition-all duration-500"
                                    style={{ width: `${vsProgress}%` }}
                                />
                            </div>

                            <span className="text-xs text-space-tx/50">
                                {completedFeatures} de {totalFeatures} recursos concluídos
                            </span>

                        </div>

                        <div className="flex flex-col gap-4">

                            <h4 className="text-xl font-bold text-space-tx">
                                Recursos
                            </h4>

                            {selectedFeatures.length === 0 ? (
                                <p className="text-space-tx/60">
                                    Nenhum recurso cadastrado para esta versão.
                                </p>
                            ) : (
                                <div className="flex flex-col gap-3">
                                    {selectedFeatures.map(([k, feature]) => (
                                        <div
                                            key={k}
                                            className="border border-brand-800/30 rounded-lg p-4 flex gap-2"
                                        >
                                            {feature.submit ? (
                                                <SquareCheckBig className="w-12 shrink-0 text-brand-400" />
                                            ) : (
                                                <Square className="w-12 shrink-0" />
                                            )}

                                            <p className="text-sm text-space-tx/70">
                                                {feature.desc}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            )}

                        </div>
                    </div>
                }

            </div>
        </section>
    </>)
}