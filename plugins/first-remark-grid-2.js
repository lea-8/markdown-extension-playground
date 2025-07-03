// plugins/remark-grid.js
import {SKIP, visit} from 'unist-util-visit';

export default function firstRemarkGrid2() {
  return (tree, file) => {

    visit(tree, function (node, index, parent, ancestors) {
      if (node.type === 'listItem' && node.spread === true && node.children.find((element) => element.type === 'list')) {
        // console.log("nested list")
      }

      // condition for grid initiation
      if (node.type === 'list' && node.spread === true)  {

        // let newHtml = `<div class="custom-grid">
        //   <div class="row">`

        let currLI = node.children
        let newChildren = []

        // // console.log(arr.length)
        // // console.log(typeof arr)

        for (let i = 0; i < node.children.length; i++) {
          // console.log("--- " + i)
          // console.log(node.children[i])
        // //   // console.log(arr[i].children[i])
        // //   // console.log(arr[i].children[0].type)
        // //   // console.log(arr[i].children[0].children[0])
        // //   // console.log(arr[i].children[0].children[0].value)
        // //   // newHtml += `<div class="column">` + arr[i].children[0].children[0].value + "</div>"
        // //   newHtml += `<div class="column">` + collectSubTree(arr[i]) + "</div>"
          newChildren = collectSubTree(currLI[i], node)

        //   // Add first child - open column
        //   currLI.unshift({
        //     type: 'html',
        //     value: `<div class="column">`,
        //   })
        //   // Add last child - close column
        //   currLI.push({
        //     type: 'html',
        //     value: `"</div>`,
        //   })


          

        }

        // newHtml += "</div></div>"

        // node.type = 'html';
        // // node.value = `
        // //   <em>Gotcha</em>
        // // `;
        // node.value = newHtml;

        // get rid of listItem node ....
        // console.log("parent", parent)
        let openChildRow = {
          type: 'html', 
          value: `<div class="custom-grid">
          <div class="row">`
        }

        let closeChildRow = {
            type: 'html',
            value: `"</div>`
        }

        console.log(newChildren);
        // console.log(node.children);

        // node.children.unshift(openChildRow);
        // node.children.push(closeChildRow);
        // console.log(node.children)

        // parent.children = node.children
      }
    })



    // console.log("-------------")

    // // DEBUG

    // visit(tree, function (node, index, parent, ancestors) {

    //     // condition for grid initiation
    //     if (node.type === 'list' && node.spread === true)  {
    //       console.log(node)
    //     },
    //   })
  }
}

function collectSubTree(subTree, parentNode) {

  let newChildren = []
  // let data = ""

  visit(subTree, function (node, index, parent) {
    // console.log("In subtree now.")

    if (node.type === 'list') { 
      // console.log("--- li -> list!")
      // firstRemarkGrid2(node, 100)
      return
    }

    if (node.type === 'listItem') {
      // console.log("--- li!")
      // console.log(node)
      // // Add first child - open column
      // node.children.unshift({
      //   type: 'html',
      //   value: `<div class="column">`,
      // })
      // // Add last child - close column
      // node.children.push({
      //   type: 'html',
      //   value: `</div>`,
      // });

      // parent.children.splice(index, 1, ...node.children)      // Do not traverse `node`, continue at the node *now* at `index`.
      // return [SKIP, index]

      let testHTML = `
        <em>Gotcha</em>
      `;

      // node.type = 'html';
      // node.value = `<div class="column">` + testHTML + `</div>` 
      // data = node.value

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

      // newChildren += node;

      
      // return this back up.
      node.children.unshift(openChildColumn)
      node.children.push(closeChildColumn)

      console.log(node.children)


      // replace li with ONLY it's children
      // console.log("parent: ", parent)
      // parentNode.children.splice(index, 1, ...node.children)
      // Do not traverse `node`, continue at the node *now* at `index`.
      newChildren = node.children
    }
  })

  return newChildren
  // return data
};
