import {
  ArrowSquareUpRight,
  Buildings,
  GithubLogo,
  ChatCircle,
} from "@phosphor-icons/react";
import {
  BackToHomeContainer,
  CareLeftIcon,
  GithubIconWrapper,
  GithubLinkContainer,
  IconAndDataContainer,
  PostDataContainer,
  PostHeaderContainer,
  PostSocialData,
} from "./style";
import { NavLink } from "react-router-dom";

interface PostHeaderProps {
  postTitle: string | undefined;
  postUsername: string | undefined;
  postDate: Date | undefined;
  postComments: number | undefined;
}

export function PostHeader({
  postTitle,
  postUsername,
  postDate,
  postComments,
}: PostHeaderProps) {
  return (
    <PostHeaderContainer>
      <BackToHomeContainer>
        <NavLink to="/">
          <CareLeftIcon />
          Voltar
        </NavLink>
      </BackToHomeContainer>
      <PostDataContainer>
        <div>
          <h1>{postTitle}</h1>
        </div>
        <PostSocialData>
          <IconAndDataContainer>
            <GithubIconWrapper>
              <GithubLogo size={22} weight="fill" />
            </GithubIconWrapper>
            <span>{postUsername}</span>
          </IconAndDataContainer>
          <IconAndDataContainer>
            <Buildings size={22} />
            <span>{postDate?.toString()}</span>
          </IconAndDataContainer>
          <IconAndDataContainer>
            <ChatCircle size={22} />
            <span>{postComments} comments</span>
          </IconAndDataContainer>
        </PostSocialData>
      </PostDataContainer>
      <a href="https://github.com/pansani">
        {" "}
        <GithubLinkContainer>
          Github
          <ArrowSquareUpRight size={20} />
        </GithubLinkContainer>
      </a>
    </PostHeaderContainer>
  );
}
