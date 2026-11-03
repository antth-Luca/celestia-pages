import { useEffect } from "react"
import { CONFIG } from "../config"

export default function Inicio() {
    useEffect(() => {
        document.title = `Início${CONFIG.APP_NAME}`
    }, [])

    
}