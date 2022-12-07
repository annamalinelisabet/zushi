import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomeView from './Home/HomeView'
import HomeHbgView from './HomeHbg/HomeHbgView'
import HomeMalmoView from './HomeMalmo/HomeMalmoView'
import HomeOceanView from './HomeOcean/HomeOceanView'

const Views = () => {
  return (
    <Routes>
        <Route path='/' element={ <HomeView />} />
        <Route path='/hbg' element={ <HomeHbgView />} />
        <Route path='/malmo' element={ <HomeMalmoView />} />
        <Route path='/ocean' element={ <HomeOceanView />} />
    </Routes>
  )
}

export default Views