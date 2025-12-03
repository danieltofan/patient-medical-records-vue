<script setup>
import { computed } from 'vue'

const props = defineProps({
  patient: {
    type: Object,
    required: true
  }
})

const avatarColors = {
  SC: 'bg-pink-500',
  JW: 'bg-blue-500',
  MR: 'bg-purple-500',
  RT: 'bg-green-500',
  ED: 'bg-amber-500'
}

function formatDate(dateStr) {
  const date = new Date(dateStr)
  return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
}
</script>

<template>
  <div class="card mb-6">
    <div class="flex flex-col md:flex-row gap-6">
      <!-- Avatar and Basic Info -->
      <div class="flex items-start gap-4">
        <div
          class="w-20 h-20 rounded-2xl flex items-center justify-center text-white font-bold text-2xl flex-shrink-0"
          :class="avatarColors[patient.avatar] || 'bg-gray-500'"
        >
          {{ patient.avatar }}
        </div>
        <div>
          <h1 class="text-2xl font-bold text-gray-900">{{ patient.name }}</h1>
          <p class="text-gray-600 mt-1">
            {{ patient.age }} years old &bull; {{ patient.gender }} &bull; {{ patient.bloodType }}
          </p>
          <p class="text-sm text-gray-500 mt-1">DOB: {{ formatDate(patient.dob) }}</p>
        </div>
      </div>

      <!-- Quick Stats -->
      <div class="flex-1 grid grid-cols-2 md:grid-cols-4 gap-4">
        <div class="text-center p-3 bg-blue-50 rounded-lg">
          <p class="text-2xl font-bold text-blue-600">{{ patient.vitals.current.bp }}</p>
          <p class="text-xs text-blue-600">Blood Pressure</p>
        </div>
        <div class="text-center p-3 bg-red-50 rounded-lg">
          <p class="text-2xl font-bold text-red-600">{{ patient.vitals.current.heartRate }}</p>
          <p class="text-xs text-red-600">Heart Rate (bpm)</p>
        </div>
        <div class="text-center p-3 bg-purple-50 rounded-lg">
          <p class="text-2xl font-bold text-purple-600">{{ patient.vitals.current.weight }}</p>
          <p class="text-xs text-purple-600">Weight (lbs)</p>
        </div>
        <div class="text-center p-3 bg-green-50 rounded-lg">
          <p class="text-2xl font-bold text-green-600">{{ patient.vitals.current.height }}"</p>
          <p class="text-xs text-green-600">Height</p>
        </div>
      </div>
    </div>

    <!-- Contact & Insurance Info -->
    <div class="grid md:grid-cols-3 gap-6 mt-6 pt-6 border-t border-gray-100">
      <div>
        <h3 class="text-sm font-medium text-gray-500 mb-2">Contact Information</h3>
        <p class="text-sm text-gray-900">{{ patient.phone }}</p>
        <p class="text-sm text-gray-900">{{ patient.email }}</p>
        <p class="text-sm text-gray-600 mt-1">{{ patient.address }}</p>
      </div>

      <div>
        <h3 class="text-sm font-medium text-gray-500 mb-2">Emergency Contact</h3>
        <p class="text-sm text-gray-900">{{ patient.emergencyContact.name }}</p>
        <p class="text-sm text-gray-600">{{ patient.emergencyContact.relation }}</p>
        <p class="text-sm text-gray-600">{{ patient.emergencyContact.phone }}</p>
      </div>

      <div>
        <h3 class="text-sm font-medium text-gray-500 mb-2">Insurance</h3>
        <p class="text-sm text-gray-900">{{ patient.insurance.provider }}</p>
        <p class="text-sm text-gray-600">Policy: {{ patient.insurance.policyNumber }}</p>
        <p class="text-sm text-gray-600">Group: {{ patient.insurance.group }}</p>
      </div>
    </div>

    <!-- Conditions, Allergies, Medications -->
    <div class="grid md:grid-cols-3 gap-6 mt-6 pt-6 border-t border-gray-100">
      <div>
        <h3 class="text-sm font-medium text-gray-500 mb-2">Conditions</h3>
        <div class="flex flex-wrap gap-1.5">
          <span v-for="condition in patient.conditions" :key="condition" class="badge badge-blue">
            {{ condition }}
          </span>
        </div>
      </div>

      <div>
        <h3 class="text-sm font-medium text-gray-500 mb-2">Allergies</h3>
        <div v-if="patient.allergies.length > 0" class="flex flex-wrap gap-1.5">
          <span v-for="allergy in patient.allergies" :key="allergy" class="badge badge-red">
            {{ allergy }}
          </span>
        </div>
        <p v-else class="text-sm text-gray-600">No known allergies</p>
      </div>

      <div>
        <h3 class="text-sm font-medium text-gray-500 mb-2">Primary Care</h3>
        <p class="text-sm text-gray-900">{{ patient.primaryCare }}</p>
      </div>
    </div>

    <!-- Medications -->
    <div class="mt-6 pt-6 border-t border-gray-100">
      <h3 class="text-sm font-medium text-gray-500 mb-3">Current Medications</h3>
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        <div
          v-for="med in patient.medications"
          :key="med.name"
          class="p-3 bg-gray-50 rounded-lg"
        >
          <p class="font-medium text-gray-900">{{ med.name }}</p>
          <p class="text-sm text-gray-600">{{ med.dosage }} - {{ med.frequency }}</p>
          <p class="text-xs text-gray-500 mt-1">{{ med.purpose }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
