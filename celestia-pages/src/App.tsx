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
                logoSrc="/icon.svg"
                title="Celestia"
                links={links}
            />
            
            <main>
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