import logo from './logo.svg';
import './App.css';
import Row from './Row';
import requests from './requests';

function App() {
  return (
    <div className="App">
      <h1> Hey Clever Programmer lets build netflix clone app here</h1>
      <Row title="NETFLIX ORIGINAL" fetchUrl ={requests.fetchNetflixOriginals}/>
      <Row title="Trending Now" fetchUrl = {requests.fetchTrending}/>
      
    </div>
  );
}

export default App;
