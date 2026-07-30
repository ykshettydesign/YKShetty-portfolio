import React from 'react'

/**
 * A clean, readable comparison table. `head` is the column labels (optional);
 * `rows` is an array of cell arrays. When `rowHeader` (default), the first cell
 * of each row becomes a <th scope="row">. Cells may be strings or JSX (✅, bold,
 * "Eliminated", etc.). On narrow screens the table scrolls horizontally inside
 * its own container rather than squashing.
 */
export function ComparisonTable({ caption, head = [], rows = [], rowHeader = true, minWidth, ...rest }) {
  return (
    <div className="cs-table-wrap" {...rest}>
      <div className="cs-table-scroll">
        <table className="cs-table" style={minWidth ? { minWidth } : undefined}>
          {caption ? <caption>{caption}</caption> : null}
          {head.length ? (
            <thead>
              <tr>
                {head.map((h, i) => (
                  <th key={i} scope="col">{h}</th>
                ))}
              </tr>
            </thead>
          ) : null}
          <tbody>
            {rows.map((row, ri) => (
              <tr key={ri}>
                {row.map((cell, ci) =>
                  ci === 0 && rowHeader ? (
                    <th key={ci} scope="row">{cell}</th>
                  ) : (
                    <td key={ci}>{cell}</td>
                  ),
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
