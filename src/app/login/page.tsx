import type { Metadata } from "next";
import { LoginClient } from "./login-client";

export const metadata: Metadata = {
  title: "Client Login",
  description: "Sign in to your Alpha Global client dashboard.",
  robots: { index: false, follow: false },
};

export default function LoginPage() {
  return <LoginClient />;
}
