import { Cat } from "lucide-react"

export default function Footer() {
    const anoAtual = new Date().getFullYear()

    return (
        <footer className="w-full border-t border-white/5 bg-space-bg/80 backdrop-blur-md pt-12 pb-8 px-6 mt-12">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            
            {/* Assinatura à esquerda */}
            <div className="text-center md:text-left">
                <p className="text-lg font-bold text-space-tx">
                <span className="text-gradient">Celestia</span>
                </p>
                <p className="text-sm text-space-tx/50 mt-1">
                    Sobrevivendo às estrelas.
                </p>
            </div>

            {/* Grid de Redes Sociais / Contatos */}
            <div className="flex flex-wrap justify-center gap-4">

                {/* GitHub */}
                <a 
                    href="https://github.com/celestia-pages" 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/5 text-space-tx/80 hover:text-brand-400 hover:border-brand-500/30 transition-all text-sm"
                >
                    <Cat size={16} />
                    <span className="hidden sm:inline">GitHub</span>
                </a>

            </div>
            </div>

            {/* Direitos Autorais bem discreto embaixo */}
            <div className="max-w-6xl mx-auto border-t border-white/5 mt-8 pt-6 text-center text-xs text-space-tx/30">
            <p>© {anoAtual} Luca Anthony. Todos os direitos reservados.</p>
            </div>
        </footer>
    )
}