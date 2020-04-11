export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e91a3011694d99349a56bf0',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-8kmxbnw8',
                  apiId: '55485236-18f7-462f-bf55-53a034a46eee'
                },
                {
                  buildHookId: '5e91a30129b6afdbb4304109',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-r45nkbbm',
                  apiId: '66c48b25-e932-4b8a-bb1b-5e991c304070'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/wudabei/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-r45nkbbm.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
