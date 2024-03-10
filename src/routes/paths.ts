const ROOTS = {
  AUTH: "/auth",
  AUTH_DEMO: "/auth-demo",
  DASHBOARD: "/dashboard",
};

// ----------------------------------------------------------------------

export const paths = {
  pricing: "/pricing",
  about: "/about-us",
  contact: "/contact-us",
  // AUTH
  auth: {
    supabase: {
      login: `${ROOTS.AUTH}/supabase/login`,
      verify: `${ROOTS.AUTH}/supabase/verify`,
      register: `${ROOTS.AUTH}/supabase/register`,
      newPassword: `${ROOTS.AUTH}/supabase/new-password`,
      forgotPassword: `${ROOTS.AUTH}/supabase/forgot-password`,
    },
  },
  // DASHBOARD
  dashboard: {
    root: ROOTS.DASHBOARD,
    mail: `${ROOTS.DASHBOARD}/mail`,
    chat: `${ROOTS.DASHBOARD}/chat`,
    blank: `${ROOTS.DASHBOARD}/blank`,
    general: {
      app: `${ROOTS.DASHBOARD}/app`,
    },
    user: {
      profile : `${ROOTS.DASHBOARD}/user/profile`,
      account: `${ROOTS.DASHBOARD}/user/account`,
    }
  },
};
