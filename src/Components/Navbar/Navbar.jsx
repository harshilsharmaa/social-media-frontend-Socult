import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='navbar'>
            {/* onClick={(e) => { setShowModal(true) }} */}
            <button  id='createPostButton'>
                + Create new Post
            </button>
        </div>
    )
}

export default Navbar