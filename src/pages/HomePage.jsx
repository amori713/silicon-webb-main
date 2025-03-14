import React from 'react'
import Hero from '../components/sections/Hero'
import AppFeature from "../components/sections/AppFeatures"
import Brands from '../components/sections/Brands'
import Testimonials from '../components/sections/Testimonials'
import Subscribe from '../components/sections/Subscribe'
import HowDoesItWork from '../components/sections/HowDoesItWork'
import MoneyTransfer from '../components/sections/MoneyTransfer'
import ReceivePayment from '../components/sections/ReceivePayment'
import Faq from '../components/sections/Faq'


function HomePage() {

  return (
    <>
      <Hero />
      <AppFeature />
      <Brands />
      <HowDoesItWork />
      <MoneyTransfer />
      <ReceivePayment />
      <Testimonials />
      <Faq />
      <Subscribe />
    </>
  )
}

export default HomePage