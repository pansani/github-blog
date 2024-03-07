import { PostContainer } from "./style";
import { formatDistance } from "date-fns";
import { ptBR } from "date-fns/locale";

interface PostProps {
  title: string | undefined;
  date: Date | undefined;
  content: string | undefined;
}

export function Post({ title, date, content }: PostProps) {
  const formattedDate = date
    ? formatDistance(date, new Date(), { addSuffix: true, locale: ptBR })
    : "Data não disponível";

  return (
    <PostContainer>
      <div>
        <h1>{title}</h1>
        <span>{formattedDate}</span>
      </div>
      <p>{content}</p>
    </PostContainer>
  );
}
