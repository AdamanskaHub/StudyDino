import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const Items = () => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     placeholderItems: file(relativePath: { eq: "gatsby-astronaut.png" }) {
  //       childItemsSharp {
  //         fluid(maxWidth: 300) {
  //           ...GatsbyItemsSharpFluid
  //         }
  //       }
  //     }
  //   }
  // `)

  return (
    <>
    <div className="item">
          <img src={img} alt="oops" />
          <p>name</p>
          <p>30</p>
        </div>
    </>
  )
  
  // <Img fluid={data.placeholderItems.childItemsSharp.fluid} />
}

export default Items
