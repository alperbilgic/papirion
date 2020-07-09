import React, { Component, Suspense } from 'react';
import Router from './Router';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {

  state = {
    books: [],
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
export default App;
