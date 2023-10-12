import { Autocomplete, Button, Dialog, Input, Select } from "@mui/material";
import { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import TextField from '@mui/material/TextField';
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useQuery, useMutation } from "@apollo/client";

import useStyles from "./createNewSongStyle";
import TableHeading from "../../genericTableTamplate/tableHeading/tableHeading";
import Singer from "../../../types/singer";
import { GET_ALL_SINGERS } from "../../../db/singers/query";
import { ADD_NEW_SONG } from "../../../db/songs/mutation";
import { useAppSelector, useAppDispatch } from "../../../redux/hooks";
import { setSongs } from "../../../redux/songsListSlice";
import Song from "../../../types/Song";

const schema = yup.object().shape({
    name: yup.string().required('שם הוא שדה חובה'),
    singer: yup.string().required('זמר הוא שדה חובה'),
    songLength: yup.string().required('שדה משך השיר הוא שדה חובה').matches(/^[0-5][0-9]:[0-5][0-9]/, 'חייב להכתב בפורמט הבא [][]:[][]')
})

const CreateNewSong = () => {
    const { classes } = useStyles();
    const dispatch = useAppDispatch();
    const { register, handleSubmit, formState: { errors }, reset, control } = useForm({
        resolver: yupResolver(schema),
        mode: 'onBlur'
    });
    const [open, setOpen] = useState(false);
    const [whichSinger, setWhichSinger] = useState('');
    const [allSingers, setAllSingers] = useState<Singer[]>();
    const [addNewSong] = useMutation(ADD_NEW_SONG);
    const allSongs = useAppSelector((state) => (state.songList.songList));

    const CREATE_SONG_BUTTON = 'צור שיר+';
    const CREATE_SONG_TITLE = 'יצירת שיר';
    const SUBMIT_NEW_SONG = 'צור שיר';

    const onSubmitHandler = (data: any) => {
        console.log({ data });
        // const singerId: Singer | undefined = allSingers?.find((singer) => {
        //     console.log('singername', singer.name)
        //     console.log('data', data.singer)
        //     return (singer.name == data.name)}
        // );
        const thisSinger: Singer | undefined = allSingers?.find((singer) =>
            singer.name == data.singer
        );
        console.log(thisSinger);
        // 
        const sec = data.songLength.slice(-2);
        // console.log('sec: ',sec);
        const min = (data.songLength.slice(0, 2)) * 60;
        // console.log('min: ',min*60);
        const songDuration = Number(sec) + Number(min)
        console.log('duration:', songDuration);

        // }
        if (thisSinger) {
            addNewSong(
                {
                    variables:
                        { id: allSongs!.length + 1, name: data.name, duration: songDuration, artistId: thisSinger.id },
                    onCompleted(data) {
                        const newSong = data.createSong.song
                        const songss: Song[] = [...allSongs,
                        {
                            duration: newSong.duration,
                            artistId: newSong.artistId,
                            id: newSong.id,
                            name: newSong.name,
                            // isFavorite: boolean,
                            favoritesBySongId: {
                                totalCount: 0
                            },
                            artistByArtistId: {
                                name: newSong.artistByArtistId.name
                            }
                        }];
                        console.log(songss);
                        dispatch(setSongs({ songs: songss }));
                    }
                },
            );
            setOpen(false);
            reset();
        } 
    }
console.log(allSongs)


const handleClickOpen = () => {
    setOpen(true);
};

const handleClose = () => {
    setOpen(false);
};

useQuery(GET_ALL_SINGERS, {
    onCompleted: (data: { allArtists: { nodes: Singer[] } }) => {
        const singers: Singer[] = data.allArtists.nodes;
        setAllSingers(singers);
    }
});

// const singers = [
//     { label : 'haga', value: 'haga'},
//     { label : 'haa', value: 'haa'},
//     { label : 'hagar', value: 'hagar'},
//     { label : 'hga', value: 'hga'}
// ];

return (
    <div>

        <Button className={classes.allButton} onClick={handleClickOpen}>
            {CREATE_SONG_BUTTON}
        </Button>
        <Dialog
            fullWidth={true}
            maxWidth={'sm'}
            open={open}
            onClose={handleClose}
            className={classes.dialogContainer}
        >
            <div className={classes.dialogContent}>

                <TableHeading title={CREATE_SONG_TITLE} />


                <form onSubmit={handleSubmit(onSubmitHandler)}
                    className={classes.tableAndButtons}>
                    <div className={classes.tableContainer}>
                        <div className={classes.tableRow}>
                            <div className={classes.rowValues}>
                                <h2 className={classes.rowTitle}> שם </h2>
                                <TextField
                                    variant='standard'
                                    InputProps={{
                                        disableUnderline: true
                                    }}
                                    type="name"
                                    {...register('name')}
                                    error={Boolean(errors['name']?.message)}
                                    helperText={errors.name?.message?.toString()}
                                />
                            </div>
                        </div>
                        <div className={classes.tableRow}>
                            {allSingers &&
                                <div className={classes.rowValues}>

                                    <h2 className={classes.rowTitle}> שיר</h2>
                                    <Autocomplete
                                        options={allSingers?.map((singer) => { return singer.name })}
                                        id="singerSelect"
                                        className={classes.singerSelect}
                                        // blurOnSelect
                                        // onChange={(event: any, newValue: string | null) => {
                                        //     newValue && setWhichSinger(newValue);
                                        // }}
                                        //   inputValue={whichSinger}
                                        onInputChange={(event, newInputValue) => {
                                            setWhichSinger(newInputValue);
                                        }}
                                        renderInput={(params: any) => (
                                            <TextField
                                                aria-invalid={errors.singer ? "true" : "false"}
                                                {...register('singer')}
                                                {...params}
                                                error={Boolean(errors['singer']?.message)}
                                                helperText={errors.singer?.message?.toString()}
                                                variant="standard"
                                            // InputProps={{
                                            //     disableUnderline: true
                                            // }}
                                            />
                                        )}
                                    />
                                </div>}
                        </div>
                        <div className={classes.tableRow}>
                            <div className={classes.rowValues}>
                                <h2 className={classes.rowTitle}>
                                    משך שיר
                                </h2>
                                <TextField
                                    aria-invalid={errors.name ? "true" : "false"}
                                    {...register('songLength')}
                                    // type="songLength"
                                    variant='standard'
                                    InputProps={{
                                        disableUnderline: true
                                    }}
                                    role="alter"
                                    error={Boolean(errors['songLength']?.message)}
                                    helperText={errors.songLength?.message?.toString()} />
                            </div>
                        </div>
                    </div>

                    <Button type="submit"
                        className={classes.submitButton}>
                        {SUBMIT_NEW_SONG}
                    </Button>
                </form>
                {/* <Table aria-label="simple table"> */}
                {/* <TableBody> */}
                {/* <TableRow> */}
                {/* <TableCell align="left"></TableCell> */}
                {/* <TextField id="standard-basic" label="Outlined" variant="outlined" /> */}
                {/* </TableRow> */}

                {/* </TableBody> */}

                {/* </Table> */}

            </div>


        </Dialog>
    </div>
)
};

export default CreateNewSong;