// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const path = require('path')

function addStyleResource(rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/assets/*.scss'),
      ],
    })
}

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
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/posts/*.yml',
        typeName: 'Post'
      },
    },
    {
      use: `gridsome-plugin-netlify-cms`,
      options: {
        publicPath: `/admin`
      },
    },
    {
      use: 'gridsome-source-cloudinary',
      options: {
        cloudName: process.env.CLOUDNAME,
        apiKey: process.env.API_KEY,
        apiSecret: process.env.API_SECRET,
        resourceOptions: {
          prefix: 'samples/landscapes', //Folder to fetch media from: examples
          max_results: 50, //Return maximum 50 media items.
          type: 'upload'
        },
      },
    }
  ],
  templates: {
    Recipe: '/recipe/:name',
    Post: '/post/:name',
  },
  chainWebpack(config) {
    // Load variables for all vue-files
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']

    // or if you use scss
    types.forEach(type => {
      addStyleResource(config.module.rule('scss').oneOf(type))
    })
  }
}