const INITIAL_STATE ={
    isSignedIn : null,
    userId:null
};

const authreducer =(state = INITIAL_STATE, action) => {
       switch (action.type) {
           case 'sign_in':
               return {...state, isSignedIn:true, userId:action.payload}
            case 'sign_out':   
                return {...state, isSignedIn:false, userId:null}
           default:
               return state
       };
};
export default authreducer;