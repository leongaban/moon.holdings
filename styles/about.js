import styled from 'styled-components';

export const AboutContainer = styled.div`
  position: relative;
  z-index: 2;
  top: 2rem;
  padding: 30px;
  max-width: 1000px;

  h1 { font-family: Oswald; font-weight: 300; }

  a {
    color: ${props => props.theme.apricot}; text-decoration: underline;
    &:hover { text-decoration: none; }
  }

  p { font-size: 1.25rem; line-height: 2rem; }

  @media (max-width: 700px) {
    max-width: 600px;
    p { font-size: 1rem; line-height: 1.5rem; }
  }
`

export const TeamImages = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  flex-flow: row wrap;
  flex-direction: row;

  h4, h5 { color: ${props => props.theme.brightPurple}; }

  h4 {
    margin: 0 0 0.1rem;
    font-size: 1rem;
    color: ${props => props.theme.brightPurple};
  }

  h5 { margin: 0; font-size: 0.8rem; }

  p {
    padding-right: 1rem;
    max-width: 390px;
    font-size: 1rem;
    line-height: 1.25rem;
  }

  @media (max-width: 767px) {
    p {
      width: 140px;
      font-size: 0.9rem; line-height: 1.25rem;
    }
  }
`

export const TeamImg = styled.img`
  border: 3px solid ${props => props.theme.brightPurple};
  margin-bottom: 0.5rem;

  @media (max-width: 767px) { width: 140px; height: 140px; }
`
export const TeamDiv = styled.div`
  width: 50%;

  p { color: ${props => props.theme.brightPurple}; }
`

export const TeamSocial = styled.div`
  margin-top: 1rem;
  img { margin: 0 0.5rem 0 0; }
`
