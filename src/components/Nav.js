import React from "react";
import styled from "styled-components";
import { useHistory, NavLink } from "react-router-dom";

const Nav = ({setIsLoggedIn }) => {
  const history = useHistory();

  return (
    <NavContainer className="bg-warning">
        <H1>AUTO DJ</H1>
        <NavBar>
          {/* <Teste activeClassName="ativo" to="/home"> Transmissão</Teste> */}
          <Teste activeClassName="ativo" to="/home"> Cliente</Teste>
          <Teste activeClassName="ativo" to="/cadastro"> Cadastro</Teste>
          <Teste activeClassName="ativo" to="/gerenciar"> Gerenciar Músicas</Teste>
          <Teste activeClassName="ativo" to="/createPlayList" > Criar Playlist</Teste>
          <Teste activeClassName="ativo" to="/agendamentos"> Agendamentos </Teste>
          <Button onClick={() => {setIsLoggedIn(false);  history.push("/") }}> Logout</Button>
        </NavBar>
    </NavContainer>
  );
};

const NavContainer = styled.div`
  min-height: 10vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const NavBar = styled.div`
  display: flex;

  .ativo {
    color: red;
    font-weight: 600;
  }
`;

const Teste = styled(NavLink)`
  border: none;
  text-decoration: none;
  color: black;
  cursor: pointer;
  padding: 5px;
  display: flex;
  margin-right: 10px;
  transition: all 0.3s ease;

  :last-child {
    margin-right: 0;
    background-color: black;
    color: white;
    padding: 5px 10px;
  }

  &:hover {
    color: red;
    text-decoration: underline;
  }
`;

const H1 = styled.h1`
  font-size: 1.7rem;
  font-weight: bold;
  transition: all 0.5s ease;
`;

const Button = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 5px;
  display: flex;
  margin-right: 10px;
  transition: all 0.3s ease;

  :last-child {
    margin-right: 0;
    background-color: black;
    color: white;
    padding: 5px 10px;
  }

  &:hover {
    color: red;
    text-decoration: underline;
  }
`;

export default Nav;
