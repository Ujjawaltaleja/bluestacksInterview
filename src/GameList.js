import GameRow from './GameRow';
import Campaigns from './Campaigns';
export default function ListItem(){
  let date={eventDate:'22-12-2021',dateDiff:'2'};
return(
  <>
  <Campaigns/>
  <div className="gametable">
    <div className="row bggrey m0">
    <div className="col-xs-2 col-sm-2 col-lg-2 p0" >DATE</div>
    <div className="col-xs-6 col-sm-6 col-lg-4 p0" >COMPAIGN</div>
    <div className="col-xs-4 col-sm-4 col-lg-2 p0" >VIEW</div>
    <div className="col-xs-8 col-sm-8 col-lg-4 p0" >ACTIONS</div>
  </div>
  <GameRow Date={date}/>
  </div>
  </>
)
}