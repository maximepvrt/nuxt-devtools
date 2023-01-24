import type { NuxtDevtoolsHostClient, VueInspectorData } from '~/../src/types'

export function useClient() {
  return useState<NuxtDevtoolsHostClient>('devtools-client')
}

export function useComponentInspectorData() {
  return useState<VueInspectorData>('devtools-component-inspector-data')
}

const connectionTimeout = ref(false)
setTimeout(() => {
  connectionTimeout.value = true
}, 2000)

export const showConnectionWarning = computed(() => {
  return connectionTimeout.value && !useClient().value
})
