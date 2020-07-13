import React, { Component, Suspense } from 'react';
import Router from './Router';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { authCheckState } from './store/Actions/AuthActions'

class App extends Component {

  componentDidMount () {
    this.props.onTryAutoSignup();
  }

  render() {
    return (
          <BrowserRouter>
            <Suspense fallback={<div>Loading Header....</div>}>
                <Header/>
            </Suspense>
            <Router />
            <Footer />
          </BrowserRouter>
  );}
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch( authCheckState() )
  };
};

export default connect(null, mapDispatchToProps)(App);
