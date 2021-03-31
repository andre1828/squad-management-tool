import './App.css';
import Header from './Header/Header.js'
import Footer from './Footer/Footer.js'
import HomePage from './HomePage/HomePage.js'
import CreateYourTeam from './CreateYourTeam/CreateYourTeam.js'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'


function App() {
  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Route path="/create-team">
            <CreateYourTeam />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;
