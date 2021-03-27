function PopUp(props) {
  let data = props.GameInfo;
  return (
    <div className="popup">
      <div className="headerpopup">
        <div className="dib ">
          <img
            className="popupimg"
            src={`/gameimages/${data.BS_zoomimage}.png`}
            alt="gameimg"
          />
        </div>
        <div className="dib poa pl10 b0">
          <div className="date gamename"> {data.BS_name}</div>
          <div className="difftime country pdt14"> {data.BS_country}</div>
        </div>
      </div>
      <div className="popupPricing">Pricing</div>
      <div className="pricerow">
        <span className="popupDuration">1 Week - 1 Month</span>
        <span className="popupPrice">$ {data.BS_priceweek}</span>
      </div>
      <div className="pricerow">
        <span className="popupDuration">6 Months</span>
        <span className="popupPrice">$ {data.BS_pricemonth}</span>
      </div>
      <div className="pricerow">
        <span className="popupDuration">1 Year</span>
        <span className="popupPrice">$ {data.BS_priceyear}</span>
      </div>

      <button
        className="closebutton"
        onClick={(e) => {
          e.preventDefault();
          props.hidePopUp();
        }}
      >
        Close
      </button>
    </div>
  );
}

export default PopUp;
