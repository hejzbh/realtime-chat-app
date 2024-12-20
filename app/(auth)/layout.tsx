import { routePaths } from "@/data/routePaths";
import dynamic from "next/dynamic";
import Image from "next/image";

const Logo = dynamic(() => import("@/components/ui/Logo"));
const ProtectedContent = dynamic(() => import("@/components/ProtectedContent"));

export const metadata = {
  title: "Heyz - Authentication",
  description: "Generated by Hazim Tulumovic (heyz)",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ProtectedContent type="only-unauthenticated" redirectTo={routePaths.HOME}>
      <div className="grid lg:grid-cols-2 min-h-[100dvh]">
        {/** Main */}
        <main className="h-full w-full px-4 py-4 sm:px-32 flex flex-col justify-center items-center">
          <Logo className="mx-auto mb-10" />
          {children}
        </main>
        {/** Image  */}
        <Image
          src={"/images/auth-banner.webp"}
          loading="lazy"
          width={1200}
          height={1080}
          alt="Banner"
          className="object-cover h-full  hidden lg:block"
        />
      </div>
    </ProtectedContent>
  );
}
