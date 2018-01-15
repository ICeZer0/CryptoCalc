/*
 * action types
 */

export const FETCH_PRICE = 'FETCH_PRICE'

/*
 * other constants
 */

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

/*
 * action creators
 */

export function fetchPrice(text) {
  return { type: FETCH_PRICE, text }
}

