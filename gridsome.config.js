// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Bon Tabio',
  siteUrl: 'https://bon-tabio.netlify.app/',
  pathPrefix: '',
  plugins: [{
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/recipes/*.yml',
        typeName: 'Recipe'
      },
    },
    {
      use: `gridsome-plugin-netlify-cms`,
      options: {
        publicPath: `/admin`
      },
    }
  ],
  templates: {
    Recipe: '/recipe/:name',
  }
}