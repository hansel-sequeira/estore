import './App.css';
import Header from './components/Header';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './components';
import ProductDetails from './components/Product/productDetails';

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path="/" component={LandingPage}/>
        <Route path="/productDetails" component={ProductDetails}/>
      </Switch>
    </div>
  );
}

export default App;
