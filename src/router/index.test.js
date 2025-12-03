import { describe, it, expect } from 'vitest'
import router from './index'

describe('Router', () => {
  it('has Dashboard route at root', () => {
    const route = router.getRoutes().find(r => r.path === '/')
    expect(route).toBeDefined()
    expect(route.name).toBe('Dashboard')
  })

  it('has PatientDetail route', () => {
    const route = router.getRoutes().find(r => r.path === '/patient/:id')
    expect(route).toBeDefined()
    expect(route.name).toBe('PatientDetail')
  })

  it('PatientDetail route has props enabled', () => {
    const route = router.getRoutes().find(r => r.path === '/patient/:id')
    expect(route.props).toBeDefined()
  })

  it('has exactly 2 routes', () => {
    expect(router.getRoutes().length).toBe(2)
  })
})
