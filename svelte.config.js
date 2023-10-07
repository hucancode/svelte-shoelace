import adapter from "@sveltejs/adapter-static";
import path from "path";

/** @type {import('@sveltejs/kit').Config} */

const config = {
  kit: {
    adapter: adapter(),
  },
};

export default config;
