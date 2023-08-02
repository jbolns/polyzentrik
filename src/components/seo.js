import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

const Seo = ({ title, description, image }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          siteUrl
          image
        }
      }
    }
  `)

  const defaults = {
    defaultTitle: data.site.siteMetadata.title,
    defaultDescription: data.site.siteMetadata.description,
    defaultSiteUrl: data.site.siteMetadata.siteUrl,
    defaultImage: data.site.siteMetadata.image
  }

  const seo = {
    title: title || defaults.defaultTitle,
    description: description || defaults.defaultDescription,
    image: image || defaults.defaultImage
  }

  const seoImage = defaults.defaultSiteUrl + seo.image
  
  return (
    <>
      <title>{seo.title}</title>
      <meta property="og:title" content={seo.title} />
      <meta name="description" content={seo.description} />
      <meta property="og:description" content={seo.description} />
      <meta name="image" content={seoImage} />
      <meta property="og:image" content={seoImage} />
      
    </>
  )
}

export default Seo