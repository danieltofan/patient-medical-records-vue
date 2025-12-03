import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'
import PatientCard from './PatientCard.vue'

const mockPatient = {
  id: 1,
  name: 'Test Patient',
  avatar: 'TP',
  age: 45,
  gender: 'Male',
  bloodType: 'A+',
  conditions: ['Diabetes', 'Hypertension', 'Asthma', 'Arthritis'],
  medications: [{ name: 'Med1' }, { name: 'Med2' }],
  vitals: {
    current: { bp: '120/80', heartRate: 72, weight: 175 }
  },
  riskScore: 35
}

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: { template: '<div>Home</div>' } },
    { path: '/patient/:id', component: { template: '<div>Patient</div>' } }
  ]
})

describe('PatientCard', () => {
  it('renders patient name', () => {
    const wrapper = mount(PatientCard, {
      props: { patient: mockPatient },
      global: { plugins: [router] }
    })
    expect(wrapper.text()).toContain('Test Patient')
  })

  it('displays patient demographics', () => {
    const wrapper = mount(PatientCard, {
      props: { patient: mockPatient },
      global: { plugins: [router] }
    })
    expect(wrapper.text()).toContain('45 years old')
    expect(wrapper.text()).toContain('Male')
    expect(wrapper.text()).toContain('A+')
  })

  it('shows up to 3 conditions with overflow indicator', () => {
    const wrapper = mount(PatientCard, {
      props: { patient: mockPatient },
      global: { plugins: [router] }
    })
    expect(wrapper.text()).toContain('Diabetes')
    expect(wrapper.text()).toContain('Hypertension')
    expect(wrapper.text()).toContain('Asthma')
    expect(wrapper.text()).toContain('+1 more')
  })

  it('displays current vitals', () => {
    const wrapper = mount(PatientCard, {
      props: { patient: mockPatient },
      global: { plugins: [router] }
    })
    expect(wrapper.text()).toContain('120/80')
    expect(wrapper.text()).toContain('72 bpm')
    expect(wrapper.text()).toContain('2 meds')
  })

  it('shows correct risk level badge', async () => {
    // Low risk
    const lowRisk = { ...mockPatient, riskScore: 20 }
    const wrapperLow = mount(PatientCard, {
      props: { patient: lowRisk },
      global: { plugins: [router] }
    })
    expect(wrapperLow.text()).toContain('Low Risk')

    // Medium risk
    const mediumRisk = { ...mockPatient, riskScore: 40 }
    const wrapperMedium = mount(PatientCard, {
      props: { patient: mediumRisk },
      global: { plugins: [router] }
    })
    expect(wrapperMedium.text()).toContain('Medium Risk')

    // High risk
    const highRisk = { ...mockPatient, riskScore: 70 }
    const wrapperHigh = mount(PatientCard, {
      props: { patient: highRisk },
      global: { plugins: [router] }
    })
    expect(wrapperHigh.text()).toContain('High Risk')
  })

  it('links to patient detail page', () => {
    const wrapper = mount(PatientCard, {
      props: { patient: mockPatient },
      global: { plugins: [router] }
    })
    const link = wrapper.find('a')
    expect(link.attributes('href')).toBe('/patient/1')
  })
})
