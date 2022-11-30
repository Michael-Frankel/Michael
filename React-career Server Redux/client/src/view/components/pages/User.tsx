import React, { useEffect, useState } from 'react'

import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { selectRegister, selectStatusRegister, Status } from '../form/registerSlice'
import { selectLogin, selectStatusLogin, LoginStatus } from '../form/loginSlice'

import {
  Routes,
  Route,
  useNavigate
} from "react-router-dom";

import Form from '../form/Form'


const User = () => {
  // const registerSelector = useAppSelector(selectRegister)
  const registerStatusSelector = useAppSelector(selectStatusRegister)
  const registerSelector = useAppSelector(state => state.register.value)

  const loginStatusSelector = useAppSelector(selectStatusLogin)
  const loginSelector = useAppSelector(selectLogin)

  const navigate = useNavigate()


  useEffect(() => {

    if (loginSelector?.ok) navigate(`/homePage?name=${loginSelector.name}`)

  }, [loginSelector])

  return (
    <div>

      <Form />

      {loginStatusSelector === LoginStatus.Loading ?
        <h1>{LoginStatus.Loading}...</h1>
        : null
      }
      {loginSelector?.ok ?
        <p>Welcome {loginSelector.name}!</p>
        :
        loginSelector?.ok === false ?
          <p>No user</p>
          :
          null
      }



      {registerStatusSelector === Status.Loading ?
        <h1>{Status.Loading}...</h1>
        : null}

      {
        registerSelector ?
          <p>Welcome {registerSelector.name}!</p>
          : null
      }

    </div>
  )
}

export default User