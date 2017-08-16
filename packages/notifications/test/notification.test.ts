import {} from 'jest'

import { Notification } from '../src/index'

describe('Notification', () => {
  const notify = new Notification('info', 'Notify test')
  it('should set state to info', () => {
    expect(notify.getState()).toEqual('info')
  })
  it('should set message to "Notify test"', () => {
    expect(notify.getMessage()).toEqual('Notify test')
  })
  it('should have no options', () => {
    expect(notify.getOptions()).toEqual({})
  })
  it('should have timestamp set', () => {
    expect(notify.getTimestamp()).toEqual(expect.any(Date))
  })
  it('shouldn\'t be disaplyed', () => {
    expect(notify.wasDisplayed()).toBeFalsy()
  })
  it('shouldn\'t be dismissable', () => {
    expect(notify.isDismissable()).toBeFalsy()
  })
  it('shouldn\'t be dismissed', () => {
    expect(notify.isDismissed()).toBeFalsy()
  })
})
