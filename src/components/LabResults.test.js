import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import LabResults from './LabResults.vue'

const mockLabResults = [
  { date: '2024-11-10', test: 'HbA1c', value: '6.8%', status: 'borderline', reference: '< 5.7%' },
  { date: '2024-11-10', test: 'LDL Cholesterol', value: '95 mg/dL', status: 'normal', reference: '< 100 mg/dL' },
  { date: '2024-11-10', test: 'Glucose', value: '150 mg/dL', status: 'elevated', reference: '< 100 mg/dL' }
]

describe('LabResults', () => {
  it('renders lab results table', () => {
    const wrapper = mount(LabResults, {
      props: { labResults: mockLabResults }
    })
    expect(wrapper.find('table').exists()).toBe(true)
  })

  it('displays table headers', () => {
    const wrapper = mount(LabResults, {
      props: { labResults: mockLabResults }
    })
    expect(wrapper.text()).toContain('Test')
    expect(wrapper.text()).toContain('Date')
    expect(wrapper.text()).toContain('Value')
    expect(wrapper.text()).toContain('Reference')
    expect(wrapper.text()).toContain('Status')
  })

  it('displays all lab results', () => {
    const wrapper = mount(LabResults, {
      props: { labResults: mockLabResults }
    })
    mockLabResults.forEach(lab => {
      expect(wrapper.text()).toContain(lab.test)
      expect(wrapper.text()).toContain(lab.value)
      expect(wrapper.text()).toContain(lab.reference)
    })
  })

  it('formats dates correctly', () => {
    const wrapper = mount(LabResults, {
      props: { labResults: mockLabResults }
    })
    expect(wrapper.text()).toContain('Nov')
    expect(wrapper.text()).toContain('2024')
  })

  it('displays status badges', () => {
    const wrapper = mount(LabResults, {
      props: { labResults: mockLabResults }
    })
    expect(wrapper.text()).toContain('normal')
    expect(wrapper.text()).toContain('borderline')
    expect(wrapper.text()).toContain('elevated')
  })

  it('renders correct number of rows', () => {
    const wrapper = mount(LabResults, {
      props: { labResults: mockLabResults }
    })
    const rows = wrapper.findAll('tbody tr')
    expect(rows).toHaveLength(3)
  })
})
