import {} from 'jest'

import { Notification } from '../src/index'

describe('Notification', () => {
  describe('Generic', () => {
    let notify: Notification = new Notification('info', 'Notify test')

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
  describe('Success', () => {
    const notify = new Notification('success', 'Notify test')
    it('should set state to success', () => {
      expect(notify.getState()).toEqual('success')
    })
  })
  describe('Info', () => {
    const notify = new Notification('info', 'Notify test')
    it('should set state to info', () => {
      expect(notify.getState()).toEqual('info')
    })
  })
  describe('Warning', () => {
    const notify = new Notification('warning', 'Notify test')
    it('should set state to warning', () => {
      expect(notify.getState()).toEqual('warning')
    })
  })
  describe('Error', () => {
    const notify = new Notification('error', 'Notify test')
    it('should set state to error', () => {
      expect(notify.getState()).toEqual('error')
    })
  })
  describe('Fatal', () => {
    const notify = new Notification('fatal', 'Notify test')
    it('should set state to fatal', () => {
      expect(notify.getState()).toEqual('fatal')
    })
  })
})
