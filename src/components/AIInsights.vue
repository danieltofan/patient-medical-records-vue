<script setup>
defineProps({
  insights: {
    type: Array,
    required: true
  },
  riskScore: {
    type: Number,
    required: true
  },
  riskFactors: {
    type: Array,
    required: true
  }
})

const insightStyles = {
  positive: {
    bg: 'bg-green-50',
    border: 'border-green-200',
    icon: 'text-green-500',
    iconPath: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
  },
  recommendation: {
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    icon: 'text-blue-500',
    iconPath: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z'
  },
  alert: {
    bg: 'bg-amber-50',
    border: 'border-amber-200',
    icon: 'text-amber-500',
    iconPath: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z'
  },
  info: {
    bg: 'bg-purple-50',
    border: 'border-purple-200',
    icon: 'text-purple-500',
    iconPath: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
  }
}

function getRiskColor(score) {
  if (score <= 25) return 'text-green-600'
  if (score <= 50) return 'text-amber-600'
  return 'text-red-600'
}

function getRiskBgColor(score) {
  if (score <= 25) return 'bg-green-500'
  if (score <= 50) return 'bg-amber-500'
  return 'bg-red-500'
}

function getRiskLabel(score) {
  if (score <= 25) return 'Low Risk'
  if (score <= 50) return 'Medium Risk'
  return 'High Risk'
}
</script>

<template>
  <div class="card">
    <div class="flex items-center gap-2 mb-6">
      <div class="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center">
        <svg class="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      </div>
      <h2 class="text-lg font-semibold text-gray-900">AI Insights</h2>
    </div>

    <!-- Risk Score -->
    <div class="mb-6 p-4 bg-gray-50 rounded-xl">
      <div class="flex items-center justify-between mb-3">
        <span class="text-sm font-medium text-gray-600">Health Risk Score</span>
        <span class="text-2xl font-bold" :class="getRiskColor(riskScore)">{{ riskScore }}/100</span>
      </div>

      <!-- Progress bar -->
      <div class="h-3 bg-gray-200 rounded-full overflow-hidden mb-3">
        <div
          class="h-full rounded-full transition-all duration-500"
          :class="getRiskBgColor(riskScore)"
          :style="{ width: `${riskScore}%` }"
        ></div>
      </div>

      <div class="flex items-center justify-between text-sm">
        <span class="font-medium" :class="getRiskColor(riskScore)">{{ getRiskLabel(riskScore) }}</span>
        <span class="text-gray-500">Based on {{ riskFactors.length }} factors</span>
      </div>
    </div>

    <!-- Risk Factors -->
    <div class="mb-6">
      <h3 class="text-sm font-medium text-gray-700 mb-2">Risk Factors</h3>
      <div class="flex flex-wrap gap-2">
        <span
          v-for="factor in riskFactors"
          :key="factor"
          class="badge badge-red"
        >
          {{ factor }}
        </span>
      </div>
    </div>

    <!-- Insights List -->
    <div class="space-y-3">
      <div
        v-for="(insight, index) in insights"
        :key="index"
        class="p-3 rounded-lg border"
        :class="[insightStyles[insight.type].bg, insightStyles[insight.type].border]"
      >
        <div class="flex gap-3">
          <svg
            class="w-5 h-5 flex-shrink-0 mt-0.5"
            :class="insightStyles[insight.type].icon"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="insightStyles[insight.type].iconPath" />
          </svg>
          <p class="text-sm text-gray-700">{{ insight.text }}</p>
        </div>
      </div>
    </div>

    <!-- Disclaimer -->
    <p class="text-xs text-gray-400 mt-4 text-center">
      AI-generated insights for demonstration purposes only.
    </p>
  </div>
</template>
