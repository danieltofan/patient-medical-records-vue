import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'
import PatientDetail from './PatientDetail.vue'

// Mock Chart.js components
vi.mock('vue-chartjs', () => ({
  Line: {
    name: 'Line',
    props: ['data', 'options'],
    template: '<div class="mock-chart"></div>'
  }
}))

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

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'Dashboard', component: { template: '<div>Home</div>' } },
    { path: '/patient/:id', name: 'PatientDetail', component: PatientDetail, props: true }
  ]
})

describe('PatientDetail', () => {
  it('displays patient information for valid id', async () => {
    await router.push('/patient/1')
    await router.isReady()

    const wrapper = mount(PatientDetail, {
      props: { id: '1' },
      global: { plugins: [router] }
    })

    expect(wrapper.text()).toContain('Sarah Chen')
  })

  it('shows back button', () => {
    const wrapper = mount(PatientDetail, {
      props: { id: '1' },
      global: { plugins: [router] }
    })

    expect(wrapper.text()).toContain('Back to Dashboard')
  })

  it('displays patient header component', () => {
    const wrapper = mount(PatientDetail, {
      props: { id: '1' },
      global: { plugins: [router] }
    })

    // Should show patient demographics
    expect(wrapper.text()).toContain('39 years old')
    expect(wrapper.text()).toContain('Female')
  })

  it('displays medical timeline', () => {
    const wrapper = mount(PatientDetail, {
      props: { id: '1' },
      global: { plugins: [router] }
    })

    expect(wrapper.text()).toContain('Medical Timeline')
  })

  it('displays lab results', () => {
    const wrapper = mount(PatientDetail, {
      props: { id: '1' },
      global: { plugins: [router] }
    })

    expect(wrapper.text()).toContain('Lab Results')
    expect(wrapper.text()).toContain('HbA1c')
  })

  it('displays AI insights', () => {
    const wrapper = mount(PatientDetail, {
      props: { id: '1' },
      global: { plugins: [router] }
    })

    expect(wrapper.text()).toContain('AI Insights')
    expect(wrapper.text()).toContain('Health Risk Score')
  })

  it('displays vitals chart', () => {
    const wrapper = mount(PatientDetail, {
      props: { id: '1' },
      global: { plugins: [router] }
    })

    expect(wrapper.text()).toContain('Vitals Trend')
  })

  it('shows not found state for invalid patient id', () => {
    const wrapper = mount(PatientDetail, {
      props: { id: '999' },
      global: { plugins: [router] }
    })

    expect(wrapper.text()).toContain('Patient Not Found')
    expect(wrapper.text()).toContain("doesn't exist")
  })

  it('has return button in not found state', () => {
    const wrapper = mount(PatientDetail, {
      props: { id: '999' },
      global: { plugins: [router] }
    })

    expect(wrapper.text()).toContain('Return to Dashboard')
  })

  it('navigates back when back button clicked', async () => {
    const wrapper = mount(PatientDetail, {
      props: { id: '1' },
      global: { plugins: [router] }
    })

    const pushSpy = vi.spyOn(router, 'push')
    const backButton = wrapper.find('button')
    await backButton.trigger('click')

    expect(pushSpy).toHaveBeenCalledWith('/')
  })

  it('displays patient conditions', () => {
    const wrapper = mount(PatientDetail, {
      props: { id: '1' },
      global: { plugins: [router] }
    })

    expect(wrapper.text()).toContain('Type 2 Diabetes')
    expect(wrapper.text()).toContain('Hypertension')
  })

  it('displays patient allergies', () => {
    const wrapper = mount(PatientDetail, {
      props: { id: '1' },
      global: { plugins: [router] }
    })

    expect(wrapper.text()).toContain('Penicillin')
    expect(wrapper.text()).toContain('Sulfa drugs')
  })

  it('displays patient medications', () => {
    const wrapper = mount(PatientDetail, {
      props: { id: '1' },
      global: { plugins: [router] }
    })

    expect(wrapper.text()).toContain('Metformin')
    expect(wrapper.text()).toContain('Lisinopril')
  })

  it('loads different patient for different id', () => {
    const wrapper = mount(PatientDetail, {
      props: { id: '2' },
      global: { plugins: [router] }
    })

    expect(wrapper.text()).toContain('James Wilson')
    expect(wrapper.text()).not.toContain('Sarah Chen')
  })
})
