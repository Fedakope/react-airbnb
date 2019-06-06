import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Flat from './components/flat';
import GoogleMapReact from 'google-map-react';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flats: []
    };
  }

  componentDidMount() {
    const url = "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/flats.json"
    fetch(url)
      .then(response => response.json())
      .then((data) => {
        this.setState({
          flats: data
        });
      })

  };



  render () {
      const center = {
    lat: 48.8566,
    lng: 2.3522,
  }


    return (
      <div className="app">
        <div className="main">
          <div className="search">
          <input 
          type="text"
          placeholder="Rechercher..."
          value={this.state.search}
          onChange={this.handleSearch} />
          </div>
          <div className="flats">
            {this.state.flats.map(function(flat) {
              return <Flat flat={flat} />
            })}
          </div>
        </div>
        <div className="map">
         <GoogleMapReact
           //  bootstrapURLKeys={{ key: "AIzaSyDG2OHW4fT4dkUVhNFge_jgLDfsbizPhu0" }}
            center={center}
            zoom={12}
          >

          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <h1> Hello tarass </h1>
//     </div>
//   );
// }

export default App;
