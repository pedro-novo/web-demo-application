// name
// email
// description
// location
// date for contact

import { ContactState, initialContactState } from './contact-state';

enum ContactActionType {
  SetName,
  SetEmail,
  SetDescription,
  SetLocation,
  SetDate,
}

interface SetNameAction {
  type: ContactActionType.SetName;
  payload: { name: string };
}

interface SetEmailAction {
  type: ContactActionType.SetEmail;
  payload: { email: string };
}
interface SetDescriptionAction {
  type: ContactActionType.SetDescription;
  payload: { description: string };
}
interface SetLocationAction {
  type: ContactActionType.SetLocation;
  payload: { location: string };
}
interface SetDateAction {
  type: ContactActionType.SetDate;
  payload: { date: string };
}

type ContactAction = SetNameAction | SetEmailAction | SetDescriptionAction | SetLocationAction | SetDateAction;

// REDUCER

function contactReducer(state: ContactState = initialContactState, action: ContactAction) {
  switch (action.type) {
    case ContactActionType.SetName:
      return {
        ...state,
        name: action.payload.name,
      };
    case ContactActionType.SetEmail:
      return {
        ...state,
        email: action.payload.email,
      };
    case ContactActionType.SetDescription:
      return {
        ...state,
        description: action.payload.description,
      };
    case ContactActionType.SetLocation:
      return {
        ...state,
        location: action.payload.location,
      };
    case ContactActionType.SetDate:
      return {
        ...state,
        date: action.payload.date,
      };
    default:
      return state;
  }
}

type ContactDispatch = (action: ContactAction) => void;

type ContactReducerFn<T> = {
  (payload: T, dispatch: ContactDispatch): void;
};

// METHODS

const setName: ContactReducerFn<{ name: string }> = (payload, dispatch) =>
  dispatch({
    type: ContactActionType.SetName,
    payload,
  });

const setEmail: ContactReducerFn<{ email: string }> = (payload, dispatch) =>
  dispatch({
    type: ContactActionType.SetEmail,
    payload,
  });

const setDescription: ContactReducerFn<{ description: string }> = (payload, dispatch) =>
  dispatch({
    type: ContactActionType.SetDescription,
    payload,
  });

const setLocation: ContactReducerFn<{ location: string }> = (payload, dispatch) =>
  dispatch({
    type: ContactActionType.SetLocation,
    payload,
  });

const setDate: ContactReducerFn<{ date: string }> = (payload, dispatch) =>
  dispatch({
    type: ContactActionType.SetDate,
    payload,
  });

// HELPER FUNCTIONS

const helperFunctions = (dispatch: ContactDispatch) => ({
  setName: (name: string) => setName({ name }, dispatch),
  setEmail: (email: string) => setEmail({ email }, dispatch),
  setDescription: (description: string) => setDescription({ description }, dispatch),
  setLocation: (location: string) => setLocation({ location }, dispatch),
  setDate: (date: string) => setDate({ date }, dispatch),
});

export type { ContactDispatch, ContactAction, ContactActionType };
export { helperFunctions, contactReducer };
