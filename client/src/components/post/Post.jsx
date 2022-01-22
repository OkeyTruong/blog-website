import "./post.css";

export default function Post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZGV2ZWxvcGVyfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">music</span>
          <span className="postCat">life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit amet</span>
        <hr />
        <spa className="postDate">1 hour ago</spa>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse deleniti
        officiis inventore ea adipisci dignissimos atque et reprehenderit sit
        odio doloremque nostrum quibusdam eius, quae velit mollitia libero,
        doloribus dolor?
      </p>
    </div>
  );
}
