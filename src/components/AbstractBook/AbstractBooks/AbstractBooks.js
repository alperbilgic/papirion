import React, {Component} from 'react';
import AbstractBook from '../AbstractBook/AbstractBook';
import { Nav, NavLink, NavItem, Container,
         Row, Col } from 'reactstrap';

class AbstractBooks extends Component {

    state = {
        books: [],
        isCards: false,
    }

    componentDidMount() {
        fetch(`${process.env.REACT_APP_API_URL}/api/abstractbooks/`, {
        method: 'GET',
        }).then( resp => resp.json())
        .then( res => {
            this.setState({books: res.results});
        })
        .catch( error => console.log(error))
    }

    toggleView = () => {
        let isCardView = !this.state.isCards;
        this.setState({isCards: isCardView});
    }
    

    render () {
        let cardView = (
            <Row>
                <Col sm={{ size: 10, offset: 1 }} className='border'>
                    <Row>
                    {this.state.books.map( book => (
                        <Col key={book.id} sm={{ size: 2, offset: 0 }} style={{margin: '0', padding:'0'}}><AbstractBook book={book} isCardView={this.state.isCards}/></Col>
                    ))}
                    </Row>
                </Col>
            </Row>
        )

        let listView = (
            <Row>
                {this.state.books.map( book => (
                    <AbstractBook key={book.id} book={book} isCardView={this.state.isCards}/>
                ))}
            </Row>
        )

        return (
            <Container style={{paddingTop: '70px'}}>
                <Nav tabs>
                    <NavItem style={{cursor: 'pointer'}}>
                        <NavLink active={this.state.isCards} onClick={this.toggleView}>Card</NavLink>
                    </NavItem>
                    <NavItem style={{cursor: 'pointer'}}>
                    <NavLink active={!this.state.isCards} onClick={this.toggleView}>List</NavLink>
                    </NavItem>
                </Nav>
                {this.state.isCards ? cardView : listView}

                
            </Container>
        )
    }

}

export default AbstractBooks;