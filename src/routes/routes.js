// File này chứa các tuyến đường
// Layouts
import HeaderOnly from '~/Layout/HeaderOnly';

// Pages
import Home from '~/pages/Home';
import Introduce from '~/pages/Introduce';
import Course from '~/pages/Course';
import Events from '~/pages/Events';
import Teacher from '~/pages/Teacher';
import News from '~/pages/News';
import Contact from '~/pages/Contact';
import CourseDetail from '~/pages/Course/CourseDetail';

// Public routes
const publicRoutes = [
    { path: '/', component: Home, layout: HeaderOnly },
    { path: '/introduce', component: Introduce },
    { path: '/course', component: Course },
    { path: '/events', component: Events },
    { path: '/teacher', component: Teacher },
    { path: '/news', component: News },
    { path: '/contact', component: Contact },
    { path: '/courseDetail', component: CourseDetail },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
