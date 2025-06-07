import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
// This code sets up a basic React application with routing using React Router.
// It imports necessary modules and components, including React, ReactDOM, and the BrowserRouter from 'react-router-dom'.
// The application defines two routes: the home page ("/") which renders the Home component, and the about page ("/about") which renders the About component.
// The ReactDOM.createRoot method is used to render the application into the root element of the HTML document.
// The application is wrapped in React.StrictMode to help identify potential problems in the application.
// The BrowserRouter component enables the use of the HTML5 history API to keep the UI in sync with the URL.
// This setup allows for a single-page application (SPA) experience, where navigation between pages does not require a full page reload, enhancing user experience and performance.
// The Home and About components are simple functional components that return headings for their respective pages.
// This modular approach helps in maintaining and organizing the codebase effectively, allowing for easy expansion and modification of the application in the future.
// The Home component is defined in 'client/src/pages/Home.jsx' and the About component in 'client/src/pages/About.jsx'.
// The Home component displays a heading for the home page, while the About component displays a heading for the about page.
// This code is a foundational setup for a React application, demonstrating the use of routing to navigate between different pages of the application.
// The Home component is defined in 'client/src/pages/Home.jsx' and the About component in 'client/src/pages/About.jsx'.
// This code is a foundational setup for a React application, demonstrating the use of routing to navigate between different pages of the application.
// The Home component is defined in 'client/src/pages/Home.jsx' and the About component in 'client/src/pages/About.jsx'.
// This code is a foundational setup for a React application, demonstrating the use of routing to navigate between different pages of the application.
// The Home component is defined in 'client/src/pages/Home.jsx' and the About component in 'client/src/pages/About.jsx'.
