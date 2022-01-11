import React from 'react';
import ReactPaginate from 'react-paginate';

import PaginationProps from './PaginationProps';
import styles from './Pagination.module.scss';

class Pagination extends React.PureComponent<PaginationProps> {
  constructor(props: PaginationProps) {
    super(props);
  }

  render () {
    const {
      pageCount = 0,
      currentPage = 1,
    } = this.props;

    if (pageCount > 0) {
      return (
        <div className = { styles.Pagination }>
          <ReactPaginate
            pageRangeDisplayed = {3}
            marginPagesDisplayed = {1}
            pageCount = {pageCount}
            initialPage = {currentPage-1}
            forcePage = {currentPage-1}
            pageClassName = { styles.BtnWrapper }
            pageLinkClassName = { styles.Number }
            previousClassName = { styles.BtnWrapper }
            previousLinkClassName = { styles.BackBtn }
            nextClassName = { styles.BtnWrapper }
            nextLinkClassName = { styles.ForwardBtn }
            disabledClassName = { styles.BtnWrapper_disabled }
            breakLabel = '...'
            breakClassName = { styles.BtnWrapper }
            breakLinkClassName = { styles.Number }
            containerClassName = { styles.Wrapper }
            activeClassName = { styles.BtnWrapper_current }
            renderOnZeroPageCount = {() => { return null; }}
          />
        </div>
      )
    } else {
      return null;
    }
  }
}

export {
  PaginationProps,
}
export default Pagination;