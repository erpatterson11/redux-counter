// change this to true to see test results on the black diamond section.
export const BLACK_DIAMOND = true;


// helps avoid typos by using a variable to store strings
const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'
const UNDO = 'UNDO'


// "action creator"
// creates an action (object)
export function increment(amt) {
  return {
    type: INCREMENT,
    payload: amt
  }
}

export function decrement(amt) {
  return {
    type: INCREMENT,
    payload: amt
  }
}

export function undo() {
  return {
    type: UNDO
  }
}


// any value you use in the lifetime of your app should be placed on the initial state
// helps you keep track of your state variables
let initialState = {
  counter: 0,
  futureValues: [],
  pastValues: []
}


export default function reducer(state = initialState, action) {
    switch(action.type) {
      case INCREMENT:
        return Object.assign({}, state, {
          counter: state.counter + action.payload,
          futureValues: [],
          previousValues: [ state.currentValue, ...state.previousValues ]
        })
      case DECREMENT:
        return Object.assign({}, state, {
          counter: state.counter - action.payload,
          futureValues: [],
          previousValues: [ state.currentValue, ...state.previousValues ]
        })
      case UNDO:
        return Object.assign({}, state, {
          counter: state.previousValues[0],
          futureValues: [state.currentValue, ...state.futureValues],
          previousValues: [state.previousValues.slice(1, state.previousValues.length)]
        })
      default:
        return state
  }
}
