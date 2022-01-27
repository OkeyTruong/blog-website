import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../Context/Context";
import "./topbar.css"

export default function Topbar() {
    const {user} = useContext(Context);

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
                          src="https://i.gifer.com/838d.gif"
                          alt=""
                        />
                        <li className="topList topListItem">
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
