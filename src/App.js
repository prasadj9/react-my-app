import "./App.css";
import ComponentA from "./components/ComponentA";
import { lazy, Suspense } from "react";
import ConditionalRender from "./components/ConditionalRender";
import HandleEvents from "./components/HandleEvents";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import CallExpandable from "./components/CallExpandable";
import RandomColorGeneraor from "./components/RandomColorGeneraor";
import RefExample from "./components/RefExample";
import Layout from "./components/Layout";

//Lazy loading of component
const MyComponent = lazy(() => import("./components/MyComponent"));
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <ComponentA />,
        },
        {
          path: "/switch",
          element: <ConditionalRender />,
        },
        {
          path: "/event",
          element: <HandleEvents />,
        },
        {
          path: "/expandabletext",
          element: <CallExpandable />,
        },
        {
          path: "/randomcolor",
          element: <RandomColorGeneraor />,
        },
        {
          path: "/useref",
          element: <RefExample />,
        },
        {
          path: "/lazyload",
          element: (
            <Suspense fallback={<div>My component is Loading...</div>}>
              <MyComponent />
            </Suspense>
          ),
        },
      ],
    },
  ]);

  return (
    <div className="App">
      <div className="content">
        <RouterProvider router={router}/>
      </div>
    </div>
  );
}

export default App;
