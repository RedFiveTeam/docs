/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Red Five Software',
  tagline: 'The first Airman-driven DCGS Software Development Team',
  url: 'https://dgs1sdt.pages.gs.mil',
  baseUrl: '/docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'DGS1SDT', // Usually your GitHub org/user name.
  projectName: 'Red Five Software', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Red Five Documentation',
      logo: {
        alt: 'Red Five Logo',
        src: 'img/red5Logo.png',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://gitlab.gs.mil/DGS1SDT',
          label: 'GitLab (CAC required)',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            // {
            //   label: 'Stack Overflow',
            //   href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            // },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/company/red5software/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub (Public)',
              href: 'https://github.com/RedFiveTeam',
            },
          ],
        },
      ],
      copyright: `Copyright © 2021 Red Five Software. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
