import { useInView } from 'react-intersection-observer';

export const useInViewObserver = (options = { triggerOnce: false, threshold: 0.2 }) => {
    const [ref, inView] = useInView(options);
    return { ref, inView };
};
