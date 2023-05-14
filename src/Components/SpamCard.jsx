import { NavLink } from "react-router-dom";
export const SpamCard = ({ state }) => {
  console.log(state);
  return (
    <>
      {state?.spam?.length ? (
        state?.spam?.map((email) => (
          <div className="emailCard" key={email.mId}>
            <div className="emailHeader">
              <h3>Subject: {email.subject}</h3>
            </div>
            <p className="emailContent">{email.content}</p>
            <div className="emailFooter">
              <NavLink to={`/${email.mId}`} className="emailFooterLink">
                ViewDetails
              </NavLink>
              <button className="btn-read">Move to Inbox</button>
            </div>
          </div>
        ))
      ) : (
        <div>No Spam Emails</div>
      )}
    </>
  );
};
