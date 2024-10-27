export async function hashPassword(password: string) {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);

  // Hash the password
  const hash = await crypto.subtle.digest("SHA-256", data);

  // Convert ArrayBuffer to hex string
  const hashArray = Array.from(new Uint8Array(hash));
  const hashedPassword = hashArray
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");

  return hashedPassword;
}

export async function comparePasswords({
  plainTextPassword,
  hashedPassword,
}: {
  plainTextPassword: string;
  hashedPassword: string;
}) {
  const hashedInput = await hashPassword(plainTextPassword);

  return hashedInput === hashedPassword;
}
