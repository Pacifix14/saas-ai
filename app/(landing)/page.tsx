import { Button } from "@/components/ui/button";
import Link from "next/link";

const LandingPage = () => {
  return (
    <div>
      <p>Landing Page (Unprotected)</p>
      <div>
        <Button asChild>
          <Link href="/sign-in">
            Login
          </Link>
        </Button>
        <Button asChild>
          <Link href="/sign-up">
            Register
          </Link>
        </Button>
      </div>
    </div>
  )
}

export default LandingPage;