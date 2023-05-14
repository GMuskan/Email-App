import { createContext, useEffect, useReducer } from "react";
import { emailReducer, initialState } from "../Reducers/emailReducer";
import { mails } from "../data/data";

export const EmailContext = createContext();

export const EmailProvider = ({ children }) => {
  const [state, dispatch] = useReducer(emailReducer, initialState);
  const { inbox, spam, trash } = state;

  const handleDeleteEmailClick = (id) => {
    const updatedInox = inbox.filter((email) => email.mId !== id);
    const trashedEmail = inbox.filter((email) => email.mId === id);
    dispatch({
      type: "DELETE_EMAIL",
      payload: {
        updatedInbox: updatedInox,
        trashedEmails: [...trash, ...trashedEmail]
      }
    });
  };

  const handleStarEmailClick = (id) => {
    const updatedInbox = inbox.map((email) =>
      email.mId === id ? { ...email, isStarred: !email.isStarred } : email
    );
    dispatch({ type: "STAR_EMAIL", payload: { updatedInbox: updatedInbox } });
  };

  const handleMarkAsReadClick = (id) => {
    const updatedInbox = inbox.map((email) =>
      email.mId === id ? { ...email, unread: !email.unread } : email
    );
    dispatch({ type: "MARK_AS_READ", payload: { updatedInbox: updatedInbox } });
  };

  const handleSpamEmailClick = (id) => {
    const updatedInox = inbox.filter((email) => email.mId !== id);
    const spammedEmail = inbox.filter((email) => email.mId === id);
    dispatch({
      type: "SPAM_EMAIL",
      payload: {
        updatedInbox: updatedInox,
        trashedEmails: [...spam, ...spammedEmail]
      }
    });
  };

  useEffect(() => {
    dispatch({ type: "SET_INBOX", payload: { inbox: mails } });
  }, []);
  return (
    <EmailContext.Provider
      value={{
        state,
        dispatch,
        handleDeleteEmailClick,
        handleMarkAsReadClick,
        handleSpamEmailClick,
        handleStarEmailClick
      }}
    >
      {children}
    </EmailContext.Provider>
  );
};
