export const getDiffDates = (date) => {
  let today = new Date();
  today = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  let tom = new Date(date);
  tom = new Date(tom.getFullYear(), tom.getMonth(), tom.getDate());
  let diff = (tom - today) / (24 * 3600 * 1000);
  return diff;
};

export const formatDate = (date) => {
  date = new Date(date);
  let shortMonth = date.toLocaleString("en-us", { month: "short" });
  let formattedDate =
    shortMonth + " " + date.getFullYear() + "," + date.getDate();
  return formattedDate;
};

export const serviceParser = (data) => {
  let upComingCampaign = [];
  let liveCampaign = [];
  let pastCampaign = [];
  let err = "";
  let AllGames = data["topGames"];
  AllGames.forEach((element) => {
    let diff = getDiffDates(element.BS_createon);
    if (diff > 0) {
      element["BS_datediff"] = diff;
      upComingCampaign.push(element);
    } else if (diff < 0) {
      element["BS_datediff"] = diff * -1;
      pastCampaign.push(element);
    } else {
      element["BS_datediff"] = diff;
      liveCampaign.push(element);
    }
  });
  let activeCampaign = {
    activeCampaign: "upComingCampaign",
    upComingCampaign: upComingCampaign,
    liveCampaign: liveCampaign,
    pastCampaign: pastCampaign,
    err: err,
  };
  return activeCampaign;
};
