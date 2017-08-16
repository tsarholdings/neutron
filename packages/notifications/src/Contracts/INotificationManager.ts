import INotification from './INotification'

export default interface INotificationManager {
  /** Managed notifications */
  readonly notifications: Array<INotification>

  /** Raise a notification instance */
  readonly raise: (notification: INotification) => INotification

  /** Retrieve all notifications */
  readonly all: () => Array<INotification>

  /** Clear raised notifications */
  readonly clear: () => void

  /** Counter */
  readonly count?: () => number
}
