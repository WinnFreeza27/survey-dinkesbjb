import sessionStore from "../store/sessionStore";

export const useSessionStore = () => {
  const session = sessionStore((state) => state.session);
  const setSession = sessionStore((state) => state.setSession);

  return {session, setSession};
};
