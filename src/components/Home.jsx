import React from 'react'
import Header from './Header'
import SwiperFruits from './SwiperFruits'
import Sectionhaqqinda from './Sectionhaqqinda'
import SectionBaglarimiz from './SectionBaglarimiz'
import SectionMehsullar from './SectionMehsullar'
import SectionXidmetler from './SectionXidmetler'
import SectionBlog from './SectionBlog'
import SectionGalery from './SectionGalery'
import FooterOne from './FooterOne'

const Home = () => {
  return (
    <>
      <Header />
      <SwiperFruits />
      <Sectionhaqqinda />
      <SectionBaglarimiz />
      <SectionMehsullar />
      <SectionXidmetler />
      <SectionBlog/>
      <SectionGalery/>
      <FooterOne/>
    </>
  )
}

export default Home