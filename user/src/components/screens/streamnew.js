import React from 'react';
import StreamForm from './streamForm';
import {connect} from 'react-redux';
import {streamsCreate} from '../../actions';

class Streamnew extends React.Component{
   
   
    onSubmit=(values)=>{
      this.props.streamsCreate(values)
    }
    
    render(){
        return(
            <StreamForm onSubmit={this.onSubmit}/>
        )
    }
}


export default connect(null, {streamsCreate})(Streamnew)
 