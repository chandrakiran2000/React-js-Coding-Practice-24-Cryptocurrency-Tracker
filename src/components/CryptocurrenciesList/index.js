// Write your JS code here

import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

//  https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png

class CryptocurrenciesList extends Component {
  state = {ApiData: [], isLoading: true}

  componentDidMount() {
    this.getDataFromApi()
  }

  getDataFromApi = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    //  console.log(data)
    const updatedData = data.map(each => ({
      currencyLogo: each.currency_logo,
      currencyName: each.currency_name,
      euroValue: each.euro_value,
      id: each.id,
      usdValue: each.usd_value,
    }))
    //  console.log(updatedData)
    this.setState({ApiData: updatedData, isLoading: false})
  }

  getAllCurrency = () => {
    const {ApiData} = this.state
    return (
      <div className="cryptocurrencies-list-card">
        <h1 className="cryptocurrencies-list-heading">
          Cryptocurrency Tracker
        </h1>
        <img
          className="currency-img"
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
        />
        <div className="coins-type-heading-card">
          <div className="coins-type-card">
            <p className="coins-type-text">Coins Type</p>
            <div className="coins-type-usd-euro-card">
              <p className="coins-type-usd-text">USD</p>
              <p className="coins-type-euro-text">EURO</p>
            </div>
          </div>
          <ul className="lists-card">
            {ApiData.map(each => (
              <CryptocurrencyItem each={each} key={each.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          this.getAllCurrency()
        )}
      </div>
    )
  }
}

export default CryptocurrenciesList
