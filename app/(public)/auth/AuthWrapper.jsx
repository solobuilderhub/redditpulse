// components/AuthWrapper.jsx
import Image from "next/image";

export default function AuthWrapper({ children }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      {children}
    </div>
  );
}
