import React from 'react'
import Nav from './Components/Nav';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Shop from './Components/Shop.jsx';
import Catagory from './Components/Catagory';
import Details from './Components/Details'

function App() {
  return (
    <div>
      <div>
        <Router>
          <Nav />
          <Switch>
            <Route path='/' exact component={Shop}/>
            <Route path='/catagory' exact component={Catagory}/>
            <Route path='/Details/:id'>
              <Details></Details>
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  )
}
export default App



