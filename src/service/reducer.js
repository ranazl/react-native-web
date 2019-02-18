import { SET_ITEMS,REMOVE_ITEMS, SET_ID, SET_CONTACT,} from "./type";

const initialState = {
  id:0,
  items: [],
  name:''
};


function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_ITEMS:
      return {
        ...state,
        items: [...state.items, {'text' :action.payload , 'id' :state.id}]
      };
//REMOVE

      case SET_ID:
      return {
        ...state,
        id:state.id +1
      };

      case REMOVE_ITEMS:
      return{  
        ...state,
       items : [...state.items.slice(0,action.payload), ...state.items.slice(action.payload +1)]
  
      };
     
      //contact

      case SET_CONTACT:
      return{
        ...state,
        name:(action.payload)
      }

    default:
      return state;
  }
}

export default reducer;

