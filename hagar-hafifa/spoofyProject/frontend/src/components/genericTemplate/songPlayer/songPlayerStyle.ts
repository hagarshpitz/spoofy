import  { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(() => ({
    songPlayer:{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: 'max-content',
        backgroundColor: 'rgb(112, 106, 106)',
        alignSelf: 'flex-end',
        position: 'fixed',
        bottom: 0,
        left: 0,
        justifyContent: 'center',
        alignItems: 'center',
        boxSizing: 'border-box',
        padding: '0.3% 2%',
        
    },

    songTimeline: {
        width: '100%',
        display: 'flex',
        "& .MuiSlider-rail": {
            color: 'rgb(190, 188, 188)',
        },
        "& .MuiSlider-thumb": {
            color: 'rgb(190, 188, 188)',
        },
        "& .MuiSlider-track": {
            color: 'rgb(190, 188, 188)',
        },
    },

    songDetailsAndButtonsContainer: {
        display: 'flex',
        flexDirection: 'row',
        // alignItems: 'center',
        width: '100%',
        height: '70%',
        // justifyContent: 'center',
        justifyContent: 'flex-start',
        // padding: '0.3% 2%',
        boxSizing: 'border-box',
        // backgroundColor: 'red'

    },

    songDetailsAndButtons: {
        display: 'flex',
        flexDirection: 'row',
        width:'56%',
        // backgroundColor: 'pink',
        // marginRight: '35%',
        // justifyContent: 'flex-start',
        // justifyContent: 'center',
        justifyContent: 'space-between'
        // alignSelf: 'center'
    },
    
    icons: {
        fontSize: '2.5em',
        color: 'white',
    },

    songName: {
        fontSize: '1.8em',
        display: 'flex',
        flexWrap: 'nowrap',
        width: 'max-content',
        color: 'white'
    },

    artistName: {
        fontSize: '1.3em',
        color: 'white'
    },
    songDetails: {
        // backgroundColor: 'green',
        display: 'flex',
        justifyContent: 'flex-start',
        // width: '50%',
        // position: 'fixed',
        // right: 0,
        flexDirection: 'column'
    },

    controlSongButtons: {
        display: 'flex',
        // backgroundColor: 'green',
        justifyContent: 'center',
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)'
    },

    songTiming: {
        width: '100%',
        // backgroundColor: 'red',
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row-reverse'
    }
}));
export default useStyles;