import api from '../apis/streamsapi';
import history from '../history';

export const signIn =(userId)=>{
    return{
        type:'sign_in',
        payload: userId
    }
};

export const signOut =()=>{
    return {
        type:'sign_out'
    }
};

export const streamsCreate=(values)=>{
     return async(dispatch, getState)=>{
         const {userId} = getState().auth
        const response =await api.post('/streams',{ ...values, userId});
        dispatch({
            type:'create',
            payload: response.data
        })
        history.push('/');
     }
};

export const fetchStreams = (values)=>async dispatch=>{
     const response = await api.get('/streams');
     dispatch({
         type:'streamlist',
         payload:response.data
     })
};

export const showStream = (id)=>async dispatch =>{
   const response = await api.get(`/streams/${id}`);
   dispatch({
       type:'show',
       payload:response.data
   })

};

export const editStream=(id, values)=>async dispatch=>{
     const response = await api.patch(`/streams/${id}`, values);
     dispatch({
         type:'edit',
         payload:response.data
     });
     history.push('/');
};

export const deleteStream = (id)=> async dispatch =>{
    await api.delete(`streams/${id}`);
    dispatch({
        type:'delete',
        payload:id
    });
    history.push('/')
}
