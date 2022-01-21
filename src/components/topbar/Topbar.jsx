import "./topbar.css"

export default function Topbar() {
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
                    <li className="topListItem">home</li>
                    <li className="topListItem">about</li>
                    <li className="topListItem">contact</li>
                    <li className="topListItem">logout</li>
                </ul>
            </div>
            <div className="topRight">
                <img
                  className="topImg"
                  src="https://i.gifer.com/838d.gif"
                  alt=""
                />
                <i class="topSearchIcon fas fa-search"></i>
            </div>
        </div>
    )
}
