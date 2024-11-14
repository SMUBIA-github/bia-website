"use client"; // Mark as client component

import React, { useState, useEffect } from "react";
import { Loader2 } from "lucide-react";

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setIsLoading(false);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <Loader2 className="h-12 w-12 animate-spin text-white" />
    </div>
  );
};

export default LoadingScreen;
