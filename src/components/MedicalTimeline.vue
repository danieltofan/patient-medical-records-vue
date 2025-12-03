<script setup>
import { computed } from 'vue'

const props = defineProps({
  timeline: {
    type: Array,
    required: true
  }
})

const categoryColors = {
  'primary-care': { bg: 'bg-blue-100', text: 'text-blue-700', dot: 'bg-blue-500' },
  'cardiology': { bg: 'bg-red-100', text: 'text-red-700', dot: 'bg-red-500' },
  'lab': { bg: 'bg-purple-100', text: 'text-purple-700', dot: 'bg-purple-500' },
  'psychiatry': { bg: 'bg-pink-100', text: 'text-pink-700', dot: 'bg-pink-500' },
  'ophthalmology': { bg: 'bg-cyan-100', text: 'text-cyan-700', dot: 'bg-cyan-500' },
  'neurology': { bg: 'bg-amber-100', text: 'text-amber-700', dot: 'bg-amber-500' },
  'rheumatology': { bg: 'bg-orange-100', text: 'text-orange-700', dot: 'bg-orange-500' },
  'gastroenterology': { bg: 'bg-green-100', text: 'text-green-700', dot: 'bg-green-500' },
  'gynecology': { bg: 'bg-rose-100', text: 'text-rose-700', dot: 'bg-rose-500' },
  'radiology': { bg: 'bg-slate-100', text: 'text-slate-700', dot: 'bg-slate-500' }
}

const typeIcons = {
  visit: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z',
  lab: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z',
  specialist: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
  procedure: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
}

function formatDate(dateStr) {
  const date = new Date(dateStr)
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}

function getColors(category) {
  return categoryColors[category] || { bg: 'bg-gray-100', text: 'text-gray-700', dot: 'bg-gray-500' }
}
</script>

<template>
  <div class="card">
    <h2 class="text-lg font-semibold text-gray-900 mb-6">Medical Timeline</h2>

    <div class="relative">
      <!-- Timeline line -->
      <div class="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200"></div>

      <!-- Timeline items -->
      <div class="space-y-6">
        <div v-for="(event, index) in timeline" :key="index" class="relative pl-10">
          <!-- Dot -->
          <div
            class="absolute left-2.5 w-3 h-3 rounded-full ring-4 ring-white"
            :class="getColors(event.category).dot"
          ></div>

          <!-- Content -->
          <div class="bg-gray-50 rounded-lg p-4">
            <div class="flex flex-wrap items-center gap-2 mb-2">
              <span class="text-sm font-medium text-gray-500">{{ formatDate(event.date) }}</span>
              <span
                class="badge text-xs"
                :class="[getColors(event.category).bg, getColors(event.category).text]"
              >
                {{ event.category.replace('-', ' ') }}
              </span>
            </div>

            <div class="flex items-start gap-3">
              <div class="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center flex-shrink-0">
                <svg class="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="typeIcons[event.type] || typeIcons.visit" />
                </svg>
              </div>
              <div>
                <h3 class="font-medium text-gray-900">{{ event.title }}</h3>
                <p class="text-sm text-gray-600 mt-0.5">{{ event.doctor }}</p>
                <p class="text-sm text-gray-500 mt-2">{{ event.notes }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
