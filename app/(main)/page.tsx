import clsx from "@/utils/clsx";

export default function Home() {
  return (
    <main
      className={clsx(
        "text-[red]",
        {
          "text-3xl": 1 > 10,
          "text-[50px]": 1 < 5,
        },
        ["bg-white", false, 0, "from-fuchsia-100"]
      )}
    >
      test
    </main>
  );
}
