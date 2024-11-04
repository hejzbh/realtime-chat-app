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
    <div className="grid grid-cols-[20%,80%]">
      <ChatSidebar className="min-h-[100dvh]" />
      <main>{children}</main>
    </div>
  );
}
