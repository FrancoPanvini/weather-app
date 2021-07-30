import React from "react";
import { Link } from "react-router-dom";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { RiHome2Line} from "react-icons/ri";

import SearchBar from "./SearchBar.jsx";
import icon from "../media/favicon.png";

import { Nav, Title, Bar, Buttons, Image } from "./styles/Navbar.SC.js";
import { Button } from "./styles/SearchBar.SC";

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
        <Link to="/">
          <Button style={{ padding: "6px 6px" }}>
            <RiHome2Line />
          </Button>
        </Link>
        <Link to="/help">
          <Button style={{ padding: "6px 6px" }}>
            <IoMdHelpCircleOutline />
          </Button>
        </Link>
      </Buttons>
    </Nav>
  );
}

export default Navbar;
