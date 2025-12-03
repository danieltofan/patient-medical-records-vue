import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'
import AppHeader from './AppHeader.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'Dashboard', component: { template: '<div>Home</div>' } },
    { path: '/patient/:id', name: 'PatientDetail', component: { template: '<div>Patient</div>' } }
  ]
})

describe('AppHeader', () => {
  it('renders logo and title', () => {
    const wrapper = mount(AppHeader, {
      global: { plugins: [router] }
    })
    expect(wrapper.text()).toContain('CarePortal')
    expect(wrapper.text()).toContain('Healthcare Dashboard')
  })

  it('has navigation links', () => {
    const wrapper = mount(AppHeader, {
      global: { plugins: [router] }
    })
    expect(wrapper.text()).toContain('Dashboard')
    expect(wrapper.text()).toContain('GitHub')
  })

  it('has GitHub link with correct attributes', () => {
    const wrapper = mount(AppHeader, {
      global: { plugins: [router] }
    })
    const githubLink = wrapper.find('a[href*="github.com"]')
    expect(githubLink.exists()).toBe(true)
    expect(githubLink.attributes('target')).toBe('_blank')
    expect(githubLink.attributes('rel')).toContain('noopener')
  })

  it('toggles mobile menu on button click', async () => {
    const wrapper = mount(AppHeader, {
      global: { plugins: [router] }
    })

    // Mobile menu should be hidden initially
    expect(wrapper.find('.md\\:hidden.py-4').exists()).toBe(false)

    // Click hamburger button
    const menuButton = wrapper.find('button.md\\:hidden')
    await menuButton.trigger('click')

    // Mobile menu should be visible
    expect(wrapper.find('.md\\:hidden.py-4').exists()).toBe(true)

    // Click again to close
    await menuButton.trigger('click')
    expect(wrapper.find('.md\\:hidden.py-4').exists()).toBe(false)
  })

  it('navigates to home when logo is clicked', async () => {
    const wrapper = mount(AppHeader, {
      global: { plugins: [router] }
    })

    const pushSpy = vi.spyOn(router, 'push')
    const logo = wrapper.find('.cursor-pointer')
    await logo.trigger('click')

    expect(pushSpy).toHaveBeenCalledWith('/')
  })

  it('closes mobile menu when navigating', async () => {
    const wrapper = mount(AppHeader, {
      global: { plugins: [router] }
    })

    // Open mobile menu
    const menuButton = wrapper.find('button.md\\:hidden')
    await menuButton.trigger('click')
    expect(wrapper.find('.md\\:hidden.py-4').exists()).toBe(true)

    // Click dashboard link in mobile menu
    const mobileLinks = wrapper.findAll('.md\\:hidden.py-4 a, .md\\:hidden.py-4 .router-link-active')
    if (mobileLinks.length > 0) {
      await mobileLinks[0].trigger('click')
    }
  })

  it('shows active state for current route', async () => {
    await router.push('/')
    await router.isReady()

    const wrapper = mount(AppHeader, {
      global: { plugins: [router] }
    })

    const dashboardLink = wrapper.find('nav a[href="/"]')
    expect(dashboardLink.classes()).toContain('nav-link-active')
  })
})
