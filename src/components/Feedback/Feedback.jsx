import css from "./Feedback.module.css";

export default function Feedback({ good, neutral, bad, total, positive }) {
  return (
    <div className={css.feedback}>
      <p className={css.list}>Good: {good}</p>
      <p className={css.list}>Neutral: {neutral}</p>
      <p className={css.list}>Bad: {bad}</p>
      <p className={css.list}>Total: {total}</p>
      <p className={css.list}>Positive: {positive}%</p>
    </div>
  );
}
