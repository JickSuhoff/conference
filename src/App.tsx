import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/rootLayout/RootLayout";
import HomePage from "./pages/homePage/HomePage";
import PublickOfferts from "./pages/publickOfferts/PublickOfferts";
import PrivacyPolicy from "./pages/privacyPolicy/PrivacyPolicy";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "/public-offerts-page", element: <PublickOfferts /> },
        { path: "/privacy-policy-page", element: <PrivacyPolicy /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
