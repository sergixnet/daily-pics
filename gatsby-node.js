const { createRemoteFileNode } = require("gatsby-source-filesystem")
const axios = require("axios")

exports.sourceNodes = async ({
  actions,
  createNodeId,
  createContentDigest,
}) => {
  const {
    data: { pics },
  } = await axios.get("https://dailypics-api.vercel.app/api/dailypics")

  pics.forEach(pic => {
    const node = {
      slug: pic.slug,
      url: pic.url,
      title: pic.title,
      credit: pic.credit,
      id: createNodeId(`Pic-${pic["_id"]}`),
      internal: {
        type: "Pic",
        contentDigest: createContentDigest(pic),
      },
    }
    actions.createNode(node)
  })
}

exports.onCreateNode = async ({
  node,
  actions,
  store,
  getCache,
  createNodeId,
}) => {
  if (node.internal.type === "Pic") {
    const { createNode } = actions

    /* Download the image and create the File node. Using gatsby-plugin-sharp and gatsby-transformer-sharp the node will become an ImageSharp. */
    const fileNode = await createRemoteFileNode({
      url: node.url, // string that points to the URL of the image
      parentNodeId: node.id, // id of the parent node of the fileNode you are going to create
      store, // Gatsby's redux store
      getCache, // get Gatsby's cache
      createNode, // helper function in gatsby-node to generate the node
      createNodeId, // helper function in gatsby-node to generate the node id
    })

    if (fileNode) {
      // link the File node to Image node at field image
      node.pic___NODE = fileNode.id
    }
  }
}
