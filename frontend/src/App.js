import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";
import * as sessionActions from "./store/session";
import M from 'materialize-css/dist/js/materialize.min.js';
import Mp3Recorder from "./components/MP3Recorder";

function App() {
  const dispatch = useDispatch()
  const [isLoaded, setIsLoaded] = useState(false)
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true))
  }, [dispatch])

 
  return isLoaded && (
  <>
    <NavBar isLoaded={isLoaded} />
    <Home />
    <Mp3Recorder /> 
  </>
  );
}

export default App;
