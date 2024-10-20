import React from 'react'
import { Outlet } from 'react-router-dom'
import { Footer, Navbar } from '../user/components'

const UserLayout = () => {
    return (
        <>
            <div className="mouseCursor cursor-outer"></div>
            <div className="mouseCursor cursor-inner"><span>Drag</span></div>
            <Navbar />
                <Outlet />
            <Footer />
        </>
    )
}

export default UserLayout