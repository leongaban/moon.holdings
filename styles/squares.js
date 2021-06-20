import styled from 'styled-components'

export const SquareShade = styled.section`
  position: relative;
  top: -22px;
  left: -22px;
  padding: 10px;
  width: 192px;
  height: 192px;
  border-top: 1px solid rgba(255, 255, 255, .125);
  border-right: 1px solid rgba(0, 0, 0, .125);
  border-bottom: 1px solid rgba(0, 0, 0, .125);
  border-left: 1px solid rgba(255, 255, 255, .125);

  @media (max-width: 767px) { width: 122px; height: 134px; }
`

export const CoinSquare = styled.section`
  display: inline-block;
  flex-grow: 1;
  box-sizing: content-box;
  position: relative;
  align-self: auto;
  padding: 20px 20px 0;
  max-width: 170px;
  min-width: 170px;
  max-height: 190px;
  min-height: 190px;
  font-size: em(14);
  border: 2px solid rgba(87, 56, 92, 0);
  transition: all 200ms ease-in-out;
  box-shadow: 1px 1px 0 rgba(47, 38, 90, 0.2),
              2px 2px 2px rgba(47, 38, 90, 0.1);
  cursor: pointer;

  &:hover {
    border: 2px solid ${props => props.theme.offWhite};
    opacity: 0.8;
    -webkit-box-shadow: 0 8px 6px -6px #000;
	     -moz-box-shadow: 0 8px 6px -6px #000;
	          box-shadow: 0 8px 6px -6px #000;
  }

  em { font-style: normal; opacity: 0.7 }
  p { font-weight: 200; }

  @media (max-width: 767px) {
    padding: 20px;
    max-width: 100px;
    min-width: 100px;
    max-height: 111px;
    min-height: 110px;
    font-size: em(12);
  }
`

export const SquareInSearch = styled(CoinSquare)`
  max-width: 200px;
  min-width: 200px;
  max-height: 207px;
  min-height: 207px;
`

export const SquareShadeInSearch = styled(SquareShade)`width: 221px; height: 210px;`

export const ListTitle = styled.div`margin-bottom: 0.8rem; width: 100%; height: 1rem;`

export const WatchlistTitle = styled(ListTitle)`color: ${props => props.theme.brightPurple};`

export const WatchlistSquare = styled(CoinSquare)`
  margin-right: 1px;
  max-width: 120px;
  min-width: 120px;
  max-height: 127px;
  min-height: 127px;
  background: ${props => props.theme.brightPurple};
  p { font-size: 0.8rem; }
`

export const WatchlistShade = styled(SquareShade)`width: 142px; height: 130px;`

export const EditSquareWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
`

export const EditSquare = styled(CoinSquare)`
  z-index: 12;
  display: block;
  position: fixed;
  top: 5%;
  margin-top: 5rem;
  padding: 2rem;
  max-width: 500px;
  min-width: 500px;
  max-height: 500px;
  min-height: 500px;
  font-size: 1.5rem;
  cursor: default;

  header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    h2 { margin: 0; font-size: 4rem; }
    h3 { margin: 2rem 0; }
  }

  input {
    margin: -1rem 0 0.5rem;
    padding-left: 1rem;
    width: 96%;
    height: 3.5rem;
    font-size: 1.5rem;
    color: ${props => props.theme.offWhite};
    outline-width: 0;
    background: rgba(0, 0, 0, .1);
    border-radius: 5px;
    border: 2px solid ${props => props.theme.offWhite};
    box-shadow: inset 1em 1rem 6em rgba(0, 0, 0, .2);
    transition: border 100ms ease-in-out;

    &:hover {
      color: ${props => props.theme.apricot};
      background: rgba(0, 0, 0, .2);
      border: 2px solid ${props => props.theme.apricot};
    }
  }

  &:hover { border: 2px solid rgba(87, 56, 92, 0); opacity: 1; }

  @media (max-width: 767px) {
    margin-top: 0;
    padding: 30px;
    width: 320px;
    height: 100%;
    max-width: 320px;
    min-width: 320px;
    max-height: 420px;
    min-height: 420px;

    header {
      height: 5rem;
      h2 { margin: 0 0 2rem 1rem; font-size: 3rem; }
      h3 { margin: 2rem 1rem 0 0; font-size: 1rem; }
    }

    input { margin: 0 1rem 2rem 1.5rem; width: 80%; }
  }
`

export const EditSquareData = styled.section`
  height: 100%;
  p { margin: 1rem 0 !important; line-height: 1rem; }

  @media (max-width: 767px) {
    width: 90%;
    height: auto;
    margin-left: 1rem;
    p { margin: 0.5rem 0 !important; }
  }
`

export const EditButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  bottom: 2rem;

  button {
    margin-top: 1rem;
    width: 50%;
    height: 4rem;
    font-size: 1.5rem;
  }

  @media (max-width: 767px) {
    button { height: 3rem; font-size: 1rem; }
  }
`

export const EditButtonsWatch = styled(EditButtons)`
  margin-top: 10rem;

  @media (max-width: 767px) { margin-top: 4rem; }
`

export const EditSquareWatch = styled(EditSquare)`
  position: fixed;
  top: 5%;
  background: ${props => props.theme.brightPurple};

  button {
    background: ${props => props.theme.brightPurple};
    &:hover { background: ${props => props.theme.darkPurple}; }
  }

  @media (max-width: 767px) { max-height: 320px; min-height: 320px; }
`

export const CoinRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 0 4px 0;
  line-height: 1.35rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);

  h1 { font-size: 1.5rem; line-height: 0; }
  h4 { font-size: 1rem; line-height: 0.15rem; }
  p { margin: 0; }

  @media (max-width: 767px) {
    font-size: 0.8rem;
    line-height: 1rem;

    h1 { font-size: 0.8rem; }
    h4 { font-size: 0.6rem; }
  }
`

export const CoinRank = styled(CoinRow)`border-bottom: none;`
