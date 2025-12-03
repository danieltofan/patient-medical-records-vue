<script setup>
import { ref, computed } from 'vue'
import { patients, searchPatients } from '../data/patients'
import StatsOverview from '../components/StatsOverview.vue'
import PatientCard from '../components/PatientCard.vue'

const searchQuery = ref('')
const riskFilter = ref('all')

const filteredPatients = computed(() => {
  let result = searchQuery.value
    ? searchPatients(searchQuery.value)
    : [...patients]

  if (riskFilter.value !== 'all') {
    result = result.filter(p => {
      if (riskFilter.value === 'low') return p.riskScore <= 25
      if (riskFilter.value === 'medium') return p.riskScore > 25 && p.riskScore <= 50
      if (riskFilter.value === 'high') return p.riskScore > 50
      return true
    })
  }

  return result
})

const riskCounts = computed(() => ({
  all: patients.length,
  low: patients.filter(p => p.riskScore <= 25).length,
  medium: patients.filter(p => p.riskScore > 25 && p.riskScore <= 50).length,
  high: patients.filter(p => p.riskScore > 50).length
}))
</script>

<template>
  <div>
    <!-- Page Header -->
    <div class="mb-8">
      <h1 class="text-2xl font-bold text-gray-900 mb-2">Patient Dashboard</h1>
      <p class="text-gray-600">Overview of your patient population and health metrics.</p>
    </div>

    <!-- Stats Overview -->
    <StatsOverview :patients="patients" class="mb-8" />

    <!-- Filters -->
    <div class="flex flex-col sm:flex-row gap-4 mb-6">
      <!-- Search -->
      <div class="flex-1 relative">
        <svg class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Search patients by name or condition..."
          class="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
        />
      </div>

      <!-- Risk Filter -->
      <div class="flex gap-2">
        <button
          v-for="filter in ['all', 'low', 'medium', 'high']"
          :key="filter"
          @click="riskFilter = filter"
          class="px-4 py-2 rounded-lg font-medium text-sm transition-colors capitalize"
          :class="riskFilter === filter
            ? 'bg-primary-600 text-white'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'"
        >
          {{ filter === 'all' ? 'All' : filter }}
          <span class="ml-1 opacity-75">({{ riskCounts[filter] }})</span>
        </button>
      </div>
    </div>

    <!-- Patient List -->
    <div class="space-y-4">
      <PatientCard
        v-for="patient in filteredPatients"
        :key="patient.id"
        :patient="patient"
      />

      <!-- Empty State -->
      <div v-if="filteredPatients.length === 0" class="card text-center py-12">
        <svg class="w-16 h-16 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 class="text-lg font-medium text-gray-900 mb-1">No patients found</h3>
        <p class="text-gray-500">Try adjusting your search or filter criteria.</p>
      </div>
    </div>
  </div>
</template>
