import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { createTrack } from '../../store/upload'
    

function RecorderForm ({ track }) {
      const dispatch = useDispatch()
      const user= useSelector((state) => state.session.user) //TODO pass userId to route 
      const userId= useSelector((state) => state.session.user.id) //TODO pass userId to route 
      
    
      const [bandName, setBandName] = useState(user.username)
      const [title, setTitle] = useState(track[0].name)
      // const [track, setTrack] = useState()
      const [errors, setErrors] = useState([])
      
            
      console.log( bandName, userId, title, track)
      const handleSubmit = async (e) => {
            e.preventDefault()
            let newErrors = []
            dispatch(createTrack({ bandName, userId, title, track,  }))
            .then(() => {
              setBandName("");
              setTitle("");
            })
            .catch((res) => {
              if (res.data && res.data.errors) {
                newErrors = res.data.errors;
                setErrors(newErrors);
              }
            });
        }
    
    
       
        return(
            <div>
          {errors.length > 0 &&
            errors.map((error) => <div key={error}>{error}</div>)}
          <form
            style={{ display: "flex", flexFlow: "column" }}
            onSubmit={handleSubmit}
          >
            <label>
             Artist Name
              <input
                type="text"
                placeholder={bandName}
                value={bandName}
                onChange={(e) => setBandName(e.target.value)}
              />
            </label>
            <label>
              Track Name
              <input
                type="text"
                placeholder="Song Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </label>
             <button type="submit">Upload Track</button>
          </form>
          
        </div>
        )
    }
    
    export default RecorderForm
   