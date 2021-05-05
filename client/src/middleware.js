import { toast } from 'react-toastify'
import { EventActions } from '@drizzle/store'

const contractEventNotifier = store => next => action => {
  if (action.type === EventActions.EVENT_FIRED) {
    const {event, returnValues} = action.event;
    const message = `${event} : oldValue: ${returnValues.oldValue}, newValue: ${returnValues.data}`
    toast.success(message, { position: toast.POSITION.BOTTOM_CENTER })
  }
  return next(action)
}
  export default contractEventNotifier