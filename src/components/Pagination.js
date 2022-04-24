import ReactPaginate from "react-paginate";
import styled from "styled-components";

export const Pagination = ({select,changePage,pageCount}) => {
  return(
    <DivFooter>
      <div>
        <p>Registros por página</p>
        <select onChange={select}>
          <option>5</option>
          <option>10</option>
          <option>15</option>
        </select>
      </div>
      <ReactPaginate
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        previousLabel={'Anterior'}
        nextLabel={'Próxima'}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"containerClassName"}
        previousLinkClassName={"previousLinkClassName"}
        nextLinkClassName={"nextLinkClassName"}
        disabledClassName={"disabledClassName"}
        activeClassName={"activeClassName"}
      /> 
    </DivFooter>
  )
}

const DivFooter = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 10px;
  padding-bottom: 10px;
  place-items: center;

  div {
    display: flex;
    place-items: center;

    select {
      margin-left: 10px;
      border-radius: 8px;
      padding: 4px 14px;
      width: 70px;
    }
  }

  .containerClassName {
    display: flex;
    gap: 10px;
    margin-right:10px;
    align-items: center;
    }

  .previousLinkClassName, .nextLinkClassName {
    text-decoration: none;
    color: black;
    cursor: pointer;
    }

  .disabledClassName{
    display: none;
  }

  .activeClassName{
    color: green;
    font-size: 1.2rem;
    font-weight: 700;
    :hover {
      text-decoration: underline;
      font-size: 1.4rem;
    }
  }
`;
