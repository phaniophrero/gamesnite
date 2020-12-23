import React, { useState } from "react";
// Animation
import styled from "styled-components";
import { motion } from "framer-motion";
import logo from "../img/logo.svg";
// Redux and Routes
import { fetchSearch } from "../actions/gamesAction";
import { useDispatch } from "react-redux";
import { fadeIn } from "../animations";

const Nav = () => {
  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState("");
  const inputHandler = (e) => {
    setTextInput(e.target.value);
  };
  const submitSearch = (e) => {
    e.preventDefault();
    dispatch(fetchSearch(textInput));
    setTextInput("");
  };
  const clearSearch = () => {
    dispatch({
      type: "CLEAR_SEARCHED",
    });
  };

  return (
    <StyledNav variants={fadeIn} initial="hidden" animate="show">
      <Logo onClick={clearSearch}>
        <img src={logo} alt="logo" />
        <h1>GamesNite</h1>
      </Logo>
      <form className="search">
        <input value={textInput} onChange={inputHandler} type="text" />
        <button onClick={submitSearch} type="submit">
          Search
        </button>
      </form>
    </StyledNav>
  );
};

const StyledNav = styled(motion.nav)`
  padding: 3rem 5rem;
  text-align: center;
  input {
    width: 30%;
    font-size: 1.2rem;
    padding: 0.4rem;
    border: none;
    border-radius: 0.6rem 0rem 0rem 0.6rem;
    margin-top: 1rem;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.15);
  }
  button {
    font-size: 1.3rem;
    border: none;
    padding: 0.4rem 2rem;
    cursor: pointer;
    color: #fafafa;
    background: #6dacff;
    border-radius: 0rem 0.6rem 0.6rem 0rem;
    transition: all 0.5s ease;
    &:hover {
      background: #629be6;
    }
  }
  @media (max-width: 1200px) {
    input {
      width: 60%;
    }
  }
  @media (max-width: 761px) {
    padding: 3rem;
  }
`;

const Logo = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  cursor: pointer;
  img {
    width: 2rem;
    height: 2rem;
  }
  h1 {
    color: #629be6;
    font-size: 1.9rem;
  }
`;

export default Nav;
