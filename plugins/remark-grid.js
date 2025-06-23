// plugins/remark-grid.js
import {visit} from 'unist-util-visit';

export default function remarkGrid() {
  return (tree, file) => {

    visit(tree, function (node, index, parent, ancestors) {
      // console.log(node)

      if (node.type === 'list' && node.spread === true)  {
        let newHtml = `<div class="custom-grid">
          <div class="row">`

        let arr = node.children

        console.log(arr.length)
        console.log(typeof arr)

        for (let i = 0; i < arr.length; i++) {
          console.log("--- " + i)
          // console.log(arr[i].children[0].type)
          console.log(arr[i].children[0].children[0].value)
          newHtml += `<div class="column">` + arr[i].children[0].children[0].value + "</div>"
        }

        newHtml += "</div></div>"

        node.type = 'html';
        // node.value = `
        //   <em>Gotcha</em>
        // `;
        node.value = newHtml;
      }
    })
  }
}

function renderGrid(rows) {
  return `
    <div class="custom-grid">
      ${rows
        .map(
          cols =>
            `<div class="row">
              ${cols
                .map(
                  col => `<div class="column">${col}</div>`
                ).join('\n')}
            </div>`
        ).join('\n')}
    </div>
  `;
}
