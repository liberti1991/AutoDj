import { Container } from "react-bootstrap";
import styled from "styled-components";

import { Button } from './Button';

export const ModalExcluir = ({ id = "modal",folder, onClose = () => {} }) => {
  const handleOutsideClick = (evento) => {
    if (evento.target.id === id) onClose();
  };

  const list = ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sabado']
  return (
    <DivModal id={id} onClick={handleOutsideClick}>
      <Div>
        <Container className="p-5 bg-warning rounded">
          <h1 className="text-center">Deseja excluir a playlist:</h1>
          <p>{folder}</p>
          <section>
            <Button onClick={onClose}>Cancelar</Button>
            <Button>Excluir</Button>
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
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Div = styled.div`
  border: 1px solid grey;
  background: white;
  border-radius: 10px;
  margin: auto 10px;  
  padding: 5px; 

  h1, p {
    font-size: 1.3rem;
    font-weight: 600;
  }

  p {
    margin: 0 7px;
    border-bottom: 1px solid black;
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
