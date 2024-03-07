import { FormContainer } from "./style";

interface SearchFormProps {
  searchValue: string;
  handleChangeSearchValue: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function SearchForm({
  searchValue,
  handleChangeSearchValue,
}: SearchFormProps) {
  return (
    <>
      <FormContainer>
        <label>Publicaçoes</label>
        <input
          type="text"
          placeholder="Buscar Conteudo"
          value={searchValue}
          onChange={handleChangeSearchValue}
        />
      </FormContainer>
    </>
  );
}
