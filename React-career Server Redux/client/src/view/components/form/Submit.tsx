import React from 'react'

interface SubmitProps {
    login?: string;
    register?: string;
}

const Submit = (props: SubmitProps) => {
    const { login, register } = props

    return (
        <div>

            {login ?
                <input type="submit" value="Login" />
                :
                <input type="submit" value="register" />
            }

        </div>
    )
}

export default Submit