import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./_root/RootLayout";
import Documents from "./_root/Pages/Documents";
import WalletTransecation from "./_root/Pages/WalletTransication";
import Page404 from "./_root/Pages/Page404";
import RstOrderCard from "./components/RstCards/RstOrderCard";
import RestaurantPayOutDetails from "./components/Restaurants/RestaurantPayOutDetails";
import Orders from "./components/Order/Orders";
import TotalOrder from "./components/RstCards/TotalOrder";
import BookTableDine from "./_root/Pages/BookTableDine";
import DocumentsEdit from "./_root/Pages/DocumentsEdit";
import MainForm from "./components/Profile/MainForm";
import DashboardPage from "./_root/Pages/DashboardPage";
import RestaurantsPayout from "./components/Restaurants/RestaurantsPayout";
import Food from "./components/Food/Food";
import FoodDetails from "./components/Food/FoodDetails";

// Define the routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "",
        element: <DashboardPage />,
      },
      {
        path: "profile",
        element: <MainForm />,
      },
      {
        path: "restaurants/payouts",
        element: <RestaurantsPayout />,
      },
      {
        path: "payout/create",
        element: <RestaurantPayOutDetails />,
      },

      {
        path: "/food",
        element: <Food />,
      },
      {
        path: "food/create",
        element: <FoodDetails />,
      },
      {
        path: "documents",
        element: <Documents />,
      },

      {
        path: "edit",
        element: <DocumentsEdit />,
      },
      {
        path: "/booktable",
        element: <BookTableDine />,
      },
      {
        path: "documents/:id",
      },
      {
        path: "wallet-trasections",
        element: <WalletTransecation />,
      },
      { path: "*", element: <Page404 /> }, // 404 Page
      {
        path: "orders",
        element: <TotalOrder />,
      },
    ],
  },
]);

export default router;
