import Notification from './Notification'
import { INotification } from './NotificationContract'

export default class NotificationManager {

  /**
   * Managed notifications.
   *
   * @return {Array}
   */
  notifications: Array<INotification>

  constructor() {
    this.notifications = []
  }

  /**
   * Raise success notification.
   *
   * @param  {string}       message
   * @param  {Object}      options
   * @return {INotification}
   */
  success(message: string, options: Object): INotification {
    return this.raise(new Notification('success', message, options))
  }

  /**
   * Raise an info notification.
   *
   * @param  {string}       message
   * @param  {Object}      options
   * @return {INotification}
   */
  info(message: string, options: Object): INotification {
    return this.raise(new Notification('info', message, options))
  }

  /**
   * Raise an warning notification.
   *
   * @param  {string}       message
   * @param  {Object}      options
   * @return {INotification}
   */
  warning(message: string, options: Object): INotification {
    return this.raise(new Notification('warning', message, options))
  }

  /**
   * Raise an error notification.
   *
   * @param  {string}       message
   * @param  {Object}      options
   * @return {INotification}
   */
  error(message: string, options: Object): INotification {
    return this.raise(new Notification('error', message, options))
  }

  /**
   * Raise an fatal notification.
   *
   * @param  {string}       message
   * @param  {Object}      options
   * @return {INotification}
   */
  fatal(message: string, options: Object): INotification {
    return this.raise(new Notification('fatal', message, options))
  }

  /**
   * Create new notification to manage.
   *
   * @param  {INotification} notification
   * @return {INotification}
   */
  raise(notification: INotification): INotification {
    this.notifications.push(notification)
    return notification
  }

  /**
   * Get all notifications.
   *
   * @return {Array}
   */
  all(): Array<INotification> {
    return this.notifications
  }

  /**
   * Clear notifications.
   *
   * @return void
   */
  clear(): void {
    this.notifications = []
  }
}
