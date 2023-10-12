import { useState, createContext } from 'react';

import GenericTemplate from "../genericTemplate/genericTemplate";
import useStyles from './songsPageStyle';
import SongsTable from './songsTable/songsTable';
import CreateNewSong from './createNewSong/createNewSong';

const SongsPage = () => {
    const { classes } = useStyles();
    const [isSongPlaying, setIsSongPlaying] = useState<boolean>(true);
    // const songDurationContext = createContext(0);
    
    return(
        // <songDurationContext.Provider value={0}>
           <GenericTemplate pageName="songs" isSongPlaying={isSongPlaying} setIsSongPlaying={setIsSongPlaying}> 
            <div className={classes.pageContainer}>
                    <SongsTable setIsSongPlaying={setIsSongPlaying}/>
                    <CreateNewSong/>
            </div>
           </GenericTemplate>
        // </songDurationContext.Provider>
           
        
    )
};
export default SongsPage;