import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  preview: {
    allowedHosts: ["karan-portfolio-production.up.railway.app", "imkaran.dev"]
  }
});
