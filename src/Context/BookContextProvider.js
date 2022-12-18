import React, { createContext,useReducer  } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

export const bookContext = createContext(); // облако
const API = "http://localhost:8000/books";

const INIT_STATE = {
    bookss: null,
    bookDetails: null,
    pageTotalCount: 1,
};
function reducer(prevState, action) {
    switch (action.type) {
      case "GET_PRODUCT":
        return {
          ...prevState,
          book: action.payload.data,
          pageTotalCount: Math.ceil(action.payload.headers["x-total-count"] / 3),
        };
      case "GET_ONE_PRODUCT":
        return { ...prevState, foodDetails: action.payload };
      default:
        return prevState;
    }
  }

const BookContextProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE);
    const location = useLocation();

      // create book
  async function addBook(newBook) {
    try {
      await axios.post(API, newBook);
    } catch (error) {
      console.log(error);
      return;
    }
    }
    
      // read book
  async function readBook() {
    console.log("reading Book");
    const res = await axios(`${API}${location.search}`);
    dispatch({
      type: "GET_PRODUCT",
      payload: res,
    });
  }

    // read one book
    async function readOneBook(id) {
      const { data } = await axios(`${API}/${id}`);
      dispatch({
        type: "GET_ONE_PRODUCT",
        payload: data,
      });
    }

    let cloud = {
        addBook,
        readBook,
        booksArr: state.book
      };
    
      return (
        <bookContext.Provider value={cloud}>{props.children}</bookContext.Provider>
      );
    };
    
    export default BookContextProvider;