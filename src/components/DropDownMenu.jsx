import React from "react";
import { Link, withRouter } from "react-router-dom";
import "../styles/DropDownMenu.css";

function DropDownMenu(props) {
  const handleMenuChoice = (menuOption, cmd) => {
    if (cmd === "delete") {
      localStorage.clear();
    }
    props.history.push(`/${menuOption}`);
    props.toggleDropDownMenu();
  };

  return (
    <div className="backdrop-filter">
      <section className="dropdown-menu">
        <Link to="/" onClick={() => handleMenuChoice("", null)}>
          Play Game
        </Link>
        <Link to="/settings" onClick={() => handleMenuChoice("settings", null)}>
          Color Theme
        </Link>
        {/* <Link to="/" onClick={() => handleMenuChoice("")}>
          Edit Profile
        </Link> */}
        {/* // TODO - add a 2nd modal to verify user wants to delete account  */}
        <Link to="/" onClick={() => handleMenuChoice("", "delete")}>
          Delete History
        </Link>
      </section>
    </div>
  );
}

export default withRouter(DropDownMenu);
