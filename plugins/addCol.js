import {SKIP, EXIT, visit} from 'unist-util-visit';

export default function removeListItem() {
  return (tree, file) => {

    visit(tree, function (node, index, parent, ancestors) {
      if (node.type === 'listItem') {
        let openChildColumn = {
          type: 'html', 
          value: `<div class="column">`
          // position: [Position]
        }

        let closeChildColumn = {
          type: 'html', 
          value: `</div>`
          // position: [Position]
        }

        node.children.unshift(openChildColumn)
        node.children.push(closeChildColumn)

        // console.log("node children", node.children)

        return
      }
    })
  }
}