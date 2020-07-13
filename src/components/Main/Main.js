import React, {Component} from 'react';
import TextSection from './MainSections/TextSection/TextSection';
import AbstractBook from '../AbstractBook/AbstractBook/AbstractBook';
import Author from '../Author/Author/Author';
import Review from '../Review/Review/Review';
import BookList from '../BookList/BookList/BookList';
import { Jumbotron, Row, Col, Container } from 'reactstrap';
import Slider from '../Slider/Slider';
import ReviewSlider from '../Slider/ReviewSlider/ReviewSlider';
import BookListSlider from '../Slider/BookListSlider/BookListSlider';
import BackgroundImg from '../../assets/images/wide-background.jpg';
import MainStyles from './MainStyles';

class Main extends Component {
    _isMounted = false;

    state = {
        books: [],
        booklists: [],
        authors: [],
        reviews: [],
    }

    componentDidMount() {
        this._isMounted = true;
        Promise.all([
            fetch(`${process.env.REACT_APP_API_URL}/api/abstractbooks/`, {method: 'GET'}),
            fetch(`${process.env.REACT_APP_API_URL}/api/booklists/`, {method: 'GET'}),
            fetch(`${process.env.REACT_APP_API_URL}/api/authors/`, {method: 'GET'}),
            fetch(`${process.env.REACT_APP_API_URL}/api/reviews/`, {method: 'GET'}),
        ]).then(([res1, res2, res3, res4]) => { 
            return Promise.all([res1.json(), res2.json(), res3.json(), res4.json()]) 
         }).then(([res1, res2, res3, res4]) => {
            if(this._isMounted) {
                this.setState({books: res1.results.slice(0, 12)});
                this.setState({booklists: res2.results.slice(0, 6)});
                this.setState({authors: res3.results.slice(0, 12)});
                if (res4.results.lenght >= 6) {
                    this.setState({reviews: res4.results.slice(0, 6)});
                } else {
                    this.setState({reviews: res4.results});
                }
            }
         })
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    render () {
        return (
                <Container fluid style={{margin: '0', padding:'0', backgroundColor: '#eeeeee'}}>
                    <MainStyles/>
                    <Jumbotron fluid className='hero-image-container' style={{backgroundImage: `url(${BackgroundImg})`, backgroundSize: 'cover' }}>
                        <Row className='mt-5'>
                            <style>{`
                                .slogan {
                                    font-family: 'Times New Roman', cursive;
                                    font-size: 6vw;
                                    margin-top: 5vw;
                                    text-align: left;
                                }
                            `}</style>;
                            <Col sm={{ size: 8 }} className='border border-primary ml-5 text-center text-light'>
                                <h1 className='slogan'>
                                    Place where the books get their value
                                </h1>
                            </Col>
                        </Row>
                    </Jumbotron>
                    <Container >
                        <TextSection>Kitaplar</TextSection>
                        <Slider height='300px'>{this._isMounted ? this.state.books.map( book => <AbstractBook key={book.id} book={book}/>) : <p>Nothing fetched</p>}</Slider>
                        <TextSection>Yazarlar</TextSection>
                        <Slider height='170px'>{this._isMounted ? this.state.authors.map( author => <Author key={author.id} author={author}/>) : <p>Nothing fetched</p>}</Slider>
                        <TextSection>Yorumlar</TextSection>
                        <ReviewSlider height='300px'>{this._isMounted ? this.state.reviews.map( review => <Review key={review.id} review={review}/>) : <p>Nothing fetched</p>}</ReviewSlider>
                        <TextSection>Listeler</TextSection>
                        <BookListSlider height='300px'>{this._isMounted ? this.state.booklists.map( booklist => <BookList key={booklist.id} booklist={booklist}/>) : <p>Nothing fetched</p>}</BookListSlider>
                    </Container>
                    </Container>
            
    
        )
    }

}

export default Main;