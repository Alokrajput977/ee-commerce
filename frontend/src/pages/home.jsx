import React from 'react'
import Hero from '../components/hero'
import LatestCollection from '../components/LatestCollection'
import Bestseller from '../components/Bestseller'
import Ourpolicy from '../components/Ourpolicy'
import Newsletterbox from '../components/Newsletterbox'
const home = () => {
  return (
    <div>
      <Hero/>
      <LatestCollection/>
      <Bestseller/>
      <Ourpolicy/>
      <Newsletterbox/>
    </div>
  )
}

export default home
