 import React from 'react';
 import {fetchStreams} from '../../actions';
 import {connect} from 'react-redux';
 import {Link} from 'react-router-dom';
 class streamList extends React.Component{
     componentDidMount(){
         this.props.fetchStreams();
     }
     renderuser(stream){
         if(this.props.currentUserId===stream.userId && stream.userId!==null){
            return (
                <div className="right floated content">
                    <Link className="ui primary button" to ={`/streams/edit/${stream.id}`}>
                       Edit
                    </Link>
                    <Link className="ui negative button" to={`streams/delete/${stream.id}`}>
                       Delete
                    </Link>
                </div>
            )
         }
     }

     renderList(){
    return this.props.streams.map(stream=>{
        return(
            <div className="item" key={stream.id}>
                {this.renderuser(stream)}
              <i className="large middle aligned icon camera"/>
              <div className="content">
        <div className="header">
            <Link to={`/streams/${stream.id}`}>
            {stream.title}
            </Link>
            </div>
     {stream.description}
              </div>
            </div>
        )
    })
}
rendercreate(){
    if(this.props.issingnedin){
      
     return (
         
        <Link to="/streams/new" className="right floated content ui green button">Create new Stream</Link>
        
     )
    }
}

render(){
    return(
        <div>
        <div className="ui celled list">
            <h2>Streams</h2>
           {this.renderList()}
          
        </div>
        <div>
        {this.rendercreate()}
        </div>
        
         </div>
    )
}
 };
 const mapStateToProps=(state)=>{
    return {
        streams:Object.values(state.streams),
        currentUserId:state.auth.userId ,
        issingnedin: state.auth.isSignedIn  
    }
 }
export default connect(mapStateToProps, {fetchStreams})(streamList);