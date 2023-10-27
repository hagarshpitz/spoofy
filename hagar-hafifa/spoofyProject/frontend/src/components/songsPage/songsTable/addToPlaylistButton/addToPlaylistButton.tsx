import { useState, createContext } from 'react';

const AddToPlaylistButton = () => {
    const HEADING = 'הוסף לפלייליסט'
    return(
        <div>
            <div className='heading'>
                {HEADING}
            </div>
        </div>
    );
};

export default AddToPlaylistButton;