import 'bootstrap/dist/css/bootstrap.min.css';
import "./src/scss/index.scss";
import React from "react";
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'
import Layout from "./src/components/Layout";

export const wrapPageElement = ({ element, props }) => (
    <GoogleReCaptchaProvider 
        reCaptchaKey={process.env.GATSBY_RECAPTCHA_SITE_KEY}>
        <Layout {...props}>
            {element}
        </Layout>
    </GoogleReCaptchaProvider>
)