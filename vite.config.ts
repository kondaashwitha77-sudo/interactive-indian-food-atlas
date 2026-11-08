import path from "path";
import { fileURLToPath } from "url";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";
import { viteSingleFile } from "vite-plugin-singlefile";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function bhojanMitraApiPlugin(env: Record<string, string>) {
  return {
    name: "bhojan-mitra-api",
    configureServer(server: any) {
      // Set server environment variables for local dev
      if (env.LLM_API_KEY && !process.env.LLM_API_KEY) {
        process.env.LLM_API_KEY = env.LLM_API_KEY;
      }
      if (env.LLM_MODEL && !process.env.LLM_MODEL) {
        process.env.LLM_MODEL = env.LLM_MODEL;
      }

      server.middlewares.use("/api/chat", async (req: any, res: any) => {
        if (req.method !== "POST") {
          res.statusCode = 405;
          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify({ error: "Method not allowed. Only POST is accepted." }));
          return;
        }

        let bodyRaw = "";
        req.on("data", (chunk: any) => {
          bodyRaw += chunk;
        });

        req.on("end", async () => {
          try {
            const body = bodyRaw ? JSON.parse(bodyRaw) : {};
            const clientIp = req.socket?.remoteAddress || "127.0.0.1";
            const { processChat } = await import("./api/chat.js");
            const { status, data } = await processChat(body, clientIp);
            res.statusCode = status;
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify(data));
          } catch (err) {
            console.error("[Vite Dev Server API Error]:", err);
            res.statusCode = 200;
            res.setHeader("Content-Type", "application/json");
            res.end(
              JSON.stringify({
                error: "Bhojan Mitra is taking a break. Please try again in a little while.",
              })
            );
          }
        });
      });
    },
  };
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    plugins: [react(), tailwindcss(), viteSingleFile(), bhojanMitraApiPlugin(env)],
    server: {
      host: "0.0.0.0",
      port: 5173,
      allowedHosts: true,
      proxy: {
        "/api/groq": {
          target: "https://api.groq.com/openai/v1",
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api\/groq/, ""),
        },
        "/api/grok": {
          target: "https://api.x.ai/v1",
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api\/grok/, ""),
        },
      },
    },
    preview: {
      host: "0.0.0.0",
      port: 4173,
      allowedHosts: true,
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
  };
});
