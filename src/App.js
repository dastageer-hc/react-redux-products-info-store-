import Header from "./components/Header";
import {BrowserRouter as Router, Switch, Routes, Route} from 'react-router-dom';
import ProductListing from "./components/ProductsListing";
import ProductDetails from "./components/ProductDetails";
function App() {
  return (
    <div className="App">

        <Header />
      <Routes>

        <Route path='/' exact element = {<ProductListing></ProductListing>}/>
        <Route path='/products/:productId' exact element = {<ProductDetails/>}/>

        <Route path='*' exact element={<p>404 Not found</p>}> 
        </Route>
      </Routes>

    </div>
  );
}

export default App;
