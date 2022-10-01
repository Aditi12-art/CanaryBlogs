
import { Link , useParams} from "react-router-dom";
import "./singlePost.css";
import postsData from "../../MOCKDATA/postData";

export default function SinglePost() {
    const { id } = useParams();
    const postData = postsData[id];
    console.log(postData);
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img
                className="singlePostImg"
                src={postData.postimage}
                alt=""
                />
                <h1 className="singlePostTitle">
                    {postData.postDescription}
                    <div className="singlePostEdit">
                        <i className="singlePostIcon far fa-edit"></i>
                        <i className="singlePostIcon far fa-trash-alt"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span>
                        Author: 
                        <b className="singlePostAuthor">
                            <Link className="link" to="/posts?username=Safak">
                                Canary
                            </Link>
                        </b>
                    </span>
                    <span>{postData.postCreatedAt}</span>
                </div>
                <p className="singlePostDesc">
                    {postData.completePostdata}

                </p>
            </div>
        </div>
    );
}
