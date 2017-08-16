import { get } from 'lodash'
import { INotification, NotificationState, INotificationOptions } from './Contracts'

export default class Notification implements INotification {
  timestamp = new Date
  dismissed = false
  displayed = false
  defaultOptions = {}

  constructor(
    readonly state: NotificationState = NotificationState.Info,
    readonly message: string,
    options: INotificationOptions
  ) {
    this.options = options || this.defaultOptions
  }

  getState(): NotificationState {
    return this.state
  }

  getMessage(): string {
    return this.message
  }

  getOptions(): INotificationOptions {
    return this.options
  }

  getTimestamp(): Date {
    return this.timestamp
  }

  isDismissed(): boolean {
    return this.dismissed
  }

  isDismissable(): boolean {
    return get(this.options, 'dismissable', false)
  }

  wasDisplayed(): boolean {
    return this.displayed
  }
}
