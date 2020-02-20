<template>
  <div id="app">
    <b-navbar variant="dark" type="dark" fixed="top">
      <b-navbar-brand tag="h1">Patient Records</b-navbar-brand>
    </b-navbar>

    <b-container>
      <b-row class="pt-5" id="patient-filter" tag="section">
        <b-col md="6" offset-md="2">
          <b-form-select v-model="selectedPatientId" :options="patients"></b-form-select>
        </b-col>

        <b-col md="2" class="mt-3 mt-md-0">
          <b-button block variant="success" :disabled="disableShowButton" @click="getPatientInfo(selectedPatientId)">Show</b-button>
        </b-col>
      </b-row>
      
      <b-row class="mt-5 p-3" id="results" tag="section">
        <b-col sm="12">
          <transition-group name="fade" mode="out-in">
            <b-spinner v-if="isLoading" class="mt-5 mx-auto" id="loader" variant="primary" label="Loading..." style="width: 6rem; height: 6rem;" key="spinner"></b-spinner>

            <div v-if="patientProfile" id="patient-profile-container" key="patientData">
              <div id="patient-profile" class="mb-3">
                <span :class="{'text-muted': isLoading}">{{patientProfile.name}}</span>
                <span :class="{'text-muted': isLoading}">DOB: {{patientProfile.dob}}</span>
                <span :class="{'text-muted': isLoading}">Height: {{patientProfile.height}} cm</span>
              </div>

              <b-table v-if="patientRecords" striped hover responsive :fields="tableFields" :items="patientRecords" sort-by="date" :sort-desc="true" :tbody-tr-class="tableRowClass">
                <template v-slot:cell(date)="data">
                   {{ data.item.date | moment('DD/MM/YYYY') }}
                </template>
                <template v-slot:cell(diagnosis)="data">
                  {{data.item.diagnosis}}({{data.item.diagnosisId}})
                </template>
                <template v-slot:cell(weight)="data">
                  {{data.item.weight}} lb
                </template>
              </b-table>
            </div>
          </transition-group>
         
        </b-col>
        
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex'

export default {
  name: 'App',
  data() {
    return {
      selectedPatientId: null,
      patients: [
        { value: null, text: 'Select Patient' },
        { value: 1, text: 'John Oliver' },
        { value: 2, text: 'Bob Martin' },
        { value: 3, text: 'Helena Fernandez' },
        { value: 4, text: 'Francesco De Mello' }
      ],
      tableFields: [
        { key: 'severity', label: 'SL'},
        { key: 'date', label: 'Date'},
        { key: 'diagnosis', label: 'Diagnosis'},
        { key: 'weight', label: 'Weight'},
        { key: 'doctor', label: 'Doctor'}
      ]
    }
  },
  computed: {
    ...mapState(['isLoading']),
    ...mapGetters(['patientProfile', 'patientRecords']),
    disableShowButton() {
      return this.selectedPatientId === null
    }
  },
  methods: {
    ...mapActions(['getPatientInfo']),
    tableRowClass() {
      return this.isLoading ? 'text-muted' : ''
    }
  }
}

</script>

<style>

body {
  background-color: #f3f7f7 !important;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 0.9em;
}

#loader {
  position: absolute;
  z-index: 10;
  left: calc(50% - 3rem);
  top: 10%;
}

#results {
  background-color: white;
  margin: 20px auto;
  min-height: 40vh;
}

div#patient-profile {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

div#patient-profile span {
  display: inline-block;
  flex: 1 1 30%;
  font-size: 0.95em;
  color: #171b21;
}

tr:hover td {
  background-color: lightcyan;
  color: darkslateblue;
  transition: all 0.3s;
}

.fade-enter-active {
  transition: opacity .25s;
}

.fade-leave-active {
  transition: opacity .1s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

.custom-select {
  font-size: 0.9rem !important;
}

.text-muted {
  opacity: 0.5;
  filter: blur(1px);
}

</style>
