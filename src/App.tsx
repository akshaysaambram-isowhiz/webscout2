import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Loading from "./components/Loading";
import NotFound from "./components/NotFound";

const Home = lazy(() => import("./pages/Home"));
const Data = lazy(() => import("./pages/Data"));
const Analytics = lazy(() => import("./pages/Analytics"));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/data/:id" element={<Data />} />
          <Route path="/data/analytics/:id" element={<Analytics />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
