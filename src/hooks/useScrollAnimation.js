import { useInView } from 'react-intersection-observer'

export function useScrollAnimation(options = {}) {
  const { ref, inView } = useInView({
    threshold: options.threshold ?? 0.15,
    triggerOnce: options.triggerOnce !== false,
    ...options,
  })
  return { ref, inView }
}
