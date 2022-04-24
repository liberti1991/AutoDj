import { Container } from "react-bootstrap";
import { useState } from "react";
import styled from "styled-components";
import { database } from "./database";

export const Input = () => {
  //Filter
  const [ busca, setBusca ] = useState('');
  const lowerBusca = busca.toLowerCase();
  const tabela = database.filter((database) => database.folder.toLowerCase().includes(lowerBusca));

  return (
    <Container>
      <Search className="bg-warning">
        <p>Buscar:</p>
        <input placeholder="Titulo" type="text" value={busca} onChange={(e) => setBusca(e.target.value)} />
      </Search>
    </Container>
  )
}

const Search = styled.div`
    display: flex;
    justify-content: flex-end;
    place-items: center;
    margin-top: 40px;
    padding: 10px 50px;
    gap: 10px;
    border-radius: 5px;

    input {
        width: 500px;
        border: none;
        padding: 5px 10px;
        border-radius: 5px;
    }
`;