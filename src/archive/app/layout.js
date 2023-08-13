// "use client";

import "bootstrap/dist/css/bootstrap.min.css";
import "@/assets/globals.css";
import { AuthProvider } from "@/context/AuthContext";
import ChakraProviders from "@/context/ChakraProviders";
import Navbar from "@/layouts/Navbar";
import Footer from "@/layouts/Footer";

export const metadata = {
  title: "The School of Athens",
  description: "Next.js version",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <ChakraProviders>
            {/* <Suspense fallback={<div>Loading...</div>}>{children}</Suspense> */}
            <Navbar />
            {children}
            <Footer />
          </ChakraProviders>
        </AuthProvider>
      </body>
    </html>
  );
}
