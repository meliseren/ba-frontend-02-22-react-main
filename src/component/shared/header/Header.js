import PropTypes from "prop-types"
import React, { useContext } from "react";
import { Link } from "react-router-dom"
import { AuthContext } from "../../../context/auth/AuthContext";

const Header = (/*props*/ { headerTitle, navbarItems }) => {
    // const { headerTitle, navbarItems } = props;
    // console.log(props);
    // console.log("header.js giydirildi");

    const { userData, logout } = useContext(AuthContext);

    const handleLogout = (e) => {
        e.preventDefault();
        logout();
    }

    return (
        <header className="app-header">
            <div className="logo">
                <span>
                    <i className="fa-solid fa-school fa-2xl"></i>
                </span>
                <h2><Link to="/">{headerTitle}</Link></h2>
            </div>
            <nav>
                <ul>
                    {/* {navbarItems.map(
                        (navbarItem, index) => <li key={index}>{navbarItem}</li>
                    )} */}
                    {userData && <li>{userData.fullName}</li>}
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/add-student">Add Student</Link></li>
                    {userData ?
                        <li><a href="/" onClick={handleLogout}>Logout</a></li>
                        : <li><Link to="/login">Login</Link></li>
                    }
                </ul>
            </nav>
        </header>
    )
}

Header.defaultProps = {
    headerTitle: "Lorem Ipsum",
    navbarItems: ["Lorem", "Ipsum", "Dolor"],
}

Header.propTypes = {
    headerTitle: PropTypes.string.isRequired,
    navbarItems: PropTypes.arrayOf(PropTypes.string)
}


export default React.memo(Header);
