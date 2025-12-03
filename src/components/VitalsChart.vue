<script setup>
import { computed, ref, onMounted } from 'vue'
import { Line } from 'vue-chartjs'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
)

const props = defineProps({
  vitals: {
    type: Object,
    required: true
  }
})

const activeMetric = ref('bp')

const metrics = [
  { key: 'bp', label: 'Blood Pressure', unit: 'mmHg' },
  { key: 'heartRate', label: 'Heart Rate', unit: 'bpm' },
  { key: 'weight', label: 'Weight', unit: 'lbs' }
]

const chartData = computed(() => {
  const history = [...props.vitals.history].reverse()
  const labels = history.map(v => {
    const date = new Date(v.date)
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
  })

  if (activeMetric.value === 'bp') {
    const systolic = history.map(v => parseInt(v.bp.split('/')[0]))
    const diastolic = history.map(v => parseInt(v.bp.split('/')[1]))

    return {
      labels,
      datasets: [
        {
          label: 'Systolic',
          data: systolic,
          borderColor: '#ef4444',
          backgroundColor: 'rgba(239, 68, 68, 0.1)',
          fill: true,
          tension: 0.3
        },
        {
          label: 'Diastolic',
          data: diastolic,
          borderColor: '#3b82f6',
          backgroundColor: 'rgba(59, 130, 246, 0.1)',
          fill: true,
          tension: 0.3
        }
      ]
    }
  }

  const data = history.map(v => v[activeMetric.value])
  const colors = {
    heartRate: { border: '#ef4444', bg: 'rgba(239, 68, 68, 0.1)' },
    weight: { border: '#8b5cf6', bg: 'rgba(139, 92, 246, 0.1)' }
  }

  return {
    labels,
    datasets: [
      {
        label: metrics.find(m => m.key === activeMetric.value)?.label,
        data,
        borderColor: colors[activeMetric.value].border,
        backgroundColor: colors[activeMetric.value].bg,
        fill: true,
        tension: 0.3
      }
    ]
  }
})

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'bottom'
    }
  },
  scales: {
    y: {
      beginAtZero: false,
      grid: {
        color: 'rgba(0, 0, 0, 0.05)'
      }
    },
    x: {
      grid: {
        display: false
      }
    }
  }
}
</script>

<template>
  <div class="card">
    <div class="flex flex-wrap items-center justify-between gap-4 mb-6">
      <h2 class="text-lg font-semibold text-gray-900">Vitals Trend</h2>

      <!-- Metric Selector -->
      <div class="flex gap-2">
        <button
          v-for="metric in metrics"
          :key="metric.key"
          @click="activeMetric = metric.key"
          class="px-3 py-1.5 rounded-lg text-sm font-medium transition-colors"
          :class="activeMetric === metric.key
            ? 'bg-primary-600 text-white'
            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'"
        >
          {{ metric.label }}
        </button>
      </div>
    </div>

    <!-- Current Values -->
    <div class="grid grid-cols-3 gap-4 mb-6">
      <div class="text-center p-3 bg-gray-50 rounded-lg">
        <p class="text-sm text-gray-500">Blood Pressure</p>
        <p class="text-xl font-bold text-gray-900">{{ vitals.current.bp }}</p>
        <p class="text-xs text-gray-400">mmHg</p>
      </div>
      <div class="text-center p-3 bg-gray-50 rounded-lg">
        <p class="text-sm text-gray-500">Heart Rate</p>
        <p class="text-xl font-bold text-gray-900">{{ vitals.current.heartRate }}</p>
        <p class="text-xs text-gray-400">bpm</p>
      </div>
      <div class="text-center p-3 bg-gray-50 rounded-lg">
        <p class="text-sm text-gray-500">Weight</p>
        <p class="text-xl font-bold text-gray-900">{{ vitals.current.weight }}</p>
        <p class="text-xs text-gray-400">lbs</p>
      </div>
    </div>

    <!-- Chart -->
    <div class="h-64">
      <Line :data="chartData" :options="chartOptions" />
    </div>
  </div>
</template>
