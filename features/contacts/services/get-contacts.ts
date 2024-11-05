export const getContacts = async () => {
  try {
  } catch (err: any) {
    console.error(err);
    throw new Error(
      err?.response?.data?.message || err.response?.data || err.message
    );
  }
};
