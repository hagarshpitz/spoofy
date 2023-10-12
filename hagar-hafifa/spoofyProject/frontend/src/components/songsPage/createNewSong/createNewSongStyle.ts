import  { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(() => ({
    allButton: {
        backgroundColor: 'rgb(185, 172, 172)',
        borderRadius: '20px',
        width: '8em',
        color: 'white',
        // fontSize: '1.3em',
        "&:hover": {
            backgroundColor: 'rgb(185, 172, 172)',
        },
        "&:focuse": {
            backgroundColor: 'rgb(185, 172, 172)',
        }
    },

    dialogContent: {
        height: '50vh',        // backgroundColor: 'red',
        // backgroundColor: 'rgb(112, 106, 106)',
        display: 'flex',
        // justifyContent:'center',
        // alignItems: 'center',
        alignContent: 'center',
        flexDirection: 'column',
        width: '100%',
        // padding: '10px',
    },

    dialogContainer: {
        // backgroundColor: 'rgba(80, 77, 77)',
        boxShadow: 'none',
        width: '100%',
        height: '100%',
        backdropFilter: 'bulr(0px)',
        backgroundColor: 'rgb(142, 138, 138)',
        '& .css-tlc64q-MuiPaper-root-MuiDialog-paper': {
            minWidth: '50%',
            borderRadius: '15px',
            backgroundColor: 'rgb(112, 106, 106)',
        },
    },

    submitButton :{
        backgroundColor: 'rgb(72, 139, 42)',
        borderRadius: '20px',
        width: '8em',
        color: 'white',
        display: 'flex',
        alignSelf: 'center',
        // fontSize: '1.3em',
        "&:hover": {
            backgroundColor: 'rgb(72, 139, 42)',
        },
        "&:focuse": {
            backgroundColor: 'rgb(72, 139, 42)',
        }
    },

    tableRow: {
        display: 'flex',
        flexDirection: 'row',
        borderTop: '1px solid rgb(171, 168, 168)',
        borderBottom: '1px solid rgb(171, 168, 168)',
        // justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        width: '100%',
        // justifyContent: 'space-evenly'
    },

    tableContainer: {
        padding: '3em 1em'
    },

    rowTitle: {
        color: 'white',
    },

    rowValues: {
        display: 'flex',
        flexDirection: 'row',
        width: '50%',
        alignItems: 'baseline',
        // backgroundColor: 'red',
        justifyContent: 'space-evenly'
    },

    singerSelect: {
        width: '40%'
    },

    tableAndButtons: {
        display: 'flex',
        flexDirection: 'column',
        gap: '4em',
        // justifyContent: 'space-evenly',
        // alignItems: 'center',
        height: '100%',
        width: '100%'
    }
    
}));
export default useStyles;