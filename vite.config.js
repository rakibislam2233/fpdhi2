import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // Base path "./" ensures all assets use relative paths for DHIS2 compatibility
  base: "./",
  server: {
    host: true, // This allows external connections
    port: 5173, // or whatever port you prefer
  },
  build: {
    // Ensure all public files are copied to dist
    copyPublicDir: true,
  },
});
