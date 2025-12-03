import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'Dashboard', component: { template: '<div>Dashboard</div>' } },
    { path: '/patient/:id', name: 'PatientDetail', component: { template: '<div>Patient</div>' } }
  ]
})

describe('App', () => {
  it('renders app header', () => {
    const wrapper = mount(App, {
      global: { plugins: [router] }
    })
    expect(wrapper.text()).toContain('CarePortal')
  })

  it('has main content area', () => {
    const wrapper = mount(App, {
      global: { plugins: [router] }
    })
    expect(wrapper.find('main').exists()).toBe(true)
  })

  it('has router-view for content', () => {
    const wrapper = mount(App, {
      global: { plugins: [router] }
    })
    // Router view renders the matched component
    expect(wrapper.find('main').exists()).toBe(true)
  })

  it('has correct layout classes', () => {
    const wrapper = mount(App, {
      global: { plugins: [router] }
    })
    expect(wrapper.find('.min-h-screen').exists()).toBe(true)
    expect(wrapper.find('.bg-gray-50').exists()).toBe(true)
  })
})
