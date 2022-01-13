import React from 'react'
import { Link } from 'react-router-dom'

import {auth} from '../../firebase/firebase.utils'

import { ReactComponent as Logo } from '../../assets/logo.svg'

const Header = ({currentUser}) => (
    
    <div className="header flex p-2 bg-white items-center justify-between">
        <Link to='/'>
           <Logo />
        </Link>
        <div className='options-container'>
            <Link className='p-2 hover:text-green-500' to='/shop'>Shop</Link>
            <Link className='p-2 hover:text-green-500' to='/shop'>Contact</Link>
            {
                currentUser ? (
                    <div className='p-2 hover:text-green-500' onClick={() => auth.signOut()}>Sign Out</div>
                )
                : (<Link className='p-2 hover:text-green-500' to='/signin'>Sign In</Link>)
            }
        </div>
    </div>
)

export default Header