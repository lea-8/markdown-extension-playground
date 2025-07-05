// plugins/remark-grid-lists.js

import { toHast } from 'mdast-util-to-hast';
import { toHtml } from 'hast-util-to-html';

import {visit} from 'unist-util-visit';

export default function gptRemarkGridLists() {
  return (tree) => {
    visit(tree, 'list', (node, index, parent) => {
      if (node.ordered) return;

      // Group list items into rows
      const rows = [];
      let currentRow = [];

      for (let i = 0; i < node.children.length; i++) {
        const item = node.children[i];

        const isSpaced = item.spread || item.children.length > 1;

        if (isSpaced && currentRow.length > 0) {
          rows.push(currentRow);
          currentRow = [];
        }

        currentRow.push(item);

        const next = node.children[i + 1];
        const isNextSpaced = next?.spread || next?.children?.length > 1;

        if (isSpaced && !isNextSpaced && currentRow.length > 0) {
          rows.push(currentRow);
          currentRow = [];
        }
      }

      if (currentRow.length > 0) {
        rows.push(currentRow);
      }

      const htmlNode = {
        type: 'html',
        value: renderGrid(rows),
      };

      parent.children.splice(index, 1, htmlNode);
    });
  };
}

function renderGrid(rows) {
  return `
    <div class="custom-grid">
      ${rows
        .map(
          (cols) => `
        <div class="row">
          ${cols
            .map((cell) => `<div class="column">${renderCell(cell)}</div>`)
            .join('\n')}
        </div>`
        )
        .join('\n')}
    </div>
  `;
}

function renderCell(cell) {
  const hast = toHast(cell, { allowDangerousHtml: true });
  return toHtml(hast);
}