
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Booking from './Components/Booking/Booking';
import Contack from './Components/Contact/Contack';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import LogIn from './Components/LogIn/LogIn';
import Register from './Components/LogIn/Register';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import AuthProvider from './Context/AuthProvider';

function App() {
  return (
    <div>

      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/contact">
              <Contack></Contack>
            </Route>
            <PrivateRoute path="/booking">
              <Booking></Booking>
            </PrivateRoute>
            <Route path="/login">
              <LogIn></LogIn>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>

          </Switch>
        </BrowserRouter>
      </AuthProvider>

    </div>
  );
}

export default App;
