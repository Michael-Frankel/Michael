import React from 'react'
import { useNavigate } from "react-router-dom";

//components
import LoginTitle from '../components/Login/LoginTitle'
import LoginForm from '../components/Login/LoginForm'
import axios from 'axios';

interface LoginProps {
    setUserIdForVideos: Function;
}

const Login = (props: LoginProps) => {
    const { setUserIdForVideos } = props
    const navigate = useNavigate()

    async function handleLoginSubmit(e: any) {

        try {

            e.preventDefault()

            const name = e.target.name.value
            const email = e.target.email.value
            const password = e.target.password.value
            const gender = e.target.gender.value

            const payload = { name, email, password, gender }

            const { data } = await axios.post("/api/user/login", payload)
            //console.log(data.user._id);


            if (data.ok) {

                setUserIdForVideos(data.user._id)
                navigate(`/homePage?email=${email}&name=${name}&userId=${data.user._id}&gender=${gender}`)

            } else {

                throw new Error("No user login");

            }

        } catch (error) {

            console.error(error);

        }

    }


    return (
        <div className='login-page'>
            <LoginTitle />

            <LoginForm handleLoginSubmit={handleLoginSubmit} />

        </div>
    )
}

export default Login