import dynamic from "next/dynamic";

const NavigationSidebar = dynamic(
  () => import("@/components/sidebar/NavigationSidebar")
);
const MobileHeader = dynamic(() => import("@/components/header/MobileHeader"));

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="lg:grid lg:grid-cols-[7%,93%] 2xl:grid-cols-[5%,95%] 4xl:grid-cols-[4%,96%]">
      <MobileHeader className="block fixed top-0 left-0 w-full z-[50] lg:hidden" />
      <NavigationSidebar className="min-h-[100dvh] hidden lg:flex" />
      <main>{children}</main>
    </div>
  );
}
