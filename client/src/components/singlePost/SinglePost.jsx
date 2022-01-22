import "./singlePost.css";
export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZGV2ZWxvcGVyfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
          alt=""
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Okey</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis
          placeat accusantium, veniam autem, deleniti nihil magnam
          necessitatibus illo repellendus esse maxime totam inventore facilis
          eaque, maiores dolore pariatur doloribus error. Tempore, blanditiis
          eum reiciendis accusantium exercitationem dicta quia rem, qui
          provident voluptatibus optio aliquid cum, assumenda quisquam ad. Sed
          sit ratione ipsam qui dolor laudantium quam vel id. Inventore, fugiat.
          Illo eveniet nobis labore veniam architecto sint iure cumque tempore.
          Possimus animi mollitia est natus? Sed, soluta ipsa? Aspernatur
          explicabo eum exercitationem sed doloremque dolores. Incidunt
          voluptates placeat exercitationem nihil? Officia aperiam atque ipsa,
          laudantium harum, voluptatibus eum amet aliquam doloribus nam id iure
          perspiciatis explicabo cum voluptates iusto fuga sequi placeat
          doloremque officiis vitae excepturi! Quod hic laboriosam iure.
          Asperiores nobis ex ducimus atque magnam eos voluptates nesciunt
          veritatis error quo qui in sequi dolor necessitatibus amet impedit,
          magni, cumque non? Omnis quisquam quam dignissimos ipsam sit
          voluptates voluptas!
        </p>
      </div>
    </div>
  );
}
