import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MenuBoxs from "./Components/Categories/MenuBoxs.tsx";
import Restaurant from './Components/List/Restaurant.tsx';
import RootLayouts from "./Layout/RootLayouts.tsx";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <RootLayouts/>,
            children: [
                {
                    path: '/',
                    element: <MenuBoxs/>
                },
                {
                    path: "/restaurant/:name",
                    element: <Restaurant/>
                }
            ]
        },

    ])

    return (
        <div className="container">
            <RouterProvider router={router}/>

        </div>
    );
}

export default App;
