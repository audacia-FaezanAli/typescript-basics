import { Photo } from "../social-media-app/photo";

// returns true if no undefined or null fields
export function checkIfNoUndefinedOrNull(photoInstance: Photo): boolean {
    if (photoInstance.dateUploaded == null || undefined) {
        return false
    } else if (photoInstance.url == null || undefined) {
        return false
    } else if (photoInstance.userId == null || undefined) {
        return false
    } else if (photoInstance.postId == null || undefined) {
        return false
    }
    return true
}