// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Bon Tabio',
  siteUrl: 'https://Chevrefeuille.github.io',
  pathPrefix: '/adoseri',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/recipes/*.yaml',
        typeName: 'Recipe'
      }
    }
  ],
  templates: {
    Recipe: '/recipe/:name',
  }
}
