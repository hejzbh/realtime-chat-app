import React from "react";
import dynamic from "next/dynamic";

const ContactsSidebar = dynamic(
  () => import("@/features/contacts/components/sidebar/ContactsSidebar")
);

export interface ContactsPageSearchParams {
  q: string;
}

const ContactsPage = async ({
  searchParams: searchParamsPromise,
}: {
  searchParams: Promise<ContactsPageSearchParams>;
}) => {
  const searchParams: ContactsPageSearchParams = await new Promise((res) =>
    searchParamsPromise.then(res)
  );
  return (
    <div className="lg:grid lg:grid-cols-[25%,75%] 3xl:grid-cols-[20%,80%]">
      <ContactsSidebar
        className="min-h-[100dvh]  hidden lg:block"
        searchParams={searchParams}
      />
      <main></main>
    </div>
  );
};

export default ContactsPage;
