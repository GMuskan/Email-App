import "../styles.css";
import { NavLink } from "react-router-dom";
import { EmailContext } from "../Contexts/EmailContext";
import { useContext } from "react";

export const EmailCard = ({ emails }) => {
  console.log(emails);
  const {
    handleDeleteEmailClick,
    handleMarkAsReadClick,
    handleSpamEmailClick,
    handleStarEmailClick
  } = useContext(EmailContext);
  return (
    <>
      {emails?.map((email) => (
        <div key={email.mId} className="emailCard">
          <div className="emailHeader">
            <h3>Subject: {email.subject}</h3>
            <button
              className="btn-star"
              onClick={() => handleStarEmailClick(email.mId)}
            >
              {email.isStarred ? "Un-star" : "Star"}
            </button>
          </div>
          <p className="emailContent">{email.content}</p>
          <div className="emailFooter">
            <NavLink to={`/${email.mId}`} className="emailFooterLink">
              <p>View Details</p>
            </NavLink>
            <p>
              <button
                className="btn-delete"
                onClick={() => handleDeleteEmailClick(email.mId)}
              >
                Delete
              </button>
              <button
                className="btn-read"
                onClick={() => handleMarkAsReadClick(email.mId)}
              >
                {email.unread ? "Mark As Read" : "Mark As Unread"}
              </button>
              <button
                className="btn-spam"
                onClick={() => handleSpamEmailClick(email.mId)}
              >
                Report Spam
              </button>
            </p>
          </div>
        </div>
      ))}
    </>
  );
};
