import data from '../../data/mapdata.json'
import { SET_FILTER } from './types'

function formatList(list) {
  const ret = []
  const len = list.length
  for (let i = 0; i < len; i++) {
    const item = list[i]
    ret.push(Object.assign({}, item, {
      latitude: item.lat,
      longitude: item.lng,
      location: {
        latitude: item.lat,
        longitude: item.lng
      }
    }))
  }
  return ret
}

const initState = {
  daysFilter: data.days_filter.map(item => {
    item.type = 'day'
    return item
  }),
  housetypeFilter: data.housetype_filter.map(item => {
    item.type = 'housetype'
    return item
  }),
  list: formatList(data.list),
  filter: 'all'
}

export default function googleMaps(state = initState, action) {
  switch (action.type) {
    case SET_FILTER:
      return Object.assign({}, state, {
        filter: action.id
      })
    default:
      return state
  }
}