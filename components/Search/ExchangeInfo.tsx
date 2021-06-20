import React from 'react'
import { bind } from 'decko'

import { IAsset, IMarketAsset } from '../../shared/types'
import { EnterPositionStyle } from '../../styles'

interface IPropsInfo {
  asset: IAsset
}

interface IPropsCount {
  exchanges: IMarketAsset[]
}

interface IPropsPosition {
  asset: IAsset
  enterPosition(position: number): void
}

export const ExchangeSelectInfo = (props: IPropsInfo) =>
  <h2>Exchanges with <span>{props.asset.currency}</span> denominated in BTC, ETH, USD, USDC, or USDT will be listed above. Otherwise the asset's price will be an aggregate of supported exchanges.</h2>

export const ExchangesCount = (props: IPropsCount) => {
  const { exchanges } = props
  const pural = exchanges.length > 1 && 's'
  return (<option key={'default'}>({exchanges.length}) Exchange{pural}:</option>)
}

export class EnterPosition extends React.Component<IPropsPosition> {
  render() {
    const { asset } = this.props
    return (
      <EnterPositionStyle>
        <h2>Enter your <span>{asset.currency}</span> position in order to add asset to your Portfolio. Or add the asset to your Watchlist.</h2>
        <input
          type="number"
          placeholder="Enter Position"
          pattern="[0-9]+([,\.][0-9]+)?"
          onChange={this.handleChange} 
          required
        />
      </EnterPositionStyle>
    )
  }

  @bind
  private handleChange(event: React.FormEvent<HTMLInputElement>) {
    const target = event.target as HTMLInputElement
    const parsed = parseFloat(target.value)
    const position = Number.isNaN(parsed) ? 0 : parsed
    this.props.enterPosition(position)
  }
}
