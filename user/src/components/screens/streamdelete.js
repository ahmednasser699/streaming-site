import React from 'react';
import Modal from '../modal';
import history from '../../history';
import StreamList from './streamlist';
import {connect } from 'react-redux';
import {showStream, deleteStream} from '../../actions';
import {Link} from 'react-router-dom';

class StreamDelete extends React.Component{
    componentDidMount(){
        this.props.showStream(this.props.match.params.id)
    }
    actions(){
        return(
           <>
              <button onClick={()=>this.props.deleteStream(this.props.stream.id)} className="ui button negative">Delete</button>
              <Link to="/" className="ui button">Cancel</Link>
           </>
        )}
    ;
    render(){
        if(!this.props.stream){
            return <div>loading...</div>
        }
        return(
        <div>
           <StreamList/>
            <Modal title='Delete Stream' 
            content={<text is="" style={{color:'red', fontWeight:'bold', fontSize:'20px'}}>{this.props.stream.title}</text>} 
             actions={this.actions()} 
             onDismiss={()=>history.push('/')}/>
        </div>
        )}
}

const mapStateToProps=(state, ownProps)=>{
    return {stream: state.streams[ownProps.match.params.id]}
}
export default connect(mapStateToProps, {showStream, deleteStream})(StreamDelete)