import styled from 'styled-components';

export const AstronautContainer = styled.div`
  z-index: 1;
  position: fixed;
  bottom: -5px;
  right: 40px;

  @media (max-width: 1000px) {
    right: 20px;

    img {
      float: right;
      width: 50%;
      height: 50%;
    }
  }
`

export const Heading = styled.div`
  font-size: 2rem;
  position: absolute;
  bottom: 20px;
  right: 10px;

  @media (max-width: 1000px) { font-size: 1rem; bottom: 35px; }
`
