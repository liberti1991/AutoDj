import styled from "styled-components";

export const Button = ({children, margin, onClick}) => {
  return(
    <Botao margin={margin} onClick={onClick}>{children}</Botao>
  )
}

const Botao = styled.button`
  background: red;
  border: none;
  padding: 6px 18px;
  transition: 0.25s;
  border-radius: 5px;
  color: white;
  margin: ${props => props.margin};
  
  :hover {
    color: black;
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
      0 17px 50px 0 rgba(0, 0, 0, 0.19);
  }
`;