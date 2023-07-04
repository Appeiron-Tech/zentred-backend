export function delay(param: { milliSeconds: number }) {
  return new Promise((resolve) => setTimeout(resolve, param.milliSeconds))
}
