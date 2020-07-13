import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';
// import ReviewList from '../../Review/ReviewList/ReviewList';
import AbstractBookDetailsStyles from './AbstractBookDetailsStyles';

class BookDetails extends Component {

    state = {
        book: {},
        bookId: this.props.match.params.bookId,
        authors: [],
        popbook: '',
        new_review: '',
    }

    componentDidMount() {
        fetch(`${process.env.REACT_APP_API_URL}/api/abstractbooks/${this.state.bookId}/`, {
        method: 'GET',
        }).then( resp => resp.json())
        .then(res => {
            this.setState({book: res});
            this.setState({authors: res.authors});
            this.setState({popbook: res.pop_child_book});
        })
        .catch( error => console.log(error))
    }

    inputChanged = event => {
        let rew = this.state.new_review;
        rew = event.target.value;
        this.setState({new_review: rew});
    }

    buttonClicked = event => {
        const send_review = {
            abstract_book: this.state.bookId,
            review:        this.state.new_review,
        }
        fetch(`${process.env.REACT_APP_API_URL}/api/reviews/`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            //   'Authorization': `Token ${this.state.token}`
            },
            body: JSON.stringify(send_review), 
          }).then( resp => resp.json())
          .catch( error => console.log(error));

        this.setState({new_review: ''});
    }

    render() {
        return (
            <Container fluid style={{margin: '0', paddingTop:'90px', backgroundColor: '#eeeeee'}}>
                <AbstractBookDetailsStyles/>
                <img src={this.state.popbook.image} alt={this.state.book.name} className="Img"/>
                <div>
                    <h2>
                        {this.state.book.name} - {this.state.authors.map(author => author.name)}
                    </h2>
                    <p>{this.state.book.description}</p>

                </div>
                {/* <ReviewList reviews={this.state.book.reviews}/> */}
                <textarea onChange={this.inputChanged} value={this.state.new_review}/><br/>
                <button onClick={this.buttonClicked}>Add Review</button>
            </Container>
        )
    }

}

export default BookDetails;