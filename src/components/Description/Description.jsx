import css from "./Description.module.css";
export default function Description() {
  return (
    <>
      <h1 className={css.title}>
        <span className={css.titleAccent}>Sip</span> Happens Café
      </h1>
      <p>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
    </>
  );
}
