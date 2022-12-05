import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomeView from './Home/HomeView'
import HomeHbgView from './HomeHbg/HomeHbgView'

const Views = () => {
  return (
    <Routes>
        <Route path='/' element={ <HomeView />} />
        <Route path='/hbg' element={ <HomeHbgView />} />
    </Routes>
  )
}

export default Views