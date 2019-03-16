import * as types from '../constants/ActionTypes';

export function addItem(text) {
  return {
    type: types.ADD_ITEM,
    text
  }
}

export function updateItem(data) {
  return {
    type: types.UPDATE_ITEM,
    data
  }
}

export function deleteItem(id) {
  return {
    type: types.DELETE_ITEM,
    id
  }
}

export function updateItems(data) {
  return {
    type: types.UPDATE_ITEMS,
    data
  }
}

export function deleteItems(query) {
  return {
    type: types.DELETE_ITEMS,
    query
  }
}

export function activeFilter(action) {
  return {
    type: types.FILTER_ITEMS,
    active: action
  }
}