// Exporter tous les composants pour faciliter l'importation
export * from "./toast";
export * from "./toast-provider";

// Re-export explicitement pour éviter les problèmes d'importation
import { Toast, ToastProps, ToastType } from "./toast";
import { ToastProvider, useToast } from "./toast-provider";

export { Toast, ToastProvider, useToast };
export type { ToastProps, ToastType };
