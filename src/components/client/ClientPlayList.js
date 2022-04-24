import { Container, Table } from "react-bootstrap";
import styled from "styled-components";
import { useState } from "react";

import {usePagination} from "../hooks/usePagnation";
import { Button } from "../Button";
import { database } from "../database";
import { Pagination } from "../Pagination";

import { BiEditAlt } from 'react-icons/bi';
import { AiOutlineCloudDownload } from 'react-icons/ai';
import { MdDeleteForever } from 'react-icons/md';
import { Link } from "react-router-dom";

export const ClientPlayList = ({children}) => {

  const headersTable = ["Título", "Ordem", "Crossfade", "Tempo", "Ações"];

// paginação //
  const inicial = "5";

  const [valor, setValor] =useState(inicial);
  
  function select(evento){
    const{value} = evento.target;
    setValor(value)
  }

  const { pagesVisited, pageCount, itemsPerPage, changePage } = usePagination(database,valor);
// fim Paginação // 

//Filter
  const [ busca, setBusca ] = useState('');
  const lowerBusca = busca.toLowerCase();
  const tabela = database.filter((database) => database.folder.toLowerCase().includes(lowerBusca));

  return (
    <Container>
      <header className="d-flex justify-content-between ms-5 me-3 py-4">
        <Title>PlayList's</Title>
        <Button>Criar Playlist</Button>
      </header>
      <Container className="p-2 rounded bg-warning">
        <TopTable>
          <p>{database.length} Playlists</p>
            <div>
              <p>Buscar:</p>
              <input placeholder="Titulo" type="text" value={busca} onChange={(e) => setBusca(e.target.value)} />
            </div>
        </TopTable>
        <Table striped bordered hover variant="light">
          <Thead className="text-center fw-bold">
            <tr>
              {headersTable.map((item, id) => {
                return <td key={id}>{item}</td>;
              })}
            </tr>
          </Thead>
          <Tbody>
            {tabela
              .slice(pagesVisited, pagesVisited + itemsPerPage)
              .map((item) => {
                return (
                  <tr key={item.id}>
                    <td className="pt-3">{item.folder}</td>
                    <td className="text-center pt-3">{item.order}</td>
                    <td className="text-center pt-3">{item.crossfade}</td>
                    <td className="text-center pt-3">{item.time}</td>
                    <Td>
                      <BiEditAlt size="25px" style={pointer} title="Editar" />
                      <Link to="/download"><AiOutlineCloudDownload size="25px" style={pointer} color="black" title="Baixar" /></Link>
                      <MdDeleteForever size="25px" style={pointer} title="Excluir" />
                    </Td>
                  </tr>
                );
              })
            }
          </Tbody>
        </Table>
      </Container>
      <Pagination onChange={select} pageCount={pageCount} changePage={changePage}/>
    </Container>
  );
};

const pointer = {cursor: "pointer"};

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
`;

const TopTable = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: center;
  padding: 10px 0;

  p {
     margin-left: 20px;
    font-size: 1.1rem;
  }

  div {
    display: flex;
    align-items: center;

    p {
      margin-right: 10px;
    }

    input {
      width: 500px;
      border: none;
      padding: 5px 10px;
      border-radius: 5px;
      margin-right: 15px;
    }
  }
`;

const Thead = styled.thead`
  tr {
    display:grid;
    grid-template-columns: 3fr 1fr 1fr 1fr 1fr;
  }
`;

const Tbody = styled.tbody`
  tr {
    display:grid;
    grid-template-columns: 3fr 1fr 1fr 1fr 1fr;
  }
`;

const Td =styled.td`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
