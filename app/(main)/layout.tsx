import dynamic from "next/dynamic";

const NavigationSidebar = dynamic(
  () => import("@/components/sidebar/NavigationSidebar")
);

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-[4%,96%]">
      <NavigationSidebar className="min-h-[100dvh]" />
      <main>{children}</main>
    </div>
  );
}
