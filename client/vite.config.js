import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "https://tamirat-tamirat-5a0d5606.vercel.app/",
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
