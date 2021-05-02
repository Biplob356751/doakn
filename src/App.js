import React, {createContext, useState} from 'react'
import Nav from './Components/Nav';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Shop from './Components/Shop.jsx';
import Catagory from './Components/Catagory';
import Details from './Components/Details'
import Checkout from "./Components/Checkout/Checkout";

export const CardContext = createContext();

function App() {
    const [addCart, setAddCart] = useState([]);

    return (
        <div>
            <CardContext.Provider value={[addCart, setAddCart]}>

                <div>
                    <Router>
                        <Nav/>
                        <Switch>
                            <Route path='/' exact component={Shop}/>
                            <Route path='/checkout'>
                                <Checkout/>
                            </Route>
                            <Route path='/catagory' exact component={Catagory}/>
                            <Route path='/Details/:id'>
                                <Details></Details>
                            </Route>
                        </Switch>
                    </Router>
                </div>
            </CardContext.Provider>
        </div>
    )
}

export default App



