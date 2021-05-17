import React from 'react';
import { useParams } from 'react-router';

const Profile = () => 
{
    const { id } = useParams();

    return (
        <div>
            <h1>Profile von { id }</h1>

            <p>Willkommen auf den Profil von { id }!</p>
        </div>
    );
}

export default Profile;
