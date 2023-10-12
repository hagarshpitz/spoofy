import  { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(() => ({
    // pageContainer: {

    // },

    pageContainer: {
        display: 'flex',
        // justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '50%',
        flexDirection: 'column',
        rowGap: '2.5rem',
    },

    // tableHeader: {
    //     backgroundColor: 'rgb(74, 191, 117)',
    //     width: '100%',
    //     display: 'flex',
    //     justifyContent: 'center',
    //     borderRadius: '15px'
    // },
    
    // tableHeadreText: {
    //     color: 'white',
    //     margin: '0%',
    //     fontSize: '3rem'
    // },
    
    // tableValues: {
    //     width: '100%',
    //     height: '40rem',
    //     // backgroundColor: 'rgb(112, 106, 106)',
    //     borderColor: '10px solid rgb(112, 106, 106)',
    //     '& .MuiDataGrid-main': {
    //         '& .MuiDataGrid-columnHeaders': {
    //             // borderBottom: 'none',
    //             // borderRadius: '30px',
    //             fontSize: '30px',
    //             fontWeight: 'bold'
    //         }
    //     },
    //     '& .MuiDataGrid-cell': {
    //         color: 'white'
    //     },
    //     '& .MuiDataGrid-columnHeaderTitle': {
    //         color: 'white'
    //     },
    //     '& .MuiDataGrid-root':{
    //         // borderColor: '0px solid red',
    //         border: 'none',
    //         borderRadius: '15px',
    //         backgroundColor: 'rgb(112, 106, 106)',
    //         padding: '1rem 2rem'
    //     }
    // },

    // songDurationCell: {
    //     display: 'flex',
    //     flexDirection: 'row',
    //     justifyContent: 'space-between',
    //     width: '100%'
    // }
}));
export default useStyles;