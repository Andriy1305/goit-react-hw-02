import css from "./Options.module.css";

export default function Options({
  goodValue,
  neutralValue,
  badlValue,
  resetValues,
  totalFeedback,
}) {
  return (
    <div className={css.options}>
      <button className={css.button} onClick={goodValue}>
        Good
      </button>
      <button className={css.button} onClick={neutralValue}>
        Neutral
      </button>
      <button className={css.button} onClick={badlValue}>
        Bad
      </button>

      {/* Кнопка для скидання з'являється тільки, коли є хоча б один відгук */}
      {totalFeedback > 0 && (
        <button className={css.button} onClick={resetValues}>
          Reset
        </button>
      )}
    </div>
  );
}
