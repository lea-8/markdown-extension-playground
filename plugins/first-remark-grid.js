// plugins/remark-grid.js
import {visit} from 'unist-util-visit';

export default function firstRemarkGrid() {
  return (tree, file) => {

    visit(tree, function (node, index, parent, ancestors) {
      // console.log(node)

      if (node.type === 'list' && node.spread === true)  {
        let newHtml = `<div class="custom-grid">
          <div class="row">`

        let arr = node.children

        // console.log(arr.length)
        // console.log(typeof arr)

        for (let i = 0; i < arr.length; i++) {
          // console.log("--- " + i)
          console.log(arr[i])
          // console.log(arr[i].children[i])
          // console.log(arr[i].children[0].type)
          // console.log(arr[i].children[0].children[0])
          // console.log(arr[i].children[0].children[0].value)
          // newHtml += `<div class="column">` + arr[i].children[0].children[0].value + "</div>"
          newHtml += `<div class="column">` + collectSubTree(arr[i]) + "</div>"
        }

        newHtml += "</div></div>"

        node.type = 'html';
        // node.value = `
        //   <em>Gotcha</em>
        // `;
        node.value = newHtml;

        console.log(node)
      }
    })
  }
}

function collectSubTree(subTree) {
  let data = "";

  visit(subTree, function (node) {
    console.log("In subtree now.")
    if (node.children === undefined) {
      console.log("No children");
      data += node.value;
    };
  });

  return data;
};

// function renderGrid(rows) {
//   return `
//     <div class="custom-grid">
//       ${rows
//         .map(
//           cols =>
//             `<div class="row">
//               ${cols
//                 .map(
//                   col => `<div class="column">${col}</div>`
//                 ).join('\n')}
//             </div>`
//         ).join('\n')}
//     </div>
//   `;
// }
