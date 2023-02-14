import React, { useContext } from 'react';
import { ACTIONS } from '../config/actions';
import { Context } from './Body';

const NewBottom = () => {
    const [state, dispatch] = useContext(Context);
    function handleClick(e){
        if(!state.isLoading){
            e.preventDefault();
            dispatch({type:ACTIONS.UPDATE_BACKGROUND});
            dispatch({type:ACTIONS.UPDATE_QUOTE});
            setTimeout(
                ()=>dispatch({type:ACTIONS.UPDATE_LOADING_COMPLETE}),
                1500
            );
        }
    }
    return (
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full td-1500"
        onClick={handleClick}
        disabled={state.isLoading}
        id="new-quote"
        >
            <span>New Quote</span>
        </button>
    );
}

export default NewBottom;
