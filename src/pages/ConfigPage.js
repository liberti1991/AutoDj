import { Container, Tabs, Tab } from "react-bootstrap";
import { useState } from "react";
import styled from "styled-components";

import { database } from "../components/database";
import { MusicManegement } from '../components/management/MusicManegement';
import { CommercialManegement } from "../components/management/CommercialManagement";
import { VignettesManegement } from "../components/management/VignettesManagement";

export const ConfigPage = () => {
  const [key, setKey] = useState();

   //Filter
   const [ busca, setBusca ] = useState('');
   const lowerBusca = busca.toLowerCase();
   const tabela = database.filter((database) => database.folder.toLowerCase().includes(lowerBusca));

  return (
    <>
      <Container>
        <Search className="bg-warning">
          <p>Buscar:</p>
          <input placeholder="Titulo" type="text" value={busca} onChange={(e) => setBusca(e.target.value)} />
        </Search>
      </Container>
      <Container>
        <Tabs activeKey={key} onSelect={(k) => setKey(k)} className="mt-3 ps-2 rounded-top pt-1 bg-warning" >
          <Tab eventKey="music" title="Músicas"><MusicManegement tabela={tabela} /></Tab>
          <Tab eventKey="comercial" title="Comercial"><CommercialManegement tabela={tabela}/></Tab>
          <Tab eventKey="vinhetas" title="Vinhetas"><VignettesManegement tabela={tabela} /></Tab>
        </Tabs>
      </Container>
    </>
  );
};

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
