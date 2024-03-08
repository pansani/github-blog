import {
  ArrowSquareUpRight,
  Buildings,
  GithubLogo,
  Users,
} from "@phosphor-icons/react";
import {
  GithubIconWrapper,
  GithubLinkContainer,
  IconAndDataContainer,
  ProfileContainer,
  SocialData,
  UserDataContainer,
} from "./style";
import { useEffect, useState } from "react";
import axios from "axios";

interface GithubResponse {
  name: string;
  login: string;
  avatar_url: string;
  followers: number;
  bio: string;
  company: string;
}

interface ProfileData {
  username: string;
  personName: string;
  profileImage: string;
  followers: number;
  description: string;
  workplace: string;
}

const transformProfileData = (data: GithubResponse): ProfileData => ({
  username: data.login,
  personName: data.name,
  profileImage: data.avatar_url,
  followers: data.followers,
  description: data.bio,
  workplace: data.company,
});

export function Profile() {
  const token = import.meta.env.VITE_GITHUB_TOKEN;
  const [profileData, setProfileData] = useState<ProfileData | null>(null);

  useEffect(() => {
    axios
      .get("https://api.github.com/users/pansani", {
        headers: {
          Authorization: `token ${token}`,
        },
      })
      .then((response) => {
        if (response.data) {
          setProfileData(transformProfileData(response.data));
        }
      })
      .catch((error) => console.error(error));
  }, [token]);

  if (!profileData) {
    return <div>Loading...</div>;
  }

  return (
    <ProfileContainer>
      <img src={profileData.profileImage} alt="Profile" />
      <UserDataContainer>
        <div>
          <h1>{profileData.personName}</h1>
        </div>
        <div>
          <p>{profileData.description}</p>
        </div>
        <SocialData>
          <IconAndDataContainer>
            <GithubIconWrapper>
              <GithubLogo size={22} weight="fill" />
            </GithubIconWrapper>
            <span>{profileData.username}</span>
          </IconAndDataContainer>
          <IconAndDataContainer>
            <Buildings size={22} />
            <span>{profileData.workplace}</span>
          </IconAndDataContainer>
          <IconAndDataContainer>
            <Users size={22} />
            <span>{profileData.followers}</span>
          </IconAndDataContainer>
        </SocialData>
      </UserDataContainer>
      <a href="https://github.com/pansani">
        {" "}
        <GithubLinkContainer>
          Github
          <ArrowSquareUpRight size={20} />
        </GithubLinkContainer>
      </a>
    </ProfileContainer>
  );
}
