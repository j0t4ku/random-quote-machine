import React, { useContext } from 'react';
import { Context } from './Body';
import PropTypes from "prop-types";
import { FaTwitter } from 'react-icons/fa';

const TweetBottom = ({quote}) => {
    const [state] = useContext(Context);
    
    const getTweetUrl= (content, author)=>{
        let tUrl="https://www.twitter.com/intent/tweet?";
        const query= {
            hashtags: "quotes",
            related: "j0t4ku",
            text:`${content} - ${author}`
        }
        for(let [key, value] of Object.entries(query)){
            tUrl += `${key}=${value}&`
        }
        return tUrl;
    };

    return (
        <a href={getTweetUrl(quote.content,quote.author)}
        className="btn text-white rounded-xl td-1500"
        id="tweet-quote"
        target="_blank"
        rel="noopener noreferrer"
        >
            <FaTwitter className='text-black text-2xl'/>
        </a>
    );
}

TweetBottom.propTypes = {
    quote : PropTypes.shape({
        content:PropTypes.string,
        author:PropTypes.string,
    }),
};
export default TweetBottom;
