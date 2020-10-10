import React from 'react';
import SignIn from './components/sign-in/sign-in.component';
import { Link, Switch, Route } from 'react-router-dom';
// import Particles from 'react-particles-js';

import MapBox from './components/map-box/mapbox.component';

import './App.css';


// const particleOptions = {
//   particles: {
//     number: {
//       value: 50,
//       density: {
//         enable: true,
//         value_area: 800
//       }
//     }
//   }
// }

class App extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        {/* <Particles params={particleOptions} className='particles' /> */}
        <Switch>
          <Route exact path='/' component={SignIn} />
          <Route exact path='/map' component={MapBox} />
        </Switch>
      </div>

    )
  }
}

export default App;
