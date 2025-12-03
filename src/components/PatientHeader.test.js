import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import PatientHeader from './PatientHeader.vue'

const mockPatient = {
  id: 1,
  name: 'Test Patient',
  avatar: 'TP',
  dob: '1985-03-15',
  age: 39,
  gender: 'Female',
  bloodType: 'A+',
  phone: '(555) 123-4567',
  email: 'test@email.com',
  address: '123 Test Street, Test City, TC 12345',
  emergencyContact: { name: 'Emergency Person', relation: 'Spouse', phone: '(555) 987-6543' },
  insurance: { provider: 'Test Insurance', policyNumber: 'POL-123456', group: 'GRP-789' },
  primaryCare: 'Dr. Test Doctor',
  allergies: ['Penicillin', 'Sulfa'],
  medications: [
    { name: 'Med1', dosage: '10mg', frequency: 'Once daily', purpose: 'Purpose 1' },
    { name: 'Med2', dosage: '20mg', frequency: 'Twice daily', purpose: 'Purpose 2' }
  ],
  conditions: ['Condition A', 'Condition B'],
  vitals: {
    current: { bp: '120/80', heartRate: 72, weight: 150, height: 65 }
  }
}

describe('PatientHeader', () => {
  it('displays patient name and avatar', () => {
    const wrapper = mount(PatientHeader, {
      props: { patient: mockPatient }
    })
    expect(wrapper.text()).toContain('Test Patient')
    expect(wrapper.text()).toContain('TP')
  })

  it('displays patient demographics', () => {
    const wrapper = mount(PatientHeader, {
      props: { patient: mockPatient }
    })
    expect(wrapper.text()).toContain('39 years old')
    expect(wrapper.text()).toContain('Female')
    expect(wrapper.text()).toContain('A+')
  })

  it('displays formatted date of birth', () => {
    const wrapper = mount(PatientHeader, {
      props: { patient: mockPatient }
    })
    expect(wrapper.text()).toContain('March')
    expect(wrapper.text()).toContain('1985')
  })

  it('displays current vitals', () => {
    const wrapper = mount(PatientHeader, {
      props: { patient: mockPatient }
    })
    expect(wrapper.text()).toContain('120/80')
    expect(wrapper.text()).toContain('72')
    expect(wrapper.text()).toContain('150')
    expect(wrapper.text()).toContain('65')
  })

  it('displays contact information', () => {
    const wrapper = mount(PatientHeader, {
      props: { patient: mockPatient }
    })
    expect(wrapper.text()).toContain('(555) 123-4567')
    expect(wrapper.text()).toContain('test@email.com')
    expect(wrapper.text()).toContain('123 Test Street')
  })

  it('displays emergency contact', () => {
    const wrapper = mount(PatientHeader, {
      props: { patient: mockPatient }
    })
    expect(wrapper.text()).toContain('Emergency Person')
    expect(wrapper.text()).toContain('Spouse')
    expect(wrapper.text()).toContain('(555) 987-6543')
  })

  it('displays insurance information', () => {
    const wrapper = mount(PatientHeader, {
      props: { patient: mockPatient }
    })
    expect(wrapper.text()).toContain('Test Insurance')
    expect(wrapper.text()).toContain('POL-123456')
    expect(wrapper.text()).toContain('GRP-789')
  })

  it('displays conditions as badges', () => {
    const wrapper = mount(PatientHeader, {
      props: { patient: mockPatient }
    })
    expect(wrapper.text()).toContain('Condition A')
    expect(wrapper.text()).toContain('Condition B')
  })

  it('displays allergies as badges', () => {
    const wrapper = mount(PatientHeader, {
      props: { patient: mockPatient }
    })
    expect(wrapper.text()).toContain('Penicillin')
    expect(wrapper.text()).toContain('Sulfa')
  })

  it('shows "No known allergies" when empty', () => {
    const patientNoAllergies = { ...mockPatient, allergies: [] }
    const wrapper = mount(PatientHeader, {
      props: { patient: patientNoAllergies }
    })
    expect(wrapper.text()).toContain('No known allergies')
  })

  it('displays primary care physician', () => {
    const wrapper = mount(PatientHeader, {
      props: { patient: mockPatient }
    })
    expect(wrapper.text()).toContain('Dr. Test Doctor')
  })

  it('displays all medications', () => {
    const wrapper = mount(PatientHeader, {
      props: { patient: mockPatient }
    })
    expect(wrapper.text()).toContain('Med1')
    expect(wrapper.text()).toContain('10mg')
    expect(wrapper.text()).toContain('Once daily')
    expect(wrapper.text()).toContain('Purpose 1')
    expect(wrapper.text()).toContain('Med2')
  })
})
