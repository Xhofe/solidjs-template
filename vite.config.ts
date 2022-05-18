import path from "path";
import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import dts from "vite-plugin-dts";

export default defineConfig({
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "src"),
    },
  },
  plugins: [solidPlugin(), dts()],
  build: {
    target: "modules",
    minify: false,
    rollupOptions: {
      external: ["solid-js", "solid-js/web", "solid-js/store"],
      input: ["src/index.ts"],
      output: [
        {
          format: "es",
          dir: "esm",
          entryFileNames: "[name].js",
          preserveModules: true,
        },
        {
          format: "cjs",
          dir: "lib",
          entryFileNames: "[name].js",
          preserveModules: true,
          preserveModulesRoot: "src",
        },
      ],
    },
    lib: {
      entry: "src/index.ts",
      formats: ["es", "cjs"],
    },
  },
});
