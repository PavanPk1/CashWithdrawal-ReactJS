import './index.css'

const DenominationItem = props => {
  const {id, value, moneyWithdraw} = props
  return (
    <li>
      <button
        className="btnContainer"
        onClick={moneyWithdraw}
        key={id}
        type="button"
      >
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
