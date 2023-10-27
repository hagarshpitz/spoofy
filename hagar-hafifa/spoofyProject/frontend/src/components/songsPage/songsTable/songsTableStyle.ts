import  { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(() => ({

    songsTale: {
        display: 'flex',
        justifyContent: 'center',
        // position: 'absolute',
        // left: '50%',
        // transform: 'translateX(-50%)',
        width: '100%',
        flexDirection: 'column',
        rowGap: '1rem'
    },
    
    tableValues: {
        // width: '100%',
        height: '40rem',
        // backgroundColor: 'rgb(112, 106, 106)',
        borderColor: '10px solid rgb(112, 106, 106)',
        '& .MuiDataGrid-main': {
            '& .MuiDataGrid-columnHeaders': {
                // borderBottom: 'none',
                // borderRadius: '30px',
                fontSize: '30px',
                fontWeight: 'bold'
            }
        },
        '& .MuiDataGrid-cell': {
            color: 'white'
        },
        '& .MuiDataGrid-columnHeaderTitle': {
            color: 'white'
        },
        '& .MuiDataGrid-root':{
            border: 'none',
            borderRadius: '15px',
            backgroundColor: 'rgb(112, 106, 106)',
            padding: '1rem 2rem',
            display: 'flex',
            justifyContent: 'center'
        },

    },
    
    icons: {
        color: 'white'
    },

    DataGridPro: {
        "& .MuiDataGrid-row.Mui-selected": {
            backgroundColor: "rgba(74, 191, 117, 0.2)"
        },
        "& .MuiDataGrid-row.Mui-selected:hover": {
            backgroundColor: "rgba(74, 191, 117, 0.2)"
        },
        "& .MuiDataGrid-cell:focus": {
            outline: "None"
        },
        "& .MuiDataGrid-iconSeparator": {
            display: "none"
        },
        "& .MuiDataGrid-columnHeader": {
            borderRight: "1px solid white"
        }, 
        "& .MuiDataGrid-columnHeader:focus": {
            outline: "none",
        }, 
        "& .MuiDataGrid-columnHeader:hover": {
            outline: "none",
        }, 
        width: '100%'
    },
    header: {
        // "& .MuiDataGrid-columnHeader": {
        //     border: 'none'
        // },
       border: 'none!important',
    //    outline: "none",
    }
}));
export default useStyles;