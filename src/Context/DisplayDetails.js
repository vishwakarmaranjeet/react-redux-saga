import React, { useContext, useEffect } from 'react';
import { UserData } from './UserDetails';

const DisplayDetails = () => {
    const userDetails = useContext(UserData);
    useEffect(() => { 
        userDetails.updateDetails();
    }, [])

    return (
        <>
            <span>{`${userDetails.users.name} ${userDetails.users.location}`}</span>
        </>
    );
}

export default DisplayDetails;