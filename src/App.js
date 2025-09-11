import React, { Suspense, lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import { Body } from "./Components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./Components/About";
import ContactPage from "./Components/ContactPage";
import Error from "./Components/Error";
import Testing from "./Components/Testing";
import RestaurantMenu from "./Components/RestaurantMenu";
import UserContext from "./utils/UserContext";
const Grocery = lazy(() => import("./Components/Grocery"));

const AppLayout = () => {
    const [userName, setUserName] = useState(null);

    //if authentication written
    useEffect(() => {
        //make the API call 
        const data = {
            name: "Jyothi Sai Priya"
        }
        setUserName(data.name);
    }, [])


    return (
        <UserContext.Provider value={{ loggedInuser: userName, setUserName }}>
            <div className="mainLayout">
                <Header />
                <Outlet />
            </div>
        </UserContext.Provider>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contactPage",
                element: <ContactPage />
            },
            {
                path: "/testing",
                element: <Testing />
            },
            {
                path: "/restaurant/:resId",
                element: <RestaurantMenu />
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<h1>fallback for the grocery component</h1>}>
                    <Grocery />
                </Suspense>,
            },
        ],
        errorElement: <Error />
    },
])


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
