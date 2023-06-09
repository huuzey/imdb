"use client";
import { ThemeProvider } from "next-themes";
export default function Providers({ children }) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <div className=" min-h-[100vh] dark:bg-gray-700 dark:text-gray-200 text-gray-700 transition">
        {children}
      </div>
    </ThemeProvider>
  );
}
