/*
 * @file Theme configuration
 */
import { defineConfig } from './src/helpers/config-helper';

export default defineConfig({
  lang: 'en-US',
  site: 'https://maz4.github.io',
  avatar: '/avatar.png',
  title: 'maz4 Blog',
  description: 'Thoughts, stories, experiments.',
  lastModified: true,
  readTime: true,
  footer: {
    copyright: '© 2026 maz4',
  },
  socialLinks: [
    {
      icon: 'github',
      link: 'https://github.com/maz4',
      ariaLabel: 'maz4 github account',
    },
    {
      icon: 'link',
      link: 'https://www.linkedin.com/in/marcin-zasadzki-804b0184',
      ariaLabel: 'maz4 linkedin profile',
    },
  ],
});

