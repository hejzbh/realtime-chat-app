import dynamic from "next/dynamic";

const ContactsSidebar = dynamic(
  () => import("@/features/contacts/components/sidebar/ContactsSidebar")
);

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-[20%,80%]">
      <ContactsSidebar className="min-h-[100dvh]" />
      <main>{children}</main>
    </div>
  );
}
