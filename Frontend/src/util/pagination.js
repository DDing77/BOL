import React from "react";

export const Pagination = ({ imagePerPage, totalImages, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalImages / imagePerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul>
        {pageNumbers.map((num) => (
          <li key={num}>
            <a onClick={() => paginate(num)} href="!#">
              {" "}
              {num}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
