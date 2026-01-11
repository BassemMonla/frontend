"use client";

import { CopilotKit } from "@copilotkit/react-core";
import { CopilotSidebar } from "@copilotkit/react-ui";
import "@copilotkit/react-ui/styles.css";

export default function Home() {
  return (
    <CopilotKit runtimeUrl="http://localhost:5000/api/copilotkit/" agent="expense_guardian">
      <CopilotSidebar
        instructions="You are a helpful assistant."
        labels={{
          title: "Expense Guardian",
          initial: "Hi! I can help you file expenses."
        }}
      >
        <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-slate-50">
          <div className="text-center space-y-4">
            <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              Expense Guardian
            </h1>
            <p className="text-xl text-gray-600">
              Chat with the AI to file your expenses.
            </p>
            <div className="p-4 bg-white rounded-lg shadow-md border border-gray-200 max-w-md mx-auto mt-8">
              <p className="text-sm text-gray-500 font-mono">
                Try: "File an expense of $500 for a new laptop"
              </p>
            </div>
          </div>
        </div>
      </CopilotSidebar>
    </CopilotKit>
  );
}
