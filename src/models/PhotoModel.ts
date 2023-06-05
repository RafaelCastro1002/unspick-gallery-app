export type UrlsPhotoType = {
    raw: string
    full: string
    regular: string
    small: string
    thumb: string
}

export default class PhotoModel {
    id: string
    createdAt: Date
    updatedAt: Date
    likes: number
    likedByUser: boolean
    urls: UrlsPhotoType

    constructor (obj: any) {
        const {
            id,
            created_at,
            updated_at,
            likes,
            likedByUser,
            urls
        } = obj

        this.id = id
        this.createdAt = new Date(created_at)
        this.updatedAt = new Date(updated_at)
        this.likes = likes
        this.likedByUser = likedByUser
        this.urls = urls
    }
}