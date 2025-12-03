import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import AIInsights from './AIInsights.vue'

const mockInsights = [
  { type: 'positive', text: 'Blood pressure improving' },
  { type: 'recommendation', text: 'Schedule follow-up visit' },
  { type: 'alert', text: 'High fall risk' },
  { type: 'info', text: 'Next screening due in 6 months' }
]

const mockRiskFactors = ['Diabetes', 'Hypertension', 'Age > 65']

describe('AIInsights', () => {
  it('displays risk score', () => {
    const wrapper = mount(AIInsights, {
      props: {
        insights: mockInsights,
        riskScore: 45,
        riskFactors: mockRiskFactors
      }
    })
    expect(wrapper.text()).toContain('45/100')
    expect(wrapper.text()).toContain('Health Risk Score')
  })

  it('shows correct risk level label for low risk', () => {
    const wrapper = mount(AIInsights, {
      props: {
        insights: mockInsights,
        riskScore: 20,
        riskFactors: mockRiskFactors
      }
    })
    expect(wrapper.text()).toContain('Low Risk')
  })

  it('shows correct risk level label for medium risk', () => {
    const wrapper = mount(AIInsights, {
      props: {
        insights: mockInsights,
        riskScore: 40,
        riskFactors: mockRiskFactors
      }
    })
    expect(wrapper.text()).toContain('Medium Risk')
  })

  it('shows correct risk level label for high risk', () => {
    const wrapper = mount(AIInsights, {
      props: {
        insights: mockInsights,
        riskScore: 70,
        riskFactors: mockRiskFactors
      }
    })
    expect(wrapper.text()).toContain('High Risk')
  })

  it('displays all risk factors', () => {
    const wrapper = mount(AIInsights, {
      props: {
        insights: mockInsights,
        riskScore: 45,
        riskFactors: mockRiskFactors
      }
    })
    mockRiskFactors.forEach(factor => {
      expect(wrapper.text()).toContain(factor)
    })
  })

  it('displays all insights', () => {
    const wrapper = mount(AIInsights, {
      props: {
        insights: mockInsights,
        riskScore: 45,
        riskFactors: mockRiskFactors
      }
    })
    mockInsights.forEach(insight => {
      expect(wrapper.text()).toContain(insight.text)
    })
  })

  it('shows risk factor count', () => {
    const wrapper = mount(AIInsights, {
      props: {
        insights: mockInsights,
        riskScore: 45,
        riskFactors: mockRiskFactors
      }
    })
    expect(wrapper.text()).toContain('3 factors')
  })

  it('shows disclaimer', () => {
    const wrapper = mount(AIInsights, {
      props: {
        insights: mockInsights,
        riskScore: 45,
        riskFactors: mockRiskFactors
      }
    })
    expect(wrapper.text()).toContain('demonstration purposes')
  })
})
