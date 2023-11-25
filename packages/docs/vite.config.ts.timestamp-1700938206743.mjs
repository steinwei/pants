// vite.config.ts
import { fileURLToPath, URL } from "url";
import { defineConfig } from "file:///home/steinwei/web/projects/pants/node_modules/.pnpm/registry.npmmirror.com+vite@3.1.8/node_modules/vite/dist/node/index.js";
import vue from "file:///home/steinwei/web/projects/pants/node_modules/.pnpm/registry.npmmirror.com+@vitejs+plugin-vue@3.1.2_vite@3.1.8+vue@3.2.41/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import unocss from "file:///home/steinwei/web/projects/pants/node_modules/.pnpm/registry.npmmirror.com+unocss@0.45.30_vite@3.1.8/node_modules/unocss/dist/vite.mjs";
import { presetAttributify, presetUno } from "file:///home/steinwei/web/projects/pants/node_modules/.pnpm/registry.npmmirror.com+unocss@0.45.30_vite@3.1.8/node_modules/unocss/dist/index.mjs";
var __vite_injected_original_import_meta_url = "file:///home/steinwei/web/projects/pants/packages/docs/vite.config.ts";
var vite_config_default = defineConfig({
  base: "/ui/",
  plugins: [vue(), unocss({
    presets: [
      presetUno(),
      presetAttributify()
    ]
  })],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
    }
  },
  server: {
    port: 7999
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9zdGVpbndlaS93ZWIvcHJvamVjdHMvcGFudHMvcGFja2FnZXMvZG9jc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL2hvbWUvc3RlaW53ZWkvd2ViL3Byb2plY3RzL3BhbnRzL3BhY2thZ2VzL2RvY3Mvdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL2hvbWUvc3RlaW53ZWkvd2ViL3Byb2plY3RzL3BhbnRzL3BhY2thZ2VzL2RvY3Mvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBmaWxlVVJMVG9QYXRoLCBVUkwgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnXG5pbXBvcnQgdW5vY3NzIGZyb20gJ3Vub2Nzcy92aXRlJ1xuaW1wb3J0IHsgcHJlc2V0QXR0cmlidXRpZnksIHByZXNldFVubyB9IGZyb20gJ3Vub2NzcydcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIGJhc2U6ICcvdWkvJyxcbiAgcGx1Z2luczogW3Z1ZSgpLCB1bm9jc3Moe1xuICAgIHByZXNldHM6IFtcbiAgICAgIHByZXNldFVubygpLFxuICAgICAgcHJlc2V0QXR0cmlidXRpZnkoKSxcbiAgICBdXG4gIH0pXSxcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiB7XG4gICAgICAnQCc6IGZpbGVVUkxUb1BhdGgobmV3IFVSTCgnLi9zcmMnLCBpbXBvcnQubWV0YS51cmwpKSxcbiAgICB9XG4gIH0sXG4gIHNlcnZlcjoge1xuICAgIHBvcnQ6IDc5OTksXG4gIH1cbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQStULFNBQVMsZUFBZSxXQUFXO0FBQ2xXLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sU0FBUztBQUNoQixPQUFPLFlBQVk7QUFDbkIsU0FBUyxtQkFBbUIsaUJBQWlCO0FBSnlKLElBQU0sMkNBQTJDO0FBT3ZQLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLE1BQU07QUFBQSxFQUNOLFNBQVMsQ0FBQyxJQUFJLEdBQUcsT0FBTztBQUFBLElBQ3RCLFNBQVM7QUFBQSxNQUNQLFVBQVU7QUFBQSxNQUNWLGtCQUFrQjtBQUFBLElBQ3BCO0FBQUEsRUFDRixDQUFDLENBQUM7QUFBQSxFQUNGLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQUssY0FBYyxJQUFJLElBQUksU0FBUyx3Q0FBZSxDQUFDO0FBQUEsSUFDdEQ7QUFBQSxFQUNGO0FBQUEsRUFDQSxRQUFRO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFDUjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
