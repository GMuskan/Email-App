import { EmailContext } from "../Contexts/EmailContext";
import { useContext } from "react";
import { SpamCard } from "../Components/SpamCard";
export const Spam = () => {
  const { state } = useContext(EmailContext);
  return (
    <>
      <h1>Spam</h1>
      <SpamCard state={state} />
    </>
  );
};
