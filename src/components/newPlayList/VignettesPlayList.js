import styled from "styled-components";
import { useState } from "react";
import { ListGroup, Table } from "react-bootstrap";

import { HiOutlineFolderOpen, HiFolderOpen } from 'react-icons/hi';
import { MdDeleteForever } from 'react-icons/md';

import { Button } from "../Button";

export const VignettesPlayList = ({ children, margin, tabela }) => {
  const [chosenPlayList, setchosenPlayList] = useState(null);

  const titlePlayList = ["Música", "Artista", "Albúm", "Ação"];

  return (
    <>
      <div className="bg-warning rounded-bottom">
        <div className="p-2 ">
          <FolderPreview className="bg-light">
            <HiOutlineFolderOpen size="25px" />
            <p>{(chosenPlayList && chosenPlayList.folder) || "Nenhuma PlayList selecionada Músicas"}</p>
          </FolderPreview>
        </div>
      <Button margin={"0 10px"}>Adicionar todos os arquivos desta pasta</Button>
        <Section>
          <DivOne>
            <Ul>
              {tabela.map((item, id) => {
                return (
                  <ListGroup.Item action variant="light" key={id} onClick={() => {setchosenPlayList(item);}}>
                    <DivImg>
                      <HiFolderOpen size="25px" color="#ffc107" />
                      <p>{item.folder}</p>
                    </DivImg>
                  </ListGroup.Item>
                );
              })}
            </Ul>
          </DivOne>
          <DivTwo>
            <DivTable>
              <Table striped hover>
                <Thead>
                    <tr>
                      {titlePlayList.map((item, id) => {
                        return (
                          <th key={id} className="text-center fw-bold">{item}</th>
                        );
                      })}
                    </tr>
                </Thead>
                <Tbody>
                  {chosenPlayList && chosenPlayList.tracks.map((item, id) => {
                    return (
                      <tr key={id}>
                        <td className="pt-3">{item.name}</td>
                        <td className="text-center pt-3">{item.artist}</td>
                        <td className="text-center pt-3">{item.album}</td>
                        <td className="text-center"><MdDeleteForever size="30px" style={pointer} /></td>
                      </tr>
                    );
                  })}
                </Tbody>
              </Table>
            </DivTable>
          </DivTwo>
        </Section>
      </div>          
      <Button margin={"10px 0"}>Criar Playlist</Button>
    </>
  );
};

const pointer = { cursor: "pointer" };

const FolderPreview = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 8px 16px;
    border-radius: 5px;
`;

const Section = styled.section`
    display: grid;
    padding: 10px;
    gap: 10px;
    grid-template-columns: 1fr 2fr;
`;

const DivOne = styled.div`
    grid-column: 1;
`;

const Ul = styled.ul`
    height: 280px;
    overflow-y: auto;
    background: white;
`;

const DivImg = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const DivTwo = styled.div`
    grid-column: 2;
`;

const DivTable = styled.div`
    overflow-y: auto;
    background: white;
    height: 280px;
`;

const Thead = styled.thead`
    background: lightgray;
    tr {
    display: grid;
    grid-template-columns: 3fr 2fr 2fr 1fr;
  }
`;

const Tbody = styled.tbody`
  tr {
    display: grid;
    border-bottom: 0.15px solid;
    grid-template-columns: 3fr 2fr 2fr 1fr;
  }
`;