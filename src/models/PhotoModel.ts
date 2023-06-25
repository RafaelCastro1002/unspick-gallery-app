export type UrlsPhotoType = {
    raw: string
    full: string
    regular: string
    small: string
    thumb: string
}

export type User = {
    name: string
    profile_image: {
        small: string
        medium: string
        large: string
    },
}

export type Location = {
    name: string | null
    city: string | null
    country: string | null
}

export default class PhotoModel {
    id: string
    createdAt: string
    updatedAt: string
    likes: number
    likedByUser: boolean
    urls: UrlsPhotoType
    user: User
    downloads: number
    views: number
    location: Location

    constructor (obj: any) {
        const {
            id,
            created_at,
            updated_at,
            likes,
            likedByUser,
            urls,
            user,
            downloads,
            views,
            location
        } = obj

        this.id = id
        this.createdAt = new Date(created_at).toISOString()
        this.updatedAt = new Date(updated_at).toISOString()
        this.likes = likes
        this.likedByUser = likedByUser
        this.urls = urls
        this.user = user
        this.downloads = downloads
        this.views = views
        this.location = location
    }
}