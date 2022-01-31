import { useContext, useState } from "react";
import { Context } from "../../Context/Context";
import Sidebar from "../../components/sidebar/Sidebar";
import axios from "axios";
import "./settings.css";

export default function Settings() {
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);

  const { user, dispatch} = useContext(Context);
  const PF = "http://localhost:5000/images/"
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({
      type:"UPDATE_START"
    })
    const updatedUser = {
      userId: user._id,
      username,
      email,
      password,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      updatedUser.profilePic = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) {
        console.log(err);
      }
    }
    try {
      const res = await axios.put("/users/" + user._id, updatedUser);
      setSuccess(true)
      dispatch({
        type:"UPDATE_SUCCESS",
        payload:res.data
      })
     
    } catch (err) {
      dispatch({
        type:"UPDATE_FAILURE",
      })
    }
  };

  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsTitleUpdate">update your account</span>
          <span className="settingsTitleDelete">delete account</span>
        </div>
        <form className="settingsForm" onSubmit={handleSubmit}>
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img src={file ? URL.createObjectURL(file): PF + user.profilePic} alt="" />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>
            </label>
            <input 
              type="file" 
              id="fileInput" 
              style={{ display: "none" }} 
              onChange={(e) =>setFile(e.target.files[0])}
            />
          </div>
          <label htmlFor="">username</label>
          <input type="text" placeholder={user.username} onChange={(e)=>setUsername(e.target.value)} />
          <label htmlFor="">email</label>
          <input type="email" placeholder={user.email} onChange={(e)=>setEmail(e.target.value)} />
          <label htmlFor="">password</label>
          <input type="password" onChange={(e)=>setPassword(e.target.value)}/>
          <button className="settingsSubmitButton" type="submit">update</button>
          {success && <span className="settingsSuccess">Profile has been update</span>}
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
