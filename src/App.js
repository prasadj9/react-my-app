import "./App.css";
import ComponentA from "./components/ComponentA";
import { lazy, Suspense } from "react";
import ConditionalRender from "./components/ConditionalRender";
import HandleEvents from "./components/HandleEvents";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import CallExpandable from "./components/CallExpandable";
import RandomColorGeneraor from "./components/RandomColorGeneraor";
import RefExample from "./components/RefExample";
//Lazy loading of component
const MyComponent = lazy(() => import("./components/MyComponent"));
function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <ComponentA/>
      <ConditionalRender/>
      <HandleEvents/> */}
      <div className="content">
        <Routes>
          <Route path="/" element={<ComponentA />} />
          <Route path="/switch" Component={ConditionalRender} />
          <Route path="/event" Component={HandleEvents} />
          <Route path="/expandabletext" Component={CallExpandable} />
          <Route path="/randomcolor" Component={RandomColorGeneraor} />
          <Route path="/useref" Component={RefExample} />
          <Route
            path="/lazyload"
            element={
              <Suspense fallback={<div>My component is Loading...</div>}>
                <MyComponent />
              </Suspense>
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
