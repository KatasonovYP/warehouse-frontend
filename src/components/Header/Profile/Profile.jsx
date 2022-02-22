import React from 'react';
import cl from './Profile.module.css'

function Profile() {
    return (  
        <div className={cl.profile}>
            <div>
                <p>Name Surname</p>
                <p>email.domen.com</p>
            </div>
            <div className={cl.avatar}></div>
            <i className="fa-solid fa-angle-down fa-xl"></i>
        </div>
    );
}

export default Profile;