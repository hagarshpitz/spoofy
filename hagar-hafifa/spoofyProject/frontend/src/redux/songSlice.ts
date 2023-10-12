import { createSlice } from '@reduxjs/toolkit';
import type, { PayloadAction } from '@reduxjs/toolkit';
import Song from '../types/Song';

interface SongState {
    currentSong: Song;
};

const initialState: SongState = {
    currentSong: {
        artistId: -1,
        duration: -1,
        id: -1,
        name: '',
        // isFavorite: false,
        artistName: '',
        favoritesBySongId: {
            totalCount: -1
        },
        artistByArtistId: {
            name: ''
        }
    },
}

export const songSlice = createSlice({
    name: 'song',
    initialState,
    reducers: {
        setCurrentSong: (state, action: PayloadAction<{song: Song}>) => {
            state.currentSong = action.payload.song;
        },
        resetCurrentSong: (state) => {
            state.currentSong = {
                artistId: -1,
                duration: 999,
                id: -1,
                name: '',
                // isFavorite: false,
                artistName: '',
                favoritesBySongId: {
                    totalCount: -1
                },
                artistByArtistId: {
                    name: ''
                }
            }
        },
        // setIsFavorite:(state, action: PayloadAction<{isFavorite: boolean}>) => {
        //     action.payload.isFavorite ?
        //     state.currentSong.favoritesBySongId.totalCount = 1
        //     :
        //     state.currentSong.favoritesBySongId.totalCount = 0
        // }
    },
})

export const { setCurrentSong, resetCurrentSong } = songSlice.actions
export default songSlice.reducer