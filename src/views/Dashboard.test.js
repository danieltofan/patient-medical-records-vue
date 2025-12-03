import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from './Dashboard.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'Dashboard', component: Dashboard },
    { path: '/patient/:id', name: 'PatientDetail', component: { template: '<div>Patient</div>' } }
  ]
})

describe('Dashboard', () => {
  it('renders page title', () => {
    const wrapper = mount(Dashboard, {
      global: { plugins: [router] }
    })
    expect(wrapper.text()).toContain('Patient Dashboard')
  })

  it('renders page description', () => {
    const wrapper = mount(Dashboard, {
      global: { plugins: [router] }
    })
    expect(wrapper.text()).toContain('Overview of your patient population')
  })

  it('displays stats overview', () => {
    const wrapper = mount(Dashboard, {
      global: { plugins: [router] }
    })
    expect(wrapper.text()).toContain('Total Patients')
    expect(wrapper.text()).toContain('High Risk')
  })

  it('has search input', () => {
    const wrapper = mount(Dashboard, {
      global: { plugins: [router] }
    })
    const searchInput = wrapper.find('input[type="text"]')
    expect(searchInput.exists()).toBe(true)
    expect(searchInput.attributes('placeholder')).toContain('Search')
  })

  it('has filter buttons', () => {
    const wrapper = mount(Dashboard, {
      global: { plugins: [router] }
    })
    expect(wrapper.text()).toContain('All')
    expect(wrapper.text()).toContain('Low')
    expect(wrapper.text()).toContain('Medium')
    expect(wrapper.text()).toContain('High')
  })

  it('displays all patients initially', () => {
    const wrapper = mount(Dashboard, {
      global: { plugins: [router] }
    })
    // Should show all 5 patients
    expect(wrapper.text()).toContain('Sarah Chen')
    expect(wrapper.text()).toContain('James Wilson')
    expect(wrapper.text()).toContain('Maria Rodriguez')
    expect(wrapper.text()).toContain('Robert Thompson')
    expect(wrapper.text()).toContain('Eleanor Davis')
  })

  it('filters patients by search query', async () => {
    const wrapper = mount(Dashboard, {
      global: { plugins: [router] }
    })

    const searchInput = wrapper.find('input[type="text"]')
    await searchInput.setValue('Sarah')

    expect(wrapper.text()).toContain('Sarah Chen')
    expect(wrapper.text()).not.toContain('James Wilson')
  })

  it('filters patients by risk level', async () => {
    const wrapper = mount(Dashboard, {
      global: { plugins: [router] }
    })

    // Click "high" filter button (4th button: all, low, medium, high)
    const buttons = wrapper.findAll('button')
    const highBtn = buttons.filter(b => b.text().toLowerCase().includes('high'))[0]
    await highBtn.trigger('click')

    // Should show only high risk patients (James Wilson and Eleanor Davis)
    expect(wrapper.text()).toContain('James Wilson')
    expect(wrapper.text()).toContain('Eleanor Davis')
    expect(wrapper.text()).not.toContain('Maria Rodriguez') // Low risk
  })

  it('filters by low risk', async () => {
    const wrapper = mount(Dashboard, {
      global: { plugins: [router] }
    })

    // Click "low" filter button (2nd button: all, low, medium, high)
    const buttons = wrapper.findAll('button')
    const lowBtn = buttons.filter(b => b.text().toLowerCase().startsWith('low'))[0]
    await lowBtn.trigger('click')

    expect(wrapper.text()).toContain('Maria Rodriguez') // Low risk
    expect(wrapper.text()).not.toContain('James Wilson') // High risk
  })

  it('shows empty state when no matches', async () => {
    const wrapper = mount(Dashboard, {
      global: { plugins: [router] }
    })

    const searchInput = wrapper.find('input[type="text"]')
    await searchInput.setValue('NonexistentPatient12345')

    expect(wrapper.text()).toContain('No patients found')
    expect(wrapper.text()).toContain('Try adjusting your search')
  })

  it('displays risk counts in filter buttons', () => {
    const wrapper = mount(Dashboard, {
      global: { plugins: [router] }
    })
    // Should show counts like "All (5)"
    expect(wrapper.text()).toMatch(/All.*\(5\)/)
  })

  it('can search by condition', async () => {
    const wrapper = mount(Dashboard, {
      global: { plugins: [router] }
    })

    const searchInput = wrapper.find('input[type="text"]')
    await searchInput.setValue('diabetes')

    expect(wrapper.text()).toContain('Sarah Chen') // Has diabetes
    expect(wrapper.text()).not.toContain('Maria Rodriguez') // No diabetes
  })
})
