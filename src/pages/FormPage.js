import React from 'react'
import { Link } from 'react-router-dom'

export default function FormPage() {
    return(
        <>
            <div className='top'>
                Form Page
            </div>
            <Link to={'/'}>Back to Home</Link>
        </>
        )
}