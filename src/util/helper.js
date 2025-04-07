export const validateToken = (token) => {
  return fetch("https://juoc-backend-main.vercel.app/api/verify-recaptcha", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ token }),
  });
};
