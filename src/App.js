import React, {lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import RestaurantMenuPage from "./components/RestaurantMenuPage";
//React Element


const Grocery = lazy(() => import("./components/Grocery"))

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path : '/',
    element : <AppLayout />,
    children : [
      {
        path : '/',
        element : <Body />
      },
      {
        path : '/about',
        element : <About />
      },
      {
        path : '/contact-us',
        element : <ContactUs />
      },
      {
        path : '/restaurants/:resId',
        element : <RestaurantMenuPage />
      },
      {
        path : '/grocery',
        element : <Suspense fallback={<h1>Loading</h1>}><Grocery /></Suspense>
      }
    ],
    errorElement : <Error />
  },
  
])


const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(<RouterProvider router={appRouter} />);
