import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { WhatsAppButton } from "@/components/widgets/whatsapp-button";
import { LiveChatWidget } from "@/components/widgets/live-chat-widget";

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
      <WhatsAppButton />
      <LiveChatWidget />
    </>
  );
}
