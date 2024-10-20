import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { House, MailSearch } from 'lucide-react';

const Sidebar = () => {
    const location = useLocation();

    // Function to check if a route is active
    const isActive = (path) => location.pathname === path;
    const user = JSON.parse(localStorage.getItem('user'));

    return (
        <>
            <div className="flex-none hidden xl:flex items-center z-10 px-5 h-[65px] w-[275px] overflow-hidden relative duration-300 group-[.side-menu--collapsed]:xl:w-[91px] group-[.side-menu--collapsed.side-menu--on-hover]:xl:w-[275px]">
                <Link className="flex items-center transition-[margin] duration-300 group-[.side-menu--collapsed.side-menu--on-hover]:xl:ml-0 group-[.side-menu--collapsed]:xl:ml-2" to="/admin/dashboard">
                    <div className="flex h-[40px] w-[40px] items-center justify-center rounded-lg bg-white transition-transform ease-in-out group-[.side-menu--collapsed.side-menu--on-hover]:xl:-rotate-180">
                        <img src='../assets/img/logo.png' alt="WeLink Logo" />
                    </div>
                    <div className="ml-3.5 font-medium transition-opacity group-[.side-menu--collapsed.side-menu--on-hover]:xl:opacity-100 group-[.side-menu--collapsed]:xl:opacity-0">
                        WeLink Home
                    </div>
                </Link>
            </div>

            <div className="scrollable-ref w-full h-full z-20 px-5 overflow-y-auto overflow-x-hidden pb-3 [-webkit-mask-image:-webkit-linear-gradient(top,rgba(0,0,0,0),black_30px)] [&:-webkit-scrollbar]:w-0 [&:-webkit-scrollbar]:bg-transparent [&_.simplebar-content]:p-0 [&_.simplebar-track.simplebar-vertical]:w-[10px] [&_.simplebar-track.simplebar-vertical]:mr-0.5 [&_.simplebar-track.simplebar-vertical_.simplebar-scrollbar]:before:bg-slate-400/30">
                <ul className="scrollable">
                    <li className={isActive('/admin/dashboard') ? 'bg-white text-primary/10 border rounded-lg border-primary/10' : ''}>
                        <Link to="/admin/dashboard" className="side-menu__link">
                            <House className="stroke-[1] w-5 h-5 side-menu__link__icon" />
                            <div className="side-menu__link__title">Dashboard</div>
                        </Link>
                    </li>
                    <li className={isActive('/admin/contacts') ? 'bg-white text-primary/10 border rounded-lg border-primary/10' : ''}>
                        <Link to="/admin/contacts" className="side-menu__link">
                            <MailSearch className="stroke-[1] w-5 h-5 side-menu__link__icon" />
                            <div className="side-menu__link__title">Contacts</div>
                        </Link>
                    </li>
                    <li className={isActive('/admin/projects') ? 'bg-white text-primary/10 border rounded-lg border-primary/10' : ''}>
                        <Link to="/admin/projects" className="side-menu__link">
                            <MailSearch className="stroke-[1] w-5 h-5 side-menu__link__icon" />
                            <div className="side-menu__link__title">Projects</div>
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Sidebar;
