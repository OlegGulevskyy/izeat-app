import AuthModernLayout from "~/layouts/auth/modern";
import SupabaseLoginView from "~/views/login/login";

const Page = () => {
  return (
    <AuthModernLayout>
      <SupabaseLoginView />
    </AuthModernLayout>
  );
};

export default Page;
