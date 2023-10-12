import  { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(() => ({
    pageContainer: {
        display: "flex",
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        boxSizing: 'border-box',
        height: '98vh',
        rowGap: '5%',
    },

    spoofyHeader: {
        fontSize: '100px',
        color: 'rgb(74, 191, 117)',
        fontWeight: 'normal',
        textShadow: '2px 2px 7px #282828',
        fontFamily: 'Inter, Avenir, Helvetica, Arial, sans-serif',
        
    },

    userSelect: {
        width: '13em',
        color: 'white',
        fontSize: '24px',
        marginTop: '-2em',
        "& .MuiSelect-select": {
            direction: 'rtl',
            borderRadius: '10px',
            backgroundColor: 'rgb(112, 106, 106)',
        },
        " & .MuiOutlinedInput-notchedOutline": {
            border: 0,
        },
        "& .MuiSvgIcon-root": {
            right: 'unset',
            left: '5px',
            color: 'white',
        }        
    },

    loginButton: {
        width: '5em',
        borderRadius: '10px',
        fontSize: '20px',
        backgroundColor: 'rgb(70, 138, 41)',
        "&:hover": {
            backgroundColor: 'rgb(70, 138, 41)',
            fontSize: '20px',
        }
    }
}));
export default useStyles;

