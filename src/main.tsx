import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Result from './components/pages/Result.tsx'
import HomePage from './components/pages/Home.tsx'
import App from './App.tsx'
import NotFound from './components/pages/notfound.tsx'

const router = createBrowserRouter([{
  path: "/",
  element: <App />,
  children: [
    {
      index: true,
      element: <HomePage />
    }, {
      path: "results",
      element: <Result />
    }, {
      path: "*",
      element: <NotFound />
    }
  ]
}])

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />,
)
