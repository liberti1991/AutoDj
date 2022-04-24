import { Container, Table } from "react-bootstrap";
import styled from "styled-components";
import { useState } from "react";
import { Link } from "react-router-dom";

import { BiEditAlt } from 'react-icons/bi';
import { AiOutlineCloudDownload } from 'react-icons/ai';
import { BsPlayBtn, BsPauseBtn }  from 'react-icons/bs';
import { MdDeleteForever } from 'react-icons/md';

import { usePagination } from "../hooks/usePagnation";
import { database } from "../database";
import { Pagination } from "../Pagination";

export const DownloadMusic = ({children}) => {

  const headersTable = ["Título", "Tempo", "Data Download", "Ações"];

// paginação //
  const inicial = "5";

  const [valor, setValor] = useState(inicial);
  
  function select(evento){
    const{value} = evento.target;
    setValor(value)
  }

  const { pagesVisited, pageCount, itemsPerPage, changePage } = usePagination(database,valor);
// fim Paginação // 

// filter
const [busca, setBusca] = useState('');
const lowerBusca = busca.toLowerCase();
const tabela = database.filter((database) => database.folder.toLowerCase().includes(lowerBusca));

// buttom Play and Pause
const [playlistId, setPlaylistId] = useState(null);

const toggleButtanHeandler = (e, id) => {
  setPlaylistId(id);
}

  return ( 
    <Container className="p-2 rounded-bottom mb-5 bg-warning">
      <TopTable>
        <p>{database.length} Playlists</p>
          <div>
            <p>Buscar:</p>
            <input placeholder="Título" type="text" value={busca} onChange={(evento) => setBusca(evento.target.value)} />
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
                  <td className="text-center pt-3">{item.time}</td>
                  <td className="text-center pt-3">{item.download}</td>
                  <Td>
                    { playlistId === item.id ?
                      <BsPauseBtn size="25px" style={pointer} color="red" title="Pause" onClick={(e) => toggleButtanHeandler(e, item.id)} /> :
                      <BsPlayBtn size="25px" style={pointer} color="green" title="Play" onClick={(e) => toggleButtanHeandler(e, item.id)} />  
                    }
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
    grid-template-columns: 4fr 1fr 1fr 2fr;
  }
`;

const Tbody = styled.tbody`
  tr {
    display:grid;
    grid-template-columns: 4fr 1fr 1fr 2fr;
  }
`;

const Td =styled.td`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
