import { useEffect, useState  } from 'react';
import { Typography, Button } from '@mui/material';
import { useMutation } from '@apollo/client';
import { useNavigate, Link } from 'react-router-dom';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';

import { useAppSelector } from '../../redux/hooks';
import { DELETE_USER_BY_ID } from '../../db/users/mutation';
import logo from '../../assets/logoSpoofy.png';
import useStyles from './genericTemplateStyle';
import User from '../../types/User';
import { useAppDispatch } from '../../redux/hooks';
import { resetCurrentUser } from '../../redux/userSlice';
import SongPlayer from './songPlayer/songPlayer';
import { resetCurrentSong } from '../../redux/songSlice';

interface Props {
    pageName: string,
    children: JSX.Element,
    isSongPlaying: boolean,
    setIsSongPlaying: React.Dispatch<React.SetStateAction<boolean>>
}

const GenericTemplate = (props: Props) => {
    const { pageName, children, isSongPlaying, setIsSongPlaying } = props;
    const [open, setOpen] = useState<boolean>(false); 
    const currentUser: User = useAppSelector((state) => state.user.currentUser);
    const navigate = useNavigate();
    const [deleteUser] = useMutation(DELETE_USER_BY_ID);
    const {classes} = useStyles();
    const dispatch = useAppDispatch();
    const [whichPage, setWichPage] = useState<string>(pageName);
    const currentSong = useAppSelector((state) => (state.song.currentSong))

    const DELETE_DIALOG = 'האם אתה בטוח שתרצה למחוק את החשבון?';
    const AGREE = 'אני בטוח!';
    const DIAGREE = 'תאמת שלא';
    const DELETE_UESR = 'מחק חשבון';
    const LOGOUT = 'התנתק';
    const SONGS = 'שירים';
    const PLAYLIST = 'פלייליסטים';
    const FAVORITE = 'מועדפים';

    const handleOpenDialog = () => {
        setOpen(!open);
    };
    
    const handleAgree = () => {
        setOpen(false);
        deleteUser({variables: {id: currentUser.id}});
        dispatch(resetCurrentUser());
        dispatch(resetCurrentSong());
        console.log(currentSong);
        navigate('/');
    };

    const handleDisagree = () => {
        setOpen(false);
    };

    const handlePageChange = (page: string) => {
        setWichPage(page);
        navigate(`/${page}`);          
    };

    const logout = () => {
        dispatch(resetCurrentUser());
        dispatch(resetCurrentSong());
        console.log(currentSong);
    }

    return(
        <div className={classes.pageContainer}>
            <div className={classes.logoAndGreeting}>
                <div className={classes.userGreeting}>
                    <Typography className={classes.userNameGreeting}>
                        היי, {currentUser.firstName} {currentUser.lastName}
                    </Typography>
                    <div className={classes.greetingButtons}>
                        <Link to={'/'}>
                            <Button
                                variant='contained' 
                                className={classes.logoutButton}
                                onClick={logout}>
                                {LOGOUT}
                            </Button>
                        </Link>
                        <Button
                            variant='contained'
                            className={classes.deleteAccountButton}
                            onClick={handleOpenDialog}>
                            {DELETE_UESR}
                        </Button>
                        <Dialog
                            open={open}
                            onClose={handleOpenDialog}
                            className={classes.deleteDialog}
                        >
                            <DialogTitle
                            className={classes.DialogTitle}>
                                {DELETE_DIALOG}
                            </DialogTitle>
                            <DialogActions
                                className={classes.dialogActions}>
                                <Button onClick={handleDisagree}
                                className={classes.dialogButtons}>
                                    {DIAGREE}
                                </Button>
                                <Button onClick={handleAgree} 
                                    className={classes.dialogButtons}>
                                        {AGREE}
                                </Button>
                            </DialogActions>
                        </Dialog>
                    </div>
                </div>
                <img src={logo} className={classes.spoofyLogo}/>
            </div>
            <div className={classes.centerOfPage}>
                <div className={classes.categoryMenu}>
                    {/* <Link to={'/songs'}> */}
                        <Button
                            onClick={() => handlePageChange('songs')}
                            variant='contained'
                            className={whichPage === 'songs'? classes.clickedCategorys :classes.categorys}>
                            {SONGS}
                        </Button>
                    {/* </Link> */}
                    {/* <Link to={'/playlist'}> */}
                        <Button
                            onClick={() => handlePageChange('playlist')}
                            className={whichPage === 'playlist'? classes.clickedCategorys :classes.categorys}
                            variant='contained'>
                            {PLAYLIST}
                        </Button>
                    {/* </Link> */}
                    {/* <Link to={'/favorite'}> */}
                        <Button
                            onClick={() => handlePageChange('favorite')}
                            className={whichPage === 'favorite'? classes.clickedCategorys :classes.categorys}
                            variant='contained'>
                            {FAVORITE}
                        </Button>
                    {/* </Link> */}
                </div>
                <div>
                    {children}
                </div>
            </div>
            <SongPlayer isSongPlaying={isSongPlaying} setIsSongPlaying={setIsSongPlaying}/>
        </div>
    );
};
export default GenericTemplate;

