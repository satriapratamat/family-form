import React from 'react'
import { Link } from 'react-router-dom'

export default function HomePage() {
    return(
        <>
            <div className='top'>
                Home Page
            </div>
            <Link to={'/form-page'}>Create New User</Link>
        </>
    )
}