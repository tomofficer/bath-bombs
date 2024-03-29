import React, { useRef } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Cart from './components/Cart';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import NavMenu from './components/NavMenu';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
// import { Link } from 'react-router-dom';

function App() {
  //useRefs
  const scrollToHeroRef = useRef();

  //scroll handlers
  const scrollToHeroHandle = () => {
    scrollToHeroRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='App'>
      <Router>
        <NavBar />
        <Cart />
        <NavMenu />
        <Switch>
          <Route path='/products/:handle'>
            <ProductPage />
          </Route>
          <Route path='/'>
            <Home
              scrollToHeroHandle={scrollToHeroHandle}
              scrollToHeroRef={scrollToHeroRef}
            />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
