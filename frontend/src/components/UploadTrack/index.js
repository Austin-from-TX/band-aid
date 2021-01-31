import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import * as trackActions from '../../store/upload'


const  UploadTrack = () => {
  const [bandName, setBandName] = useState('')
  const [title, setTitle] = useState('')
  const [track, setTrack] = useState(null)
  const [errors, setErrors] = useState([])
  
  const userId = useSelector((state) => state.session.user.id) //TODO pass userId to route 
  
  const dispatch = useDispatch()

    
    const handleSubmit = async (e) => {
        e.preventDefault()
        let newErrors = []
        dispatch(trackActions.createTrack({ bandName, userId, title, track,  }))
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
        <div className='row'>
         <fieldset>
            <legend>Upload a Track</legend>
              {errors.length > 0 &&
                errors.map((error) => <div key={error}>{error}</div>)}
            <form
              style={{ display: "flex", flexFlow: "column" }}
              className='col s12'
              onSubmit={handleSubmit}
            >
            <label>
              <input
                type="text"
                placeholder="Artist"
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
            <label>
              <input type="file"  onChange={e => setTrack(e.target.files[0])} />
            </label>
              
          <button type="submit" className='btn btn-header cyan darken-4 modal-trigger text-lighten-5'>Upload Track</button>
        </form>
      </fieldset>
    </div>
    )
}

export default UploadTrack