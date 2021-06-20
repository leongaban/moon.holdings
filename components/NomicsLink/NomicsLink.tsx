import React from 'react'

import { LinksContainer, FuturatumSpan } from '../../styles'
import { NOMICS_LINK } from '../../shared/constants/links'

interface IProps {
  displayAboutLink?: boolean
}

const NomicsLink = (props: IProps) => {
  const { displayAboutLink: display } = props
  const FuturatumLink = () => <span> | Built by <a href="https://futuratum.io">Futuratum.</a></span>

  return (
    <LinksContainer>
      <p>
        Powered by <a href={NOMICS_LINK} target="blank">Nomics APIs.</a> 
        { display && <FuturatumSpan><FuturatumLink/></FuturatumSpan> }
      </p>
    </LinksContainer>
  )
}

export default NomicsLink;
