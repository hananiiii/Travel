import React from 'react'
import Header from '../components/header'
import Hero from '../components/hero'
import Goto from '../components/goto'
import Promo from '../components/promotions'
import Famous from '../components/famous'
import Blog from '../components/blog'
import Discover from '../components/discover'
import Footer from '../components/foter'
const home = () => {
  return (
    <div>
        <Header/>
        <Hero/>
        <Goto/>
        <Promo/>
        <Famous/>
        <Blog/>
        <Discover/>
        <Footer/>
    </div>
  )
}

export default home