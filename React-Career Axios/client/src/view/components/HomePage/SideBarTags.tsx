import React from 'react'
import {
    Routes,
    Route,
    useLocation,
    useNavigate,
    Link,
    Outlet,
    useParams,
} from "react-router-dom";

interface SideBarTagsProps {
    statusSidebar: boolean;
}

const SideBarTags = (props: SideBarTagsProps) => {
    const { statusSidebar } = props
    const navigate = useNavigate()

    const blblb = "636039754554ef64e875523c"


    return (
        <div>
            {statusSidebar ?
                <div style={{ cursor: "pointer" }}>

                    <p onClick={() => navigate(`/home?userId=${blblb}`)}><span className="material-symbols-outlined">
                        home
                    </span>    Home</p>


                    <p onClick={() => navigate(`/likedVideos/${blblb}`)}><span className="material-symbols-outlined">
                        thumb_up
                    </span>   Liked Videos</p>
                    <Link to="/history">History</Link>
                    {/* <p onClick={() => navigate(`/history`)}>History</p> */}
                </div> 
                :
                null
            }
        </div>
    )
}

export default SideBarTags