import { getServerUser } from "~/utils/auth";
import { HomeView } from "~/views/home";

const Homepage = async () => {
  const user = getServerUser();

  return <HomeView />;
};

export default Homepage;
