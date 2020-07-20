import React, {Component} from 'react';
import AbstractBook from '../AbstractBook-single/AbstractBook-single';
import { Nav, Container, } from 'reactstrap';
import DropDownPage from './DropDown-page/DropDown-page';

class AbstractBooks extends Component {

    state = {
        books: [],
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

    render () {

        return (
            <Container style={{paddingTop: '70px'}}>
                <Nav tabs>
                        <DropDownPage items={['item1', 'item2']} name='Tür'>Tür</DropDownPage>
                        <DropDownPage items={['item1', 'item2']} name='Tür'>Puan</DropDownPage>
                        <DropDownPage items={['item1', 'item2']} name='Tür'>Revaçta</DropDownPage>
                </Nav>
                {this.state.books.map( book => <AbstractBook book={book}/>)}                
            </Container>
        )
    }

}

export default AbstractBooks;