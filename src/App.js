import React, {useState, useEffect} from 'react';
import alanBtn from '@alan-ai/alan-sdk-web'; 

import NewsCards from './components/NewsCards/NewsCards';

import useStyles from './styles.js';

// const alanLogoSrc = 'https://voicebot.ai/wp-content/uploads/2019/10/alan.jpg';
const alanLogoSrc = 'https://i.ibb.co/jgx6Y7L/Drpsychorider.png';

const alanKey = 'e4cbfdeead191fc2eb8c42d1ff8242212e956eca572e1d8b807a3e2338fdd0dc/stage';
// const App = () => {
    // useEffect (() => {
    //     alanBtn({
    //         key: alanKey,
    //     })
// }, [])

const App = () => {
    const [newsArticles, setNewsArticles] = useState([]);

    const classes = useStyles();
    useEffect ( () => {
        alanBtn({ 
            key: alanKey,
            onCommand: ({command, articles}) => {
                if (command === 'newHeadLines') {
                    setNewsArticles(articles);
                }
                if (command === 'go:back') {
                //call client code that will react to the received command
                }
                
            }
          })
    }, [])
    

    return (
        <div>
            <div className={classes.logoContainer}>
                <img className={classes.alanLogo} alt="alan Logo" src={alanLogoSrc}></img>
            </div>
            <NewsCards articles = {newsArticles}/>
        </div>
    );
}

export default App;
