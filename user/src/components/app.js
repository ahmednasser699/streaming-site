import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import Streamedit from './screens/streamedit';
import Streamnew from './screens/streamnew';
import Streamshow from './screens/streamshow';
import Streamdelete from './screens/streamdelete';
import Streamlist from './screens/streamlist';
import Header from './header';
import history from '../history';



const App =()=>{
   
        return(
            <div className="ui container">
              
           <Router history={history}>
             <div>
             <Header/>
             <Switch>
                 <Route path="/" exact component={Streamlist}/>
                 <Route path="/streams/new" exact component={Streamnew}/> 
                 <Route path="/streams/:id" exact component={Streamshow}/>
                 <Route path="/streams/edit/:id" exact component={Streamedit}/>
                 <Route path="/streams/delete/:id" exact component={Streamdelete}/>
             </Switch>
             </div>
           </Router>
           </div>
        )
    
}
export default App;