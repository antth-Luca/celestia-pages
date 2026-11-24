import { useEffect } from "react"
import { CONFIG } from "../config"
import type VersionData from "../data/VersionData";
import type FeatureData from "../data/FeatureData";

interface VersoesProps {
    versions: VersionData[];
    features: FeatureData[];
}

export const Versoes: React.FC<VersoesProps> = ({ versions, features }) => {
    useEffect(() => {
        document.title = `Versões${CONFIG.APP_NAME}`
    }, [])

    return (<></>)
}