let initialState = {
  chatMessages: [],
  filteredChat: ''
}

// ====== REDUCER ====== \\

export default (state = initialState, action) => {
  let { type, payload } = action;

  switch(type) {
    case 'FILTER':
      let chatMessages = payload
      return {...state, chatMessages};

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