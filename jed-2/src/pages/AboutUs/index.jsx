import React from 'react'
import AboutHead from '../../components/AboutHead'
import WorkLev from '../../components/Workslev'
import Team from '../../components/AboutTeam'
import AbotContact from '../../components/AbutContact'
import Register from '../../components/Register/Register'

function AboutUs() {
  return (
    <div>
        <AboutHead/>
        <Team/>
        <AbotContact/>
        <Register/>
    </div>
  )
}

export default AboutUs