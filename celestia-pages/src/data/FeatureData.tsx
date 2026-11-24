export default interface FeatureData {
    name: string
    desc: string
    submit: boolean
}

export type FeaturesData = Record<string, Record<string, FeatureData>>
