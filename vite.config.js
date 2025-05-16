import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'



export default defineConfig(({ mode }) => {
  const isProdBuild = mode === 'build-mf'; // our custom prod MF mode

  return {
    plugins: [react(), tailwindcss()],
    build: {
      lib: {
        entry: './src/export.js',
        name: 'sidebarMain',
        fileName: () => `sidebar-bundle.js`,
        formats: ['umd'],
      },
      rollupOptions: {
        external: isProdBuild
          ? [
            'react',
            'react-dom',
            '@mui/material',
            '@emotion/react',
            '@emotion/styled',
            '@mui/icons-material',
            "react-router-dom"
          ]
          : [],
        output: {
          globals: {
            react: 'React',
            'react-dom': 'ReactDOM',
            '@mui/material': 'MaterialUI',
            '@emotion/react': 'EmotionReact',
            '@emotion/styled': 'EmotionStyled',
            '@mui/icons-material': 'MuiIcons',
            "react-router-dom": "ReactRouterDOM",

          }
        }
      },
      cssCodeSplit: false,
      define: {
        'process.env': JSON.stringify({}),
      },
      outDir: 'dist',
    },
    optimizeDeps: {
      exclude: isProdBuild
        ? [
          'react',
          'react-dom',
          '@mui/material',
          '@emotion/react',
          '@emotion/styled',
          '@mui/icons-material',
          "react-router-dom"
        ]
        : [],
    }
  };
});
