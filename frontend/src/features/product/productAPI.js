/* eslint-disable no-async-promise-executor */
/* eslint-disable no-unused-vars */
export function fetchAllProducts(amount = 1) {
  return new Promise(async (resolve) => {
    //TODO: we will not hard-code server url here
    const response = await fetch("http://localhost:3000/products");
    const data = await response.json();
    resolve({ data });
  });
}

export function fetchProductsByFilters(filter) {
  // filter = {"category":"smartphone"}
  // TODO : on server we will support multi values
  let queryString = "";
  for (let key in filter) {
    queryString += `${key}=${filter[key]}&`;
  }

  return new Promise(async (resolve) => {
    //TODO: we will not hard-code server URL here
    const response = await fetch(
      "http://localhost:3000/products?" + queryString
    );
    const data = await response.json();
    resolve({ data });
  });
}
