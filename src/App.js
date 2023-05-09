import React from 'react';
import {RouterProvider} from "react-router-dom";
import router from "./router";
import Header from "./compoonet/Header";
import Footer from "./compoonet/Footer";

const App = () => {
    return (
        <>
            <Header />
            <RouterProvider router={router} />
            <Footer />
        </>
    );
};

export default App;