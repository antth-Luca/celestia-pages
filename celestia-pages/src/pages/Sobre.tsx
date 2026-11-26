import { useEffect } from "react"
import { CONFIG } from "../config"

export default function Sobre() {
    useEffect(() => {
        document.title = `Sobre o jogo${CONFIG.APP_NAME}`
    }, [])

    return (<>
        <section className="relative pb-20 px-6 max-w-6xl mx-auto">
            <div className="glass-card p-6 md:p-8 flex items-center justify-center">
                EM CONSTRUÇÃO! Infelizmente, sem fotos e documentação da API de mod ainda...
            </div>
        </section>
    </>)
}