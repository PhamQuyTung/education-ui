// Pages
import Home from '~/pages/Home';
import Introduce from '~/pages/Introduce';
import Course from '~/pages/Course';
import Events from '~/pages/Events';
import Teacher from '~/pages/Teacher';
import News from '~/pages/News';
import Contact from '~/pages/Contact';

// Public routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/introduce', component: Introduce },
    { path: '/course', component: Course },
    { path: '/events', component: Events },
    { path: '/teacher', component: Teacher },
    { path: '/news', component: News },
    { path: '/contact', component: Contact },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
