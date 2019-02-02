require('dotenv').config()
module.exports = {
  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      plugins: [
        // ...global plugins
      ]
    }
  },
  plugins: [
    {
      use: '@gridsome/source-contentful',
      options: {
        space: process.env.CTF_SPACE_ID, // required
        accessToken: process.env.CTF_CDA_ACCESS_TOKEN, // required
        host: 'cdn.contentful.com',
        environment: 'master',
        typeName: 'Contentful',
        
      }
    }
  ]
}
