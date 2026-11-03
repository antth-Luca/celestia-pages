import { useEffect } from "react"
import { CONFIG } from "../config"

export default function Versoes() {
    useEffect(() => {
        document.title = `Versões${CONFIG.APP_NAME}`
    }, [])
}