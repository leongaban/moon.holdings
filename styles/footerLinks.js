import styled from 'styled-components'

export const LinksContainer = styled.div`
  position: fixed;
  z-index: 10;
  bottom: 0.4rem;
  right: 300px;
  width: 100%;
  font-size: 1rem;
  text-align: right;

  a {
    color: ${(props) => props.theme.apricot};
    &:hover { color: ${(props) => props.theme.offWhite}; }
  }

  @media (max-width: 1000px) {
    right: 30px;
    bottom: 0;
    font-size: 0.8rem;
  }
`;

export const FuturatumSpan = styled.span`
  @media (max-width: 400px) {
    display: none;
  }
`
