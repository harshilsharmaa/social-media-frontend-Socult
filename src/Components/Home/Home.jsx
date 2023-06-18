import React from 'react'
import './Home.css'
import Navbar from '../Navbar/Navbar'
import Posts from '../Posts/Posts'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <div className="home">
            <div className="left">
                <div className="bio">
                    <p>Iam a Software Engineer</p>
                    <p>Studied at IIT Kanpur</p>
                    <p>Studied at IIT Kanpur</p>
                    <p>From: Sirsa - Haryana</p>
                    <p>Love to code</p>
                </div>
            </div>
            <div className="center">
                <Posts/>
            </div>
            <div className="right"></div>
        </div>
    </div>
  )
}

export default Home