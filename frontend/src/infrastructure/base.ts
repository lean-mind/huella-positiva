const BASE_URI = process.env.REACT_APP_BASE_URI
  ? `${process.env.REACT_APP_BASE_URI}`
  : `http://localhost:3000`;
const BASE_API = process.env.REACT_APP_BASE_API
  ? `${process.env.REACT_APP_BASE_API}`
  : `http://localhost:3000`;
export const BASE = {
  URI: BASE_URI,
  API: BASE_API,
};
