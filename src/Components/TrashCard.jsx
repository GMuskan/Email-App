import { NavLink } from "react-router-dom";
export const TrashCard = ({ state }) => {
  console.log(state);
  return (
    <>
      {state?.trash?.length ? (
        state?.trash?.map((email) => (
          <div className="emailCard" key={email.mId}>
            <div className="emailHeader">
              <h3>Subject: {email.subject}</h3>
            </div>
            <p className="emailContent">{email.content}</p>
            <div className="emailFooter">
              <NavLink to={`/${email.mId}`} className="emailFooterLink">
                ViewDetails
              </NavLink>
              <button className="btn-read">Restore Email</button>
            </div>
          </div>
        ))
      ) : (
        <div>No Trashed Emails</div>
      )}
    </>
  );
};
