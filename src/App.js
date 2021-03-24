import './App.css';
import Future from './header';
import GameList from './GameList';
import React  from 'react';
import {serviceParser} from './utility';

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      activeCampaign:'upComing',
      upComingCampaign:[],
      liveCampaign:[],
      pastCampaign:[],
      err:'',
    }
  }
  componentWillMount(){
    fetch("https://reqres.in/api/users?page=2")
    .then(res => {
      // let parsedRes=serviceParser(res);
      // this.setState({parsedRes});
      
    console.log(JSON.parse(res));

  },err=>{
    this.setState({err:'no data found'});
  }
    );
  }
  render(){
  return (
    <div className="App">
      <Future/>
      <div className="Parentcontainer">
        <div className='containerHeading'>
        Manage Campaigns
        </div>
        <GameList/>
        </div>
    </div>
  );
  }
}


