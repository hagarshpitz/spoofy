import  { makeStyles } from "tss-react/mui";

// interface Props {
//     name: string;
// }

const useStyles = makeStyles()(() => ({
    pageContainer: {
        height: '67em',
        paddingLeft: '15px',
        display: 'flex',
        flexDirection: 'column',
        rowGap: '4%',
    },

    logoAndGreeting: {
        display: 'flex',
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        height: '6%',
    },

    spoofyLogo: {
        width: '14%',
    },

    userGreeting: {
        border: '2px solid white',
        padding: '5px',
        borderRadius: '10px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: 'max-content',
        height: 'max-content',
        rowGap: '6px'
    }, 

    userNameGreeting: {
        color: 'white',
        fontFamily: 'inherit',
        fontWeight: 'bold'
        // fontSize: '120%'
    },

    greetingButtons: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        gap: '5%',
        alignItems: 'flex-end'
    },

    logoutButton: {
        width: '7vmax',
        borderRadius: '30px',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        backgroundColor: 'rgb(130, 130, 124)',
        height: '1.5vmax',
        fontFamily: 'inherit',
        fontWeight: 'bold',
        "&:hover": {
            backgroundColor: 'rgb(130, 130, 124)',
        }
    },

    deleteAccountButton: {
        width: '7.5vmax',
        borderRadius: '30px',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        backgroundColor: 'rgb(191, 90, 74)',
        height: '1.5vmax',
        fontFamily: 'inherit',
        fontWeight: 'bold',
        "&:hover": {
            backgroundColor: 'rgb(191, 90, 74)',
        }
    },

    categoryMenu: {
        display: 'flex',
        flexDirection: 'column',
        rowGap: '30px',
        width: '15%',
        // height: '20vmax',
        justifyContent: 'space-between',
    },

    categorys: {
        backgroundColor: 'rgb(191, 177, 177)',
        // width: '100%',
        minWidth: '9rem',
        height: '1.7em',
        fontFamily: 'inherit',
        fontWeight: 'bold',
        fontSize: '1.7rem',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        "&:hover": {
            backgroundColor: 'rgb(191, 177, 177)',
        }
    },

    clickedCategorys: {
        backgroundColor: 'rgb(74, 191, 117)',
        // width: '100%',
        height: '1.7em',
        minWidth: '9rem',
        fontFamily: 'inherit',
        fontWeight: 'bold',
        fontSize: '1.7em',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        "&:hover": {
            backgroundColor: 'rgb(74, 191, 117)',
        }
    },

    deleteDialog: {
        display: 'flex',
        justifyContent: 'space-evenly'
        // "& .MuiPaper-root": {
        //     backgroundColor: 'rgb(70, 138, 41)',
        // }
    },

    dialogButtons: {
        backgroundColor: 'rgb(70, 138, 41)',
        color: 'white',
        "&:hover": {
            backgroundColor: 'rgb(70, 138, 41)',
        }
    },

    dialogActions: {
        display: 'flex',
        justifyContent: 'space-evenly' 
    },

    DialogTitle: {
        color: 'rgb(70, 138, 41)'
    },

    songPlayer:{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: 'max-content',
        // marginLeft: '-1%',
        backgroundColor: 'rgb(112, 106, 106)',
        alignSelf: 'flex-end',
        position: 'fixed',
        bottom: 0,
        left: 0,
        justifyContent: 'center',
        alignItems: 'center',
        boxSizing: 'border-box'
        
    },

    songTimeline: {
        width: '96%',
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

    songDetailsAndButtons: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        // backgroundColor: 'red',
        width: '100%',
        // marginRight: '-47%',
        height: '70%',
        justifyContent: 'center',
        padding: '0.3% 2%',
        boxSizing: 'border-box'

    },

    controlSongButtons: {
        display: 'flex',
        flexDirection: 'row',
        width:'120%',
        // height: '50%',
        // backgroundColor: 'green',
        justifyContent: 'center'
        // alignSelf: 'center'
    },
    
    icons: {
        fontSize: '2.5em',
        color: 'white',
    },

    songName: {
        // margin: 0,
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
    
    centerOfPage: {
        display: 'flex',
        flexDirection: 'row'
    }
    
}));
export default useStyles;