// import moment from "moment";
import "./style.css";
export function format(text) {
  console.log("format::");
  // return moment().format();
  return text + "::demo2";
}

export function create(text) {
  const ele = document.createElement("div");
  ele.innerText = text;
  ele.addClass("pop");
}
