// plugins/remark-grid.js
// import {visit} from 'unist-util-visit';
// import {unified} from 'unified';
// import remarkRehype from 'remark-rehype';
// import {read} from 'to-vfile'

// export default function remarkWidget() {
//   console.log("--- remarkWidget START");

//   return (tree, file) => {
//     visit(tree, function (node, index, parent, ancestors) {
//       if (node.type === 'html')  {
//         console.log(node);
//         unified().use(remarkRehype(read(node)));
//       }
//     })

//     console.log("--- remarkWidget END");
//   }
// }
