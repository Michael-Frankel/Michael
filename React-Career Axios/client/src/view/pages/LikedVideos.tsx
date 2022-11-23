import React, { useEffect } from 'react'
import {
    useParams,
} from "react-router-dom";

interface LikedVideosProps {
    userIdForVideos: string;
}

const LikedVideos = (props: LikedVideosProps) => {
    const { userIdForVideos } = props
    const { id } = useParams()



    return (
        <div>
            <p>{`${id}`} and {userIdForVideos}</p>
            <h1>LikedVideos</h1>

        </div>
    )
}

export default LikedVideos