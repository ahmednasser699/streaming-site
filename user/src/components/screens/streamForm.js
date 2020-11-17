import React from 'react';
import {Field, reduxForm} from 'redux-form';



class streamnew extends React.Component{
   
    rederInput=({input, label, placeholder, meta})=>{
        const classname = `field six wide ${meta.error && meta.touched?'error':''}`
        return(
            <div className={classname}> 
              <label>{label}</label>
              <input {...input} placeholder={placeholder}/>
              {this.renderError(meta)}
           </div>        
        )
    }
    renderError({error, touched}){
        if(error && touched){
           return(
               <div className="ui error message">
                   <div className="header">{error}</div>
               </div>
           )
        }
    }
    onSubmit=(values)=>{
      this.props.onSubmit(values)
    }
    
    render(){
        
    return(
       
        <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
           <Field name="title" component={this.rederInput} label="enter title" placeholder="title"/>
           <Field name="description" component={this.rederInput} label="enter description" placeholder="description"/>
           <button className="ui button primary">submit</button>
        </form>
    )}
}
const validate=(values)=>{
   let error={};
   if(!values.title){
       error.title='you must enter a title!'
   } if(!values.description){
       error.description='you must enter a description!'
   }
   return error;
}
export default reduxForm({
    form: 'streamCreate',
    validate
})(streamnew);
