import Types from './constants';

export function increment() {
  return {
    type: Types.INCREMENT,
  };
}

export function decrement() {
  return {
    type: Types.DECREMENT,
  };
}
