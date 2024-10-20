import React from 'react'
import { Outlet } from 'react-router-dom'
import { Footer, Navbar } from '../user/components'

const UserLayout = () => {
    return (
        <div>
            <div className="cursor-pointer progress-wrap">
                <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
                    <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
                </svg>
            </div>
            <div class="mouse-cursor cursor-outer"></div>
            <div class="mouse-cursor cursor-inner"></div>

            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default UserLayout