import { NotificationState } from './NotificationState'
import INotificationOptions from './INotificationOptions'

export default interface INotification {
  /** State of notification */
  readonly state: NotificationState

  /** Message */
  readonly message: string

  /** Timestamp of creation */
  readonly timestamp: Date

  /** Options object structure */
  readonly options: INotificationOptions

  /** Default options */
  readonly defaultOptions: INotificationOptions

  /** Dismissed flag for notification */
  readonly dismissed: boolean

  /** Displayed flag */
  readonly displayed: boolean

  readonly getState: () => NotificationState
  readonly getMessage: () => string
  readonly getOptions: () => Object
  readonly getTimestamp: () => Date
  readonly isDismissed: () => boolean
  readonly isDismissable: () => boolean
  readonly wasDisplayed: () => boolean
}
