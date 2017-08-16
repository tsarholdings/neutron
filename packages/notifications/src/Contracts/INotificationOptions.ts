import INotificationButtons from './INotificationButtons'

export default interface INotificationOptions {
  /** Dismissable flag */
  readonly dismissable?: boolean

  /** Description */
  readonly description?: string

  /** Detail */
  readonly detail?: string

  /** Icon */
  readonly icon?: string

  /** Buttons */
  readonly buttons?: INotificationButtons
}
