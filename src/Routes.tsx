import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box, LinearProgress } from "@mui/material";
import { Suspense } from "react";
import Main from "./pages/Main";
import Header from "./components/Header";

export default function AppRouter() {
  return (
    <>
      <Router>
        <Suspense fallback={<Box sx={{ width: '100%' }}>
          <LinearProgress />
        </Box>}>
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}
