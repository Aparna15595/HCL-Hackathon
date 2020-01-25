import React from 'react';
import './App.css';
import Logo from './bkg.jpg';
import SearchBar from './Components/SearchBar';
import Navigation from './Components/Navigation';

class App extends React.Component {
render(){
return (  
  <div className="home">
    <div className="container">
      <nav>
      <div className="row">
  <div className="col-sm-6 text-left">
    <label class="title">Hotel Management</label>
  </div>
  <div className="col-sm-6 text-right">
  <Navigation/> 
  </div>
      </div>
      </nav>
      <div className="banner">
        <img src={Logo} />
      <SearchBar />
      </div>
    </div>
  </div>
      
 
)
};
}

export default App;
