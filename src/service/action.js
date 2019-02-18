import { SET_ITEMS, REMOVE_ITEMS, SET_ID, SET_CONTACT,} from "./type";


const setItemsAction = input => {
  return {
    type: SET_ITEMS,
    payload: input
  };
};

export const setItems = (input) => {
    return setItemsAction(input);
  };


//REMOVE
  const setItemsRemove = index => {
    return {
      type: REMOVE_ITEMS,
      payload: index
    };
  };
  
  export const setDelete = (index) => {
 
      return setItemsRemove(index);
    };

 export   const setItemsID = () => {
      return {
        type: SET_ID,
       
      };
    };
    export const setID = () => {
 
      return setItemsID();
    };
//contact
    const setItemsContact = (name) => {
      return {
        type: SET_CONTACT,
        payload: name
      };
    };
    
    export const setContact = (name) => {
        return setItemsContact(name);
      };


