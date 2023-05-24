import React from 'react'
import Cards from '../../components/Cards/Cards'
import MySlider from '../../components/MySlider/MySlider'
import Section2 from '../../components/Section2/Section2'
import Footer from '../../layout/Footer/Footer'
import Header from '../../layout/Header/Header'

const Home = () => {
  return (
    <>
        <Header/>
        <MySlider/>
        <Section2/>
        <Cards/>
        <Footer/>
    </>
  )
}

export default Home