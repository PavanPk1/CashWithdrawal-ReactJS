import {Component} from 'react'
import './index.css'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {
    withdraw: 2000,
  }

  moneyWithdraw = value => {
    this.setState(prevAmt => ({withdraw: prevAmt.withdraw - value}))
  }

  render() {
    const {denominationsList} = this.props
    const {withdraw} = this.state
    return (
      <div className="container">
        <div className="inner-container">
          <div className="depositerNameContainer">
            <p className="logo">S</p>
            <h1 className="heading">Sarah Williams</h1>
          </div>
          <div className="balance-container">
            <p className="balanceHeading">Your Balance</p>
            <div>
              <p className="amount">{withdraw}</p>
              <span>in Rupees</span>
            </div>
          </div>
          <p className="withdraw-head">Withdraw</p>
          <p className="para">CHOOSE SUM (IN RUPEES)</p>
          <ul className="unorderedList">
            {denominationsList.map(data => (
              <DenominationItem
                key={data.id}
                id={data.id}
                value={data.value}
                moneyWithdraw={() => this.moneyWithdraw(data.value)}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
