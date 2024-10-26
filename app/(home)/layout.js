import { Navbar } from "@/components/custom/nav/navbar";
import Footer from "@/components/landing/Footer";

export default async function RootLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
