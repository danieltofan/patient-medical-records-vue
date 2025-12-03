import { describe, it, expect } from 'vitest'
import {
  patients,
  getPatientById,
  getPatientsByRiskLevel,
  searchPatients,
  calculateAgeFromDob
} from './patients'

describe('patients data', () => {
  it('has 5 patients', () => {
    expect(patients).toHaveLength(5)
  })

  it('each patient has required fields', () => {
    const requiredFields = [
      'id', 'name', 'avatar', 'dob', 'age', 'gender', 'bloodType',
      'phone', 'email', 'address', 'emergencyContact', 'insurance',
      'primaryCare', 'allergies', 'medications', 'conditions', 'vitals',
      'labResults', 'timeline', 'riskScore', 'riskFactors', 'aiInsights'
    ]

    patients.forEach(patient => {
      requiredFields.forEach(field => {
        expect(patient).toHaveProperty(field)
      })
    })
  })

  it('each patient has valid vitals with history', () => {
    patients.forEach(patient => {
      expect(patient.vitals.current).toHaveProperty('bp')
      expect(patient.vitals.current).toHaveProperty('heartRate')
      expect(patient.vitals.current).toHaveProperty('weight')
      expect(patient.vitals.history.length).toBeGreaterThan(0)
    })
  })
})

describe('getPatientById', () => {
  it('returns patient when found', () => {
    const patient = getPatientById(1)
    expect(patient).toBeDefined()
    expect(patient.name).toBe('Sarah Chen')
  })

  it('returns patient with string id', () => {
    const patient = getPatientById('2')
    expect(patient).toBeDefined()
    expect(patient.name).toBe('James Wilson')
  })

  it('returns undefined for non-existent id', () => {
    const patient = getPatientById(999)
    expect(patient).toBeUndefined()
  })
})

describe('getPatientsByRiskLevel', () => {
  it('returns low risk patients (score <= 25)', () => {
    const lowRisk = getPatientsByRiskLevel('low')
    lowRisk.forEach(patient => {
      expect(patient.riskScore).toBeLessThanOrEqual(25)
    })
  })

  it('returns medium risk patients (25 < score <= 50)', () => {
    const mediumRisk = getPatientsByRiskLevel('medium')
    mediumRisk.forEach(patient => {
      expect(patient.riskScore).toBeGreaterThan(25)
      expect(patient.riskScore).toBeLessThanOrEqual(50)
    })
  })

  it('returns high risk patients (score > 50)', () => {
    const highRisk = getPatientsByRiskLevel('high')
    highRisk.forEach(patient => {
      expect(patient.riskScore).toBeGreaterThan(50)
    })
  })

  it('returns all patients for unknown level', () => {
    const all = getPatientsByRiskLevel('unknown')
    expect(all).toHaveLength(patients.length)
  })
})

describe('searchPatients', () => {
  it('finds patients by name', () => {
    const results = searchPatients('Sarah')
    expect(results).toHaveLength(1)
    expect(results[0].name).toBe('Sarah Chen')
  })

  it('finds patients by condition', () => {
    const results = searchPatients('diabetes')
    expect(results.length).toBeGreaterThan(0)
    results.forEach(patient => {
      expect(
        patient.conditions.some(c => c.toLowerCase().includes('diabetes'))
      ).toBe(true)
    })
  })

  it('search is case insensitive', () => {
    const results1 = searchPatients('WILSON')
    const results2 = searchPatients('wilson')
    expect(results1).toEqual(results2)
  })

  it('returns empty array for no matches', () => {
    const results = searchPatients('nonexistent')
    expect(results).toHaveLength(0)
  })
})

describe('calculateAgeFromDob', () => {
  it('calculates age correctly', () => {
    const today = new Date()
    const fiveYearsAgo = new Date(
      today.getFullYear() - 5,
      today.getMonth(),
      today.getDate()
    )
    const dobString = fiveYearsAgo.toISOString().split('T')[0]
    expect(calculateAgeFromDob(dobString)).toBe(5)
  })

  it('handles birthday not yet occurred this year', () => {
    const today = new Date()
    const futureMonth = (today.getMonth() + 2) % 12
    const year = futureMonth < today.getMonth()
      ? today.getFullYear() - 9
      : today.getFullYear() - 10
    const dob = `${year}-${String(futureMonth + 1).padStart(2, '0')}-15`
    const age = calculateAgeFromDob(dob)
    expect(age).toBe(9)
  })
})
