import { redirect } from "next/navigation";
import { isAuthenticated } from "@/lib/actions/auth.action";

async function Home() {
  const authed = await isAuthenticated();
  if (authed) {
    redirect("/dashboard");
  } else {
    redirect("/sign-in");
  }
}

export default Home;
