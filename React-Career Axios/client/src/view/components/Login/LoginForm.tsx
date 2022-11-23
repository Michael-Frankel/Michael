import React from 'react'

//components
import LoginInput from './LoginInput'
import LoginButton from './LoginButton'
import LoginSelect from './LoginSelect'

//data
import { InputPropsInterfaceArray } from './LoginInputData'
import { InputInterface } from './LoginInputData'

interface LoginFormProps {
    handleLoginSubmit: Function;
}


const LoginForm = (props: LoginFormProps) => {
    const { handleLoginSubmit } = props

    return (
        <div>
            <form className='login-form' onSubmit={(e: any) => handleLoginSubmit(e)}>

                {InputPropsInterfaceArray.map((input: InputInterface, index: number) => {
                    return (
                        <LoginInput key={index} input={input} />
                    )
                })}

                <LoginSelect />

                <LoginButton />

            </form>
        </div>
    )
}

export default LoginForm