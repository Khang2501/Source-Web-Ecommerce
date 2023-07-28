export default function setCookies(
  token: string,
  userName: string,
  email: string
) {
  document.cookie = `token=${token}; path=/`;
  document.cookie = `userName=${userName}; path=/`;
  document.cookie = `email=${email}; path=/`;
}
