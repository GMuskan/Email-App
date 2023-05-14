import { useContext } from "react";
import { FilterCard } from "../Components/FilterCard";
import { EmailCard } from "../Components/EmailCard";
import { EmailContext } from "../Contexts/EmailContext";

export const Inbox = () => {
  const { state } = useContext(EmailContext);
  const filteredEmails =
    state?.filters?.length === 0
      ? state.inbox
      : state?.filters?.length === 1 && state.filters.includes("isStarred")
      ? [...state.inbox.filter((email) => email.isStarred)]
      : state?.filters?.length === 1 && state.filters.includes("unread")
      ? [...state.inbox.filter((email) => email.unread)]
      : [...state.inbox.filter((email) => email.unread && email.isStarred)];
  //     : [
  //         ...state.inbox.filter(
  //           (email) => state.filters.filter((value) => email[value]).length > 0
  //         )
  //       ];
  return (
    <>
      <h1>Inbox</h1>
      <FilterCard />
      <EmailCard emails={filteredEmails} />
    </>
  );
};
