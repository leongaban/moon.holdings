import styled from 'styled-components';

export const PortfolioWrapper = styled.div`z-index: 2;`

export const PortfolioBalance = styled.div`
  position: fixed;
  z-index: 4;
  top: 4rem;
  left: 2rem;
  font-size: 4rem;
  font-size: 4rem;
  color: ${props => props.theme.apricot};
  cursor: pointer;

  span { color: #fff; }

  @media (max-width: 767px) {
    top: 4.5rem;
    font-size: 3rem;
  }

  @media (max-width: 320px) {
    font-size: 2rem;
  }
`

export const PortfolioContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  flex-flow: row wrap;
  flex-direction: row;
  align-content: stretch;
  margin-bottom: 2rem;
  position: relative;
  top: 8rem;
  padding: 30px;

  @media (max-width: 767px) { top: 5rem; }
`

export const WatchlistContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  flex-flow: row wrap;
  flex-direction: row;
  align-content: stretch;
  position: relative;
  padding: 30px;
  top: 4rem;

  @media (max-width: 767px) {
    top: 0;
    section { height: 112px; }
  }
`
