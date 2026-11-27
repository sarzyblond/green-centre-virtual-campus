export function passwordsMatch(password: string, confirmation: string) {
  return password.length >= 8 && password === confirmation;
}
