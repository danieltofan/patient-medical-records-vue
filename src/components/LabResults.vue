<script setup>
defineProps({
  labResults: {
    type: Array,
    required: true
  }
})

function formatDate(dateStr) {
  const date = new Date(dateStr)
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}

const statusStyles = {
  normal: { bg: 'bg-green-100', text: 'text-green-700' },
  optimal: { bg: 'bg-green-100', text: 'text-green-700' },
  borderline: { bg: 'bg-amber-100', text: 'text-amber-700' },
  elevated: { bg: 'bg-red-100', text: 'text-red-700' },
  osteoporosis: { bg: 'bg-red-100', text: 'text-red-700' }
}

function getStatusStyle(status) {
  return statusStyles[status] || statusStyles.normal
}
</script>

<template>
  <div class="card">
    <h2 class="text-lg font-semibold text-gray-900 mb-4">Lab Results</h2>

    <div class="overflow-x-auto">
      <table class="w-full">
        <thead>
          <tr class="border-b border-gray-100">
            <th class="text-left text-xs font-medium text-gray-500 uppercase tracking-wider py-3 pr-4">Test</th>
            <th class="text-left text-xs font-medium text-gray-500 uppercase tracking-wider py-3 pr-4">Date</th>
            <th class="text-left text-xs font-medium text-gray-500 uppercase tracking-wider py-3 pr-4">Value</th>
            <th class="text-left text-xs font-medium text-gray-500 uppercase tracking-wider py-3 pr-4">Reference</th>
            <th class="text-left text-xs font-medium text-gray-500 uppercase tracking-wider py-3">Status</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-50">
          <tr v-for="(lab, index) in labResults" :key="index" class="hover:bg-gray-50">
            <td class="py-3 pr-4">
              <span class="font-medium text-gray-900">{{ lab.test }}</span>
            </td>
            <td class="py-3 pr-4">
              <span class="text-sm text-gray-600">{{ formatDate(lab.date) }}</span>
            </td>
            <td class="py-3 pr-4">
              <span class="text-sm font-mono text-gray-900">{{ lab.value }}</span>
            </td>
            <td class="py-3 pr-4">
              <span class="text-sm text-gray-500">{{ lab.reference }}</span>
            </td>
            <td class="py-3">
              <span
                class="badge capitalize"
                :class="[getStatusStyle(lab.status).bg, getStatusStyle(lab.status).text]"
              >
                {{ lab.status }}
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
