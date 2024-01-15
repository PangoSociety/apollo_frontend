import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
// import swc from "vite-plugin-swc-transform";


// https://vitejs.dev/config/
export default defineConfig({
  esbuild: {
    loader: 'tsx'
  },
  plugins: [
    react({tsDecorators: true}),
    // swc({
    //   swcOptions: {
    //     jsc: {
    //       target: "ES2021",
    //       transform: {
    //         legacyDecorator: true,
    //         decoratorMetadata: true,
    //       },
    //       // externalHelpers: true,
    //     },
    //   },
    // }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  optimizeDeps: {
    esbuildOptions: {
      tsconfig: 'tsconfig.json'
      // tsconfigRaw: {
      //   compilerOptions: {
      //     experimentalDecorators: true
      //   }
      // }
    }
  }
});
