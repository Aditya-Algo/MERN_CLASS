import React from "react";

export default function Top() {
  return (
    <>
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Services
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            About US
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link disabled"
            href="#"
            tabIndex={-1}
            aria-disabled="true"
          >
            Contact US
          </a>
        </li>
      </ul>
    </>
  );
}
