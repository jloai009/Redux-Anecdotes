import React from 'react'
import { useSelector } from 'react-redux'

const notificationReducer = (state = '', action) => {
  switch (action.type) {
    case 'CLEAR':
      if (action.content === state) {
        return ''
      } else {
        return state
      }
    case 'CREATE_NOTIFICATION':
      return action.data
    default:
      return state
  }
}

export const createNotification = (content) => {
  return {
    type: 'CREATE_NOTIFICATION',
    data: content
  }
}

export const clear = (notification) => {
  return {
    type: 'CLEAR',
    content: notification
  }
}

export const setNotification = (content, duration) => {
  return async dispatch => {
    dispatch({
      type: 'CREATE_NOTIFICATION',
      data: content
    })
    setTimeout(() => {
      dispatch(clear(content))
    }
    , duration * 1000)
  }
}

export default notificationReducer
