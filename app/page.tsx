"use client";

import { useState } from "react";
import Privacy from "@/src/Privacy";
import Terms from "@/src/Terms";

export default function Home() {
  const [activeTab, setActiveTab] = useState<"privacy" | "terms">("privacy");

  return (
    <main className="min-h-screen bg-white p-4 md:p-8 max-w-4xl mx-auto">
      <header className="mb-8 text-center">
        <h1 className="text-4xl md:text-3xl font-bold text-gray-800 mb-6">
          알아서Farm
        </h1>

        <div className="flex justify-center space-x-4 mb-6">
          <button
            onClick={() => setActiveTab("privacy")}
            className={`px-4 py-2 rounded-md font-medium transition-colors ${
              activeTab === "privacy"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            개인정보처리방침
          </button>
          <button
            onClick={() => setActiveTab("terms")}
            className={`px-4 py-2 rounded-md font-medium transition-colors ${
              activeTab === "terms"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            이용약관
          </button>
        </div>
      </header>

      <div className="bg-neutral-50 rounded-lg shadow-md p-6 md:p-8">
        {activeTab === "privacy" ? <Privacy /> : <Terms />}
      </div>
    </main>
  );
}
