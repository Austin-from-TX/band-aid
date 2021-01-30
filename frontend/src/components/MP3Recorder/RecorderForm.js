import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { createTrack } from '../../store/upload'
    

function RecorderForm ({ mp3Url, file }) {
      
      const user= useSelector((state) => state.session.user) //TODO pass userId to route 
      const userId= useSelector((state) => state.session.user.id) //TODO pass userId to route 
      
    
      const [bandName, setBandName] = useState(user.username)
      const [title, setTitle] = useState('')
      const [track, setTrack] = useState(`${mp3Url}.mp3`)
      const [errors, setErrors] = useState([])
      
      

      
      const dispatch = useDispatch()
    
        
        const handleSubmit = async (e) => {
            e.preventDefault()
            let newErrors = []
            console.log(mp3Url)
            console.log(bandName)
            console.log(userId)
            console.log(title)
            dispatch(createTrack({ bandName, userId, title, track,  }))
            .then(() => {
              setBandName("");
              setTitle("");
              setTrack(null);
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
              <input
                type="text"
                placeholder={bandName}
                value={bandName}
                onChange={(e) => setBandName(e.target.value)}
              />
            </label>
            <label>
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
   