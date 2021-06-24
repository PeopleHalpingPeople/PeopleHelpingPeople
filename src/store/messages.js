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
      // console.log('INPUT', input);
      return {...state, chatMessages: {...state.chatMessages, allMessages: [...state.chatMessages.allMessages, input]}}

    default:
      return state;
  }
}

// ====== ACTIONS ====== \\

export const filteredMessages = (message) => {
  // console.log('currentUser', message.currentUser);
  return {
    type: 'FILTER',
    payload: message
  }
}

export const newMessage = (input) => {
  // console.log('PRIVATE?', input.privateReceiver);
  return {
    type: 'NEW MESSAGE',
    payload: input
  }
}