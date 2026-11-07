export default interface VersionData {
    name: string
    title: string
    status: 0 | 1 | 2 | 3
    period?: string
}

export function getStatusLabel(status: 0 | 1 | 2 | 3 | 4): string {
    switch (status) {
        case 0:
            return "Planejando... 📅";
        case 1:
            return "Planejada 📅";
        case 2:
            return "Desenvolvendo ⏳";
        case 3:
            return "Concluído ✅";
        default:
            return "Desconhecido ❓";
    }
}
