import { useEffect } from "react"
import { CONFIG } from "../config"

export default function Sobre() {
    useEffect(() => {
        document.title = `Sobre o jogo${CONFIG.APP_NAME}`
    }, [])
}