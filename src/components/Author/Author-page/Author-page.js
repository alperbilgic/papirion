import React, {Component} from 'react';
import Author from '../Author-single/Author-single';
import { Container } from 'reactstrap';

class Authors extends Component {

    state = {
        authors: [],
        isCards: false,
    }

    componentDidMount() {
        fetch(`${process.env.REACT_APP_API_URL}/api/authors/`, {
        method: 'GET',
        }).then( resp => resp.json())
        .then( res => {
            this.setState({authors: res.results});
        })
        .catch( error => console.log(error))
    }

    toggleView = () => {
        let isCardView = !this.state.isCards;
        this.setState({isCards: isCardView});
    }
    

    render () {
        return (
            <div style={{paddingTop: '85px', minHeight: '525px'}}>
                <Container className='border-top'>
                    {this.state.authors.map( author => <Author author={author}/>)}                
                </Container>
            </div>
        )
    }

}

export default Authors;