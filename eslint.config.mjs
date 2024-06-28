import globals from "globals";
import pluginJs from "@eslint/js";


export default [
  {
    languageOptions: {
      globals: globals.node
    },
    rules: {
      "no-console": "off",
      "class-methods-use-this": "off"
    },
  },
  pluginJs.configs.recommended,
];