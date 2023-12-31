
import "@/styles/globals.css";
import ChakraProviders from "@/context/ChakraProviders";

export const metadata = {
  title: "The School of Athens",
  description: "A decentralized and democratic forum",
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body>
        <ChakraProviders>{children}</ChakraProviders>
      </body>
    </html>
  );
}
