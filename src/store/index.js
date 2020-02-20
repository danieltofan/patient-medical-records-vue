import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoading: false,
    patientData: null
  },
  getters: {
    patientProfile(state) {
      if (!state.patientData || !state.patientData.length) return null

      let record = state.patientData[0]
      return {
        name: record.userName,
        dob: record.userDob,
        height: record.meta.height
      }
    },
    patientRecords(state) {
      if (!state.patientData) return null

      return state.patientData.map(record => ({
        severity: record.diagnosis.severity,
        date: record.timestamp,
        diagnosis: record.diagnosis.name,
        diagnosisId: record.diagnosis.id,
        weight: record.meta.weight,
        doctor: record.doctor.name
      }))
    }
  },
  mutations: {
    setLoading(state, value) {
      state.isLoading = !!value
    },
    setPatientData(state, payload) {
      state.patientData = payload
    }
  },
  actions: {
    async getPatientInfo({commit}, payload) {
      if (!payload) {
        commit('setPatientData', null)
      } else {
        commit('setLoading', true)
        let url = `https://jsonmock.hackerrank.com/api/medical_records?userId=${payload}`
        let json = await axios.get(url)
        commit('setPatientData', json.data.data)
        commit('setLoading', false)
      }
    }
  }
})
