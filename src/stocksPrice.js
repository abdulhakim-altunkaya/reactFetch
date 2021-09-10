import { useState } from "react";

function StocksPrice (){
  const [isLoading, setIsLoading] = useState(false);
  const [isErrMessage, setIsErrMessage] = useState(false);
  const [selectedStock, setSelectedStock] = useState("");
  const showPrice = (e)=>{
    setIsLoading(true);
    e.preventDefault();
    fetch(`http://api.marketstack.com/v1/eod?access_key=a53cd8c65971114dd72fbb974c9e9ea0&symbols=${selectedStock}&limit=1`)
      .then(res=> {
        if (!res.ok) {
          throw Error("No data/Wrong name")
        }
        return res.json()
      })
      .then(results=> {
        e.preventDefault();
        const myPrice = results.data[0].close;
        document.getElementById("stockusd").innerHTML = myPrice;
        setIsLoading(false);
      })
      .catch(err => {
        setIsErrMessage(true);
        setIsErrMessage(err.message);
        setIsLoading(false);
      })
  }

  return(
        <div className="dropdownStocks" id="dropdownStocks">
          <input list="stocksList"
            name="stocksListLabel"
            class="stocksListBar"
            placeholder="See stock prices"
            value={selectedStock}
            onChange={(e)=>setSelectedStock(e.target.value)}/>
          <datalist id="stocksList" class="datalist">
            <option value="ATVI">Activision Blizzard</option>
            <option value="ADBE">Adobe</option>
            <option value="AMD">Advanced Micro Devices</option>
            <option value="ALGN">Align Technology</option>
            <option value="GOOGL">Google Alphabet</option>
            <option value="AMZN">Amazon</option>
            <option value="AEP">American Electric Power Company</option>
            <option value="AMGN">Amgen</option>
            <option value="ADI">Analog Devices</option>
            <option value="ANSS">ANSYS</option>
            <option value="AMAT">Applied Materials</option>
            <option value="AAPL">Apple</option>
            <option value="ASML">ASML Holding</option>
            <option value="TEAM">Atlassian Corp</option>
            <option value="ADSK">Autodesk</option>
            <option value="ADP">Automatic Data Processing</option>
            <option value="BIDU">Baidu</option>
            <option value="BIIB">Biogen</option>
            <option value="BKNG">Booking</option>
            <option value="AVGO">Broadcom</option>
            <option value="CDNS">Cadence Design Systems</option>
            <option value="CDW">CDW Corp</option>
            <option value="CERN">Cerner Corp</option>
            <option value="CHTR">Charter Communications</option>
            <option value="CHKP">Check Point Software</option>
            <option value="CTAS">Cintas Corp</option>
            <option value="CSCO">Cisco Systems</option>
            <option value="CTSH">Cognizant</option>
            <option value="CMCSA">Comcast Corp</option>
            <option value="CPRT">Copart</option>
            <option value="COST">Costco</option>
            <option value="CSX">CSX Corp</option>
            <option value="DXCM">DexCom</option>
            <option value="DOCU">DocuSign</option>
            <option value="DLTR">Dollar Tree</option>
            <option value="EBAY">eBay</option>
            <option value="EA">Electronic Arts</option>
            <option value="EXC">Exelon Corp</option>
            <option value="FB">Facebook</option>
            <option value="FAST">Fastenal</option>
            <option value="FISV">Fiserv</option>
            <option value="FOX">Fox Corp</option>
            <option value="GILD">Gilead</option>
            <option value="HON">Honeywell</option>
            <option value="IDXX">IDEXX</option>
            <option value="ILMN">Illumina</option>
            <option value="INCY">Incyte Corp</option>
            <option value="INTC">Intel</option>
            <option value="INTU">Intuit</option>
            <option value="ISRG">Intuitive Surgical</option>
            <option value="JD">JD</option>
            <option value="KDP">Dr Pepper</option>
            <option value="KLAC">KLA Corp</option>
            <option value="LRCX">Lam Research</option>
            <option value="LULU">Lululemon</option>
            <option value="MAR">Marriott</option>
            <option value="MRVL">Marvell</option>
            <option value="MTCH">Match Group</option>
            <option value="MELI">MercadoLibre</option>
            <option value="MCHP">Microchip Tech</option>
            <option value="MU">Micron Tech</option>
            <option value="MSFT">Microsoft</option>
            <option value="MRNA">Moderna</option>
            <option value="MDLZ">Mondelez</option>
            <option value="MNST">Monster Beverage</option>
            <option value="NTES">NetEase</option>
            <option value="NFLX">Netflix</option>
            <option value="NVDA">NVIDIA</option>
            <option value="NXPI">NXP Semiconductors</option>
            <option value="OKTA">Okta</option>
            <option value="ORLY">O'Reilly Automotive</option>
            <option value="PCAR">PACCAR</option>
            <option value="PAYX">Paychex</option>
            <option value="PYPL">PayPal</option>
            <option value="PTON">Peloton</option>
            <option value="PEP">Pepsi</option>
            <option value="PDD">Pinduoduo</option>
            <option value="QCOM">QUALCOMM</option>
            <option value="REGN">Regeneron</option>
            <option value="ROST">Ross Stores</option>
            <option value="SGEN">Seattle Genetics</option>
            <option value="SIRI">Sirius XM</option>
            <option value="SKWS">Skyworks Solutions</option>
            <option value="SPLK">Splunk</option>
            <option value="SBUX">Starbucks</option>
            <option value="SNPS">Synopsys</option>
            <option value="TSLA">Tesla</option>
            <option value="TXN">Texas Instruments</option>
            <option value="KHC">Kraft Heinz</option>
            <option value="TMUS">T-Mobile</option>
            <option value="TCOM">Trip.com</option>
            <option value="VRSN">VeriSign</option>
            <option value="VRSK">Verisk Analytics</option>
            <option value="VRTX">Vertex Pharmaceuticals</option>
            <option value="WBA">Walgreens Boots</option>
            <option value="WDAY">Workday</option>
            <option value="XEL">Xcel Energy</option>
            <option value="XLNX">Xilinx</option>
            <option value="ZM">Zoom</option>
          </datalist>
          <button type="button" className="investmentButton" onClick={showPrice} id="calculateBtn">SEE PRICE</button>
          {isLoading && <span>Loading...</span>}
          {isErrMessage && <span style={{fontSize: "12px"}}>{isErrMessage}</span>}
        </div>
  );
}

export default StocksPrice;
