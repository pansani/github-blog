import { HeaderContainer } from "./style";
import LogoGithub from "../../assets/logo-github-blog.svg";

export function Header() {
  return (
    <HeaderContainer>
      <img src={LogoGithub} />
    </HeaderContainer>
  );
}
