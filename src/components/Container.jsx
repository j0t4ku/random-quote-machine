import React, { useContext, useEffect } from 'react'
import {ACTIONS} from '../config/actions.js'
import { Context } from './Body.jsx';

function Container(props) {
  const [state,dispatch] = useContext(Context)
  useEffect(() => {
    setTimeout(dispatch({type:ACTIONS.UPDATE_BACKGROUND }),1000);
  }, []);
  return (
    <div 
    className="min-w-full min-h-screen flex flex-col justify-center items-center"
    style={{backgroundColor:state.color? state.color : "#fff" }}
    >
        {props.children}
    </div>
  )
}

export default Container