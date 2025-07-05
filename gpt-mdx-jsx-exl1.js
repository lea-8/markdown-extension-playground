export default function remarkChartHeading() {
  return (tree) => {
    for (let i = 0; i < tree.children.length; i++) {
      const node = tree.children[i];

      if (node.type === 'heading' && node.depth === 2) {
        const textContent = node.children
          .map((child) => (child.value || ''))
          .join('');

        const chartComponent = {
          type: 'mdxJsxFlowElement',
          name: 'Chart',
          attributes: [
            {
              type: 'mdxJsxAttribute',
              name: 'title',
              value: textContent,
            },
          ],
          children: [],
        };

        tree.children[i] = chartComponent;
      }
    }
  };
}