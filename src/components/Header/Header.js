import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import NavLink from './NavLink/NavLink';
import DropDown from './DropDown/DropDown';
import Login from '../Login/Login';
import { Nav, Navbar, NavItem, Container,   } from 'reactstrap';
import HeaderStyles from './HeaderStyles';
import AfterLogin from '../Login/AfterLogin/AfterLogin';
import SearchBox from './Search/Search';

const Header = (props) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    console.log(props.token);
    console.log(props.username);
    
    useEffect(() => {
        if (props.token === '' || props.token === null) {
            setIsLoggedIn(false);
        } else {
            setIsLoggedIn(true);
        }
            
    }, [props.token]);

    return (
        <React.Fragment>
            <HeaderStyles/>
            <Container className="nav-container-header w-container-header">
                <Navbar className='navbar-header w-nav-header'>
                    <Nav className="mt-0 border-bottom border-white nav-menu-header w-nav-menu-header" navbar>
                        <div style={{display: 'flex', height: '100%', }}>
                            <NavItem style={{Bottom: '0px'}}>
                                <NavLink link="/abstractbooks/">Kitaplar</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink link="/authors/">Yazarlar</NavLink>
                            </NavItem>
                            <DropDown text='GÖZ AT'/>
                            <SearchBox/>
                        </div>
                        {isLoggedIn ? <AfterLogin username={props.username}/> : <Login/>}
                    </Nav>
                </Navbar>
            </Container>
        </React.Fragment>
    )
}

const mapStateToProps = state => {
    return {
        token: state.userToken,
        username: state.username,
    };
}

export default connect(mapStateToProps, null)(Header);