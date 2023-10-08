import { defineConfig, Preset } from "https://esm.sh/@twind/core@1.1.3";
import presetTailwind from "https://esm.sh/@twind/preset-tailwind@1.1.4";
import presetAutoprefix from "https://esm.sh/@twind/preset-autoprefix@1.0.7";

export default {
  ...defineConfig({
    presets: [
      presetTailwind() as Preset, 
      presetAutoprefix(),
      {
        theme: {
          extend: {
            colors: {
              'redd': 'rgba(240,0,0,0.9)',
            }
          }
        }
      }
    ], 
  }),
  selfURL: import.meta.url,
};
