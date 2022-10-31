import 'bootstrap/dist/css/bootstrap.min.css';
import "./src/scss/index.scss";
import 'aos/dist/aos.css'; 
import AOS from 'aos';
import React from "react";
import Layout from "./src/components/Layout";

if (typeof document !== `undefined`){
    AOS.init();
}

export const wrapPageElement = ({ element, props }) => (
        <Layout {...props}>
            {element}
        </Layout>
)