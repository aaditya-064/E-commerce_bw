import { useAuth } from "@/hooks/auth.hook";
import React from "react";

interface LogoutProps {
  onToggle: () => void;
}

const Logout = ({ onToggle }: LogoutProps) => {
  const { logout } = useAuth();
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs">
      <div className="flex flex-col items-center justify-center w-full max-w-md p-6 bg-white rounded-2xl shadow-xl text-center">
        {/* Title */}
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          Are you sure?
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-500 mb-6">
          Do you want to log out of your account? You will need to sign in again
          to access your dashboard.
        </p>

        <div className="flex flex-col w-full gap-3">
          <button
            onClick={() => {
              logout();
              onToggle();
            }}
            className="w-full py-3 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition cursor-pointer"
          >
            Yes, log out
          </button>
          <button
            onClick={onToggle}
            className="w-full py-3 bg-gray-100 text-gray-900 font-medium rounded-full hover:bg-gray-200 transition cursor-pointer"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Logout;
