import React, { useEffect } from 'react'
import {
    Outlet
} from "react-router-dom";

interface HistoryProps {
    userIdForVideos: String;
}

const History = (props: HistoryProps) => {
    const { userIdForVideos } = props

    useEffect(() => {
        console.log(userIdForVideos);

    }, [])


    return (
        <div>
            <p>History for {userIdForVideos}</p>

            <Outlet />

            <p>History</p>


        </div>
    )
}

export default History