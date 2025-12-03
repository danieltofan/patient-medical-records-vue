import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import VitalsChart from './VitalsChart.vue'

// Mock vue-chartjs
vi.mock('vue-chartjs', () => ({
  Line: {
    name: 'Line',
    props: ['data', 'options'],
    template: '<div class="mock-chart" :data-labels="JSON.stringify(data?.labels)"></div>'
  }
}))

// Mock chart.js
vi.mock('chart.js', () => ({
  Chart: { register: vi.fn() },
  CategoryScale: vi.fn(),
  LinearScale: vi.fn(),
  PointElement: vi.fn(),
  LineElement: vi.fn(),
  Title: vi.fn(),
  Tooltip: vi.fn(),
  Legend: vi.fn(),
  Filler: vi.fn()
}))

const mockVitals = {
  current: { bp: '128/82', heartRate: 72, temperature: 98.4, weight: 145, height: 64 },
  history: [
    { date: '2024-11-15', bp: '128/82', heartRate: 72, weight: 145 },
    { date: '2024-10-18', bp: '132/85', heartRate: 75, weight: 147 },
    { date: '2024-09-20', bp: '135/88', heartRate: 78, weight: 149 },
    { date: '2024-08-22', bp: '138/90', heartRate: 80, weight: 152 }
  ]
}

describe('VitalsChart', () => {
  it('renders chart component', () => {
    const wrapper = mount(VitalsChart, {
      props: { vitals: mockVitals }
    })
    expect(wrapper.find('.mock-chart').exists()).toBe(true)
  })

  it('displays section title', () => {
    const wrapper = mount(VitalsChart, {
      props: { vitals: mockVitals }
    })
    expect(wrapper.text()).toContain('Vitals Trend')
  })

  it('displays current vitals values', () => {
    const wrapper = mount(VitalsChart, {
      props: { vitals: mockVitals }
    })
    expect(wrapper.text()).toContain('128/82')
    expect(wrapper.text()).toContain('72')
    expect(wrapper.text()).toContain('145')
  })

  it('displays vital labels', () => {
    const wrapper = mount(VitalsChart, {
      props: { vitals: mockVitals }
    })
    expect(wrapper.text()).toContain('Blood Pressure')
    expect(wrapper.text()).toContain('Heart Rate')
    expect(wrapper.text()).toContain('Weight')
  })

  it('displays units', () => {
    const wrapper = mount(VitalsChart, {
      props: { vitals: mockVitals }
    })
    expect(wrapper.text()).toContain('mmHg')
    expect(wrapper.text()).toContain('bpm')
    expect(wrapper.text()).toContain('lbs')
  })

  it('has metric selector buttons', () => {
    const wrapper = mount(VitalsChart, {
      props: { vitals: mockVitals }
    })
    const buttons = wrapper.findAll('button')
    expect(buttons.length).toBeGreaterThanOrEqual(3)
  })

  it('switches metric when button clicked', async () => {
    const wrapper = mount(VitalsChart, {
      props: { vitals: mockVitals }
    })

    // Find Heart Rate button and click it
    const buttons = wrapper.findAll('button')
    const heartRateBtn = buttons.find(b => b.text().includes('Heart Rate'))
    await heartRateBtn.trigger('click')

    // The button should now be active (has primary color class)
    expect(heartRateBtn.classes()).toContain('bg-primary-600')
  })

  it('defaults to blood pressure metric', () => {
    const wrapper = mount(VitalsChart, {
      props: { vitals: mockVitals }
    })

    const buttons = wrapper.findAll('button')
    const bpBtn = buttons.find(b => b.text().includes('Blood Pressure'))
    expect(bpBtn.classes()).toContain('bg-primary-600')
  })

  it('renders current values in stat boxes', () => {
    const wrapper = mount(VitalsChart, {
      props: { vitals: mockVitals }
    })
    const statBoxes = wrapper.findAll('.bg-gray-50.rounded-lg')
    expect(statBoxes.length).toBe(3)
  })
})
