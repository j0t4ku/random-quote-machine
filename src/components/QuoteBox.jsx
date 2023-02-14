import React, { useContext, useEffect, useState } from 'react'
import { FaQuoteLeft } from 'react-icons/fa';
import { ACTIONS } from '../config/actions';
import { Context } from './Body';
import NewBottom from './NewBottom';
import TweetBottom from './TweetBottom';

export default function QuoteBox() {
    const [state, dispatch]= useContext(Context);
    const [quote, setQuote] = useState();
    useEffect(() => {
      state.quote.then((r)=>{
        setQuote(r);
        setTimeout(
            ()=>dispatch({type:ACTIONS.UPDATE_LOADING_COMPLETE}),
            1500
        );
      })
    }, [state]);
    return (
    <div
    className="w-2/4 flex flex-col bg-white p-8 rounded-lg"
    id="quote-box"
    >
        <div className="col-5 text-center align-center">
            <blockquote
            className="text-lg lead font-normal justify-items-center td-1500"
            id="text"
            style={{ color: state.color }}
            >
                <FaQuoteLeft />
                {!state.isLoading && quote?.content}
            </blockquote>
        </div>
        <span
        className="leading-normal text-xs font-normal text-end mb-4 td-1500"
        id="author"
        style={{ color: state.color }}
        >
            - {!state.loading && quote?.author}
        </span>
        <div className="flex justify-between">
            <TweetBottom quote={!state.isLoading && quote? quote : {}}/>
            <NewBottom />
        </div>
    </div>
  )
}
