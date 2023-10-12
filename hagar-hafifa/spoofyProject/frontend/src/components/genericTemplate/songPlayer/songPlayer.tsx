import { IconButton, Slider, Typography } from "@mui/material";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import { useEffect, useState, useRef } from "react";

import useStyles from "./songPlayerStyle";
import { useAppSelector, useAppDispatch } from "../../../redux/hooks";
import { resetCurrentSong, setCurrentSong } from "../../../redux/songSlice";

interface Props {
    isSongPlaying: boolean,
    setIsSongPlaying: React.Dispatch<React.SetStateAction<boolean>>
}

const SongPlayer = (props: Props) => {
    const {isSongPlaying, setIsSongPlaying} = props;
    const {classes} = useStyles();
    const [currentDuration, setCurrentDuration] = useState<number>(0);
    const currentSong = useAppSelector((state) => state.song.currentSong);
    const allSongs = useAppSelector((state) => state.songList.songList);
    const interval = useRef<number>();
    const dispatch = useAppDispatch();
    

    const getSongTime = (secondes: number) => {
        const min = ('0'+ Math.floor(secondes / 60)).slice(-2);
        const sec = ('0' + Math.floor(secondes % 60)).slice(-2);
        return (`${min}:${sec}`);
    };

    const handleChange = (event: Event, newValue: number | number[]) => {
        if (typeof newValue === 'number') {
          setCurrentDuration(newValue);
        };
    };

    // useEffect(() => {
    //     dispatch(resetCurrentSong());
    //     console.log('kik')
    // }, [])

    useEffect (() => {
        if (currentSong.id!== -1 && isSongPlaying && interval.current === undefined ) {
            interval.current = setInterval(() => {
                setCurrentDuration((prev) => (prev + 1));
            }, 1000);
        } 
        else {
            clearInterval(interval.current);
            setIsSongPlaying(false);
            interval.current = undefined;
        }
        
    }, [isSongPlaying])

    useEffect (() => {
        if (currentDuration >= currentSong.duration) {
            const thisSongIndex = allSongs.indexOf(currentSong) + 1;
            thisSongIndex < allSongs.length - 1?
                dispatch(setCurrentSong({song: allSongs[thisSongIndex]}))
            :
                setIsSongPlaying(false);
        }
        
    }, [currentDuration]);

    useEffect (() => {
        setCurrentDuration(0)
    }, [currentSong]);

    const passSong = (nextOrLast: number) => {
        const thisSongIndex = allSongs.indexOf(currentSong) + nextOrLast;
            thisSongIndex >= allSongs.length || thisSongIndex < 0?
                setIsSongPlaying(false)
            :
                dispatch(setCurrentSong({song: allSongs[thisSongIndex]}))

    }

    return(
        <div>
            {currentSong === undefined || currentSong.id === -1 ?
                <div>

                </div>
            :
                <div className={classes.songPlayer}>
                    <div className={classes.songDetailsAndButtonsContainer}>
                        <div className={classes.songDetailsAndButtons}> 
                            <div className={classes.songDetails}>
                                <Typography 
                                    className={classes.songName}> 
                                    {currentSong.name} 
                                </Typography>
                                <Typography
                                    className={classes.artistName}>
                                        {currentSong.artistByArtistId.name}
                                </Typography>
                            </div> 
                            <div className={classes.controlSongButtons}>
                                <IconButton onClick={() => passSong(1)}>
                                    <SkipNextIcon
                                        className={classes.icons}/>
                                </IconButton>
                                {isSongPlaying ? 
                                    <IconButton
                                        onClick={() => setIsSongPlaying(false)}>
                                        <PauseIcon className={classes.icons}/>
                                    </IconButton>
                                :
                                    <IconButton
                                        onClick={() => setIsSongPlaying(true)}>
                                        <PlayArrowIcon className={classes.icons}/>
                                    </IconButton>
                                }
                                <IconButton
                                    onClick={() => passSong(-1)}>
                                    <SkipPreviousIcon className={classes.icons}/>    
                                </IconButton>
                            </div>
                        </div>
                    </div>
                    <Slider
                        value={currentDuration}
                        min={0}
                        step={1}
                        max={currentSong.duration}
                        onChange={handleChange}
                        className={classes.songTimeline}
                        size="small"
                        // valueLabelDisplay="auto"
                    />
                    <div className={classes.songTiming}>
                        <Typography color='common.white'>
                            {getSongTime(currentDuration)}
                        </Typography>
                        <Typography color='common.white'>
                            {getSongTime(currentSong.duration)}
                        </Typography>
                    </div>
                </div>
            }
            </div>
           
    )
    
}
export default SongPlayer