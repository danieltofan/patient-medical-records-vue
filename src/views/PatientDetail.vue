<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { getPatientById } from '../data/patients'
import PatientHeader from '../components/PatientHeader.vue'
import VitalsChart from '../components/VitalsChart.vue'
import MedicalTimeline from '../components/MedicalTimeline.vue'
import LabResults from '../components/LabResults.vue'
import AIInsights from '../components/AIInsights.vue'

const props = defineProps({
  id: {
    type: String,
    required: true
  }
})

const router = useRouter()

const patient = computed(() => getPatientById(props.id))

function goBack() {
  router.push('/')
}
</script>

<template>
  <div v-if="patient">
    <!-- Back Button -->
    <button
      @click="goBack"
      class="flex items-center text-gray-600 hover:text-gray-900 mb-6 transition-colors"
    >
      <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
      </svg>
      Back to Dashboard
    </button>

    <!-- Patient Header -->
    <PatientHeader :patient="patient" />

    <!-- Main Content Grid -->
    <div class="grid lg:grid-cols-3 gap-6">
      <!-- Left Column - Timeline & Labs -->
      <div class="lg:col-span-2 space-y-6">
        <MedicalTimeline :timeline="patient.timeline" />
        <LabResults :lab-results="patient.labResults" />
      </div>

      <!-- Right Column - Charts & AI Insights -->
      <div class="space-y-6">
        <VitalsChart :vitals="patient.vitals" />
        <AIInsights
          :insights="patient.aiInsights"
          :risk-score="patient.riskScore"
          :risk-factors="patient.riskFactors"
        />
      </div>
    </div>
  </div>

  <!-- Not Found -->
  <div v-else class="card text-center py-16">
    <svg class="w-20 h-20 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
    <h2 class="text-xl font-semibold text-gray-900 mb-2">Patient Not Found</h2>
    <p class="text-gray-600 mb-6">The patient you're looking for doesn't exist.</p>
    <button @click="goBack" class="btn-primary">Return to Dashboard</button>
  </div>
</template>
