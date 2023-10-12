import { createSlice } from '@reduxjs/toolkit';
import type, { PayloadAction } from '@reduxjs/toolkit';
import Song from '../types/Song';

interface SongListState {
    songList: Song[];
};

const initialState: SongListState = {
    songList: [{
        artistId: -1,
        duration: -1,
        id: -1,
        name: '',
        // isFavorite: false,
        favoritesBySongId: {
            totalCount: -1
        },
        artistByArtistId: {
            name: ''
        }
    }],
}

export const songListSlice = createSlice({
    name: 'songList',
    initialState,
    reducers: {
        setSongs: (state, action: PayloadAction<{songs: Song[]}>) => {
            state.songList = action.payload.songs;
        },
        resetSongs: (state) => {
            state.songList = []
        },
        setIsFavorite:(state, action: PayloadAction<{songId: number, isFavorite: number}>) => {
            const currentSong = state.songList.find((song) => {
                return song.id === action.payload.songId
            });
            const index = state.songList.indexOf(currentSong!);
            state.songList[index].favoritesBySongId.totalCount = action.payload.isFavorite;
        }
    },
})

export const { setIsFavorite, setSongs, resetSongs } = songListSlice.actions
export default songListSlice.reducer