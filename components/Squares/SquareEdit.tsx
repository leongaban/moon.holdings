import React from 'react'
import { connect } from 'react-redux'
import { bind } from 'decko'

import { SquareRow } from '../../components'
import { updateCoinPortfolio, removeCoinPortfolio, removeCoinWatchlist } from '../../actions/assets'
import { EditSquare, EditSquareData, EditButtonsWatch, EditButtons, EditSquareWatch } from '../../styles'
import { IAsset } from '../../shared/types'
import { colorBlack } from '../../shared/models/squares'
import { styleModifier, setStyle, round, rounder, adjustHEX } from '../../shared/utils'
import styled from 'styled-components'

interface IProps {
  coin: IAsset
  editWatchCoin: boolean
  portfolio: IAsset[]
  toggle(toggle: boolean, coin?: IAsset): void
  updateCoinPortfolio(asset: IAsset): void
  removeCoinPortfolio(asset: IAsset): void
  removeCoinWatchlist(asset: IAsset): void
}

interface IState {
  coin: IAsset
  price: number
  balance: number | string
  value: number
  inPortfolio: boolean
}

class SquareEdit extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)

    const { coin } = this.props
    const { price } = coin
    const value = coin.position !== undefined ? round(coin.position * price) : 0

    this.state = {
      coin,
      price,
      balance: 0,
      value,
      inPortfolio: false
    }
  }

  componentWillMount() {
    const { coin, portfolio } = this.props
    const { balance: stateBalance } = this.state

    const inPortfolio = portfolio && portfolio.filter(c => c.currency === coin.currency)
    const portCoin = inPortfolio[0] ? inPortfolio[0] : coin
    const balance = portCoin.position ? portCoin.position : stateBalance

    this.setState({
      coin: portCoin,
      balance,
      inPortfolio: inPortfolio.length > 0
    })
  }

  render() {
    const { editWatchCoin: isWatch } = this.props
    const { coin, balance, value, inPortfolio } = this.state
    const { currency, exchange, marketCap, percentage, position, price } = coin

    const assetStyles = setStyle(coin.currency)
    const assetColor = assetStyles.color.replace('#','')
    const assetBackground = assetStyles.backgroundColor.replace('#','')
    
    const defaultColor = `#${assetColor}`
    const defaultBackground = `#${assetBackground}`
    const lighterColor = adjustHEX(assetColor, 5)
    const darkerBackground = adjustHEX(assetBackground, -10)
    const buttonBackground = darkerBackground.length < 7 ? defaultBackground : darkerBackground

    const FunctionButton = styled.button`
      color: ${defaultColor};
      border: 1px solid ${lighterColor};
      background: ${buttonBackground};
      transition: all 200ms ease-in-out;
      outline-width: 0;

      &:hover {
        color: ${props => props.theme.offWhite};
        border: 1px solid ${lighterColor};
        -moz-box-shadow:    inset 0 0 20px rgba(255, 255, 255, 0.4);
        -webkit-box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.4);
        box-shadow:         inset 0 0 20px rgba(255, 255, 255, 0.4);
      }

      &:active {
        transition: all 0ms ease-in-out;
      }

      &:disabled {
        cursor: not-allowed;
        -webkit-user-select: text;
        user-select: text;
        opacity: 0.5;
        color: ${props => props.theme.lightGrey};
        border: 1px solid ${props => props.theme.grey};
        background: ${props => props.theme.grey};
      }
    `
    
    const SaveButton = () => <FunctionButton onClick={this.handleSave} disabled={balance <= 0}>Save</FunctionButton>
    const RemoveButton = () => <FunctionButton onClick={this.handleRemove}>Remove</FunctionButton>
    const CancelButton = () => <FunctionButton onClick={() => this.props.toggle(false)}>Cancel</FunctionButton>
    
    const EditSquareWrapper = isWatch ? EditSquareWatch : EditSquare
    const EditButtonsContainer = isWatch ? EditButtonsWatch : EditButtons
    const editSquareStyle = (currency: string, watch: boolean) => !watch ? setStyle(currency) : colorBlack
    const editSquareClass = (currency: string, watch: boolean) => !watch ? styleModifier(currency) : ''
    const editSquareTitle = () => <h3>{ coin.name }</h3>

    return (
      <EditSquareWrapper className={editSquareClass(currency, isWatch)} style={editSquareStyle(currency, isWatch)}>
        <header>
          <h2>{currency}</h2>
          { editSquareTitle() }
        </header>
        {
          isWatch ? null :
            <input
              type="number"
              placeholder=""
              value={this.state.balance}
              onFocus={this.handleFocus}
              onChange={this.handleChange}
            />
        }
        <EditSquareData>
          <SquareRow type={'Price:'} data={price}/>
          <SquareRow type={'Exchange:'} data={exchange}/>
          { isWatch ? null : <SquareRow type={'Position:'} data={position ? position : 0}/> }
          { isWatch ? null : <SquareRow type={'Allocation:'} data={percentage ? percentage : 0}/> }
          { isWatch ? null : <SquareRow type={'Value:'} data={value}/> }
          { isWatch && <SquareRow type={'Marketcap:'} data={marketCap} isWatchlist/> }
        </EditSquareData>
        <EditButtonsContainer>
          { isWatch ? <RemoveButton/> : <SaveButton/> }
          { !isWatch && inPortfolio && <RemoveButton/> }
          <CancelButton/>
        </EditButtonsContainer>
      </EditSquareWrapper>
    )
  }

  @bind
  private handleFocus(event: React.FormEvent<HTMLInputElement>) {
    const target = event.target as HTMLInputElement
    target.select()
  }

  @bind
  private handleChange(event: React.FormEvent<HTMLInputElement>) {
    const target = event.target as HTMLInputElement
    const parsed = parseFloat(target.value)
    const balance = Number.isNaN(parsed) ? '' : parsed
    const value = rounder(Number(balance), this.state.price)
    this.setState({ balance, value })
  }

  @bind
  private handleSave() {
    const { coin, balance: position } = this.state
    const coinValue = coin.value ? coin.value : 0
    const updatedCoin = {
      ...coin,
      position: Number(position),
      value: coinValue * Number(position)
    }
    this.props.updateCoinPortfolio(updatedCoin)
    this.props.toggle(false)
  }

  @bind
  private handleRemove() {
    const { editWatchCoin: isWatch } = this.props
    const { coin } = this.state
    !isWatch ? this.props.removeCoinPortfolio(coin) : this.props.removeCoinWatchlist(coin)
    this.props.toggle(false)
  }
}

const mapDispatchToProps = (dispatch: any) => ({
  updateCoinPortfolio: (coin: IAsset) => dispatch(updateCoinPortfolio(coin)),
  removeCoinPortfolio: (coin: IAsset) => dispatch(removeCoinPortfolio(coin)),
  removeCoinWatchlist: (coin: IAsset) => dispatch(removeCoinWatchlist(coin))
})

export const SquareEditJest = SquareEdit

export default connect(null, mapDispatchToProps)(SquareEdit)
