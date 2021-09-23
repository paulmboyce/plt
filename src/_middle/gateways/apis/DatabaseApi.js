export const METHOD_GET = "GET";

// REFACTOR: Push to .env using dotenv package
const DATABASE_BASE_URL =
  "https://my-json-server.typicode.com/benirvingplt/products";

const buildDatabaseUrl = (dataLocation) => {
  return DATABASE_BASE_URL + "/" + dataLocation;
};

const callDatabaseApi = ({ method, headers, collection = "", bodyData }) => {
  const options = { method: method, headers: headers };
  if (bodyData) options.body = JSON.stringify(bodyData);
  if (headers) options.headers = headers;

  return fetch(buildDatabaseUrl(collection), options)
    .then((response) => {
      if (!response.ok) {
        throw new Error("callDatabaseApi() -> Did not respond 200 OK");
      }
      return response.json();
    })
    .then((jsonData) => jsonData)
    .catch((err) => {
      console.log("Error in callDatabaseApi()... ", err);
      throw err;
    });
};

export { callDatabaseApi };
