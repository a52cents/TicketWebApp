import React, {
  useState,
  createContext,
  useContext,
  ReactNode,
  useCallback,
} from "react";
import { Toast, ToastProps } from "./toast";
import { createPortal } from "react-dom";

// Types
type ToastContextType = {
  showToast: (props: Omit<ToastProps, "onClose">) => string;
  closeToast: (id: string) => void;
};

type ToastProviderProps = {
  children: ReactNode;
};

// Context
const ToastContext = createContext<ToastContextType | undefined>(undefined);

// Provider Component
export const ToastProvider = ({ children }: ToastProviderProps) => {
  const [toasts, setToasts] = useState<ToastProps[]>([]);

  // Generate unique ID for each toast
  const generateUniqueId = () =>
    `toast-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
  const showToast = useCallback((props: Omit<ToastProps, "onClose">) => {
    const id = props.id || generateUniqueId();
    console.log("showToast called with:", props);
    setToasts((prevToasts) => [...prevToasts, { ...props, id }]);
    console.log("Current toasts after adding:", [...toasts, { ...props, id }]);
    return id;
  }, []);

  const closeToast = useCallback((id: string) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  }, []);

  // Only render portal on client-side
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);
  // Vérifier si des toasts existent
  console.log("Current toasts in provider:", toasts);

  return (
    <ToastContext.Provider value={{ showToast, closeToast }}>
      {children}
      {isMounted &&
        typeof document !== "undefined" &&
        createPortal(
          <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end max-w-xs sm:max-w-sm">
            {toasts.length > 0 ? (
              toasts.map((toast) => {
                console.log("Rendering toast:", toast);
                return (
                  <Toast
                    key={toast.id}
                    {...toast}
                    onClose={() => closeToast(toast.id as string)}
                  />
                );
              })
            ) : (
              <div style={{ display: "none" }}>No toasts</div>
            )}
          </div>,
          document.body
        )}
    </ToastContext.Provider>
  );
};

// Hook to use the toast context
export const useToast = () => {
  const context = useContext(ToastContext);

  if (context === undefined) {
    throw new Error("useToast must be used within a ToastProvider");
  }

  return context;
};

// Export component
export { Toast };
