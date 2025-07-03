// plugins/remark-grid.js
import {visit} from 'unist-util-visit';

export default function betterRemarkGrid() {
  return (tree, file) => {

    visit(tree, function (node, index, parent, ancestors) {

      if (node.type === 'list' && node.spread === true)  {
        console.log(node);
      }
    })
  }
}

function collectSubTree(subTree) {
  visit(subTree, function (node) {
    if (node.type === 'listItem')  {
      console.log(node);
    }
  });
};
