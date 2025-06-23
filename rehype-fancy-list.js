// rehype-fancy-list.js
export default function rehypeFancyList() {
  return (tree) => {
    visit(tree, 'element', (node) => {
      if (node.tagName === 'ul') {
        node.tagName = 'FancyList';
      }
    });
  };
}

// import { visit } from 'unist-util-visit';
import pkg from 'unist-util-visit';
const { visit } = pkg;
