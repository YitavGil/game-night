import React,{useEffect} from 'react';
import GameDetail from '../components/GameDetail';
import { useLocation } from 'react-router-dom';
//redux
import {useDispatch, useSelector} from 'react-redux';
import {loadGames} from '../actions/gamesAction';
//components
import Game from '../components/Game';
//styling
import styled from 'styled-components';
import {motion, AnimatePresence, AnimateSharedLayout} from 'framer-motion';


const Home = () => {
    //Get the current location
    const location = useLocation();
    const pathId = location.pathname.split("/")[2];
  

    //Fetch Games
    const dispatch = useDispatch();
    useEffect(() => {
    dispatch(loadGames())
  },[dispatch]);

  //Get data from the state
  const { newGames, popular, upcoming, searched } = useSelector((state) => state.games);
  

  return (
    <GameList>
        <AnimateSharedLayout type='crossfade'>
                <AnimatePresence>{pathId && <GameDetail pathId={pathId} />}</AnimatePresence>
            {searched.length ? (<div className='searched'>
                <h2>Searched Games</h2> 
                <Games>
                    {searched.map(game => (
                        <Game 
                        key={game.id}
                        name={game.name} 
                        released={game.released} 
                        id={game.id} 
                        image={game.background_image}/>
                    ))}
                </Games>
            </div>) : ''}
            <h2>Upcoming Games</h2> 
            <Games>
                {upcoming.map(game => (
                    <Game 
                    key={game.id}
                    name={game.name} 
                    released={game.released} 
                    id={game.id} 
                    image={game.background_image}/>
                ))}
            </Games>

            <h2>Popular Games</h2> 
            <Games>
                {popular.map(game => (
                    <Game 
                    key={game.id}
                    name={game.name} 
                    released={game.released} 
                    id={game.id} 
                    image={game.background_image}/>
                ))}
            </Games>

            <h2>New Games</h2> 
            <Games>
                {newGames.map(game => (
                    <Game 
                    key={game.id}
                    name={game.name} 
                    released={game.released} 
                    id={game.id} 
                    image={game.background_image}/>
                ))}
            </Games>
        </AnimateSharedLayout>
    </GameList>
  )
}

const GameList = styled(motion.div)`
    padding: 0rem 5rem;
    h2 {
        padding: 5rem 0rem;
    }
`;
const Games = styled(motion.div)`
    min-height: 80vh;
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(500px, 1fr));
    grid-column-gap: 3rem;
    grid-row-gap: 5rem;
`;


export default Home