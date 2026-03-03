import { useState, useEffect } from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import {LoadingSpinner} from "./components"
import {Home,Blog,Nest,Docs,NotFound} from "./pages";
import Layout from "./components/Layout"

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingSpinner loading={loading} />;
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="blog" element={<Blog />} />
        <Route path="nest" element={<Nest />} />
        <Route path="docs" element={<Docs />} />
        <Route path="*" element={<NotFound />} />
      </Route>,
    ),
  );

  return <RouterProvider router={router} />;
}

export default App;
