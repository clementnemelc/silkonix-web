import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/silkonix-web/", // ⚠️ 這行非常重要，前後都要有斜線，且名稱必須與 Repository 一致
});
