import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeaderInfiniteCarousel from "./components/HeaderInfiniteCarousel";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import About from "./pages/About";
import { Provider } from "react-redux";
import store from "./store/store";
import Cart from "./pages/Cart";
import ProductLandingPage from "./components/ProductLandingPage";
import LogIn from "./components/LogIn";
import TermsAndConditions from "./pages/TermsAndConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import RefundPolicy from "./pages/RefundPolicy";
import ShippingPolicy from "./pages/ShippingPolicy";
import AccessibilityStatement from "./pages/AccessibilityStatement";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./contexts/AuthContext";
import { useState } from "react";

function App() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  return (
    <Provider store={store}>
      <AuthProvider>
        <HeaderInfiniteCarousel />
        <Header onOpenLogin={() => setIsLoginModalOpen(true)} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />

          {/* CHANGED: Remove ProtectedRoute wrapper from cart */}
          <Route
            path="/cart"
            element={<Cart onOpenLogin={() => setIsLoginModalOpen(true)} />}
          />

          <Route path="/product/:id" element={<ProductLandingPage />} />
          <Route path="/terms&condition" element={<TermsAndConditions />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/shipping-policy" element={<ShippingPolicy />} />
          <Route
            path="/accessibility-statement"
            element={<AccessibilityStatement />}
          />
        </Routes>

        <Footer />

        <LogIn
          isOpen={isLoginModalOpen}
          onClose={() => setIsLoginModalOpen(false)}
        />
      </AuthProvider>
    </Provider>
  );
}

export default App;
