import * as images from "./images";
import Popup from "./popUpCard";
import React, { useState } from "react";
import { getDiffDates, formatDate } from "./utility";
const imagess = require.context("./gameimages", true);
function GameRow(props) {
  let data = props.GameInfo;
  const [date, setDate] = useState({
    eventDate: formatDate(data.BS_createon),
    dateDiff: data.BS_datediff,
  });
  const [showPopUp, togglePopUp] = useState(false);
  const hidePopUp = () => {
    togglePopUp(false);
  };

  const onchangeDate = (event) => {
    let dateDiff = getDiffDates(event.target.value);
    if (dateDiff > 0 && props.activeCampaign != "upComingCampaign") {
      props.rescheduleCampaign(
        props.GameInfo.BS_gameid,
        props.activeCampaign,
        "upComingCampaign",
        dateDiff,
        formatDate(event.target.value)
      );
    } else if (dateDiff < 0 && props.activeCampaign != "pastCampaign") {
      props.rescheduleCampaign(
        props.GameInfo.BS_gameid,
        props.activeCampaign,
        "pastCampaign",
        dateDiff,
        formatDate(event.target.value)
      );
    } else if (dateDiff == 0 && props.activeCampaign != "liveCampaign") {
      props.rescheduleCampaign(
        props.GameInfo.BS_gameid,
        props.activeCampaign,
        "liveCampaign",
        dateDiff,
        formatDate(event.target.value)
      );
    } else {
      setDate({
        eventDate: formatDate(event.target.value),
        dateDiff: dateDiff * -1,
      });
    }
  };
  return (
    <>
      <div className="row mlr20 p0 h92 border">
        <div className="col-xs-2 col-sm-2 col-lg-2 pdt16 pdb16 pdl20 pdlr0">
          <div className="date ">{date.eventDate}</div>
          <div className="difftime">
            {props.activeCampaign != "liveCampaign" && date.dateDiff}
            {props.activeCampaign == "pastCampaign" && " Days Ago"}
            {props.activeCampaign == "upComingCampaign" && " Days Ahead"}
            {props.activeCampaign == "liveCampaign" && " Live"}
          </div>
        </div>
        <div className="col-xs-6 col-sm-6 col-lg-4 pdt16 pdb16 pdlr0">
          <div className="dib pr ntop11">
            {" "}
            <img src={`/gameimages/${data.BS_image}.png`} alt="gameimg" />
          </div>
          <div className="dib pl10">
            <div className="date gamename"> {data.BS_name}</div>
            <div className="difftime country"> {data.BS_country}</div>
          </div>
        </div>
        <div
          className="col-xs-4 col-sm-4 col-lg-2 actionstext pdt16 pdtb30 dib p0"
          onClick={(e) => {
            e.preventDefault();
            togglePopUp(true);
          }}
        >
          <span className="pr t7">{images.priceimage} </span>
          View Pricing
        </div>
        <div className="col-xs-12 col-sm-12 col-lg-4 actionstext row pdt16 pdtb30 p0">
          <div className="dib col-sm-3 col-xs-3 col-lg-3">
            <span className="pr t7">{images.fileimage}</span>
            <span> CSV</span>
          </div>
          <div className="dib col-sm-4 col-xs-4 col-lg-4">
            <span className="pr t7">{images.graphimage}</span>
            <span> Report</span>
          </div>
          <div className="dib col-sm-5 col-xs-5 col-lg-5">
            <span className="datepicker-toggle pr t7">
              <span className="datepicker-toggle-button"></span>
              <input
                onChange={onchangeDate}
                type="date"
                className="datepicker-input"
              />
            </span>
            <span> Schedule Again</span>
          </div>
        </div>
      </div>
      {showPopUp && <Popup hidePopUp={hidePopUp} GameInfo={props.GameInfo} />}
    </>
  );
}

export default GameRow;
