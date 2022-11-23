import React, { useState, useEffect } from 'react'
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

//components
import SideBar from '../components/HomePage/SideBar'

import homePageJson from '../components/HomePage/homePageJson.json';

const HomePage = () => {
    const [statusSidebar, setStatusSideBar] = useState(true)
    const { search } = useLocation()
    const { email, password, name, userId, gender } = queryString.parse(search);


    useEffect(() => {

        (async () => {

            const { data } = await axios.get(`/api/videos/get-videos?userId=${userId}`)
            console.log(data);

        })()


    }, [])


    return (
        <div>
            <p>Hello {name} !</p>
            <SideBar setStatusSideBar={setStatusSideBar} statusSidebar={statusSidebar} />
            {gender === 'male' ?
                <span>{homePageJson["welcome.label"]} {name}, {homePageJson["welcomeSubTextMale.label"]}</span>
                :
                <span>{homePageJson["welcome.label"]} {name}, {homePageJson["welcomeSubTextFemale.label"]}</span>
            }

        </div>
    )
}

export default HomePage