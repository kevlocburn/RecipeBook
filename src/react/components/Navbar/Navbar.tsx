import React, { Dispatch, SetStateAction, useEffect } from "react";
import { Link } from "react-router-dom";
import { IUser } from "../../types/types";
import UserAccess from "./components/UserAccess";

interface IProps {
  user?: IUser;
  setUser: Dispatch<SetStateAction<IUser | undefined>>;
}

function Navbar(props: IProps) {
  useEffect(() => {
    wireUpHamburgers();
  }, []);

  function wireUpHamburgers() {
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(
      document.querySelectorAll(".navbar-burger"),
      0
    );

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
      // Add a click event on each of them
      $navbarBurgers.forEach((el) => {
        el.addEventListener("click", () => {
          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);

          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle("is-active");
          if ($target) $target.classList.toggle("is-active");
        });
      });
    }
  }

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className={"container"}>
        <div className="navbar-brand">
          <div className="navbar-item">
            <span
              className={"title"}
              style={{ fontFamily: "'Architects Daughter'" }}
            >
              <Link to="/">Recipe Book</Link>
            </span>
          </div>

          <div
            role="button"
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </div>
        </div>

        <div className="navbar-menu" id="navbarBasicExample">
          <div className="navbar-start"></div>

          <div className="navbar-end">
            <div className="navbar-item">
              <Link to="/create-recipe">
                <button className="button is-primary">Create Recipe!</button>
              </Link>
            </div>
            <div className="navbar-item has-dropdown is-hoverable">
              <div className="navbar-link">
                {props.user ? (
                  <Link to="/myAccount">My Account</Link>
                ) : (
                  "Log In"
                )}
              </div>

              <div className="navbar-dropdown is-right">
                <div className="navbar-item">
                  <div>
                    <UserAccess user={props.user} setUser={props.setUser} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
