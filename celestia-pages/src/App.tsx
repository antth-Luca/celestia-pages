import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import ContentContainer from "./components/ContentContainer";
import { TopNavBar } from "./components/TopNavBar";
import { Inicio } from "./pages/Inicio";
import Sobre from "./pages/Sobre";
import { Versoes } from "./pages/Versoes";
import type { VersionsData } from "./data/VersionData";
import type { FeaturesData } from "./data/FeatureData";

type Page = "inicio" | "sobre" | "versoes";

export default function App() {
    const [versions, setVersions] = useState<VersionsData>({});
    const [features, setFeatures] = useState<FeaturesData>({});

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const [currentPage, setCurrentPage] = useState<Page>("inicio");

    const links = [
        {
            onClick: () => setCurrentPage("inicio"),
            label: "Início"
        },
        {
            onClick: () => setCurrentPage("sobre"),
            label: "Sobre o jogo"
        },
        {
            onClick: () => setCurrentPage("versoes"),
            label: "Versões"
        }
    ];

    // Loading data
    useEffect(() => {
        const controller = new AbortController();

        async function loadData() {
            try {
                setLoading(true);
                setError(null);

                const [versionsResponse, featuresResponse] = await Promise.all([
                    fetch("data/versions.json", {
                        signal: controller.signal
                    }),
                    fetch("data/features.json", {
                        signal: controller.signal
                    })
                ]);

                if (!versionsResponse.ok) {
                    throw new Error("Erro ao carregar versões.");
                }

                if (!featuresResponse.ok) {
                    throw new Error("Erro ao carregar recursos.");
                }

                const [versionsData, featuresData] = await Promise.all([
                    versionsResponse.json() as Promise<VersionsData>,
                    featuresResponse.json() as Promise<FeaturesData>
                ]);

                setVersions(versionsData);
                setFeatures(featuresData);

            } catch (e) {
                if (e instanceof Error && e.name === "AbortError") {
                    return;
                }

                console.error("Falha ao carregar dados:", e);

                setError(
                    e instanceof Error
                        ? e.message
                        : "Ocorreu um erro inesperado."
                );

            } finally {
                if (!controller.signal.aborted) {
                    setLoading(false);
                }
            }
        }

        loadData();

        return () => controller.abort();
    }, []);

    // Messages
    if (loading) {
        return (
            <section className="relative pt-32 pb-20 px-6 max-w-6xl mx-auto">
                <div className="text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-space-tx">
                        Carregando...
                    </h2>

                    <p className="mt-4 text-space-tx/70">
                        Preparando versões e recursos.
                    </p>
                </div>
            </section>
        );
    }
    if (error) {
        return (
            <section className="relative pt-32 pb-20 px-6 max-w-6xl mx-auto">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-red-500">
                        Ops! Algo deu errado.
                    </h2>

                    <p className="mt-4 text-space-tx/70">
                        {error}
                    </p>

                    <button
                        onClick={() => window.location.reload()}
                        className="mt-6 px-6 py-3 rounded-lg bg-brand-600 text-white"
                    >
                        Tentar novamente
                    </button>
                </div>
            </section>
        );
    }

    return (
        <ContentContainer content={<>
            <TopNavBar
                homeURL="#"
                logoSrc="/celestia-pages/icon.png"
                title="Celestia"
                links={links}
            />

            <main>
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

                {/* Page Content */}
                {
                    currentPage === "sobre" ? <Sobre /> :
                    currentPage === "versoes" ? <Versoes versions={versions} features={features} /> :
                    <Inicio versions={versions} links={links} />
                }
            </main>

            <Footer />
        </>}/>
    );
}