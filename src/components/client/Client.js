import styled from "styled-components";
import { useState } from "react";
import { Container, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

import {usePagination} from "../hooks/usePagnation";
import { Button } from "../Button";
import { datacliente } from "../datacliente";
import { Pagination } from "../Pagination";

import { BsShieldFillCheck, BsFillShieldSlashFill } from 'react-icons/bs';
import { BiEditAlt } from 'react-icons/bi';
import { GrLogin } from 'react-icons/gr';

export const Client = () => {

  const headersTable = ["Cliente", "Nº de lojas", "Nº de playlist", "Ações"];

// paginação //
  const inicial = "5";

  const [valor, setValor] =useState(inicial);
  
  function select(evento){
    const{value} = evento.target;
    setValor(value)
  }

  const { pagesVisited, pageCount, itemsPerPage, changePage } = usePagination(datacliente,valor);
// fim Paginação // 

// filter
  const [busca, setBusca] = useState('');
  const lowerBusca = busca.toLowerCase();
  const tabela = datacliente.filter((datacliente) => datacliente.client.toLowerCase().includes(lowerBusca));

  return (
    <Container>
      <header className="d-flex justify-content-end ms-5 me-3 py-4">
        <Button>Criar Playlist</Button>
      </header>
      <Container className="p-2 rounded bg-warning">
        <TopTable>
          <p>{datacliente.length} Clientes</p>
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
                    <td className="pt-3">{item.client}</td>
                    <td className="text-center pt-3">{item.number}</td>
                    <td className="text-center pt-3">{item.playlist}</td>
                    <Td>
                      <Link to="/gerenciar"><GrLogin size="25px" style={pointer} color="black" title="Entrar" /></Link>
                      <Link to="/cadastro"><BiEditAlt size="25px" style={pointer} color="black" title="Editar"/></Link>
                      {item.status ? <BsShieldFillCheck size="25px" style={pointer} color="green" title="Desativar"/> : <BsFillShieldSlashFill size="25px" style={pointer} title="Ativar" />}
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
    grid-template-columns: 2fr 1fr 1fr 1fr;
  }
`;

const Tbody = styled.tbody`
  tr {
    display:grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;
  }
`;

const Td =styled.td`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;