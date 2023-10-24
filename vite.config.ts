import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig(({ mode }) => {
  return {
    plugins: [react()],
    build: {
      outDir: "build",
      assetsDir: "assets",
      emptyOutDir: true,
    },
  };
});
