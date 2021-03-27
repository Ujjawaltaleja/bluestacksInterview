import "./App.css";
import Future from "./header";
import GameList from "./GameList";

export default function App() {
  return (
    <div className="App">
      <Future />
      <div className="Parentcontainer">
        <div className="containerHeading">Manage Campaigns</div>
        <GameList />
      </div>
    </div>
  );
}
