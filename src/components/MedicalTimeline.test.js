import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import MedicalTimeline from './MedicalTimeline.vue'

const mockTimeline = [
  {
    date: '2024-11-15',
    type: 'visit',
    title: 'Follow-up Visit',
    doctor: 'Dr. Smith',
    notes: 'Patient doing well',
    category: 'primary-care'
  },
  {
    date: '2024-10-10',
    type: 'lab',
    title: 'Blood Work',
    doctor: 'Quest Diagnostics',
    notes: 'All values normal',
    category: 'lab'
  },
  {
    date: '2024-09-05',
    type: 'specialist',
    title: 'Cardiology Consult',
    doctor: 'Dr. Kim',
    notes: 'Heart healthy',
    category: 'cardiology'
  }
]

describe('MedicalTimeline', () => {
  it('renders timeline header', () => {
    const wrapper = mount(MedicalTimeline, {
      props: { timeline: mockTimeline }
    })
    expect(wrapper.text()).toContain('Medical Timeline')
  })

  it('displays all timeline events', () => {
    const wrapper = mount(MedicalTimeline, {
      props: { timeline: mockTimeline }
    })
    mockTimeline.forEach(event => {
      expect(wrapper.text()).toContain(event.title)
      expect(wrapper.text()).toContain(event.doctor)
      expect(wrapper.text()).toContain(event.notes)
    })
  })

  it('formats dates correctly', () => {
    const wrapper = mount(MedicalTimeline, {
      props: { timeline: mockTimeline }
    })
    // Check for month and year (day may vary due to timezone)
    expect(wrapper.text()).toContain('Nov')
    expect(wrapper.text()).toContain('2024')
    expect(wrapper.text()).toContain('Oct')
    expect(wrapper.text()).toContain('Sep')
  })

  it('displays category badges', () => {
    const wrapper = mount(MedicalTimeline, {
      props: { timeline: mockTimeline }
    })
    expect(wrapper.text()).toContain('primary care')
    expect(wrapper.text()).toContain('lab')
    expect(wrapper.text()).toContain('cardiology')
  })

  it('renders timeline line element', () => {
    const wrapper = mount(MedicalTimeline, {
      props: { timeline: mockTimeline }
    })
    expect(wrapper.find('.bg-gray-200').exists()).toBe(true)
  })

  it('renders correct number of events', () => {
    const wrapper = mount(MedicalTimeline, {
      props: { timeline: mockTimeline }
    })
    const events = wrapper.findAll('.bg-gray-50.rounded-lg.p-4')
    expect(events).toHaveLength(3)
  })
})
