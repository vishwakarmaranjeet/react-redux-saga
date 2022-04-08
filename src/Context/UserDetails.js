import React, { createContext, useEffect, useState } from 'react';

const UserData = createContext(); // Create context

const UserDetails = (props) => {
    const [users, setUsers] = useState({ name: 'Ranjeet', location: 'Mumbai' })
    // useEffect(() => { 
    //     setTimeout(() => { 
    //         setUsers({
    //             name: 'Ranjeet',
    //             location:'Banglore'
    //         })
    //     },1000)
    // }, [])
    const updateDetails = () => { 
        setTimeout(() => { 
            setUsers({
                ...users,
                location:'Banglore'
            })
        },2000)
    }
    return (
        <UserData.Provider value={{ users, updateDetails}}>
            {props.children}
        </UserData.Provider>
    );
}

export default UserDetails;
export { UserData }