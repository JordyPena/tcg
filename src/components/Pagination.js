import React from 'react';
import "../styling/pagination.css"
export default function Pagination({ numberOfPages, paginate, pokemonName }) {
  
  console.log(numberOfPages)
  const pages = new Array(numberOfPages).fill(1)
  return (
    <div className="pages-container">
      {/* get all pages */}
      {pages.map((page, index) => {
        console.log(page, index)
        return (
          <li key={index + 1} className="pages">
            <button className="button-styling" onClick={() => paginate(index + 1, pokemonName)}>
              <div className="page-number">

              {index + 1}
              </div>
            </button>
          </li>
        )}
      )}
    </div>
  )
}