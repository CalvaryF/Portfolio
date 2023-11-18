"use client";
import "./globals.css";
import { Inter, Familjen_Grotesk, IBM_Plex_Sans } from "next/font/google";
import Header from "./components/header";
import Footer from "./components/footer";
import MobileRedirector from "./components/mobileWrapper";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const inter = IBM_Plex_Sans({ subsets: ["latin"], weight: ["400"] });

const isMobileDevice = () => {
  const maxMobileWidth = 768;
  return window.innerWidth <= maxMobileWidth;
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mobile, setMobile] = useState<boolean | null>(null); // Initialize to null
  const router = useRouter();

  useEffect(() => {
    setMobile(isMobileDevice());

    const handleResize = () => {
      setMobile(isMobileDevice());
    };

    window.addEventListener("resize", handleResize);

    // Redirect if on mobile
    if (mobile) {
      router.push("/mobile");
    }

    return () => window.removeEventListener("resize", handleResize);
  }, [mobile, router]);

  // Render nothing until the device type check is complete
  // if (mobile === null) {
  //   return null;
  // }
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && document.documentElement.scrollTop > 300) {
      setShowScroll(true);
    } else if (showScroll && document.documentElement.scrollTop <= 300) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, []);

  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      {showScroll && (
        <button onClick={scrollTop} className="scrollbutton">
          ^
        </button>
      )}
    </html>
  );
}
