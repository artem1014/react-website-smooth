import React, { useState } from 'react'
import { ArrowForward, ArrowRight, HeroBg, HeroBtnWrapper, HeroContainer, HeroContent, HeroH1, HeroP, VideoBg } from './HeroElements'
import Video from '../../public/videos/video.mp4'
import { Button } from '../ButtonElement'

const HeroSection = () => {

  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
      </HeroBg>
      <HeroContent>
        <HeroH1>
        Blah-Blah-BlahBlah-Blah-Blah
        </HeroH1>
        <HeroP>
        Blah-Blah-BlahBlah-Blah-BlahBlah-Blah-Blah
        </HeroP>
        <HeroBtnWrapper>
          <Button primary='true' dark='true' onMouseEnter={onHover} onMouseLeave={onHover} to='signup'> Get Started {hover ? <ArrowForward /> : <ArrowRight />} </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection
