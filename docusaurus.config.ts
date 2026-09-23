import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Interop',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://www.fungible.design/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'gofungible', // Usually your GitHub org/user name.
  projectName: 'gofungible-site', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
		metadata: [
			{name: 'keywords', content: 'memecoin, reputoken, utility token, security token, fungible, standard'},
		],
    colorMode: {
      respectPrefersColorScheme: true,
    },

		navbar: {
      title: 'Token Interoperability',
      hideOnScroll: true,
      logo: {
        alt: 'Token Interoperability',
        src: 'img/favicon-96x96.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'intercomSidebar',
          position: 'left',
          label: 'Cross-chain Communication',
        },
				{
          type: 'docSidebar',
          sidebarId: 'adaptersSidebar',
          position: 'left',
          label: 'ERC-7786 Adapters',
        },
				//{to: '/blog', label: 'Blog', position: 'right'},
        {
          href: 'https://github.com/GoFungible',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
		footer: {
			style: 'dark',
			links: [{
				title: 'Patterns',
						items: [{
							label: 'Patterns',
							href: '/docs/intro',
						},
					],
				}, 
			],
			copyright: `Copyright © ${new Date().getFullYear()} Interop, Ltd.`,
		},
    prism: {
      theme: prismThemes.ultramin,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
