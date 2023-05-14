import { useContext } from "react";
import { EmailContext } from "../Contexts/EmailContext";
import { TrashCard } from "../Components/TrashCard";
export const Trash = () => {
  const { state } = useContext(EmailContext);
  return (
    <>
      <h1>Trash</h1>
      <TrashCard state={state} />
    </>
  );
};
