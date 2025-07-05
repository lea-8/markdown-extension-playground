import {SKIP, visit} from 'unist-util-visit';

export default function addRow() {
  return (tree, file) => {

    visit(tree, function (node, index, parent, ancestors) {
      if (node.type === 'list' && node.spread === true)  {
        console.log(node)
        
        // let openChildRow = {
        //   type: 'html', 
        //   value: `<div class="custom-grid">
        //   <div class="row">`
        // }

                
        let openChildRow = {
          type: 'html', 
          value: `<div class="custom-grid">
          <div class="row">`
        }

        let closeChildRow = {
            type: 'html',
            value: `"</div>`
        }

        console.log("node.children", node.children);

        node.children.unshift(openChildRow);
        node.children.push(closeChildRow);

        return
        
      }
    })
  }
}