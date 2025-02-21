import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { getToken } from './utils/tokenUtils';
import { verifyToken } from './services/authService';
import Home from './pages/Home';
import About from './pages/About';
import Shop from './pages/Shop';
import Team from './pages/Team';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ProductDetail from './pages/ProductDetail';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    const token = getToken();
    if (token) {
      verifyToken()
        .then(user => {
          // Update your user state/redux store here with the user data
          console.log('User verified:', user);
        })
        .catch(error => {
          console.error('Token verification failed:', error);
        });
    }
  }, []);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/shop" component={Shop} />
            <Route path="/team" component={Team} />
            <Route path="/pricing" component={Pricing} />
            <Route path="/contact" component={Contact} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/product/:id" component={ProductDetail} />
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
