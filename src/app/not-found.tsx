import type { Metadata } from "next";
import { NotFoundClient } from "./not-found-client";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you're looking for doesn't exist or has moved.",
};

export default function NotFound() {
  return <NotFoundClient />;
}
