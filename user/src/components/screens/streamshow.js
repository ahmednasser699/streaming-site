import React from 'react';
import {showStream} from '../../actions';
import {connect} from 'react-redux';
class Streamshow extends React.Component{
    componentDidMount(){
       this.props.showStream(this.props.match.params.id)
    }
    render(){
        if(!this.props.stream){
            return null;
        }
        return(
            <div>
                <div className="header">{this.props.stream.title}</div>
        <div className="content">{this.props.stream.description}</div>
            </div>
        )
    }
}
const mapStateToProps=(state, ownProps)=>{
     return {stream:state.streams[ownProps.match.params.id]}
}
export default connect(mapStateToProps, {showStream})(Streamshow)