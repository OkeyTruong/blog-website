import { useContext, useEffect, useState } from "react";
import axios from "axios";
import "./sidebar.css";
import { Link } from "react-router-dom";
import { Context } from "../../Context/Context";

export default function Sidebar() {
  const [cats, setCats] = useState([]);
  const PF = "http://localhost:5000/images/"

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);
  const { user } = useContext(Context)
  // console.log(user);

  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <div className="sidebarTitle">about me</div>
        {user &&(
          <img
          src={PF+user.profilePic}
          alt=""
        />
        )}
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Reprehenderit eum veritatis ducimus molestiae dolor unde. Ut minus
          vitae omnis vel tempora pariatur blanditiis hic, tempore
          necessitatibus, mollitia, sequi dolorem minima.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">categories</span>
        <ul className="sidebarList">
          {cats.map(cat =>(
            <Link to={`/?cat=${cat.name}`} className="link">
              <li className="sidebarListItem">{cat.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">follow us</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
        </div>
      </div>
    </div>
  );
}
