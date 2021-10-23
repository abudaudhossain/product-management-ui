import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import AddProduct from './components/AddProduct/AddProduct';
import Products from './components/Products/Products';
import Header from './components/Header/Header';
import UpdateProduct from './components/UpdateProduct/UpdateProduct';

function App() {
  return (
    <div className="App">
     <Router>
       <Header></Header>
       <Switch>
         <Route exact path="/">
            <Home></Home>
         </Route>
         <Route path="/home">
            <Home></Home>
         </Route>
         <Route path="/addProduct">
            <AddProduct></AddProduct>
         </Route>
         <Route path="/products">
            <Products></Products>
         </Route>
         <Route path="/product/:id">
            <UpdateProduct></UpdateProduct>
         </Route>
       </Switch>
     </Router>
    </div>
  );
}

export default App;
