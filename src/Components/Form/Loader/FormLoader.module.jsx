import loaderCss from "./loader.module.css";

export default function FormLoader() {
  return (
    <>
      <h1>Thank You</h1>
      <div class={loaderCss.circles}>
        <div></div>
        <div></div>
        <div></div>
        <span></span>
      </div>
    </>
  );
}
