import React, { useState } from 'react'

//components
import Submit from './Submit'
import Input from './Input'

//redux
import { useAppSelector, useAppDispatch } from '../../../app/hooks'
import { registerAsync } from './registerUserApi'
import { loginAsync } from './loginUserApi'

//validation
import Joi from 'joi';
export const UserSchema = Joi.object({
    name: Joi.string().alphanum().min(3).max(30).required(),
    email: Joi.string().max(256).required(),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
})
    .with('name', 'email')
    .with('name', 'password')
    .with('password', 'email')

const Form = () => {
    const [login, setLogin] = useState("login")
    const [register, setRegister] = useState("register")

    const dispatch = useAppDispatch()


    function handleRegister(e: any) {

        try {

            e.preventDefault()

            const name = e.target.name.value
            const email = e.target.email.value
            const password = e.target.password.value
            const password2 = e.target.password2.value

            const payload = { name, email, password }
            if (!payload.name || !payload.email || !payload.password) throw new Error("No payload provided for registration");

            const { value, error } = UserSchema.validate(payload)
            if (error) throw error;

            if (password === password2 && value) {

                console.log(payload, "form");
                dispatch(registerAsync(payload))


            } else {

                console.log("The pasword does not match, please try again");

            }

        } catch (error) {

            console.error(error);

        }

    }


    function handleLogin(e: any) {

        try {

            e.preventDefault()

            const name = e.target.name.value
            const email = e.target.email.value
            const password = e.target.password.value

            const payload = { name, email, password }

            if (!payload.name || !payload.email || !payload.password) throw new Error("No payload provided for registration");
            const { value, error } = UserSchema.validate(payload)
            if (error) throw error;

            console.log(payload, "dispatch");

            dispatch(loginAsync(payload));


        } catch (error) {

            console.error(error);

        }

    }


    return (
        <div>



            <form onSubmit={(e: any) => handleLogin(e)}>
                <Input login={login} />
                <Submit login={login} />
            </form>


            <form onSubmit={(e: any) => handleRegister(e)}>
                <Input register={register} />
                <Submit register={register} />
            </form>


        </div>
    )
}

export default Form