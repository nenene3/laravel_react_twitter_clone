import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  server: {
    proxy: {
      "/api": {
        target: "http://127.0.0.1:8000",
        changeOrigin: true,
        configure: (proxy, options) => {
          proxy.on("proxyReq", (proxyReq, req, res) => {
            // Check if the request is multipart/form-data
            const contentType = req.headers["content-type"] || "";
            if (!contentType.includes("multipart/form-data")) {
              // Only set these headers for non-multipart requests
              proxyReq.setHeader("Accept", "application/json");
              proxyReq.setHeader("Content-Type", "application/json");
            }
          });
        },
      },
    },
  },
});
