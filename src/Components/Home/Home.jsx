import React,{useState} from 'react'
import './Home.css'
import Navbar from '../Navbar/Navbar'
import Posts from '../Posts/Posts'

const Home = () => {

    

    const [profiles, setProfiles] = useState([
        {
            id: 1,
            name: "abcd",
            image: "abcd",
            isfriend: false
        },
        {
            id: 2,
            name: "abcd",
            image: "abcd",
            isfriend: false
        },
        {
            id: 3,
            name: "abcd",
            image: "abcd",
            isfriend: false
        }
    ])

    const addFriendHandler = (id)=>{
        const getProfiles = profiles.map((item)=>{
            console.log(item);
            if(item.id===id){
                item.isfriend = true;
            }
            return item;
        })
        setProfiles(getProfiles);
    }

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
                    <p>Followed by 241 People</p>
                    <p>Went to Maharaja Agrasain School</p>
                </div>
            </div>
            <div className="center">
                <Posts/>
            </div>
            <div className="right">
                <div className="heading">
                    <h3>Who to Follow</h3>
                </div>
                    {
                        profiles.map((item)=>{
                            return (
                                <div className="profiles">
                                    <img src="" alt="" />
                                    <Link to={`${}`}>{item.name}</Link>
                                    <button onClick={(e)=>addFriendHandler(item.id)}>{item.isfriend?"Added":"Add Friend"}</button>
                                </div>
                                
                            )
                        })
                    }
            </div>
        </div>
    </div>
  )
}

export default Home