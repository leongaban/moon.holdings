import React from 'react'

import { MOON_HOLDINGS } from '../../shared/constants/copy'
import { AstronautContainer, Heading } from '../../styles'

interface IProps {
  className?: string
  showLogo: boolean
}

export default ({ className, showLogo }: IProps) => (
  <AstronautContainer className={className}>
    { showLogo ? <Heading>{MOON_HOLDINGS}</Heading> : null }
    <img src="static/astronaut.png" alt="astronaut" />
  </AstronautContainer>
)
