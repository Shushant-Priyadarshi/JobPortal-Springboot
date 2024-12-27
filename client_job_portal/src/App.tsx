import { createTheme, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import HomePage from "./Pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "@mantine/carousel/styles.css";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { lazy, Suspense } from "react";
import PageLoading from "./components/Loader/PageLoading";


export default function App() {
  const theme = createTheme({
    colors: {
      "mine-shaft": [
        "#f6f6f6",
        "#e7e7e7",
        "#d1d1d1",
        "#b0b0b0",
        "#888888",
        "#6d6d6d",
        "#5d5d5d",
        "#4f4f4f",
        "#454545",
        "#3d3d3d",
        "#2d2d2d",
      ],
      "azure-radiance": [
        "#edfaff",
        "#d6f3ff",
        "#b5ebff",
        "#83e1ff",
        "#48ceff",
        "#1eb0ff",
        "#0693ff",
        "#007cf9",
        "#0861c5",
        "#0d549b",
        "#0e335d",
      ],
    },
    fontFamily: "poppins,san-serif",
  });

  // IMPORTING PAGES LAZY LOADING
  const FindJobPage = lazy(() => import("./Pages/FindJobs"));
  const FindTalent = lazy(() => import("./Pages/FindTalent"));
  const TalentProfilePage = lazy(() => import("./Pages/TalentProfilePage"));
  const UploadJobsPage = lazy(() => import("./Pages/UploadJobsPage"));
  const AboutUsPage = lazy(() => import("./Pages/AboutUsPage"));

  return (
    <MantineProvider defaultColorScheme="dark" theme={theme}>
      <BrowserRouter>
        <Suspense fallback={<PageLoading />}>
          <div className="font-[poppins] bg-black">
            <Header />
            <Routes>
              <Route path="/find-jobs" element={<FindJobPage />} />
              <Route path="/find-talents" element={<FindTalent />} />
              <Route path="/talent-profile" element={<TalentProfilePage/>} />
              <Route path="/upload-jobs" element={<UploadJobsPage/>} />
              <Route path="/about" element={<AboutUsPage/>} />
              <Route path="*" element={<HomePage />} />
            </Routes>
            <Footer />
          </div>
        </Suspense>
      </BrowserRouter>
    </MantineProvider>
  );
}
