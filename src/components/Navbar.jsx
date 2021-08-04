import React from "react";
import { Link, NavLink } from "react-router-dom";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { RiHome2Line } from "react-icons/ri";

import SearchBar from "./SearchBar.jsx";
import icon from "../media/favicon.png";

import { Nav, Title, Bar, Buttons, Image } from "./styles/Navbar.SC.js";
import { Button } from "./styles/SearchBar.SC";
import NLStyle from './styles/NavLink.css'

function Navbar({ onSearch }) {
  return (
    <Nav>
      <Title>
        <Link to="/">
          <Image src={icon} alt="not available" />
        </Link>
        <h1>Weather App @FP</h1>
      </Title>
      <Bar>
        <SearchBar onSearch={onSearch} />
      </Bar>
      <Buttons>
        <NavLink exact to="/" activeClassName={NLStyle.active}>
          <Button style={{ padding: "6px 6px" }}>
            <RiHome2Line />
          </Button>
        </NavLink>
        <NavLink exact to="/help">
          <Button style={{ padding: "6px 6px" }}>
            <IoMdHelpCircleOutline />
          </Button>
        </NavLink>
      </Buttons>
    </Nav>
  );
}

export default Navbar;
