import { createBrowserRouter, redirect } from "react-router-dom";
import { authProvider } from "./services/authProvider";
import Layout from "./Layout/Layout";
import Dashboard from "./pages/Dashboard/Dashboard";
import LoginPage from "./pages/Login/Login";
import ErrorPage from "./pages/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
  {
    id: "root",
    path: "/",
    loader() {
      return { user: authProvider.username };
    },
    Component: Layout,
    children: [
      {
        index: true,
        loader: protectedLoader,
        Component: Dashboard,
      },

      // {
      //   path: "protected",
      //   loader: protectedLoader,
      //   Component: ProtectedPage,
      // },
    ],
  },
  {
    path: "/login",
    loader: loginLoader,
    Component: LoginPage,
  },
  {
    path: "/logout",
    async action() {
      await authProvider.signout();
      return redirect("/login");
    },
  },
  {
    path: "*",
    Component: ErrorPage,
  },
]);

async function loginLoader() {
  if (authProvider.isAuthenticated) {
    return redirect("/");
  }
  return null;
}

function protectedLoader({ request }) {
  if (!authProvider.isAuthenticated) {
    let params = new URLSearchParams();
    params.set("from", new URL(request.url).pathname);
    return redirect("/login?" + params.toString());
  }
  return null;
}
