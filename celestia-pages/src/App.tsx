import { useState } from "react";
import Footer from "./components/Footer";
import ContentContainer from "./components/ContentContainer";
import { TopNavBar } from "./components/TopNavBar";
import Inicio from "./pages/Inicio";
import Sobre from "./pages/Sobre";
import Versoes from "./pages/Versoes";

export default function App() {
    const [ currentPage, setCurrentPage ] = useState<"inicio" | "sobre" | "versoes">("inicio")

    const links = [
        { onClick: () => setCurrentPage("inicio"), label: "Inicio" },
        { onClick: () => setCurrentPage("sobre"), label: "Sobre o jogo" },
        { onClick: () => setCurrentPage("versoes"), label: "Versões" },
    ]

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

                {
                currentPage === "sobre" ? <Sobre /> :
                currentPage === "versoes" ? <Versoes /> :
                <Inicio />
                }
            </main>
            
            <Footer />
        </>}/>
    )
}