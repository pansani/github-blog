import { useEffect, useState } from "react";
import { Post } from "../../components/Post";
import { Profile } from "../../components/Profile";
import { PostsContainer } from "./style";
import axios from "axios";

interface PostData {
  title: string;
  date: Date;
  content: string;
}

interface GitHubIssue {
  title: string;
  created_at: string;
  body: string;
}

export const Blog = () => {
  const [postData, setPostData] = useState<PostData[]>([]);

  useEffect(() => {
    axios
      .get("https://api.github.com/repos/pansani/github-blog/issues")
      .then((response) => {
        if (response.data) {
          const data = response.data.map((issue: GitHubIssue) => ({
            title: issue.title,
            date: new Date(issue.created_at),
            content: issue.body,
          }));
          setPostData(data);
        }
      });
  }, []);

  return (
    <>
      <Profile></Profile>
      <PostsContainer>
        {postData.map((post) => (
          <Post
            content={post.content}
            date={post.date}
            title={post.title}
          ></Post>
        ))}
      </PostsContainer>
    </>
  );
};
