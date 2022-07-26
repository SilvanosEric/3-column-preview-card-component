import { defineConfig } from "vite";

export default defineConfig({
  root: "./src",
  base: "./",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
  },
  preview: {
    host: true,
  },
});
