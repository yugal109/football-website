import React from 'react'
import LatestVideo from "../components/homecomponents/LatestVideo"
import Services from "../components/homecomponents/Services"
import VisonAndMission from '../components/homecomponents/VisonAndMission'
import Players from '../components/homecomponents/Players'
import Achivements from '../components/homecomponents/Achivements'
import Club from '../components/homecomponents/Club'
const HomeScreen = () => {

    return (
        <>
            <LatestVideo />
            <Services />
            <VisonAndMission/>
            <Players/>
            <Achivements/>
            <Club/>
        </>

    )
}

export default HomeScreen