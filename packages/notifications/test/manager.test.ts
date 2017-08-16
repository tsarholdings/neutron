import {} from 'jest'
import { NotificationManager } from '../src/index'

describe('Notification Manager', () => {
  let manager: NotificationManager = new NotificationManager

  afterEach(() => {
    manager.clear()
  })

  it('should have no notifications when new', () => {
    expect(manager.all().length).toEqual(0)
  })

  it('should be able to add a success notification', () => {
    manager.success('successfully added test')
    expect(manager.all().length).toEqual(1)
  })

  it('should be able to add a info notification', () => {
    manager.info('successfully added test')
    expect(manager.all().length).toEqual(1)
  })

  it('should be able to add a warning notification', () => {
    manager.warning('successfully added test')
    expect(manager.all().length).toEqual(1)
  })

  it('should be able to add a error notification', () => {
    manager.error('successfully added test')
    expect(manager.all().length).toEqual(1)
  })

  it('should be able to add a fatal notification', () => {
    manager.fatal('successfully added test')
    expect(manager.all().length).toEqual(1)
  })
})
