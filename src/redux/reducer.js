import Types from './constants';

export default function counter(state = 0, action) {
  switch (action.type) {
    case Types.INCREMENT:
      return state + 1;
    case Types.DECREMENT:
      return state - 1;
    default:
      return state;
  }
}
