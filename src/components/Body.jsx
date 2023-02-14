import React, { createContext, useReducer } from 'react'
import {getRandomColor} from '../utils/getRandomColors';
import {quoteService} from '../services/quoteServices/quoteService';
import {reducer} from './reducer';

const initialState={
    color: getRandomColor(),
    quote: quoteService.getRandomQuote(),
    isLoading: true,
}

export const Context= createContext(initialState);
export default function Body(props) {
   const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider value={[state,dispatch]}>
      {props.children}
    </Context.Provider>
  )
}
