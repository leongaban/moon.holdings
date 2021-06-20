import React from 'react'

import {
  AffiliateContainer,
  CoinbaseSquare,
  CoinbaseLogo,
  BinaceSquare,
  BinanceLogo,
  CashSquare,
  CashAppLogo
} from '../../styles'
import { COINBASE_LINK, BINANCE_LINK, CASH_APP_LINK } from '../../shared/constants/links'

export const Affiliates = () => {
  return (
    <AffiliateContainer>
      <a href={COINBASE_LINK} target="_blank">
        <CoinbaseSquare>
          <CoinbaseLogo/>
          <p>Buy Bitcoin</p>
        </CoinbaseSquare>
      </a>
      <a href={BINANCE_LINK} target="_blank">
        <BinaceSquare>
          <BinanceLogo/>
          <p>Buy Altcoins</p>
        </BinaceSquare>
      </a>
      <a href={CASH_APP_LINK} target="_blank">
        <CashSquare>
          <CashAppLogo/>
          <p>Send Cash</p>
        </CashSquare>
      </a>
    </AffiliateContainer>
  )
}
