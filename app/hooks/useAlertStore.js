import { alertStore } from "../store/alertStore";

export const useAlertStore = () => {
  const message = alertStore((state) => state.message);
  const variant = alertStore((state) => state.variant);
  const alert = alertStore((state) => state.alert);
  const visible = alertStore((state) => state.visible);
  const showAlert = alertStore((state) => state.showAlert);
  const hideAlert = alertStore((state) => state.hideAlert);

  return {message, variant, alert, visible, showAlert, hideAlert};
};
