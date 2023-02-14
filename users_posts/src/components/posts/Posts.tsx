import { all } from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import PostsApi from "../../apis/postsApi";
import PostInterface from "../../interfaces/PostsInterface";

export interface PostProps {}

const Posts: React.FC = (props: PostProps) => {
  const [allPosts, setAllPosts] = useState<PostInterface[]>([]);
  const [userSpecificPosts, setUserSpecificPosts] = useState<PostInterface[]>(
    []
  );
  const [loading, showLoader] = useState<boolean>(true);
  const { userId } = useParams();

  const postsToShow = useRef<PostInterface[]>([]);

  useEffect(() => {
    
    const fetchAllPosts = async () => {
      const response = await PostsApi.getAllPosts();
      setAllPosts(response);
      showLoader(false);
    };
    const fetchUserSpecificPosts = async () => {
      const response = await PostsApi.getPostsForUser(userId);
      setUserSpecificPosts(response);
      showLoader(false);
    };
    if (userId && userId !== "") {
      fetchUserSpecificPosts();
     
      postsToShow.current = userSpecificPosts;
    } else {
      fetchAllPosts();
     
      postsToShow.current = allPosts;
    }
  }, [userId, postsToShow.current]);

  
  return (
    <>
      {loading ? (
        <div>Loading Posts...</div>
      ) : (
        <div>
          <h1>Posts</h1>
          <ul>
            {postsToShow.current.map((post) => (
              <li key={post.id}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Posts;
