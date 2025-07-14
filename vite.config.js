import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteTsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig(({ command }) => {
  return {
    build: {
      outDir: 'build',
      assetsInlineLimit: 4096, // 4kb limit, prevents large images from being inlined
      rollupOptions: {
        output: {
          assetFileNames: 'assets/[name].[hash][extname]'
        }
      }
    },
    plugins: [
        react(),
        viteTsconfigPaths()
    ],
    server: {
        open: true,
        port: 8000,
        host: "127.0.0.1",
        optimizeDeps: {
            esbuildOptions: {
                loader: {
                    '.js': 'jsx',
                }
            },
        }
    }
  };
});