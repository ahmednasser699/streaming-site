import React from 'react';
import {Link} from 'react-router-dom';
import Googleauth from './googleauth';


const Header =()=>{
     return(
         <div className="ui blue inverted segment">
        <div className="ui inverted secondary menu">
  <Link className="item" to="/"><h1>streamer</h1></Link>
  <div className="right menu">
  <Link className="item" to="/"><h2>all streams</h2></Link>
  </div>
  <div className="right menu">
    <Googleauth />
    <Link className="item" to="/">Help</Link>
  </div>
</div>
</div>
     )
}
export default Header;