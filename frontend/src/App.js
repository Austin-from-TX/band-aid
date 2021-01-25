import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import Navigation from "./components/Navigation";
import SignupFormPage from "./components/SignupForm";
import * as sessionActions from "./store/session";

function App() {
  const dispatch = useDispatch()
  const [isLoaded, setIsLoaded] = useState(false)
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true))
  }, [dispatch])


  
  return isLoaded && (
  <>
    <Navigation isLoaded={isLoaded}/>
    <Switch>
      <Route path='/login'>
        <LoginFormPage />
      </Route> 
      <Route path='/signup'>
        <SignupFormPage />
      </Route>
    </Switch>
  </>
  );
}

export default App;
