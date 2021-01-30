import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { createTrack } from '../../store/upload'


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
      <h1>Upload a Track</h1>
      {errors.length > 0 &&
        errors.map((error) => <div key={error}>{error}</div>)}
      <form
        style={{ display: "flex", flexFlow: "column" }}
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
          <input type="file" onChange={e => setTrack(e.target.files[0])} />
        </label>
        {/* <label>
            Multiple Upload
            <input 
              type="file"
              multiple
              onChange={updateFiles} />
          </label> */}
        <button type="submit">Upload Track</button>
      </form>
      {/* <div>
        {user && (
          <div>
            <h1>{user.username}</h1>
            <img
              style={{ width: "150px" }}
              src={user.profileImageUrl}
              alt="profile"
            />
          </div>
        )}
      </div> */}
    </div>
    )
}

export default UploadTrack