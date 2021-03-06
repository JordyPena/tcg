import React from "react";
import "../styling/pagination.css";
export default function Pagination({ numberOfPages, paginate, match }) {
  const pages = new Array(numberOfPages).fill(1);
  return (
    <div className="pages-container">
      {/* get all pages */}
      {pages.map((page, index) => {
        return (
          <li key={index + 1} className="pages">
            <button
              className={`button-styling ${
                parseInt(match.params.page) === index + 1
                  ? "current-page-button"
                  : ""
              }`}
              onClick={() => paginate(index + 1)}
            >
              <div className="page-number">{index + 1}</div>
            </button>
          </li>
        );
      })}
    </div>
  );
}
