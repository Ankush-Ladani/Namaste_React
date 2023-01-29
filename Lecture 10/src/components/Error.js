import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  const { status, statusText } = err;
  return (
    <div>
      <h1> {status + " Code : " + statusText} </h1>
    </div>
  );
};

export default Error;
