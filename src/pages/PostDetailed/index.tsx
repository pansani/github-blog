import { useEffect, useState } from "react";
import axios from "axios";
import { PostHeader } from "../../components/PostHeader";
import { useParams } from "react-router-dom";

interface PostData {
  id: number;
  title: string;
  date: Date;
  content: string;
  username: string;
  comments: number;
}

interface GitHubIssue {
  title: string;
  created_at: string;
  body: string;
  id: number;
  owner: string;
  comments: number;
}

export function PostDetailed() {
  const { issueId } = useParams();
  const [issue, setIssue] = useState<PostData | null>(null);

  useEffect(() => {
    const fetchIssue = async () => {
      const token = import.meta.env.VITE_GITHUB_TOKEN;
      const repo = "pansani/github-blog";
      const url = `https://api.github.com/repos/${repo}/issues`;

      try {
        const response = await axios.get(url, {
          headers: {
            Authorization: `token ${token}`,
          },
        });

        if (response.data) {
          const issueData = response.data.map((issue: GitHubIssue) => ({
            title: issue.title,
            date: new Date(issue.created_at),
            content: issue.body,
            id: issue.id,
            username: issue.owner,
            comments: issue.comments,
          }));
          setIssue(issueData);
          console.log(issueData);
        }
      } catch (error) {
        console.error("Error fetching GitHub issue:", error);
      }
    };

    if (issueId) {
      fetchIssue();
    }
  }, [issueId]);

  return (
    <>
      {issue && (
        <>
          <PostHeader
            postTitle={issue.title}
            postUsername={issue.username}
            postDate={issue.date}
            postComments={issue.comments}
          />
          <div>
            <h1>{issue.title}</h1>
          </div>
        </>
      )}
    </>
  );
}
