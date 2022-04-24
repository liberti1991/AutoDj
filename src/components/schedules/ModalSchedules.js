import { Container } from "react-bootstrap";
import styled from "styled-components";

import { database } from "../database";
import { Button } from '../Button';

export const ModalSchedules = ({ id = "modal", onClose = () => {} }) => {
  const handleOutsideClick = (evento) => {
    if (evento.target.id === id) onClose();
  };

  return (
    <DivModal id={id} onClick={handleOutsideClick}>
      <Div>
        <Container className="p-5 bg-warning rounded">
          <h1 className="text-center">Buscar</h1>
          <div>
            <h3>Tipo de Agendamento</h3>
            <select>
              <option>Executar Diariamente</option>
              <option>Executar Semanalmente</option>
              <option>Executar Anualmente</option>
            </select>
          </div>
          <div>
            <h3>Dias da Semana</h3>
            <select>
              <option>Seg a Sex</option>
              <option>Seg, Qua, Sex</option>
              <option>Ter, Qui</option>
              <option>Seg, Sab</option>
              <option>Seg, Dom</option>
            </select>
          </div>
          <div>
            <h3>Playlist</h3>
            <select>
              <option></option>
              {database.map((item) => {
                return (
                    <option>{item.folder}</option>
                  );
              })}
            </select>
          </div>
          <section>
            <div>
              <label>Iniciar as:</label>
              <input type="time"/>
            </div>
            <div>
              <label>Terminara as:</label>
              <input type="time"/>
            </div>
          </section>
          <section className="d-flex mt-4 justify-content-end">
            <Button onClick={onClose}>Cancelar</Button>
            <Button>Salvar</Button>
          </section>
        </Container>
      </Div>
    </DivModal>
  );
};

const DivModal = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Div = styled.div`
  border: 1px solid grey;
  background: white;
  border-radius: 10px;
  padding: 20px 10px;
  margin: auto 10px;  
  width: 55vw;
  padding: 5px; 

  h1 {
    font-size: 1.3rem;
    font-weight: 600;
  }

  div {
    width: 100%;
    padding: 5px 0;

    h3 {
      font-size: 1.2rem;
      padding: 10px 0;
    }

    select {
      width: 100%;
      padding: 10px 0;
      border: none;
      border-radius: 10px;
    }
  }
  
  section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px;
    
    div {
      label {
        font-size: 1.2rem;
        padding: 10px 0 ;
      }

      input {
        width: 100%;
        padding: 10px 10px 10px 30px;
        border: none;
        border-radius: 10px;
      }
    }
  }
`;
