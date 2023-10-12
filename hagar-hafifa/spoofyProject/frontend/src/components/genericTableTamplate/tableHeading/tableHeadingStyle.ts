import  { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(() => ({
    tableHeader: {
        backgroundColor: 'rgb(74, 191, 117)',
        // width: '100%',
        display: 'flex',
        justifyContent: 'center',
        borderRadius: '15px'
    },
    
    tableHeadreText: {
        color: 'white',
        margin: '0%',
        fontSize: '3rem'
    },
}));
export default useStyles;