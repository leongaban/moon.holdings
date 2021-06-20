import React from 'react'
import { connect } from 'react-redux'
import { bind } from 'decko'

import { IinitialState, IAsset } from '../../shared/types'
import { PortfolioBalance } from '../../styles'
import { calculateBalance, numberWithCommas as commas, nFormatter as decimals } from '../../shared/utils/math'

interface IState {
  balance: number,
  base: string
}

interface IProps {
  bitcoin: IAsset | undefined,
  portfolio: IAsset[]
}

class Balance extends React.PureComponent<IProps, IState> {
  constructor(props: IProps) {
    super(props)

    this.state = {
      balance: 0,
      base: 'usd'
    }
  }

  static getDerivedStateFromProps(nextProps: IProps, prevState: IState) {
    const { base } = prevState

    if (nextProps.bitcoin && nextProps.portfolio) {
      const { bitcoin, portfolio } = nextProps
      const calculatedBalance = Number(calculateBalance(portfolio))

      return {
        balance: base === 'usd' ? calculatedBalance : calculatedBalance / bitcoin.price
      };
    }

    else return prevState;
  }

  @bind
  private handleToggleCurrency() {
    this.setState({
      base: this.state.base === 'usd' ? 'btc' : 'usd' 
    })
  }

  public render() {
    const { balance, base } = this.state

    return (
      <PortfolioBalance onClick={this.handleToggleCurrency}>
        { balance > 0 && base === 'usd' ? `$${commas(balance)}` : `฿${decimals(balance, 8)}` }
      </PortfolioBalance>
    )
  }
}

const mapStateToProps = (state: IinitialState) => ({
  bitcoin: state.AssetsReducer.assets.find(({currency}) => currency === 'BTC'),
  portfolio: state.AssetsReducer.portfolio
})

export const BalanceJest = Balance

export default connect(mapStateToProps, null)(Balance)
