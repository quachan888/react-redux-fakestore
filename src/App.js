import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './container/Header';
import Products from './container/Products';
import ProductDetail from './container/ProductDetail';

function App() {
    return (
        <div className="container-fluid bg-light">
            <Router>
                <Header />
                <Switch>
                    <Route path="/" exact component={Products} />
                    <Route path="/product/:productId" exact component={ProductDetail} />
                    <Route>404 Not Found</Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
