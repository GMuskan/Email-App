import { useContext } from "react";
import { EmailContext } from "../Contexts/EmailContext";

export const FilterCard = () => {
  const { state, dispatch } = useContext(EmailContext);

  const handleCheckBox = (e) => {
    if (e.target.checked) {
      dispatch({
        type: "FILTER_EMAILS",
        payload: [...state.filters, e.target.value]
      });
    } else {
      const updatedFilters = state.filters.filter(
        (value) => value !== e.target.value
      );
      dispatch({ type: "FILTER_EMAILS", payload: updatedFilters });
    }
  };

  console.log(state.filters);
  return (
    <>
      <fieldset className="filterCard">
        <legend>Filters:</legend>
        <input
          type="checkbox"
          value="isStarred"
          id="star"
          onChange={(e) => handleCheckBox(e)}
        />
        <label htmlFor="star">Show Starred emails</label>
        <input
          type="checkbox"
          value="unread"
          id="unread"
          onChange={(e) => handleCheckBox(e)}
        />
        <label htmlFor="unread">Show Unread emails</label>
      </fieldset>
    </>
  );
};
