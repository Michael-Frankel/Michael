import React from 'react'
import '../../../view/styles/global.scss';

//data
import { InputInterface } from './LoginInputData'

interface LoginInputsProps {
    input: InputInterface;
}

const LoginInput = (props: LoginInputsProps) => {
    const { input } = props

    return (
        <div className='login-input'>

            <input type={input.type} name={input.name} placeholder={input.placeholder}
                id={input.id} required={input.required} />

        </div>
    )
}

export default LoginInput