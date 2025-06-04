import React from "react";
import LoadingSpinner from "@/components/loading-spinner";

export default function ScreenLoadingSpinner() {
  return (
    <div className="grid h-screen w-full place-content-center">
      <LoadingSpinner />
    </div>
  );
}
