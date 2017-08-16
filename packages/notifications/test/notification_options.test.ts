import {} from 'jest'

import { Notification } from '../src/index'

describe('Notification Options', () => {
  it('should be dismissable', () => {
    let options = {
      dismissable: true
    }
    const notify = new Notification('info', 'Notify test', options)
    expect(notify.isDismissable()).toBeTruthy()
    expect(notify.getOptions()).toEqual(options)
  })
  it('should have description option', () => {
    let options = {
      description: 'Describable'
    }
    const notify = new Notification('info', 'Notify test', options)
    expect(notify.getOptions()).toEqual(options)
  })
  it('should have detail option', () => {
    let options = {
      detail: 'Detailable'
    }
    const notify = new Notification('info', 'Notify test', options)
    expect(notify.getOptions()).toEqual(options)
  })
  it('should have icon option', () => {
    let options = {
      icon: 'icon-option'
    }
    const notify = new Notification('info', 'Notify test', options)
    expect(notify.getOptions()).toEqual(options)
  })

  it('should have buttons option', () => {
    let options = {
      buttons: [
        { className: 'success', text: 'Action' }
      ]
    }
    const notify = new Notification('success', 'Notify test', options)
    expect(notify.getOptions()).toEqual(options)
  })
})
