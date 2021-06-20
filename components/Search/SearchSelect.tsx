import React from 'react'
import * as RA from 'ramda-adjunct'

import { BlockLoader, SearchSelected, SearchExchanges } from '../../components'
import { usdBaseCurrencyCheck } from '../../services/coinFactory'
import { IAsset, IMarketAsset } from '../../shared/types'
import { SearchSelectLoader } from '../../styles'

interface IProps {
  assets: IAsset[]
  selected: IAsset
  exchanges: IMarketAsset[] 
  aggregate: boolean
  exchange: string
  fetching: boolean
  enterPosition(position: number): void
  checkAggregate(event: React.FormEvent<HTMLInputElement>): void
  exchangeSelect(market: IMarketAsset): void
}

class SearchSelect extends React.Component<IProps> {
  render() {
    const { selected, exchanges, exchange, aggregate, checkAggregate, fetching } = this.props

    const exchangesExist = RA.isNotEmpty(exchanges)
    const Loading = () => <SearchSelectLoader><BlockLoader/></SearchSelectLoader>
    const isStableCoin = usdBaseCurrencyCheck(selected)

    if (isStableCoin) {
      return (
        <div>
          <SearchExchanges
            selected={selected}
            exchange={exchange}
            exchanges={exchanges}
            aggregate={aggregate}
            isStableCoin={isStableCoin}
            enterPosition={this.props.enterPosition}
          />
        </div>
      )
    }

    return (
      <div>
        { fetching
          ? <Loading />
          : exchangesExist
            // Display list of supported exchanges
            ? <SearchExchanges
                selected={selected}
                exchange={exchange}
                exchanges={exchanges}
                checkAggregate={checkAggregate}
                aggregate={aggregate}
                isStableCoin={isStableCoin}
                enterPosition={this.props.enterPosition}
                exchangeSelect={this.props.exchangeSelect}
              />
            // If there are no exchanges, display asset with aggregate price data
            : <SearchSelected selected={selected} /> }
      </div>
    )
  }
}

export const SearchSelectJest = SearchSelect

export default SearchSelect
