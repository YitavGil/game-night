import React, {useState} from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
//Redux and Routes
import {fetchSearch} from '../actions/gamesAction';
import { useDispatch } from 'react-redux';

const Navbar = () => {
   const dispatch = useDispatch();
   const [textInput, setTextInput] = useState('');

   const inputeHandler = (e) => {
    setTextInput(e.target.value)
   }

   const submitSearch = (e) => {
       e.preventDefault();
       dispatch(fetchSearch(textInput));
       setTextInput("");
   }
   const clearSearched = () => {
       dispatch({type: "CLEAR_SEARCHED"})
   }
  return (
    <StyledNav>
        <Logo onClick={clearSearched}>
            <h1>Game Night</h1>
        </Logo>
        <form className='search'>
            <input value={textInput} onChange={inputeHandler} type='text' />
            <button onClick={submitSearch} type='submit'>Search</button>
        </form>
    </StyledNav>
  )
}

const StyledNav = styled(motion.nav)`
    padding: 3rem 5rem;
    text-align: center;
    input {
        width: 30%;
        font-size: 1.5rem;
        padding: 0.5rem;
        margin-top: 1rem;
        box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
        font-weight: bold;
    }

    button{
        font-size: 1.5rem;
        border: none;
        padding: 0.5rem 2rem;
        cursor: pointer;
        background: #ff7676;
        color: white;
    }
`
const Logo = styled(motion.div)`
    padding: 1rem;
    cursor: pointer;
`
export default Navbar