import { defineConfig } from 'astro/config';
import icon from "astro-icon";

import preact from "@astrojs/preact";
import sitemap from "@astrojs/sitemap";
import { EnumChangefreq as ChangeFreq } from "sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [
    icon(),
    preact(),
    sitemap({
			changefreq: ChangeFreq.DAILY,
			priority: 0.7,
			lastmod: new Date(),
      customPages: ["https://jfenn.me/policies/"],
      serialize({ url, ...rest }) {
        const matcher = /\/(\d{4}-\d{2}-\d{2})/.exec(url);
				return {
          url,
					...rest,
          lastmod: new Date(matcher?.at(1) ?? rest.lastmod).toISOString()
				};
			},
		}),
  ],
  site: "https://jfenn.me",
  trailingSlash: "always",
  redirects: {
    '/community': '/contact/',
    '/resume': '/resume.pdf',
    '/apps/pasta': '/projects/',
    '/apps/status': '/projects/',
  }
});