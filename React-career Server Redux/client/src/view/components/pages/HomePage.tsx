import React, { useEffect } from 'react'
import {
  useLocation
} from "react-router-dom";

//redux
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { selectLogin, selectStatusLogin, LoginStatus } from '../form/loginSlice'
import { historyAsync } from '../homePage/historyApi';

import queryString from 'query-string'

import axios from 'axios';


const HomePage = () => {
  const { search } = useLocation()
  const { name } = queryString.parse(search);

  const dispatch = useAppDispatch()

  const loginStatusSelector = useAppSelector(selectStatusLogin)
  const loginSelector = useAppSelector(selectLogin)

  // useEffect(() => {
  //   (async () => {

  //     const {data} = await axios.get('/api/user/login')

  //   })()
  // }, [])


  useEffect(() => {

    dispatch(historyAsync())

  }, [])

  return (

    <div>
      <p>Welcome {loginSelector?.email}!</p>
      <p>{name}</p>


    </div>


  )
}

export default HomePage