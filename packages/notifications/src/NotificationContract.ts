export type NotificationState = 'success' | 'info' | 'warning' | 'error' | 'fatal'

export interface INotification {
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

  getState(): NotificationState
  getMessage(): string
  getOptions(): Object
  getTimestamp(): Date
  isDismissed(): boolean
  isDismissable(): boolean
  wasDisplayed(): boolean
}
