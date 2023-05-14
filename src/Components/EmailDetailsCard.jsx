import { useParams } from "react-router-dom";

export const EmailDetailsCard = () => {
  const { emailId } = useParams();
  return (
    <>
      <h1>Email Details</h1>
      <p>{emailId}</p>
    </>
  );
};
