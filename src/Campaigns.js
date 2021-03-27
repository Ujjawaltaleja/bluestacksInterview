function Campaigns(props) {
  return (
    <div className="campaignlist">
      <div
        className={
          props.activeCampaign == "upComingCampaign"
            ? "dib compaign selectedcompaign "
            : "dib compaign"
        }
        onClick={(e) => {
          e.preventDefault();
          props.changeCampaign("upComingCampaign");
        }}
      >
        Upcoming Compaigns
      </div>
      <div
        className={
          props.activeCampaign == "liveCampaign"
            ? "dib compaign selectedcompaign "
            : "dib compaign"
        }
        onClick={(e) => {
          e.preventDefault();
          props.changeCampaign("liveCampaign");
        }}
      >
        Live Compaigns
      </div>
      <div
        className={
          props.activeCampaign == "pastCampaign"
            ? "dib compaign selectedcompaign "
            : "dib compaign"
        }
        onClick={(e) => {
          e.preventDefault();
          props.changeCampaign("pastCampaign");
        }}
      >
        Past Compaigns
      </div>
    </div>
  );
}

export default Campaigns;
