import React from 'react';

// o match está dentro de props e dentro de match tem params, onde estarão os parâmetros;
export default function Repository({ match }) {
  return <h1>Repository: {decodeURIComponent(match.params.repository)}</h1>;
}
