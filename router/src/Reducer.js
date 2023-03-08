export const initialState ={
    isAuthenticated:false,
    products:[],
};

export const setReducder =(state, action) => {
    console.log("state",state,"action",action);
    switch(action.type)
{
    case "ADD_TASK":
        return{
            ...state,
            products:action.payload
        };
    case 'priority':

        var updatePriority=[...state.products]
        updatePriority[action.payload.index].priority=action.payload.value
        return{
            ...state,
            products:updatePriority
            
        }
        case 'complete':

        var updateComplete=[...state.products]
        updateComplete[action.payload.index].complete=action.payload.value
        return{
            ...state,
            products:updateComplete
            
        }
        default:
            return state;
}}