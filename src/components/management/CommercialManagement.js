import { Container, Table } from "react-bootstrap";
import styled from "styled-components";
import { useState } from "react";

import { usePagination } from "../hooks/usePagnation";
import { Button } from "../Button";

import { HiOutlineFolderOpen, HiFolderOpen } from 'react-icons/hi';
import { MdDeleteForever } from 'react-icons/md';
import { ModalExcluir } from "../ModalExcluir";
import { Pagination } from '../Pagination';

export const CommercialManegement = ({margin, tabela}) => {
  const [chosenPlayList, setchosenPlayList] = useState(null);
  
  const titlePlayList = ["Diretório / Arquivo", "Tamanho", "Data modificação", "Ações" ];

  // paginação //
  const inicial = "5";

  const [valor, setValor] =useState(inicial);
  
  function select(evento){
    const{value} = evento.target;
    setValor(value)
  }

  const { pagesVisited, pageCount, itemsPerPage, changePage } = usePagination(tabela,valor);
// fim Paginação // 

// Modal Delete 
  const [ modalDelete, setModalDelete ] = useState(false);
  const [ deleletId, setDeletId ] = useState(null);
  const [ folder, setFolder ] = useState(); 

  const toggleButtanId = (e, id, folder) => {
    setDeletId(id);
    setFolder(folder);
    setModalDelete(true);
  }

  return (
    <Container className="bg-warning rounded-bottom">
      <div className="p-2 ">
        <FolderPreview className="bg-light">
          <HiOutlineFolderOpen size="25px" />
          <p className="pt-2">{(chosenPlayList && chosenPlayList.folder) || "Nenhuma PlayList selecionada Músicas"}</p>
        </FolderPreview>
      </div>
      <Section>
        <div>
          <Button margin={"0 10px"}>Atualizar</Button>
          <Button margin={"0 10px 0 0"}>Novo Diretorio</Button>
          <Button>Enviar Arquivos</Button>
        </div>
        <div>
          <h3>Tempo Total da PlayList: </h3>
          <p>{(chosenPlayList && chosenPlayList.time) || "00:00:00"}</p>
        </div>
      </Section>
      <Table striped hover className="mt-3">
        <Thead>
          <tr>
            {titlePlayList.map((item, id) => {
              return <th key={id} className="text-center bg-warning ">{item}</th>
            })}
          </tr>
        </Thead>
        <Tbody>
          {tabela
            .slice(pagesVisited, pagesVisited + itemsPerPage)
            .map((item, id) => {
              return (
                <tr key={id} className="bg-light" onClick={() => {setchosenPlayList(item);}} >
                  <td><div><HiFolderOpen size="25px" color="#ffc107" />{item.folder}</div></td>
                  <td className="text-center pt-3">{item.size}</td>
                  <td className="text-center pt-3">{item.modificationData} - {item.modificationTime} hrs</td>
                  <td className="text-center">
                    { deleletId === item.id ? null: <MdDeleteForever size="30px" style={pointer} onClick={(e) => toggleButtanId(e, item.id,item.folder)} /> }
                    { modalDelete ? <ModalExcluir folder={folder} onClose={() => setModalDelete(false)} /> : null}
                  </td>
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
const pointer = { cursor: "pointer" };

const FolderPreview = styled.div`
  display: flex;
  gap: 10px;
  padding: 8px 16px;
  margin: 5px 0;
  border-radius: 5px;
`;

const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    
    h3 {
      font-size: 1.1rem;
      font-weight: 600;
    }
    
    p {
      font-size: 1.1rem;
      margin: 0 10px;
    }
  }
`;

const Thead = styled.thead`
  tr {
    display:grid;
    grid-template-columns: 3fr 1fr 2fr 1fr;
  }
`;

const Tbody = styled.tbody`
  div {
    display: flex;
    align-items: center;
    gap: 10px;
  }
    
  tr {
    display: grid;
    grid-template-columns: 3fr 1fr 2fr 1fr;  
    border-bottom: 0.15px solid;
  }
`;
