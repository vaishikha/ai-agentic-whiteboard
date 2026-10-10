
"use client";

import React from "react";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
          Dashboard
        </h1>
        <p className="mt-2 text-gray-500">
          Welcome to your AI Agentic Whiteboard.
          Create diagrams, flowcharts, and system architectures with AI.
        </p>
      </div>

      {/* Welcome Card */}
      <div className="mb-8 rounded-xl border bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-gray-800">
          Welcome back!
        </h2>
        <p className="mt-2 text-gray-600">
          Ready to bring your ideas to life? Start creating your next
          whiteboard with the help of AI.
        </p>
      </div>

      {/* Dashboard Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-xl border bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-800">
            My Whiteboards
          </h3>
          <p className="mt-2 text-sm text-gray-500">
            View and manage your existing whiteboards.
          </p>
          <button
            className="mt-5 rounded-lg bg-black px-4 py-2 text-sm text-white hover:bg-gray-800"
            onClick={() => alert("My Whiteboards clicked!")}
          >
            View Whiteboards
          </button>
        </div>

        <div className="rounded-xl border bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-800">
            Create Whiteboard
          </h3>
          <p className="mt-2 text-sm text-gray-500">
            Start a new canvas for your ideas and diagrams.
          </p>
          <button
            className="mt-5 rounded-lg bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700"
            onClick={() => alert("Create Whiteboard clicked!")}
          >
            Create New
          </button>
        </div>

        <div className="rounded-xl border bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-800">
            AI Assistant
          </h3>
          <p className="mt-2 text-sm text-gray-500">
            Generate flowcharts, UI wireframes, and architecture diagrams
            using AI.
          </p>
          <button
            className="mt-5 rounded-lg bg-purple-600 px-4 py-2 text-sm text-white hover:bg-purple-700"
            onClick={() => alert("AI Assistant clicked!")}
          >
            Explore AI
          </button>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="mt-8 rounded-xl border bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-gray-800">
          Recent Activity
        </h2>
        <p className="mt-3 text-gray-500">
          Your recently created whiteboards will appear here.
        </p>
      </div>
    </div>
  );
}