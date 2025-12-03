import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import StatsOverview from './StatsOverview.vue'

const mockPatients = [
  {
    id: 1,
    riskScore: 20,
    age: 30,
    labResults: [{ date: new Date().toISOString().split('T')[0] }]
  },
  {
    id: 2,
    riskScore: 60,
    age: 50,
    labResults: [{ date: '2024-01-01' }] // Old lab
  },
  {
    id: 3,
    riskScore: 70,
    age: 70,
    labResults: []
  }
]

describe('StatsOverview', () => {
  it('displays total patients count', () => {
    const wrapper = mount(StatsOverview, {
      props: { patients: mockPatients }
    })
    expect(wrapper.text()).toContain('3')
    expect(wrapper.text()).toContain('Total Patients')
  })

  it('displays high risk count', () => {
    const wrapper = mount(StatsOverview, {
      props: { patients: mockPatients }
    })
    expect(wrapper.text()).toContain('High Risk')
    // 2 patients with riskScore > 50
    expect(wrapper.text()).toContain('2')
  })

  it('displays labs due count', () => {
    const wrapper = mount(StatsOverview, {
      props: { patients: mockPatients }
    })
    expect(wrapper.text()).toContain('Labs Due')
    // 2 patients with old/no labs
  })

  it('calculates average age', () => {
    const wrapper = mount(StatsOverview, {
      props: { patients: mockPatients }
    })
    expect(wrapper.text()).toContain('Avg Age')
    expect(wrapper.text()).toContain('50') // (30 + 50 + 70) / 3 = 50
  })

  it('renders all stat cards', () => {
    const wrapper = mount(StatsOverview, {
      props: { patients: mockPatients }
    })
    const statCards = wrapper.findAll('.stat-card')
    expect(statCards).toHaveLength(4)
  })
})
