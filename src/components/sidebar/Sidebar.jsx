import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <div className="sidebarTitle">about me</div>
        <img
          src="https://cdn.fbsbx.com/v/t59.2708-21/272077049_674429680240312_8159522262390176962_n.gif?_nc_cat=111&fallback=1&ccb=1-5&_nc_sid=041f46&_nc_ohc=ZZLwiuRXe8cAX_GDsdy&_nc_oc=AQn3TsOv7kLqpg4SPCbmW7lnSrSuOQbaJeOoILx-MahpI11sUK5C2smzQMQHNDfyJuqWrD-nZbXa68NgSZhXxA0L&_nc_ht=cdn.fbsbx.com&oh=03_AVI2BSB9B4ajFfk7Gr9v9KI1tBfsvlCsjFG4tsPSZy4MgA&oe=61EB4CC7"
          alt=""
        />
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
          <li className="sidebarListItem">life</li>
          <li className="sidebarListItem">music</li>
          <li className="sidebarListItem">style</li>
          <li className="sidebarListItem">sport</li>
          <li className="sidebarListItem">tech</li>
          <li className="sidebarListItem">cinema</li>
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
