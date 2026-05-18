import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";

import Layout from "./components/Layout";
import DashLayout from "./layouts/DashLayout";
import AuthLayout from "./layouts/AuthLayout";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ArticleListPage from "./pages/ArticleListPage";
import ArticlePage from "./pages/ArticlePage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import NotFoundPage from "./pages/NotFoundPage";

import DashboardPage from "./pages/DashboardPages/DashboardPage";
import ReportsPage from "./pages/DashboardPages/ReportsPage";
import UsersPage from "./pages/DashboardPages/UsersPage";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2563EB",
    },
    secondary: {
      main: "#9333EA",
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      { path: "articles", element: <ArticleListPage /> },
      { path: "articles/:name", element: <ArticlePage /> },
      {
        path: "auth/signin",
        element: (
          <AuthLayout>
            <SignInPage />
          </AuthLayout>
        ),
      },
      {
        path: "auth/signup",
        element: (
          <AuthLayout>
            <SignUpPage />
          </AuthLayout>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashLayout />,
    errorElement: <NotFoundPage />,
    children: [
      { index: true, element: <DashboardPage /> },
      { path: "reports", element: <ReportsPage /> },
      { path: "users", element: <UsersPage /> },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;