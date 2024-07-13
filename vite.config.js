import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    react(),
    {
      name: "dynamic-manifest",
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url === "/manifest.json") {
            res.setHeader("Content-Type", "application/json");
            res.end(
              JSON.stringify({
                short_name: "Your App",
                name: "Your Application Name",
                icons: [
                  {
                    src: "/icon.png",
                    sizes: "192x192",
                    type: "image/png",
                  },
                ],
                start_url: req.headers.referer || "/",
                display: "standalone",
                theme_color: "#000000",
                background_color: "#ffffff",
              })
            );
          } else {
            next();
          }
        });
      },
    },
  ],
});
