/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Red Five Software',
  tagline: 'The first Airman-driven DCGS Software Development Team',
  url: 'https://redfiveteam.github.io',
  baseUrl: '/docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'RedFiveTeam', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Red Five',
      logo: {
        alt: 'Red Five Logo',
        src: 'img/red5Logo.png',
      },
      items: [
        {
          to: '/docs',
          activeBasePath: 'docs',
          label: 'Resources',
          position: 'left',
        },
        {
          to: 'apps/',
          label: 'Our Apps',
          position: 'left',
        },
        {
          to: 'info/',
          label: 'Team Info',
          position: 'left',
        },
        {
          to: 'blog', 
          label: 'Blog', 
          position: 'left'
        },
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
          title: 'Resources',
          items: [
            {
              label: 'Engineer',
              to: 'docs/engineer/training',
            },
            {
              label: 'Design',
              to: 'docs/design/training',
            },
            {
              label: 'Product',
              to: 'docs/product/training',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Our Website',
              href: 'https://red5software.io',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/qpjfJhn',
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
              href: 'https://github.com/RedFiveTeam/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Red Five Software. Built with Docusaurus.`,
    },
    prism: {
      additionalLanguages: ['shell-session']
    }
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://gitlab.gs.mil/DGS1SDT/docs/-/edit/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://gitlab.gs.mil/DGS1SDT/docs/-/edit/main/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
