import { useEffect, useState } from "react";
import { Post } from "../../components/Post";
import { Profile } from "../../components/Profile";
import { NavLinkStyled, PostsContainer } from "./style";
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
  };

  useEffect(() => {
    const fetchIssues = async () => {
      const repo = "pansani/github-blog";
      const url = `https://api.github.com/repos/${repo}/issues`;

      try {
        const response = await axios.get(url, {
          headers: {
            Authorization: `token ${token}`,
          },
        });

        if (response.data) {
          const issues = response.data.map((issue: GitHubIssue) => ({
            title: issue.title,
            date: new Date(issue.created_at),
            content: issue.body,
            id: issue.id,
          }));
          console.log("issues", issues);
          setPostData(issues);
        }
      } catch (error) {
        console.error("Error fetching GitHub issues:", error);
      }
    };

    fetchIssues();
  }, [token]);

  return (
    <>
      <Profile></Profile>
      <SearchForm
        searchValue={searchValue}
        handleChangeSearchValue={handleChangeSearchValue}
      ></SearchForm>
      <PostsContainer>
        {(searchValue === "" ? postData : filteredPostData).map((post) => (
          <NavLinkStyled key={post.id} to={`/post/${post.id}`}>
            <Post content={post.content} date={post.date} title={post.title} />
          </NavLinkStyled>
        ))}
      </PostsContainer>
    </>
  );
};
