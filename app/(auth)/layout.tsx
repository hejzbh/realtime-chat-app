import dynamic from "next/dynamic";
import Image from "next/image";

const Logo = dynamic(() => import("@/components/ui/Logo"));

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
    <div className="h-[100dvh] flex justify-between items-center">
      {/** Main */}
      <main className="h-full w-full p-4 sm:p-20 flex flex-col justify-center items-center">
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
        className="w-[50%] object-cover h-full hidden lg:block"
      />
    </div>
  );
}
