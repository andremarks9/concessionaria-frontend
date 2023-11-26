"use client";
import Cars from "@/components/Cars";
import Header from "@/components/Header";
import { useState } from "react";

export default function Home() {
  const token = localStorage.getItem("token") as string;

  const [rightButtonText, setRightButtonText] = useState(
    token ? "Logout" : "Login"
  );
  return (
    <div className="min-w-full border-4">
      <Header
        rightButtonText={rightButtonText}
        setRightButtonText={setRightButtonText}
      />
      <Cars />
    </div>
  );
}
