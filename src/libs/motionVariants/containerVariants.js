// export const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
// };

const baseTransition = { duration: 0.8, ease: 'easeOut' };

export const slideInFromLeft = (delay = 0) => ({
    hidden: { opacity: 0, x: -100 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { ...baseTransition, delay },
    },
});

export const slideInFromRight = (delay = 0) => ({
    hidden: { opacity: 0, x: 100 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { ...baseTransition, delay },
    },
});
