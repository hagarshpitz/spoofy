import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { DataGridPro,GridRowsProp, GridRowModel, useGridApiRef, GridValueFormatterParams, GridRenderCellParams, GridAddIcon, GridRowParams } from '@mui/x-data-grid-pro';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Box, Typography } from '@mui/material';
import { useMutation, useQuery } from '@apollo/client';

import useStyles from './songsTableStyle';
import { GET_ALL_SONGS } from '../../../db/songs/query';
import { useState, useContext } from 'react';
import Song from '../../../types/Song';
import { useAppDispatch } from '../../../redux/hooks';
import { setCurrentSong } from '../../../redux/songSlice';
import { useAppSelector } from '../../../redux/hooks';
import { resetSongs, setSongs, setIsFavorite } from '../../../redux/songsListSlice';
import { CREATE_FAVORITE, DELETE_FAVORITE } from '../../../db/songs/mutation';
import TableHeading from '../../genericTableTamplate/tableHeading/tableHeading';

// import useStyles from './songsPageStyle';

//* event.stopPrapegation */
interface Props {
    setIsSongPlaying: React.Dispatch<React.SetStateAction<boolean>>
};

const SongsTable = (props: Props) => {
    const { setIsSongPlaying } = props;
    const { classes } = useStyles();
    // const [allSongs, setAllSongs] = useState<Song[]>();
    const allSongs = useAppSelector((state) => (state.songList.songList));
    const [rows, setRows] = useState<GridRowsProp>([]);
    const dispatch = useAppDispatch();
    const currentSong = useAppSelector((state) => (state.song.currentSong));
    const currentUser = useAppSelector((state) => (state.user.currentUser));
    const [createFavorite] = useMutation(CREATE_FAVORITE);
    const [deleteFavorite] = useMutation(DELETE_FAVORITE);
    // const [getAllSongs, {data, loading, error}] = useMutation(GET_ALL_SONGS);
    // const songDuration = useContext(songDurationContext)

    const getIfSongFavorite = (songId: number) => {
        const thisSong: Song | undefined = allSongs?.find((song) => 
            song.id === songId
        );
        if (thisSong && thisSong.favoritesBySongId.totalCount > 0) 
            return true;
        return false;
        // const thisSong = allSongs.filter((song) => {})
    }

    // const [getAllSongs, {data, loading, error}] = useMutation(GET_ALL_SONGS, {
    //     variables: {

    //     }
    // })

    useQuery(GET_ALL_SONGS, {
        variables:  {userId: currentUser.id},
        onCompleted: (data: {allSongs: { nodes: Song[] }}) => {
            const allSongs: Song[] = data.allSongs.nodes;
            setRows(allSongs.map((song) => {
                // console.log('kiki')
                // console.log(song.id, song.name,song.artistByArtistId.name,song.duration);
                // const songDuration = getSongTime(song.duration)
                return ({id: song.id, songName: song.name, artist: song.artistByArtistId.name, duration: song.duration})
            }));
            // setAllSongs(songs);
            dispatch(setSongs({songs: allSongs}));
            // console.log(allSongs);
            // console.log('row', rows)
        }
    });

    const changeCurrentSong = (songId: number) => {
        const thisSong: Song | undefined = allSongs?.find((song) => 
            song.id == songId
        );
        thisSong &&
        dispatch(setCurrentSong({song: thisSong}));
        setIsSongPlaying(true);
    };

    const selectFavorite = (event: React.MouseEvent<HTMLButtonElement, MouseEvent> ,songId: number) => {
        const thisSong: Song | undefined = allSongs?.find((song) => 
            song.id == songId
        );
        event.stopPropagation();
        createFavorite({variables: { userId: currentUser.id, songId: thisSong?.id }});
        dispatch(setIsFavorite({songId: thisSong!.id, isFavorite: 1}));
    };

    const unselectFavorite = (event: React.MouseEvent<HTMLButtonElement, MouseEvent> ,songId: number) => {
        const thisSong: Song | undefined = allSongs?.find((song) => 
            song.id == songId
        );
        event.stopPropagation(); 
        deleteFavorite({variables: {userId: currentUser.id, songId: thisSong?.id }});
        dispatch(setIsFavorite({songId: thisSong!.id, isFavorite: 0}));
    }

    const columns: GridColDef[] = [
        {
            field: 'songName',
            headerName: 'שיר',
            flex: 2,
            headerClassName: classes.header
        },
        {
            field: 'artist',
            headerName: 'זמר',
            flex: 1,
        },
        {
            field: 'duration',
            headerName: 'משך שיר',
            flex: 1,
            // cellClassName: classes.songDurationCell,
            valueFormatter: (params: GridValueFormatterParams) => {
                const min = ('0'+ Math.floor((params.value as number) / 60)).slice(-2);
                const sec = ('0' + Math.floor((params.value as number) % 60)).slice(-2);
                return (`${min}:${sec}`);
            },
        },
        {
            field: 'isFav',
            headerName: ' ',
            flex: 0.3,
            headerClassName: classes.header,
            
            renderCell: ({row}) => (
                <Box>
                    <IconButton className={classes.icons}>
                        <GridAddIcon />
                    </IconButton>
                    {getIfSongFavorite(row.id) ?
                    <IconButton className={classes.icons} onClick={(event) => unselectFavorite(event, row.id)}>
                        <FavoriteIcon/>
                    </IconButton>
                    :
                    <IconButton className={classes.icons} onClick={(event) => selectFavorite(event, row.id)}>
                        <FavoriteBorderIcon/>
                    </IconButton>
                    }
                </Box>
            ),
        }
        
    ];
    
    return(
        <div className={classes.songsTale}>
            <TableHeading title='רשימת שירים'/>
            <div>
            <div className={classes.tableValues}>
                <DataGridPro
                className={classes.DataGridPro}
                // getRowId={(row) => row.name + row.artist}
                    // {...allSongs}
                    rows={rows}
                    // loading
                    columns={columns}
                    hideFooter
                    // pageSize={5}
                    onRowClick={(params: GridRowParams) => (changeCurrentSong(Number(params.id)))}
                    // {
                    //     const thisSong: Song | undefined = allSongs?.find((song) => 
                    //         song.id == params.id
                    //     );
                    //     thisSong &&
                    //     dispatch(setCurrentSong({song: thisSong}));
                    //     console.log("current song", currentSong)
                    // }
                
                />
                </div>
            </div>
        </div>
    )
};
export default SongsTable;