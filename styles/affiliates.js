import styled from 'styled-components';

export const AffiliateContainer = styled.div`
  z-index: 9;
  display: flex;
  flex-direction: row;
  position: fixed;
  left: 158px;
  bottom: 2rem;
  width: 16rem;

  @media (max-width: 767px) {
    left: 144px;
    bottom: 1rem;
  }

  @media (max-width: 700px) {
    display: none;
  }
`

export const AffiliateSquare = styled.section`
  width: 8rem;
  height: 8rem;
  background-repeat: no-repeat;
  transition: background 250ms ease-in-out;
  cursor: pointer;

  p {
    position: absolute;
    bottom: -5px;
    text-align: center;
    width: 128px;
    font-size: 0.8rem;
  }
`

export const LogoImg = styled.div`
  width: 100%;
  height: 100%;
`

export const CoinbaseSquare = styled(AffiliateSquare)`
  border: 2px solid ${props => props.theme.coinbase};
  background: ${props => props.theme.coinbase};

  p { color: #FFF; }

  &:hover {
    border: 2px solid ${props => props.theme.lightPurple};
    background: ${props => props.theme.coinbaseHover};
  }
`

export const CoinbaseLogo = styled(LogoImg)`
  background-image: url("../static/coinbase-logo.png");
`

export const BinaceSquare = styled(AffiliateSquare)`
  border: 2px solid ${props => props.theme.binance};
  background: ${props => props.theme.binance};

  p { color: ${props => props.theme.binanceYellow}; }

  &:hover {
    border: 2px solid ${props => props.theme.lightPurple};
    background: ${props => props.theme.binanceHover};
  }
`

export const BinanceLogo = styled(LogoImg)`
  background-image: url("../static/binance-logo.png");
`

export const CashSquare = styled(AffiliateSquare)`
  border: 2px solid ${props => props.theme.cashApp};
  background: ${props => props.theme.cashApp};

  p { color: ${props => props.theme.offWhite}; }

  &:hover {
    border: 2px solid ${props => props.theme.lightPurple};
    background: ${props => props.theme.cashAppHover};
  }
`

export const CashAppLogo = styled(LogoImg)`
  width: 95%;
  height: 90%;
  background-repeat: no-repeat;
  background-position: center center;
  background-image: url("../static/cash-logo.png");
`
