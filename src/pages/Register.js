import { Container } from "react-bootstrap"
import styled from "styled-components"
import { Button } from "../components/Button"

export const Register = ({margin}) => {
  return (
    <Container>
      <div className="d-flex justify-content-end">
        <Button margin={"15px 5px"} >Cadastrar</Button>
      </div>
      <h3 className="bg-warning rounded mb-1 p-3">Cadastro Cliente:</h3>
      <Form>
        <label for="name">Cliente:</label>
        <input id="name" placeholder="Digite seu nome" required/>
        <div>
          <label for="ramo">Ramo de Atividade:</label>
          <input id="ramo" placeholder="Ramo de atividade" />
        </div>
        <div>
          <label for="lojas">Número de Lojas:</label>
          <input id="lojas" placeholder="Número de lojas"/>
        </ div>
        <label for="endereco">Endereço Principal:</label>
        <input id="endereco" placeholder="Endereço" required/>
        <div>
          <label for="cidade">Cidade:</label>
          <input id="cidade" placeholder="Cidade" />
        </div>
        <div>
          <label for="cep">CEP:</label>
          <input id="cep" placeholder="CEP" />
        </div>
        <label for="telefone">Telefone:</label>
        <input id="telefone" placeholder="(41) 9 0000-0000" />
        <label for="razao">Razão Social:</label>
        <input id="razao" placeholder="Razão social" required/>
        <div>
          <label for="cnpj">CNPJ:</label>
          <input id="cnpj" placeholder="CNPJ" />
        </div>
        <div>
          <label for="data">Data de cobrança:</label>
          <input id="data" placeholder="Data de cobrança" />
        </div>
          <label for="responsavel">Responsável:</label>
          <input id="responsavel" placeholder="Responsável" />
        <div>
          <label for="contato">Telefone de contato:</label>
          <input id="contato" placeholder="Telefone de contato" />
        </div>
        <div>
          <label for="cpf">CPF:</label>
          <input id="cpf" placeholder="CPF" />
        </div>
        <div>
          <label for="email">E-mail:</label>
          <input id="email" placeholder="Cliente@autodj.com.br" />
        </div>
        <div>
          <label for="site">Site:</label>
          <input id="site" placeholder="www.autodj.com.br" />
        </div>
        <label for="inicio">Inicio do contrato:</label>
        <input id="inicio" />
        <label for="obs">OBS:</label>
        <input id="obs" />
      </Form>
    </Container>
  )
}

const Form = styled.form`
  display: grid; 
  grid-template-columns: 2fr 4fr 2fr 3fr;
  align-items: center;

  label {
    padding-left: 15px;
    width: 200px;
  }
  
  input {
    background: #e9e9e9;
    border: none;
    width: 100%;
    padding: 7px 15px;
    border-radius: 5px;
    margin: 1.5px 0;
    grid-column: span 3;
  }
  
  div{
    display: grid; 
    grid-column: span 2;
    grid-template-columns: 2fr 4fr;
    align-items: center;

    label {
      padding-left: 15px;
      grid-column: 1;
      width: 200px;
    }
    
    input {
      grid-column: 2;
      background: #e9e9e9;
      border: none;
      width: 100%;
      padding: 7px 15px;
      border-radius: 5px;
      margin: 1.5px 0;
    }
  }
`;