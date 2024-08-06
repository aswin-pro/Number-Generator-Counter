import React from "react";
import ReactDom from "react-dom/client"
import NumberGenerator from "./components/Number";
import Counter from "./components/counter";
import "./style.css"

const root=ReactDom.createRoot(document.getElementById("root"))

root.render(
  <>
  <NumberGenerator/>
  <Counter/>
  </>
)