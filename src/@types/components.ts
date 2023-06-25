import { DimensionValue } from "react-native"
import PhotoModel from "../models/PhotoModel"

export type ListImagesProps = {
    loadImages: () => Promise<PhotoModel[]>
    options?: {
        height: DimensionValue | undefined
    }
}