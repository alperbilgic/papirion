import React, {Component} from 'react';
import BookList from '../../BookList/BookList-slider/BookList-slider';
import { connect } from 'react-redux';
import CardContainer from '../../../containers/CardContainer/CardContainer';

class MyLists extends Component {

    state = {
        lists: [],
    }

    componentDidUpdate(prevProps) {
        fetch(`${process.env.REACT_APP_API_URL}/api/users/${this.props.username}/mylists`, {
        method: 'GET',
        }).then( resp => resp.json())
        .then( res => {
            this.setState({lists: res.results});
        })
        .catch( error => console.log(error))
    }
    

    render () {
        return (
            <CardContainer>
                {this.state.lists.map( booklist => <BookList key={booklist.id} booklist={booklist}/>)}
            </CardContainer>
        )
    }

}

const mapStateToProps = state => {
    return {
        username: state.username
    };
}

export default connect(mapStateToProps, null)(MyLists);