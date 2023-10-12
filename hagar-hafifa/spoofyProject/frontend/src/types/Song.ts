export default interface Song {
    artistId: number,
    duration: number,
    id: number,
    name: string,
    // isFavorite: boolean,
    // artistName: string,
    favoritesBySongId: {
        totalCount: number
    },
    artistByArtistId: {
        name: string
    }

}