import Post from "../post/Post";
import "./posts.css";
import postsData from "../../MOCKDATA/postData";

export default function Posts() {

    return (
        <div className="posts">
        {postsData.map((postData, index) => (
            <Post 
                id={index}
                img={postData.postimage} 
                title={postData.postTitle} 
                description={postData.postDescription} 
                time={postData.postCreatedAt}  
                content={postData.postData}
            />
        ))}
        </div>
    );
}
