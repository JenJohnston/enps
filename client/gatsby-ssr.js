import 'bootstrap/dist/css/bootstrap.min.css';
import "./src/scss/index.scss";
import React from "react";
import { Helmet } from "react-helmet";
import Layout from "./src/components/Layout";

export const wrapPageElement = ({ element, props }) => (
    <Layout {...props}>
      
            {element}
       
    </Layout>
)