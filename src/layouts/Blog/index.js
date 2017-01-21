import React from "react"

import AllPosts from "../../components/AllPosts"
import Page from "../Page"


const Blog = (props) => {
  return (
    <Page { ...props }>
      <AllPosts />
    </Page>
  )
}

export default Blog
