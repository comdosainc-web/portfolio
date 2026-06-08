import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // 이 아래 내용을 추가하거나 수정하세요!
  root: "./", 
  build: {
    outDir: "dist",
    emptyOutDir: true,
  }
});
