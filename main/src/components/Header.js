import React from "react";
import NavTabs from "./Navigation";

function Header(props) {
    return (
        <div className="top-nav">
            <NavTabs handlePageChange={props.handlePageChange} />
        </div>
    )
}

export default Header;