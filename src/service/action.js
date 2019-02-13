import { SET_ITEMS, REMOVE_ITEMS, SET_ID,  FETCH_PRODUCTS_BEGIN,FETCH_PRODUCTS_SUCCESS,FETCH_PRODUCTS_FAILURE} from "./type";
import {store} from '../page/App3'


export const fetchProducts =()=> {
  return dispatch => {
    dispatch(fetchProductsBegin());
    return fetch("https://api.github.com/users")
      // .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(fetchProductsSuccess(json));
      })
      .catch(error => dispatch(fetchProductsFailure(error)));
  };
}

const fetchProductsBegin = () => ({
  type: FETCH_PRODUCTS_BEGIN
});

const fetchProductsSuccess = products => {
    return {
      type: FETCH_PRODUCTS_SUCCESS,
      payload:  products 
    }
}


 const fetchProductsFailure = error => ({
  type: FETCH_PRODUCTS_FAILURE,
  payload:  error 
});

//ME

const setItemsAction = input => {
  return {
    type: SET_ITEMS,
    payload: input
  };
};

export const setItems = (input) => {
    // console.warn(input)
    // return dispatch => {
    //     dispatch(setTextAction(input));
    // }
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

    const setItemsID = () => {
      return {
        type: SET_ID,
       
      };
    };
    export const setID = () => {
 
      return setItemsID();
    };


