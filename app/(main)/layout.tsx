import dynamic from "next/dynamic";

const NavigationSidebar = dynamic(
  () => import("@/components/sidebar/NavigationSidebar")
);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-[5%,95%]">
      <NavigationSidebar className="min-h-[100dvh]" />
      <main>{children}</main>
    </div>
  );
}
