
      import { defaultExtractor as createDefaultExtractor } from "tailwindcss/lib/lib/defaultExtractor.js";
      import { customSafelistExtractor, generateSafelist } from "/home/azril/Projects/orbit-point-one-masterclass-ceo/node_modules/.pnpm/@nuxt+ui@2.22.3_magicast@0.5.1_vite@7.3.1_@types+node@22.19.6_jiti@2.6.1_terser@5.44.1__9b04f5e130704c31fae8abed56f9984e/node_modules/@nuxt/ui/dist/runtime/utils/colors";
      import formsPlugin from "@tailwindcss/forms";
      import aspectRatio from "@tailwindcss/aspect-ratio";
      import typography from "@tailwindcss/typography";
      import containerQueries from "@tailwindcss/container-queries";
      import headlessUi from "@headlessui/tailwindcss";

      const defaultExtractor = createDefaultExtractor({ tailwindConfig: { separator: ':' } });

      export default {
        plugins: [
          formsPlugin({ strategy: 'class' }),
          aspectRatio,
          typography,
          containerQueries,
          headlessUi
        ],
        content: {
          files: [
            "/home/azril/Projects/orbit-point-one-masterclass-ceo/node_modules/.pnpm/@nuxt+ui@2.22.3_magicast@0.5.1_vite@7.3.1_@types+node@22.19.6_jiti@2.6.1_terser@5.44.1__9b04f5e130704c31fae8abed56f9984e/node_modules/@nuxt/ui/dist/runtime/components/**/*.{vue,mjs,ts}",
            "/home/azril/Projects/orbit-point-one-masterclass-ceo/node_modules/.pnpm/@nuxt+ui@2.22.3_magicast@0.5.1_vite@7.3.1_@types+node@22.19.6_jiti@2.6.1_terser@5.44.1__9b04f5e130704c31fae8abed56f9984e/node_modules/@nuxt/ui/dist/runtime/ui.config/**/*.{mjs,js,ts}"
          ],
          transform: {
            vue: (content) => {
              return content.replaceAll(/(?:\r\n|\r|\n)/g, ' ')
            }
          },
          extract: {
            vue: (content) => {
              return [
                ...defaultExtractor(content),
                ...customSafelistExtractor("U", content, ["red","orange","amber","yellow","lime","green","emerald","teal","cyan","sky","blue","indigo","violet","purple","fuchsia","pink","rose","orbit","primary"], ["primary"])
              ]
            }
          }
        },
        safelist: generateSafelist(["primary"], ["red","orange","amber","yellow","lime","green","emerald","teal","cyan","sky","blue","indigo","violet","purple","fuchsia","pink","rose","orbit","primary"]),
      }
    