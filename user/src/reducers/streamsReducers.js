import _ from 'lodash';

const streamsReducer = (state ={}, action)=>{
     switch (action.type) {
         case 'streamlist':
             return {...state, ..._.mapKeys(action.payload, 'id')}
         case 'show':
             return {...state, [action.payload.id]:action.payload};
         case 'edit':
             return {...state, [action.payload.id]:action.payload};    
         case 'create':
             return {...state, [action.payload.id]:action.payload};    
         case 'delete':
             return _.omit(state, action.payload);  
         default:
             return state;
     }
};
export default streamsReducer;