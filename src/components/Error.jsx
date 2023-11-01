import { useRouteError } from "react-router-dom";
import Navbar from "./Navbar";

const Error = () => {
  const error = useRouteError();
  return (
    <>
      <Navbar />
      <div id="error-message">
        <h1>Oops, Something went wrong</h1>
        {error.status ? (
          <p>
            {error.status} - {error.statusText}
          </p>
        ) : (
          <p>Try again later</p>
        )}
      </div>
    </>
  );
};

export default Error;
