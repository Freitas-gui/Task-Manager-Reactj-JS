import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true, // Ensures file changes are detected reliably
      interval: 300, // Polling interval in milliseconds (adjust if needed)
    },
    host: true, // Allows access via network IP (useful for WSL, Docker)
    strictPort: true, // Ensures Vite doesn't silently switch ports
    port: 5173, // Matches your expected localhost port
  },
});
