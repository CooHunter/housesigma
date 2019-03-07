import data from '../../data/mapdata.json'

const initState = {
  daysFilter: data.days_filter,
  housetypeFilter: data.housetype_filter,
  list: data.list
}

export default function googleMaps(state = initState, action) {
  switch (action.type) {
    default:
      return state
  }
}