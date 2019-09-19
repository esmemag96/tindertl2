import React from 'react';
import logo from './images/tindertlFull.png';

class AppHeader extends React.Component {
  render() {
    return(
      <div>
        <img id="logoFull" src={logo} alt="Logo didn't load :("></img>

      </div>
    );
  }
}
export default AppHeader

/*
Referencias
https://stackoverflow.com/questions/1484506/random-color-generator
*/
