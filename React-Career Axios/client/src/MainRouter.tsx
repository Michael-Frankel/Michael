import React, { useState } from 'react'
import {
    Routes,
    Route,
    useNavigate, Link
} from "react-router-dom";

//components
import Login from './view/pages/Login';
import HomePage from './view/pages/HomePage';
import LikedVideos from './view/pages/LikedVideos';
import History from './view/pages/History';
import WatchHistory from './view/components/History/WatchHistory';
import Home from './view/pages/Home';


const MainRouter = () => {
    const [userIdForVideos, setUserIdForVideos] = useState("")

    return (
        <div>

            <Routes>
                <Route path="/" element={<Login setUserIdForVideos={setUserIdForVideos} />} />
                <Route path="/homePage" element={<HomePage />} />
                <Route path="/home" element={<Home />} />
                <Route path="/likedVideos/:id" element={<LikedVideos userIdForVideos={userIdForVideos} />} />
                <Route path="/history" element={<History userIdForVideos={userIdForVideos} />}>
                    <Route index element={<WatchHistory />} />
                </Route>
            </Routes>




        </div>
    )
}

export default MainRouter