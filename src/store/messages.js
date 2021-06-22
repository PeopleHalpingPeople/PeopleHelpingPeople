let initialState = {
  chatMessages: {},
  filteredChat: '',
  newMessage: {}
}

// ====== REDUCER ====== \\

export default (state = initialState, action) => {
  let { type, payload } = action;

  switch(type) {
    case 'FILTER':
      let chatMessages = payload
      return {...state, chatMessages};

    case 'NEW MESSAGE':
      let input = payload
      return {...state, input: newMessage}

    default:
      return state;
  }
}

// ====== ACTIONS ====== \\

export const filteredMessages = (message) => {
  return {
    type: 'FILTER',
    payload: message
  }
}

export const newMessage = (input) => {
  return {
    type: 'NEW MESSAGE',
    payload: input
  }
}