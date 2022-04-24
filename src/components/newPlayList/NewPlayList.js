import { Container, Tab, Tabs } from "react-bootstrap";
import { useState } from "react";
import styled from "styled-components";
import { CommercialPlayList } from "./CommercialPlayList";
import { VignettesPlayList } from "./VignettesPlayList";
import { MusicPlayList } from "./MusicPlayList";
import { database } from "../database";

export const NewPlayList = () => {
  const [key, setKey] = useState();

// filter
  const [busca, setBusca] = useState('');
  const lowerBusca = busca.toLowerCase();
  const tabela = database.filter((database) => database.folder.toLowerCase().includes(lowerBusca));

  return (
    <Container>
      <Section className="bg-warning">
        <DivInput>
          <h1>Título da Playlists</h1>
          <input placeholder="Título" type="text" value={busca} onChange={(evento) => setBusca(evento.target.value)} />
        </DivInput>
        <SelectOne>
          <h1>Ordem de Execução</h1>
          <select>
            <option>Sequêncial</option>
            <option>Aleatório</option>
          </select>
        </SelectOne>
        <SelectTwo>
          <h1>Crossfade</h1>
          <select>
            <option>1 segundo</option>
            <option>2 segundo</option>
          </select>
        </SelectTwo>
      </Section>
      <Tabs activeKey={key} onSelect={(k) => setKey(k)} className="mt-3 ps-2 rounded-top pt-1 bg-warning" >
        <Tab eventKey="music" title="Músicas"><MusicPlayList tabela={tabela} /></Tab>
        <Tab eventKey="comercial" title="Comercial"><CommercialPlayList tabela={tabela} /></Tab>
        <Tab eventKey="vinhetas" title="Vinhetas"><VignettesPlayList tabela={tabela} /></Tab>
      </Tabs>
    </Container>
  );
};

const Section = styled.section`
  display: grid;
  grid-template-columns: 3fr 2fr 2fr;
  align-items: center;
  gap: 5px;
  margin-top: 10px;
  padding: 5px 10px 15px 10px;
  border-radius: 5px;

    h1 {
      font-size: 1.1rem;
      margin-bottom: 10px;
    }

    input {
      border: none;
    }

    input,
    select {
      border-radius: 8px;
      padding: 7px 15px;
      width: 100%;
    }
`;

const DivInput = styled.div`
    grid-column: 1;
    padding: 5px 10px;
`;

const SelectOne = styled.div`
    grid-column: 2;
    padding: 5px 10px;
`;

const SelectTwo = styled.div`
    grid-column: 3;
    padding: 5px 10px;
`;
