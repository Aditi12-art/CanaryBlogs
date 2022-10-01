import { Link } from "react-router-dom";
import "./post.css";
export default function Post(props) {
  return (
    <div className="post">
      <img
        className="postImg"
        src={props.img}
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">
            <Link className="link" to={`/post/${props.id}`}>
              {props.title}
            </Link>
          </span>
          
        </div>
        <span className="postTitle">
          <Link to={`/post/${props.id}`} className="link">
           {props.description}
          </Link>
        </span>
        <hr />
        <span className="postDate">{props.time}</span>
      </div>
      <p className="postDesc">
       {props.content}
      </p>
    </div>
    
  );
  
}
