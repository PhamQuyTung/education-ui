// File này chứa các tuyến đường
// Layouts
import HeaderOnly from '~/Layout/HeaderOnly';
import NoLayOut from '~/Layout/NoLayOut';

// Pages
import Home from '~/pages/Home';
import Introduce from '~/pages/Introduce';
import Course from '~/pages/Course';
import Events from '~/pages/Events';
import Teacher from '~/pages/Teacher';
import News from '~/pages/News';
import Contact from '~/pages/Contact';
import Auth from '~/pages/Auth';
import CourseDetail from '~/pages/Course/CourseDetail';

//
import config from '~/config';

// Public routes
const publicRoutes = [
    { path: config.ROUTES_CONFIG.HOME, component: Home, layout: HeaderOnly },
    { path: config.ROUTES_CONFIG.INTRODUCE, component: Introduce },
    { path: config.ROUTES_CONFIG.COURSE, component: Course },
    { path: config.ROUTES_CONFIG.EVENTS, component: Events },
    { path: config.ROUTES_CONFIG.TEACHER, component: Teacher },
    { path: config.ROUTES_CONFIG.NEWS, component: News },
    { path: config.ROUTES_CONFIG.CONTACT, component: Contact },
    { path: config.ROUTES_CONFIG.AUTH, component: Auth, layout: NoLayOut },
    { path: config.ROUTES_CONFIG.COURSE_DETAIL, component: CourseDetail },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
