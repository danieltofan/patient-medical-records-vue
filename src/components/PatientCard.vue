<script setup>
import { computed } from 'vue'

const props = defineProps({
  patient: {
    type: Object,
    required: true
  }
})

const riskLevel = computed(() => {
  if (props.patient.riskScore <= 25) return { level: 'Low', class: 'badge-green' }
  if (props.patient.riskScore <= 50) return { level: 'Medium', class: 'badge-amber' }
  return { level: 'High', class: 'badge-red' }
})

const avatarColors = {
  SC: 'bg-pink-500',
  JW: 'bg-blue-500',
  MR: 'bg-purple-500',
  RT: 'bg-green-500',
  ED: 'bg-amber-500'
}
</script>

<template>
  <router-link
    :to="`/patient/${patient.id}`"
    class="card hover:shadow-md hover:border-primary-200 transition-all duration-200 block"
  >
    <div class="flex items-start gap-4">
      <!-- Avatar -->
      <div
        class="w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold text-lg flex-shrink-0"
        :class="avatarColors[patient.avatar] || 'bg-gray-500'"
      >
        {{ patient.avatar }}
      </div>

      <!-- Info -->
      <div class="flex-1 min-w-0">
        <div class="flex items-center justify-between mb-1">
          <h3 class="font-semibold text-gray-900 truncate">{{ patient.name }}</h3>
          <span class="badge" :class="riskLevel.class">{{ riskLevel.level }} Risk</span>
        </div>

        <p class="text-sm text-gray-500 mb-2">
          {{ patient.age }} years old &bull; {{ patient.gender }} &bull; {{ patient.bloodType }}
        </p>

        <!-- Conditions -->
        <div class="flex flex-wrap gap-1.5">
          <span
            v-for="condition in patient.conditions.slice(0, 3)"
            :key="condition"
            class="badge badge-blue"
          >
            {{ condition }}
          </span>
          <span v-if="patient.conditions.length > 3" class="badge bg-gray-100 text-gray-600">
            +{{ patient.conditions.length - 3 }} more
          </span>
        </div>

        <!-- Quick stats -->
        <div class="flex items-center gap-4 mt-3 text-sm">
          <div class="flex items-center text-gray-600">
            <svg class="w-4 h-4 mr-1 text-healthcare-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            {{ patient.vitals.current.bp }}
          </div>
          <div class="flex items-center text-gray-600">
            <svg class="w-4 h-4 mr-1 text-healthcare-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            {{ patient.vitals.current.heartRate }} bpm
          </div>
          <div class="flex items-center text-gray-600">
            <svg class="w-4 h-4 mr-1 text-healthcare-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            {{ patient.medications.length }} meds
          </div>
        </div>
      </div>

      <!-- Arrow -->
      <svg class="w-5 h-5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
    </div>
  </router-link>
</template>
