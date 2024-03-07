import { useEffect, useState } from "react";
import { Post } from "../../components/Post";
import { Profile } from "../../components/Profile";
import { PostsContainer } from "./style";
import axios from "axios";
import { SearchForm } from "../../components/SearchForm";

interface PostData {
  id: number;
  title: string;
  date: Date;
  content: string;
}

interface GitHubIssue {
  title: string;
  created_at: string;
  body: string;
  id: number;
}

export const Blog = () => {
  const [postData, setPostData] = useState<PostData[]>([]);
  const [filteredPostData, setFilteredPostData] = useState<PostData[]>([]);
  const [searchValue, setSearchValue] = useState("");

  const token = import.meta.env.VITE_GITHUB_TOKEN;

  const searchPosts = async (currentSearchValue: string) => {
    const repo = "pansani/github-blog";
    let query = `q=is:issue+repo:${repo}`;

    if (currentSearchValue) {
      query += `+${currentSearchValue}`;
    }
    const url = `https://api.github.com/search/issues?${query}`;

    const response = await axios.get(url, {
      headers: {
        Authorization: `token ${token}`,
      },
    });
    if (response.data) {
      const data = response.data.items.map((issue: GitHubIssue) => ({
        title: issue.title,
        date: new Date(issue.created_at),
        content: issue.body,
        id: issue.id,
      }));
      setFilteredPostData(data);
    }
  };

  const handleChangeSearchValue = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newValue = event.target.value;
    setSearchValue(newValue);
    searchPosts(newValue);
    console.log("searchValue", searchValue);
    console.log("filteredPostData", filteredPostData);
  };

  useEffect(() => {
    axios
      .get("https://api.github.com/repos/pansani/github-blog/issues", {
        headers: {
          Authorization: `token ${token}`,
        },
      })
      .then((response) => {
        if (response.data) {
          const data = response.data.map((issue: GitHubIssue) => ({
            title: issue.title,
            date: new Date(issue.created_at),
            content: issue.body,
            id: issue.id,
          }));
          setPostData(data);
        }
      });
  }, []);

  return (
    <>
      <Profile></Profile>
      <SearchForm
        searchValue={searchValue}
        handleChangeSearchValue={handleChangeSearchValue}
      ></SearchForm>
      <PostsContainer>
        {searchValue === ""
          ? postData.map((post) => (
              <Post
                key={post.id}
                content={post.content}
                date={post.date}
                title={post.title}
              ></Post>
            ))
          : filteredPostData.map((post) => (
              <Post
                key={post.id}
                content={post.content}
                date={post.date}
                title={post.title}
              ></Post>
            ))}
      </PostsContainer>
    </>
  );
};
