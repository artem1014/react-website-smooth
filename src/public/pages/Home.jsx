import React, {useState} from 'react'
import HeroSection from '../../Components/HeroSection/HeroSection';
import { homeObjOne } from '../../Components/InfoSection/Data';
import InfoSection from '../../Components/InfoSection/InfoSection';
import Navbar from '../../Components/Navbar/Navbar'
import Sidebar from '../../Components/Sidebar/Sidebar'

const Home = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggler = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggler={toggler}/>
      <Navbar toggler={toggler}/>
      <HeroSection />
      <InfoSection {...homeObjOne}/>
    </>
  )
}

export default Home
