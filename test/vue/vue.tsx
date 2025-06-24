import { defineComponent, ref } from 'vue'


export const TestComponent = defineComponent(() => {
  const count = ref(0)
  const n = name
  const m = `${[]}`

  return () => (
    <div>{count.value}</div>
  )
})