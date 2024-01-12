// Write your JS code here

import './index.css'

//  currencyLogo, currencyName, euroValue, id, usdValue,

const CryptocurrencyItem = props => {
  const {each} = props
  const {currencyLogo, currencyName, euroValue, usdValue} = each
  return (
    <li className="cryptocurrency-item-card">
      <div className="cryptocurrency-item-logo-card">
        <img
          className="cryptocurrency-item-logo-img"
          src={currencyLogo}
          alt={currencyName}
        />
        <p className="cryptocurrency-item-logo-cardcoins-type-text">
          {currencyName}
        </p>
      </div>
      <div className="cryptocurrency-item-coins-type-usd-euro-card">
        <p className="cryptocurrency-item-coins-type-usd-text">{usdValue}</p>
        <p className="cryptocurrency-item-coins-type-euro-text">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
