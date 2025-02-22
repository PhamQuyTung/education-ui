// src/routes/AppRoutes.js
import { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';
import { publicRoutes } from '~/routes';
import DefaultLayout from '~/Layout/DefaultLayout';

function AppRoutes() {
    return (
        <Routes>
            {publicRoutes.map((route, index) => {
                const Page = route.component;
                let Layout = DefaultLayout;

                if (route.layout) {
                    Layout = route.layout;
                } else if (route.layout === null) {
                    Layout = Fragment;
                }

                return (
                    <Route
                        key={index}
                        path={route.path}
                        element={
                            <Layout>
                                <Page />
                            </Layout>
                        }
                    />
                );
            })}
        </Routes>
    );
}

export default AppRoutes;
