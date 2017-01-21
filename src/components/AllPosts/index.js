import React, { PropTypes } from "react"
import enhanceCollection from "phenomic/lib/enhance-collection"

import PagesList from "../../components/PagesList"

const defaultNumberOfPosts = 100


const AllPosts = (props, { collection }) => {
  const AllPosts = enhanceCollection(collection, {
    filter: { layout: "Post" },
    sort: "date",
    reverse: true,
  })
  .slice(0, props.numberOfPosts || defaultNumberOfPosts)

  return (
    <div>
      <PagesList pages={ AllPosts } />
    </div>
  )
}

AllPosts.propTypes = {
  numberOfPosts: PropTypes.number,
}

AllPosts.contextTypes = {
  collection: PropTypes.array.isRequired,
}

export default AllPosts
