import { INotification, NotificationState } from './Contracts'

export default class Notification implements INotification {
  readonly state: NotificationState
  readonly message: string
  readonly timestamp: Date
  readonly options: {
    buttons?: {
      className?: string
      text: string
    }
    description?: string
    detail?: string
    dismissable?: boolean
    icon?: string
  }
  dismissed: boolean
  displayed: boolean

  constructor(state: NotificationState, message: string, options: Object = {}) {
    this.state = state
    this.message = message
    this.options = options
    this.timestamp = new Date()
    this.dismissed = false
    this.displayed = false
  }

  getState(): NotificationState {
    return this.state
  }

  getMessage(): string {
    return this.message
  }

  getOptions(): Object {
    return this.options
  }

  getTimestamp(): Date {
    return this.timestamp
  }

  isDismissed(): boolean {
    return this.dismissed
  }

  isDismissable(): boolean {
    return !!this.options.dismissable
  }

  wasDisplayed(): boolean {
    return this.displayed
  }
}
