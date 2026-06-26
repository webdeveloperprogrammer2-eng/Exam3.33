import { createBrowserRouter, RouterProvider } from 'react-router'
import AboutPage from './pages/About/AboutPage';
import HomePage from './pages/Home/HomePage';
import BlogPage from './pages/Blog/BlogPage';
import Contact from './pages/Contact/ContactPage';
import Layout from './layout/Layout';
import NotFound from './pages/NotFound';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          index: true,
          element: <HomePage />
        },
        {
          path: 'about',
          element: <AboutPage />
        },
        {
          path: 'blog',
          element: <BlogPage />
        },
        {
          path: 'contact',
          element: <Contact />
        }
      ]
    },
    {
      path: "*",
      element: <NotFound />
    }
  ])
  return (
    <RouterProvider router={router} />
  );
}
export default App;