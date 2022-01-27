import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../Context/Context";
import "./topbar.css"

export default function Topbar() {
    const {user, dispatch} = useContext(Context);

    const handleLogout = ()=>{
        dispatch({type:"LOGOUT"})
    }
    console.log(user);
    return (
        <div className="top">
            <div className="topLeft">
                <i className="topIcon fab fa-facebook-square"></i>
                <i className="topIcon fab fa-twitter-square"></i>
                <i className="topIcon fab fa-pinterest-square"></i>
                <i className="topIcon fab fa-instagram-square"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                        <Link className="link" to="/">home</Link>
                    </li>
                    <li className="topListItem"><Link className="link" to="/">about</Link></li>
                    <li className="topListItem"><Link className="link" to="/">contact</Link></li>
                    <li className="topListItem"><Link className="link" to="/write">write</Link></li>
                    
                </ul>
            </div>
            <div className="topRight">
                {
                    user ?(
                        <>
                        <img
                          className="topImg"
                          src={user.profilePic}
                          alt=""
                        />
                        <li className="topList topListItem" onClick={handleLogout}>
                            {user && "LOGOUT"}
                        </li>
                        </>
                    ) : (
                        <ul className="topList">
                            <li className="topListItem">
                                <Link className="link" to="/login">login</Link>
                            </li>
                            <li className="topListItem">
                                <Link className="link" to="/register">register</Link>
                            </li>
                        </ul>
                    )
                }
                <i className="topSearchIcon fas fa-search"></i>
            </div>
        </div>
    )
}
