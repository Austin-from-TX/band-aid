import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";
import * as sessionActions from "./store/session";
import UserProfile from './components/UserProfile'
import Footer from "./components/Footer";
import { Switch, Route } from "react-router-dom";


function App() {
  const dispatch = useDispatch()
  const sessionUser = useSelector(state => state.session.user)
  const [isLoaded, setIsLoaded] = useState(false)
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true))
  }, [dispatch])

  return isLoaded && (
  <>
    <NavBar isLoaded={isLoaded} />
    
    <Switch>
      <Route exact path={'/'}>
        <Home />
      </Route>
    <Route path={`/users/:userId`}>
      <UserProfile />
    </Route>
    
    </Switch>
  </>
  );
}

export default App;
