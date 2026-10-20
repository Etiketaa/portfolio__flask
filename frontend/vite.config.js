import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const repoName = env.VITE_REPO_NAME || "";
  return {
    base: repoName ? `/${repoName}/` : "/",
    plugins: [react(), tailwindcss()],
    server: {
      open: true,
      host: false,
    },
  };
});
