import {SKIP, EXIT, visit} from 'unist-util-visit';

export default function removeListItem() {
  return (tree, file) => {

    visit(tree, function (node, index, parent, ancestors) {
      if (node.type === 'listItem') {
        console.log(node)
        console.log(index)
        console.log("parent", parent)

        // parent.children.splice(index, 1, ...node.children)

        console.log("parent children", parent.children)

        return [SKIP, index]
      }
    })
  }
}