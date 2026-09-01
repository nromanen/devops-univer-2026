/**
 * ScoreCircle — кружечок з оцінкою у стилі Lighthouse/PageSpeed Insights.
 * Колір автоматично обирається за порогами 0-49 / 50-89 / 90-100.
 *
 * Props:
 *   score    {number}  — 0..100
 *   label    {string}  — підпис під кружечком
 */
export default function ScoreCircle({ score, label }) {
  let color;
  if (score >= 90) color = 'green';
  else if (score >= 50) color = 'orange';
  else color = 'red';

  return (
    <div className="score-circle">
      <div className={`score-circle__ring score-circle__ring--${color}`}>
        <span className={`score-circle__value text-${color}`}>{score}</span>
      </div>
      <span className="score-circle__label">{label}</span>
    </div>
  );
}