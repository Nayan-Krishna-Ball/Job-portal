import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        muted: "hsl(var(--muted))",
        background: "hsl(var(--color-background))",
        foreground: "hsl(var(--color-foreground))",
        primary: "hsl(var(--color-primary))",
      },
    },
  },
});
