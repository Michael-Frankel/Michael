import React, { useState } from 'react'

interface InputProps {
    login?: string;
    register?: string;
    setHeb?: any;
    setEng?: any;
}

const options = [
    // { value: '', label: 'Choose Lang' },
    { value: 'heb', label: 'Hebrew' },
    { value: 'eng', label: 'English' },
]


const Input = (props: InputProps) => {
    const { login, register, setHeb, setEng } = props

    return (
        <div>



            <input type="text" name="name" placeholder='Name...' />
            <input type="email" name="email" placeholder='Email...' />
            <input type="password" name="password" placeholder='Password...' />

            {register ?
                <>
                    <input type="password" name="password2" placeholder='Password again...' />


                    <select>

                        <option value="" disabled selected>Choose Lang</option>
                        <option value="heb" onChange={() => setHeb('heb')}>Hebrew</option>
                        <option value="eng" onChange={() => setEng('eng')}>English</option>

                        {/* <option value='heb' label='Hebrew' />
                        <option value='eng' label='English' /> */}


                        {/* {options.map((option: any, index: number) => {
                            return (
                                <option key={index} value={option.value} label={option.label} />
                            )
                        })} */}

                    </select>

                </>
                : null
            }


        </div>
    )
}

export default Input