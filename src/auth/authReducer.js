import ENV from '../env';

const INITIAL_STATE = {
  user: JSON.parse(localStorage.getItem(ENV.APP.USER_KEY)),
  validToken: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'TOKEN_VALIDATED':
      if (action.payload) {
        return { ...state, validToken: true };
      } else {
        localStorage.removeItem(ENV.APP.USER_KEY);
        return { ...state, validToken: false, user: null };
      }
    case 'USER_FETCHED':
      localStorage.setItem(ENV.APP.USER_KEY, JSON.stringify(action.payload));
      return { ...state, user: action.payload, validToken: true };
    default:
      return state;
  };
};
