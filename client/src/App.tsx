import { BrowserRouter as Router, Routes, Route, Outlet, Navigate } from 'react-router-dom';

// pages & components
import Home from './pages/Home';
import NotFound from './pages/404';
import Posts from './pages/Posts/Posts';

export default function App() {
  const AdminRoute = () => {
    const currentURL = window.location.href;
    if (currentURL === "http://localhost:3000/posts")
      return <Outlet />
    return <Navigate to="/" />
  }

  return (
    <Router basename="/">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route element={<AdminRoute />}>
          <Route path="/posts" element={<Posts />} />
        </Route>
      </Routes>
    </Router>
  );
}
