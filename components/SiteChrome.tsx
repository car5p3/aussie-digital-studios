"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";

export default function SiteChrome() {
  const pathname = usePathname();

  // The maintenance landing page is intentionally distraction-free.
  if (pathname === "/") return null;

  return (
    <>
      <Header />
      <Footer />
    </>
  );
}
