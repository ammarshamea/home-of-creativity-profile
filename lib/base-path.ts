export const BASE_PATH = "/home-of-creativity-profile";

export const CLIENT_TELEGRAM_URL = `https://t.me/${process.env.NEXT_PUBLIC_TELEGRAM_BOT ?? "pro_design_perfect_bot"}`;

export const DASHBOARD_STAFF_URL =
  process.env.NEXT_PUBLIC_DASHBOARD_URL ?? "http://127.0.0.1:5173/staff";

export function withBasePath(path: string) {
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  if (path.startsWith(BASE_PATH)) return path;
  return `${BASE_PATH}${path.startsWith("/") ? path : `/${path}`}`;
}
