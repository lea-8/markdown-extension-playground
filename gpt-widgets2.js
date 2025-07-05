import { visit } from 'unist-util-visit';

export default function gptWidgets2() {
  return (tree) => {
    visit(tree, 'list', (node, index, parent) => {
      // Only target loose, unordered lists
      if (node.ordered || !node.spread || !parent || parent.type !== 'root') return;

      const rows = [];
      let currentRow = [];

      for (const item of node.children) {
        const isSpaced = item.spread || item.children.length > 1;
        currentRow.push(item);

        if (isSpaced) {
          rows.push(currentRow);
          currentRow = [];
        }
      }

      if (currentRow.length > 0) rows.push(currentRow);

      const makeDiv = (className, children = []) => ({
        type: 'mdxJsxFlowElement',
        name: 'div',
        attributes: [
          { type: 'mdxJsxAttribute', name: className, value: className },
        ],
        children,
      });

      const gridNode = makeDiv(
        'custom-grid',
        rows.map((row) =>
          makeDiv(
            'row',
            row.map((cell) => makeDiv('column', cell.children))
          )
        )
      );

      console.log(gridNode);
      console.log(gridNode.children);

      // Replace the list node in-place
      parent.children.splice(index, 1, gridNode);
    });
  };
}
