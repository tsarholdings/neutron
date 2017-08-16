export default interface INotificationButtons {
  /** Class name attached to the button insance */
  readonly className?: string

  /** Text which should appear in the button body */
  readonly test?: string

  /** Event handler */
  readonly onClick: () => void
}
