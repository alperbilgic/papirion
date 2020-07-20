import React, {Component} from 'react';
import AbstractBook from '../../AbstractBook/AbstractBook-single/AbstractBook-single';
import { connect } from 'react-redux';
import CardContainer from '../../../containers/CardContainer/CardContainer';

class MyFavorites extends Component {

    state = {
        books: [],
    }

    componentDidUpdate(prevProps) {
        fetch(`${process.env.REACT_APP_API_URL}/api/users/${this.props.username}/favourite_books`, {
        method: 'GET',
        }).then( resp => resp.json())
        .then( res => {
            this.setState({books: res.results});
        })
        .catch( error => console.log(error))
    }
    

    render () {
        return (
            <CardContainer>
                {this.state.books.map( book => <AbstractBook book={book}/>)}
            </CardContainer>
        )
    }

}

const mapStateToProps = state => {
    return {
        username: state.username
    };
}

export default connect(mapStateToProps, null)(MyFavorites);