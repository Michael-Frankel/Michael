import React from 'react'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { selectLogin, selectStatusLogin, LoginStatus } from '../form/loginSlice'


import {
  useLocation
} from "react-router-dom";

import queryString from 'query-string'


const HomePage = () => {
  const { search } = useLocation()
  const { name } = queryString.parse(search);

  const loginStatusSelector = useAppSelector(selectStatusLogin)
  const loginSelector = useAppSelector(selectLogin)

  return (

    <div>
      <p>Welcome {loginSelector?.email}!</p>
      <p>{loginSelector?.name}</p>


    </div>


  )
}

export default HomePage