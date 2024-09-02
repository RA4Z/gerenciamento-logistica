import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box, LinearProgress } from "@mui/material";
import { Suspense } from "react";
import Main from "./pages/Main";
import Header from "./components/Header";
import Register from "pages/Register";
import Maintenance from "pages/Maintenance";

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
            <Route path="/abastecimento" element={<Register />} />
            <Route path="/manutencao" element={<Maintenance />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}
