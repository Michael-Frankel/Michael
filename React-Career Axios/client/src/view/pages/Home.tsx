import React, { useEffect } from 'react'
import {
    Routes,
    Route,
    useLocation,
    useNavigate,
    Link,
    Outlet
} from "react-router-dom";
import queryString from 'query-string'
import axios from 'axios';

const Home = () => {
    const { search } = useLocation()
    const { userId } = queryString.parse(search);

    useEffect(() => {
        (async () => {
            const { data } = await axios.get(`/api/videos/get-videos?userId=${userId}`)
            console.log(data.videos[0].movie1);

        })()
    }, [])

    return (
        <div>Home {userId}</div>
    )
}

export default Home