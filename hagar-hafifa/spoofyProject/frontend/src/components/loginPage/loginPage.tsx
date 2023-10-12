import { useState } from 'react';
import { MenuItem, Button } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';

import useStyles from './loginPageStyle';
import { GET_ALL_USERS } from '../../db/users/query';
import User from '../../types/User';
import { useAppDispatch } from '../../redux/hooks';
import { setCurrentUser } from '../../redux/userSlice';
import { useAppSelector } from '../../redux/hooks';

const LoginPage = () => {
    const {classes} = useStyles();
    const [selectedUser, setSelectedUser] = useState<number>(-1);
    const [allUsers, setAllUsers] = useState<User[]>();
    const dispatch = useAppDispatch();
    const currentUser = useAppSelector((state) => state.user.currentUser);

    const SELECT_USER = 'בחר משתמש להתחברות';
    const LOGIN = 'התחבר';
    const SPOOFY = 'Spoofy';

    const handleChange = (event: SelectChangeEvent<number>) => {
      setSelectedUser(Number(event.target.value));
    };

    const handleConnection = () => {
        const foundUser = allUsers?.find((user) => user.id === selectedUser);
        if (foundUser) {
            dispatch(setCurrentUser({user: foundUser}));
        }
    }

    useQuery(GET_ALL_USERS, {
        onCompleted: (data: {allUsers: { nodes: User[] }}) => {
            const users: User[] = data.allUsers.nodes;
            setAllUsers(users)
        }
    });

    return(
       <div className= {classes.pageContainer}>
            <h1 className={classes.spoofyHeader}>
                {SPOOFY}
            </h1>
            <Select
                defaultValue={-1}
                value={selectedUser}
                onChange={(e)=>handleChange(e)}
                className={classes.userSelect}>
                    <MenuItem disabled value= {-1}>
                        {SELECT_USER}
                    </MenuItem>
                    {allUsers && allUsers.map((user: User) => (
                        <MenuItem value={user.id}>
                            {user.firstName}
                        </MenuItem>
                    ))}
            </Select>
            { selectedUser != -1 ? 
                <Link to={'/songs'}> 
                    <Button 
                        variant='contained' 
                        className={classes.loginButton}
                        onClick={handleConnection}>
                        {LOGIN}
                    </Button> 
                </Link> 
            :
                <Button 
                    variant='contained' 
                    className={classes.loginButton}>
                    {LOGIN}
                </Button> 
            }
        </div> 
    );
};
export default LoginPage;