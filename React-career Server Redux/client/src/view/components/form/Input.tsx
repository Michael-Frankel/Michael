import React from 'react'

interface InputProps {
    login?: string;
    register?: string;
}

const Input = (props: InputProps) => {
    const { login, register } = props

    return (
        <div>



            <input type="text" name="name" placeholder='Name...' />
            <input type="email" name="email" placeholder='Email...' />
            <input type="password" name="password" placeholder='Password...' />

            {register ?
                <input type="password" name="password2" placeholder='Password again...' />
                : null
            }



        </div>
    )
}

export default Input