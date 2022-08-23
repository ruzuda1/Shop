import React from 'react';
import ReactPaginate from 'react-paginate';
import style from './pagination.module.scss';

export const PaginationList = (props) => {
  return (
    <div>
      <ReactPaginate
        className={style.pagination}
        breakLabel="..."
        nextLabel="next >"
        onPageChange={(e) => props.onChange(e.selected + 1)}
        pageRangeDisplayed={8}
        pageCount={3}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </div>
  );
};
