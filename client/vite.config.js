import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "https://tamirat.vercel.app/",
        secure: false,
      },
    },
  },
  build: {
    rollupOptions: {
      external: ['mongoose'],
    },
  },
  plugins: [react()],
});
