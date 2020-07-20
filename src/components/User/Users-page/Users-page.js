import React, {Component} from 'react';
import User from '../User-single/User-single';
import { Container } from 'reactstrap';

class Users extends Component {

    state = {
        users: [],
        isCards: false,
    }

    componentDidMount() {
        fetch(`${process.env.REACT_APP_API_URL}/api/users/`, {
        method: 'GET',
        }).then( resp => resp.json())
        .then( res => {
            this.setState({users: res.results});
        })
        .catch( error => console.log(error))
    }

    toggleView = () => {
        let isCardView = !this.state.isCards;
        this.setState({isCards: isCardView});
    }
    

    render () {
        return (
            <Container style={{paddingTop: '70px'}}>
                {this.state.users.map( user => <User user={user}/>)}                
            </Container>
        )
    }

}

export default Users;