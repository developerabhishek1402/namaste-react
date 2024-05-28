import React, {lazy, Suspense, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import RestaurantMenuPage from "./components/RestaurantMenuPage";
import UserContext from "./utils/UserContext";
//React Element


const Grocery = lazy(() => import("./components/Grocery"))

const AppLayout = () => {

  const [userName , setUserName] = useState();


  useEffect(() => {
    setUserName('Abhishek')
  }, [])

  return (
    <UserContext.Provider value={{loggedInUser : userName, setUserName}}>
    <div className="app">
      <Header />
      <Outlet />
      <Footer />
    </div>
    </UserContext.Provider>
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
