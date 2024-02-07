import { Button } from "@mantine/core";
import "../Styles/Navbar.css";
import { Link } from "react-router-dom";
import phoneLogo from "../assets/PhoneLogo.png";

function Navbar() {
  return (
    <div className="nav">
      <Link to="/">
        <img className="logo" src={phoneLogo} alt="PhonecaveLogo" />
      </Link>
      <Link to="/About">
        <Button color="blue" mt="md" radius="md">
          About Me
        </Button>
      </Link>
    </div>
  );
}
export default Navbar;
