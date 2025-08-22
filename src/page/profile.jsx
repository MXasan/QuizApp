import React from 'react'
import Progress from '../componets/progress/progress'
import ProfileInfo from '../componets/profileInfo/profileInfo'
import "./profile.css"
const Profile = () => {
    return (
        <div className='Profile'>
            <ProfileInfo />
            <Progress />
        </div>
    )
}

export default Profile