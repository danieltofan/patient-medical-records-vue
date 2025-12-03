<script setup>
import { computed } from 'vue'

const props = defineProps({
  patients: {
    type: Array,
    required: true
  }
})

const stats = computed(() => {
  const total = props.patients.length
  const highRisk = props.patients.filter(p => p.riskScore > 50).length
  const pendingLabs = props.patients.filter(p => {
    const latestLab = p.labResults[0]
    if (!latestLab) return true
    const labDate = new Date(latestLab.date)
    const monthsAgo = (Date.now() - labDate) / (1000 * 60 * 60 * 24 * 30)
    return monthsAgo > 3
  }).length
  const avgAge = Math.round(props.patients.reduce((sum, p) => sum + p.age, 0) / total)

  return [
    {
      label: 'Total Patients',
      value: total,
      icon: 'users',
      color: 'bg-blue-500',
      bgColor: 'bg-blue-50'
    },
    {
      label: 'High Risk',
      value: highRisk,
      icon: 'alert',
      color: 'bg-red-500',
      bgColor: 'bg-red-50'
    },
    {
      label: 'Labs Due',
      value: pendingLabs,
      icon: 'lab',
      color: 'bg-amber-500',
      bgColor: 'bg-amber-50'
    },
    {
      label: 'Avg Age',
      value: avgAge,
      icon: 'calendar',
      color: 'bg-purple-500',
      bgColor: 'bg-purple-50'
    }
  ]
})
</script>

<template>
  <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
    <div v-for="stat in stats" :key="stat.label" class="stat-card">
      <div class="flex items-center gap-3">
        <div class="w-10 h-10 rounded-lg flex items-center justify-center" :class="stat.bgColor">
          <!-- Users icon -->
          <svg v-if="stat.icon === 'users'" class="w-5 h-5" :class="stat.color.replace('bg-', 'text-')" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
          <!-- Alert icon -->
          <svg v-else-if="stat.icon === 'alert'" class="w-5 h-5" :class="stat.color.replace('bg-', 'text-')" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <!-- Lab icon -->
          <svg v-else-if="stat.icon === 'lab'" class="w-5 h-5" :class="stat.color.replace('bg-', 'text-')" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
          </svg>
          <!-- Calendar icon -->
          <svg v-else-if="stat.icon === 'calendar'" class="w-5 h-5" :class="stat.color.replace('bg-', 'text-')" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
        <div>
          <p class="text-2xl font-bold text-gray-900">{{ stat.value }}</p>
          <p class="text-sm text-gray-500">{{ stat.label }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
