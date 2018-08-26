import * as React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {

    public render() {
        return (
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/about/fuck">Home</Link></li>
            </ul>
        );
    }
}

export default Header;
