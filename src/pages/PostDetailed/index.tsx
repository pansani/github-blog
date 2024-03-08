import { useEffect, useState } from "react";
import axios from "axios";
import { PostHeader } from "../../components/PostHeader";
import { useParams } from "react-router-dom";
import { format } from "date-fns";
import { IssueContentContainer } from "./style";

interface IssueData {
  id: number;
  title: string;
  date: Date;
  content: string;
  username: string;
  comments: number;
}

interface GitHubUser {
  login: string;
}

interface GitHubIssue {
  title: string;
  created_at: Date;
  body: string;
  id: number;
  user: GitHubUser;
  comments: number;
}

const transformIssueData = (data: GitHubIssue): IssueData => ({
  id: data.id,
  comments: data.comments,
  username: data.user.login,
  content: data.body,
  date: new Date(data.created_at),
  title: data.title,
});

export function PostDetailed() {
  const { issueId } = useParams();
  const [issue, setIssue] = useState<IssueData | null>(null);

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

        if (response.data && Array.isArray(response.data)) {
          const issueData = response.data.find(
            (issue) => issue.id.toString() === issueId
          );

          if (issueData) {
            setIssue(transformIssueData(issueData));
            console.log(issueData);
          } else {
            console.log(`Issue with ID ${issueId} not found.`);
          }
        }
      } catch (error) {
        console.error("Error fetching GitHub issues:", error);
      }
    };

    if (issueId) {
      fetchIssue();
    }
  }, [issueId]);
  console.log("issues", issue);

  return (
    <>
      {issue && (
        <>
          <PostHeader
            postTitle={issue.title}
            postUsername={issue.username}
            postDate={format(new Date(issue.date), "dd/MM/yyyy")}
            postComments={issue.comments}
          />
          <IssueContentContainer>
            <p>{issue.content}</p>
          </IssueContentContainer>
        </>
      )}
    </>
  );
}
