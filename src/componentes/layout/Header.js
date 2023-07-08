import React from "react";
import '../../styles/components/layout/Header.css';

const Header = (props) => {
    return (<header>
        <div className="holder">
            <img src="logo-sitio-web.webp" width="100" alt=""/>
            <h1>Logistica General</h1>
        </div>
    </header> );
}

export default Header;
