export const initialState = {
  inbox: [],
  spam: [],
  trash: [],
  filters: []
};

export const emailReducer = (state, action) => {
  // console.log(action.payload);
  switch (action.type) {
    case "SET_INBOX":
      return { ...state, inbox: action.payload.inbox };
    case "DELETE_EMAIL":
      return {
        ...state,
        inbox: action.payload.updatedInbox,
        trash: action.payload.trashedEmails
      };
    case "SPAM_EMAIL":
      return {
        ...state,
        inbox: action.payload.updatedInbox,
        spam: action.payload.trashedEmails
      };
    case "STAR_EMAIL":
      return {
        ...state,
        inbox: action.payload.updatedInbox
      };
    case "MARK_AS_READ":
      return {
        ...state,
        inbox: action.payload.updatedInbox
      };
    case "FILTER_EMAILS":
      return {
        ...state,
        filters: action.payload
      };
    default:
      return state;
  }
};
