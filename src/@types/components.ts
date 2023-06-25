import { DimensionValue, ImageSourcePropType } from "react-native"
import PhotoModel from "../models/PhotoModel"

export type ListImagesProps = {
    loadImages: () => Promise<PhotoModel[]>
    options?: {
        height: DimensionValue | undefined
    }
}

export type CardDetailProps = {
    imgUrl: ImageSourcePropType
    title: string
    subtitle?: string | number
} 