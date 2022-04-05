import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeImagesSmaller } from '../utils';

import styled from 'styled-components';
import { motion } from 'framer-motion';

import { useSelector } from 'react-redux';

//Images
import nintendo from '../img/nintendo.jpg';
import playstation from '../img/playstation.jpeg';
import xbox from '../img/xbox.png';
import pc from '../img/pc.png';
import apple from '../img/apple.png';
import gamepad from '../img/gamepad.png';


const GameDetail = ({pathId}) => {
    const history = useHistory();

    //get platforms
    const getPlatforms = (platform) => {
        switch(platform) {
            case 'PlayStation 4' || 'PlayStation 5':
                return playstation;
            case 'Xbox Series S/X' || 'Xbox One':
                return xbox;
            case 'PC':
                return pc;
            case 'Nintendo Switch':
                return nintendo;
            case 'iOS':
                return apple;
            default: return gamepad;
        }
    }

    //Exit detail screen
    const exitDetail = (e) => {
        const element = e.target;
        console.log(element);
        if(element.classList.contains('shadow')) {
            document.body.style.overflow = 'auto';
            history.push('/')
        }

    }
    //Data
    const {screen, game, isLoading} = useSelector((state) => state.detail);

    return (
     <>
     {!isLoading && (
    <CardShadow className='shadow' onClick={exitDetail}>
       <Detail layoutId={pathId}>
           <Stats>
               <div className="rating">
                 <motion.h3 layoutId={`title ${pathId}`}>{game.name}</motion.h3>
                 <p>Rating: {game.rating}</p>  
                </div>
                <Info>
                    <h3>Platforms</h3>
                    <Platforms>
                        {game.platforms.map(data => (
                            <img key={data.platform.id}
                            src={getPlatforms(data.platform.name)}
                            ></img>
                        ))}
                    </Platforms>
                </Info>
            </Stats>
            <Media>
                <motion.img
                layoutId={`image ${pathId}`} 
                src={makeImagesSmaller(game.background_image, 1280)} alt={screen.id} />
            </Media>
            <Description>
               <p>{game.description_raw}</p> 
            </Description>
            <div className="gallery">
                {screen.results.map(screen => (
                    <img src={makeImagesSmaller(screen.image, 1280)} key={screen.id} alt={screen.id} />
                ))}
            </div>
        </Detail>  
    </CardShadow>
    )}
    </>
    )
}

const CardShadow = styled(motion.div)`
    width: 100%;
    min-height: 100vh;
    overflow-y: scroll;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    &::-webkit-scrollbar {
        width: 0.5rem
    }
    &::-webkit-scrollbar-thumb {
      background-color: #ff7676; 
    }
    &::-webkit-scrollbar-track {
        background:white;
    }
    z-index: 10;
    
`

const Detail = styled(motion.div)`
width: 80%;
border-radius: 1rem;
padding: 2rem 5rem;
background: white;
position: absolute;
left: 10%;
color: black;
img {
    width: 100%;
}
`

const Stats = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Info = styled(motion.div)`
    text-align: center;
`

const Platforms = styled(motion.div)`
    display: flex;
    justify-content: space-evenly;
    h3{
        margin-left: 0.5rem
    }
    img {
        margin-left: 2rem;
        width: 5%;
    }

`

const Media = styled(motion.div)`
    margin-top: 5rem;
    img {
        width: 100%;
    }
`

const Description = styled(motion.div)`
    margin: 5rem 0rem;
`
export default GameDetail