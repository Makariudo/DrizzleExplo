import { generateStore, EventActions } from '@drizzle/store'


const contractEventNotifier = store => next => action => {
  if (action.type === EventActions.EVENT_FIRED) {
    console.log("couocu")
  }
  return next(action)
}
  export default contractEventNotifier