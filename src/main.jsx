import React from "react";
import ReactDOM from "react-dom/client";
import AppRoutes from "./routes.jsx";
import { ThemeProvider } from "styled-components";
import theme from "./Styles/Theme.js";


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <AppRoutes/> 
        </ThemeProvider>   
    </React.StrictMode>
);