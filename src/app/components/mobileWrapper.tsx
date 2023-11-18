"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const isMobileDevice = () => {
  return (
    typeof window.orientation !== "undefined" ||
    navigator.userAgent.indexOf("IEMobile") !== -1
  );
};

const MobileRedirector = () => {
  const router = useRouter();

  useEffect(() => {
    if (isMobileDevice()) {
      router.push("/mobile");
    }
  }, [router]);

  return null; // This component does not render anything
};

export default MobileRedirector;
