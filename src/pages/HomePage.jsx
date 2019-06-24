import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import Pulse from "react-reveal/Pulse";
import Spin from "react-reveal/Spin";
import Fade from "react-reveal/Fade";
import "./styles/HomePage.scss";

import { getCoinsTriggered } from "../redux/actions/getCurrencies";

import CoinsBlock from "../components/CoinsBlock";
import CurrencyButton from "../components/CurrencyButton";

const coinsInfo = [
  {
    url: "https://endotech.io/img/coinicon/BTC.png",
    name: "BTC"
  },
  {
    url: "https://endotech.io/img/coinicon/ETH.png",
    name: "ETH"
  },
  {
    url: "https://endotech.io/img/coinicon/XRP.png",
    name: "XRP"
  }
];

const currencyNames = ["USD", "UAH", "RUB"];

class HomePage extends Component {
  state = {
    selectedCoin: null,
    selectedCurrency: null,
    volume: ""
  };
  componentDidMount() {
    this.props.getCoinsTriggered();
  }

  handleChange = e => {
    this.setState({
      volume: e.target.value
    });
  };

  selectCoin = coin => {
    this.setState({
      selectedCoin: coin
    });
  };

  selectCurrency = currency => {
    this.setState({
      selectedCurrency: currency
    });
  };

  render() {
    const { selectedCoin, selectedCurrency, volume } = this.state;
    let mapCoins = [];
    if (!this.props.isLoading) {
      mapCoins = [
        {
          ...this.props.currencies.BTC,
          ...coinsInfo[0]
        },
        {
          ...this.props.currencies.ETH,
          ...coinsInfo[1]
        },
        {
          ...this.props.currencies.XRP,
          ...coinsInfo[2]
        }
      ];
    }
    return (
      <Fragment>
        <h1>Currency Conversion</h1>
        <div className="currencies-block">
          {mapCoins.map((coin, key) => {
            return (
              <Pulse>
                <CoinsBlock
                  className={
                    coin.name === selectedCoin
                      ? "currency-block-wrapper active-block"
                      : "currency-block-wrapper"
                  }
                  key={key}
                  img_url={coin.url}
                  currName={coin.name}
                  RUB={coin.RUB}
                  USD={coin.USD}
                  UAH={coin.UAH}
                  selectCoin={this.selectCoin}
                />
              </Pulse>
            );
          })}
        </div>
        {selectedCoin && (
          <>
            <Fade top>
              <h2>Selected Coin: {selectedCoin}</h2>
              <div className="volume">
                <label>Volume:</label>
                <input
                  type="number"
                  onChange={this.handleChange}
                  value={volume}
                />
              </div>
            </Fade>
            <Fade bottom>
              <div className="buttons-block">
                {currencyNames.map((currency, key) => {
                  return (
                    <CurrencyButton
                      currName={currency}
                      key={key}
                      selectCurrency={this.selectCurrency}
                      className={
                        selectedCurrency === currency
                          ? "currency-button active"
                          : "currency-button"
                      }
                    />
                  );
                })}
              </div>
            </Fade>
            {selectedCurrency && volume.length > 0 && (
              <Spin>
                <p className="result">
                  <b>{`${volume} ${selectedCoin}`}</b> will be{" "}
                  <b>
                    {(
                      Number(volume) *
                      mapCoins[
                        mapCoins.findIndex(coin => coin.name === selectedCoin)
                      ][selectedCurrency]
                    ).toFixed(2)}
                  </b>
                  &nbsp;in <b>{selectedCurrency}</b>
                </p>
              </Spin>
            )}
          </>
        )}
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.getCoins.isLoading,
  currencies: state.getCoins.data
});

const mapDispatchToProps = dispatch => ({
  getCoinsTriggered() {
    dispatch(getCoinsTriggered());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
