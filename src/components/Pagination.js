import React from 'react';
import "../styling/pagination.css"
export default function Pagination({ postsPerPage, totalPosts, paginate }) {
  const pageNumbers = [];

  for (let i=1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="pages-container">
      {/* get all pages */}
      {pageNumbers.map((page) => (
        <li key={page} className="pages">
          <button className="button-styling" onClick={() => paginate(page)}>
            <div className="page-number">

            {page}
            </div>
          </button>
        </li>
      ))}
    </div>
  )
}