import React, { useEffect } from 'react'
import SideBarTags from './SideBarTags'

interface SideBarProps {
    setStatusSideBar: Function;
    statusSidebar: boolean;
}

const SideBar = (props: SideBarProps) => {
    const { setStatusSideBar, statusSidebar } = props

    return (
        <div>
            <span onClick={() => setStatusSideBar(!statusSidebar)}
                className="material-symbols-outlined" style={{ cursor: "pointer" }}>menu</span>
                
            <SideBarTags statusSidebar={statusSidebar} />
        </div>
    )
}

export default SideBar