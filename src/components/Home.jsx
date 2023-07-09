import React from 'react'
import Header from './Header'
import SwiperFruits from './SwiperFruits'
import Sectionhaqqinda from './Sectionhaqqinda'
import SectionBaglarimiz from './SectionBaglarimiz'
import SectionMehsullar from './SectionMehsullar'
import ModalQutuMehsullar from './ModalQutuMehsullar'

const Home = () => {
  return (
    <>
    <Header/>
    <SwiperFruits/>
   <Sectionhaqqinda/>
   <SectionBaglarimiz/>
   <SectionMehsullar/>
   {/* <ModalQutuMehsullar/> */}
    </>
  )
}

export default Home