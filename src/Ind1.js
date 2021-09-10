import { useState, useEffect } from "react";
import logo from './sun.png';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import StocksPrice from "./stocksPrice.js"

function Ind1 (){

    const [isLoading, setIsLoading] = useState(true);
    const [isErrMes, setIsErrMes] = useState(false);

    fetch(`https://v6.exchangerate-api.com/v6/c66b883fc02135dc8e3944f8/latest/USD`)
      .then(res=> res.json())
      .then(data=> {
        const valueDollar = data.conversion_rates["TRY"]
        document.getElementById("usdtry").innerHTML = valueDollar.toFixed(2);
        setIsLoading(false);
      })
      .catch(err => {
        setIsLoading(false);
        setIsErrMes(true);
        document.getElementById("usdtry").innerHTML = "Couldn't collect data"
      });
    fetch(`https://v6.exchangerate-api.com/v6/c66b883fc02135dc8e3944f8/latest/EUR`)
      .then(res=> res.json())
      .then(data=> {
        const valueEuro = data.conversion_rates["TRY"];
        document.getElementById("eurtry").innerHTML = valueEuro.toFixed(2);
        setIsLoading(false);
      })
      .catch(err => {
        setIsLoading(false);
        setIsErrMes(true);
        document.getElementById("eurtry").innerHTML = "Couldn't collect data"
      });
    fetch(`https://api.coindesk.com/v1/bpi/currentprice/USD.json`)
      .then(res=> res.json())
      .then(data=> {
        const newValue = data.bpi.USD.rate;
        const newValue2 = newValue.replace(",", "");
        document.getElementById("btcusd").innerHTML = parseInt(newValue2);
        setIsLoading(false);
      })
      .catch(err => {
        setIsLoading(false);
        setIsErrMes(true);
        document.getElementById("btcusd").innerHTML = "Couldn't collect data"
      });
    fetch(`https://api.metals.live/v1/spot`)
      .then(res=> res.json())
      .then(data=> {
        const valueGold = data[0].gold;
        const valuePlatinum = data[1].platinum;
        const valueSilver = data[2].silver;
        const valuePalladium = data[3].palladium;
        document.getElementById("xauusd").innerHTML = parseInt(valueGold);
        document.getElementById("xptusd").innerHTML = parseInt(valuePlatinum);
        document.getElementById("xpdusd").innerHTML = parseInt(valuePalladium);
        document.getElementById("xagusd").innerHTML = valueSilver;
        setIsLoading(false);
      })
      .catch(err => {
        setIsLoading(false);
        setIsErrMes(true);
        document.getElementById("xagusd").innerHTML = "Couldn't collect data"
        document.getElementById("xauusd").innerHTML = "Yeah same problem"
        document.getElementById("xptusd").innerHTML = "Couldn't collect data"
        document.getElementById("xpdusd").innerHTML = "Same problem still"
      });
    fetch(`https://api.finage.co.uk/last/stock/TSLA?apikey=API_KEY33JITWWBCQENLGIMS1CYXXMR2PPTHTEN`)
      .then(res=> res.json())
      .then(data=> {
        document.getElementById("tslausd").innerHTML = parseInt(data.ask)
        setIsLoading(false);
      })
      .catch(err => {
        setIsLoading(false);
        setIsErrMes(true);
        document.getElementById("tslausd").innerHTML = "Couldn't collect data"
      });

/*The reason there are newValue and newValue2 is that inside fetch function, a variable can be declared only once, not possible to update it through self-assignment*/

  return(
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <span>IMPORTANT INDICATORS</span>
      </header>
      <div className="ind1Area">
          <span>Key Financial Morning Indicators</span>
          {isLoading && <div>{"Loading"}</div>}
          {isErrMes && <div>{"Couldn't get data from other websites."}</div>}
          <div>
            <table className="ind1Table">
              <tbody>

                  <tr>
                    <td>1 USD</td>
                    <td id="usdtry"></td>
                    <td>TRY</td>
                  </tr>
                  <tr>
                    <td>1 EUR</td>
                    <td id="eurtry"></td>
                    <td>TRY</td>
                  </tr>
                  <tr>
                    <td>1 Bitcoin</td>
                    <td id="btcusd"></td>
                    <td>USD</td>
                  </tr>
                  <tr>
                    <td>1 Ounce of Platinum</td>
                    <td id="xptusd"></td>
                    <td>USD</td>
                  </tr>
                  <tr>
                    <td>1 Ounce of Gold</td>
                    <td id="xauusd"></td>
                    <td>USD</td>
                  </tr>
                  <tr>
                    <td>1 Ounce of Palladium</td>
                    <td id="xpdusd"></td>
                    <td>USD</td>
                  </tr>
                  <tr>
                    <td>1 Ounce of Silver</td>
                    <td id="xagusd"></td>
                    <td>USD</td>
                  </tr>
                  <tr>
                    <td>1 Share of Tesla</td>
                    <td id="tslausd"></td>
                    <td>USD</td>
                  </tr>
                  <tr>
                    <td><StocksPrice/></td>
                    <td id="stockusd"></td>
                    <td>USD</td>
                  </tr>

              </tbody>
            </table>
          </div>
      </div>

    </div>

  );
}

export default Ind1;
