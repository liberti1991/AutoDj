import { useState } from 'react';

export const usePagination = (items,valor) => {
  const [pageNumber, setPageNumber] = useState(0);

  let itemsPerPage = valor;

  const pagesVisited = pageNumber * itemsPerPage;

  const pageCount = Math.ceil(items.length / itemsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return { pagesVisited, pageCount, itemsPerPage, changePage };
};