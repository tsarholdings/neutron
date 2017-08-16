import INotification from './INotification'

export default interface INotificationManager {
  readonly notifications: Array<INotification>

  raise: (notification: INotification) => INotification
  all: () => Array<INotification>
  clear: () => void
}
