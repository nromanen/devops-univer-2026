/**
 * DataTable — table for comparisons and reference data on slides.
 *
 * Props:
 *   columns {Array<string | { label, sub }>} — column headers
 *   rows    {Array<{ label, sub?, cells }>}  — one entry per row;
 *           `cells` holds one item per column
 *   corner  {string} — optional header above the row labels
 *   delay   {number} — optional fade-in delay, same as in InfoCard
 *
 * A cell is either a string/number or { text, tone }, where tone is
 * "good" | "warn" | "bad" and colors the text green / orange / red.
 * A missing cell (null/undefined) renders as a dash.
 *
 * Example:
 *   <DataTable
 *     columns={['Повна заміна', { label: 'Почергове', sub: 'Rolling' }]}
 *     rows={[
 *       { label: 'Простій', cells: [{ text: 'є', tone: 'bad' }, { text: 'немає', tone: 'good' }] },
 *       { label: 'Ресурси', cells: ['×1', '×1 + копія'] },
 *     ]}
 *   />
 */
const TONE_COLORS = { good: 'green', warn: 'orange', bad: 'red' };

function renderLabel(item) {
  if (typeof item === 'string') return item;
  return (
    <>
      {item.label}
      {item.sub && <span className="data-table__sub">{item.sub}</span>}
    </>
  );
}

function renderCell(cell) {
  if (cell == null) return '—';
  if (typeof cell === 'string' || typeof cell === 'number') return cell;
  const color = TONE_COLORS[cell.tone];
  return <span className={color ? `data-table__tone text-${color}` : undefined}>{cell.text}</span>;
}

export default function DataTable({ columns, rows, corner, delay }) {
  const wrapperClass = delay ? `data-table fade-in-delay-${delay}` : 'data-table';

  return (
    // The wrapper scrolls horizontally on narrow screens
    <div className={wrapperClass}>
      <table className="data-table__table">
        <thead>
          <tr>
            <th scope="col" className="data-table__corner">{corner}</th>
            {columns.map((col, i) => (
              <th key={i} scope="col">{renderLabel(col)}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, r) => (
            <tr key={r}>
              <th scope="row">{renderLabel(row)}</th>
              {row.cells.map((cell, c) => (
                <td key={c}>{renderCell(cell)}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}