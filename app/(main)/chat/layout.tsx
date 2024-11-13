import dynamic from "next/dynamic";

const ChatSidebar = dynamic(
  () => import("@/features/chat/components/sidebar/ChatSidebar")
);

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="lg:grid lg:grid-cols-[25%,75%] 3xl:grid-cols-[20%,80%]">
      <ChatSidebar className="min-h-[100dvh] hidden lg:block" />
      <main>{children}</main>
    </div>
  );
}
