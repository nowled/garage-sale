import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import Cart from './pages/Cart';
import ProductPage from './pages/ProductPage';
import './index.css';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Shipping from './pages/Shipping';
import Payment from './pages/Payment';
import PlaceOrder from './pages/PlaceOrder';

const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Route path='/' component={Home} exact />
          <Route path='/payment' component={Payment} />
          <Route path='/placeorder' component={PlaceOrder} />
          <Route path='/shipping' component={Shipping} />
          <Route path='/product/:id' component={ProductPage} />
          <Route path='/cart/:id?' component={Cart} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Route path='/profile' component={Profile} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
