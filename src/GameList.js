import GameRow from "./GameRow";
import { useState } from "react";
import Campaigns from "./Campaigns";
import { serviceParser } from "./utility";
export default function ListItem() {
  const [state, setState] = useState({
    activeCampaign: "upComingCampaign",
    upComingCampaign: [],
    liveCampaign: [],
    pastCampaign: [],
    err: "",
    dataFetched: false,
  });
  const changeCampaign = (ActiveCampaign) => {
    setState({
      ...state,
      ...{
        activeCampaign: ActiveCampaign,
      },
    });
  };
  const url =
    "https://script.googleusercontent.com/macros/echo?user_content_key=XAip3LKZq73qJGAkVVRYJ8Vvcw2APFLMieIzvi8GSmkfbLb43Ym4TdZEAz9Pp0Hn10gtdraF9lJ7B74IbGTbGSPgDq_394bom5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnCxAjIlWvUX45KzzEjeoEeVvgOAIhf_2Shpo5V6zLrS-VD1QuIGmDaEsEhA72Mog3eWP9Ku45xX9Yd6_6_6YKa-BYbJcDcf1Btz9Jw9Md8uu&lib=MInZPmniO9MZxPS0OzA_R5fZRxDZl70MQ";
  if (
    state.upComingCampaign.length == 0 &&
    state.liveCampaign.length == 0 &&
    state.pastCampaign.length == 0 &&
    !state.dataFetched
  ) {
    setState({
      ...state,
      ...{
        dataFetched: true,
      },
    });
    fetch(url)
      .then((resp) => resp.json())
      .then(function (data) {
        let parsedData = serviceParser(data);
        setState(parsedData);
      })
      .catch(function (error) {
        setState({ err: "no data found" });
      });
  }
  let date = { eventDate: "22-12-2021", dateDiff: "2" };
  let rescheduleCampaign = (id, remfrom, addto, dateDiff, createdOn) => {
    if (remfrom != addto) {
      let addToCampaign = JSON.parse(JSON.stringify(state[addto]));
      let filteredArray = state[remfrom].filter((ele) => {
        if (ele.BS_gameid == id) {
          ele.BS_datediff = dateDiff;
          ele.BS_createon = createdOn;
          addToCampaign.push(ele);
          return false;
        } else {
          return true;
        }
      });
      let newState = {};
      if (remfrom == "upComingCampaign") {
        newState = {
          ...state,
          ...{
            upComingCampaign: filteredArray,
          },
        };
      } else if (remfrom == "pastCampaign") {
        newState = {
          ...state,
          ...{
            pastCampaign: filteredArray,
          },
        };
      } else {
        newState = {
          ...state,
          ...{
            liveCampaign: filteredArray,
          },
        };
      }
      if (addto == "upComingCampaign") {
        newState = {
          ...newState,
          ...{
            upComingCampaign: addToCampaign,
          },
        };
      } else if (addto == "pastCampaign") {
        newState = {
          ...newState,
          ...{
            pastCampaign: addToCampaign,
          },
        };
      } else {
        newState = {
          ...newState,
          ...{
            liveCampaign: addToCampaign,
          },
        };
      }
      setState(newState);
    }
  };
  return (
    <>
      <Campaigns
        activeCampaign={state.activeCampaign}
        changeCampaign={changeCampaign}
      />
      <div className="gametable">
        <div className="row bggrey m0">
          <div className="col-xs-2 col-sm-2 col-lg-2 p0">DATE</div>
          <div className="col-xs-6 col-sm-6 col-lg-4 p0">COMPAIGN</div>
          <div className="col-xs-4 col-sm-4 col-lg-2 p0">VIEW</div>
          <div className="col-xs-8 col-sm-8 col-lg-4 p0">ACTIONS</div>
        </div>
        {state[state.activeCampaign].length > 0 &&
          state[state.activeCampaign].map((AGameInfo, index) => (
            <GameRow
              rescheduleCampaign={rescheduleCampaign}
              activeCampaign={state.activeCampaign}
              GameInfo={AGameInfo}
              Date={date}
              key={index}
            />
          ))}
      </div>
    </>
  );
}
