import React, { useState, useEffect } from "react";
import {
  XCircleIcon,
  CheckCircleIcon,
  InfoIcon,
  AlertTriangleIcon,
} from "lucide-react";
import { cn } from "../../../lib/utils";

export type ToastType = "success" | "error" | "info" | "warning";

export interface ToastProps {
  id?: string;
  type?: ToastType;
  title?: string;
  message: string;
  duration?: number;
  onClose?: () => void;
}

const iconMap = {
  success: <CheckCircleIcon className="h-5 w-5" />,
  error: <XCircleIcon className="h-5 w-5" />,
  info: <InfoIcon className="h-5 w-5" />,
  warning: <AlertTriangleIcon className="h-5 w-5" />,
};

const bgColorMap = {
  success: "bg-green-100 border-green-500 text-green-900",
  error: "bg-red-100 border-red-500 text-red-900",
  info: "bg-blue-100 border-blue-500 text-blue-900",
  warning: "bg-yellow-100 border-yellow-500 text-yellow-900",
};

const iconColorMap = {
  success: "text-green-500",
  error: "text-red-500",
  info: "text-blue-500",
  warning: "text-yellow-500",
};

export const Toast = ({
  type = "info",
  title,
  message,
  duration = 5000,
  onClose,
}: ToastProps) => {
  const [isVisible, setIsVisible] = useState(true);

  console.log("Toast component rendering with:", {
    type,
    title,
    message,
    duration,
  });

  useEffect(() => {
    console.log("Toast useEffect running");
    // Auto-dismiss after duration
    const timer = setTimeout(() => {
      console.log("Toast timeout triggered, hiding toast");
      setIsVisible(false);
      setTimeout(() => {
        console.log("Toast cleanup timeout triggered");
        if (onClose) onClose();
      }, 300); // Wait for animation to complete
    }, duration);

    return () => {
      console.log("Toast useEffect cleanup");
      clearTimeout(timer);
    };
  }, [duration, onClose]);

  if (!isVisible) return null;
  return (
    <div
      className={cn(
        "flex items-center p-4 mb-3 rounded-md border shadow-md",
        "transition-opacity duration-300",
        "z-50", // Ensure high z-index
        bgColorMap[type],
        isVisible ? "opacity-100" : "opacity-0"
      )}
      style={{
        position: "fixed",
        bottom: "16px",
        right: "16px",
        maxWidth: "400px",
        boxShadow:
          "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)",
      }}
    >
      <div className={cn("flex-shrink-0", iconColorMap[type])}>
        {iconMap[type]}
      </div>
      <div className="ml-3 mr-5 flex-1">
        {title && <h3 className="font-medium">{title}</h3>}
        <div className={title ? "text-sm" : ""}>{message}</div>
      </div>
      <button
        onClick={() => {
          setIsVisible(false);
          setTimeout(() => {
            if (onClose) onClose();
          }, 300);
        }}
        className="flex-shrink-0 ml-auto text-gray-500 hover:text-gray-700 focus:outline-none"
      >
        <XCircleIcon className="h-4 w-4" />
      </button>
    </div>
  );
};
