import { NavLink } from "react-router-dom";
export const Header = () => {
  return (
    <>
      <h1>Muskan's Mailbox</h1>
      <nav>
        <NavLink to="/" className="navName">
          Inbox
        </NavLink>{" "}
        <NavLink to="/spam" className="navName">
          Spam
        </NavLink>{" "}
        <NavLink to="/trash" className="navName">
          Trash
        </NavLink>
      </nav>
    </>
  );
};
