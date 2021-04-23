import { createEffect } from "../../effect"

export const timer = createEffect(() => {
  let state = 0
  let timer: ReturnType<typeof setTimeout>
  return (duration: number, invalidate = false) => {
    if (invalidate) {
      state = 0
      clearTimeout(timer)
    }
    if (state === 0) {
      state = 1
      timer = setTimeout(() => {
        state = 2
      }, duration)
    }
    return state === 2
  }
})
