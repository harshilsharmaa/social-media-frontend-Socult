import React, { useState, useEffect } from 'react'
import './Profile.css'
import { useParams } from 'react-router-dom'
import { getProfileById } from '../Profiles'
import Posts from '../Posts/Posts'

const Profile = () => {

    const { id } = useParams();

    const [profile, setProfile] = useState(null);

    useEffect(() => {
        const getProfile = getProfileById(id);
        setProfile(getProfile);
    }, [id])

    return (
        <div className='profile'>
            <div className="header">
                <div className="banner">
                    <img src={profile?.bannerImage} alt="" />
                </div>
                <div className="profileInfo">
                    <div className="profilePic">
                        <img src={profile?.image} alt="" />
                    </div>
                    <div className="info">
                        <p id='name'>{profile?.name}</p>
                        <p>23 Following</p>
                        <p>1000 Folowers</p>
                    </div>
                </div>
            </div>
            <div className="content">
                <div className="left">
                    <div className="bio">
                        <p>Iam a Software Engineer</p>
                        <p>Studied at IIT Kanpur</p>
                        <p>Studied at IIT Kanpur</p>
                        <p>From: Sirsa - Haryana</p>
                        <p>Love to code</p>
                        <p>Followed by 241 People</p>
                        <p>Went to Maharaja Agrasain School</p>
                    </div>
                </div>
                <div className="center">
                    <Posts posts={profile?.posts}/>
                </div>
                <div className="right"></div>
            </div>
        </div>
    )
}

export default Profile